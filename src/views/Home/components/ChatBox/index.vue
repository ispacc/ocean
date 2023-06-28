<script lang="ts" setup>
import { ref, computed, provide } from 'vue'
import type { ElInput } from 'element-plus'
import { useWsLoginStore } from '@/stores/ws'
import { useUserStore } from '@/stores/user'
import { useChatStore } from '@/stores/chat'
import { useUserInfo } from '@/hooks/useCached'
import apis from '@/services/apis'
import { judgeClient } from '@/utils/detectDevice'
import { emojis } from './constant'

const client = judgeClient()

import UserList from '../UserList/index.vue'
import ChatList from '../ChatList/index.vue'

const chatStore = useChatStore()
const isSelect = ref(false)
const isSending = ref(false)
const inputMsg = ref('')
const msg_input_ref = ref<typeof ElInput>()

const focusMsgInput = () => {
  setTimeout(() => msg_input_ref.value?.focus(), 10)
}

provide('focusMsgInput', focusMsgInput)

const sendMsgHandler = (e: Event) => {
  // 处理输入法状态下的回车事件
  if ((e as KeyboardEvent).isComposing) {
    return e.preventDefault()
  }
  // 空消息或正在发送时禁止发送
  if (!inputMsg.value?.trim().length || isSending.value) {
    return
  }

  // 构造消息体
  const messageBody = {
    content: inputMsg.value,
    replyMsgId: currentMsgReply.value.message?.id,
  }

  isSending.value = true
  // 发送消息
  apis
    .sendMsg({ roomId: 1, msgType: 1, body: messageBody })
    .send()
    .then((res) => {
      chatStore.pushMsg(res) // 消息列表新增一条消息
      inputMsg.value = '' // 清空输入列表
      onClearReply() // 置空回复的消息
    })
    .finally(() => {
      isSending.value = false
      focusMsgInput() // 输入框重新获取焦点
      chatStore.chatListToBottomAction?.() // 滚动到消息列表底部
    })
}

// 显示登录框
const loginStore = useWsLoginStore()
const onShowLoginBoxHandler = () => (loginStore.showLogin = true)

// 是否已登录
const userStore = useUserStore()
const isSign = computed(() => userStore.isSign)
const currentMsgReply = computed(() => (userStore.isSign && chatStore.currentMsgReply) || {})
const currentReplUid = computed(() => currentMsgReply?.value.fromUser?.uid as number)
const currentReplyUser = useUserInfo(currentReplUid)

// 置空回复的消息
const onClearReply = () => (chatStore.currentMsgReply = {})
// 插入换行符
const onWrap = () => insertText('\n')
// 插入内容
const insertText = (emoji: string) => {
  let input = msg_input_ref.value?.textarea
  if (!input) return
  let startPos = input.selectionStart as number
  let endPos = input.selectionEnd as number
  let resultText = input.value.substring(0, startPos) + emoji + input.value.substring(endPos)
  // 需要保留，否则光标位置不正确。
  input.value = resultText
  // 需要更新以触发 onChang
  inputMsg.value = resultText
  input.focus()
  input.selectionStart = startPos + emoji.length
  input.selectionEnd = startPos + emoji.length
  //临时让获取焦点
  focusMsgInput()
}
</script>

<template>
  <div class="chat-box">
    <div class="chat-wrapper">
      <template v-if="isSelect">
        <ElIcon :size="160" color="var(--font-light)"><IEpChatDotRound /></ElIcon>
      </template>
      <template v-else>
        <div class="chat">
          <ChatList @start-replying="focusMsgInput" />
          <div class="chat-msg-send">
            <div v-if="Object.keys(currentMsgReply).length" class="reply-msg-wrapper">
              <span>
                {{ currentReplyUser?.name }}: {{ currentMsgReply.message?.body.content }}</span
              >
              <el-icon :size="14" class="reply-msg-icon" @click="onClearReply">
                <IEpClose />
              </el-icon>
            </div>
            <div class="msg-input-box">
              <div class="msg-input-wrapper">
                <!-- @keydown.enter.prevent 阻止 textarea 默认换行事件 -->
                <el-input
                  ref="msg_input_ref"
                  v-model="inputMsg"
                  :autosize="{ minRows: 1, maxRows: 4 }"
                  :disabled="!isSign || isSending"
                  :placeholder="isSign ? (isSending ? '消息发送中' : '来聊点什么吧~') : ''"
                  autofocus
                  class="msg-input"
                  name="input_content"
                  type="textarea"
                  @keydown.enter.prevent.exact
                  @keydown.enter.exact="sendMsgHandler"
                  @keydown.shift.enter.exact="onWrap"
                  @keydown.ctrl.enter.exact="onWrap"
                  @keydown.meta.enter.exact="onWrap"
                />
                <div :hidden="isSign" class="chat-not-login-mask">
                  <ElIcon class="icon-lock"><IEpLock /></ElIcon>
                  <a class="login-link" @click="onShowLoginBoxHandler">点我登录</a>之后再发言~
                </div>
              </div>
              <el-popover
                :width="client === 'PC' ? 418 : '95%'"
                effect="dark"
                placement="top-end"
                title=""
                trigger="click"
              >
                <template #reference>
                  <button class="emoji-button">😊</button>
                </template>
                <ul class="emoji-list">
                  <li
                    v-for="(emoji, $index) of emojis"
                    :key="$index"
                    v-login="() => insertText(emoji)"
                    class="emoji-item"
                  >
                    {{ emoji }}
                  </li>
                </ul>
              </el-popover>
              <button :disabled="!inputMsg.length" class="send-button" @click="sendMsgHandler"
                >Send</button
              >
            </div>
          </div>
        </div>
      </template>
    </div>
    <UserList />
  </div>
</template>

<style lang="scss" scoped src="./styles.scss" />
