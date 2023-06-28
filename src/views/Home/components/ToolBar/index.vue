<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useGroupStore } from '@/stores/group'
import defaultAvatar from '@/assets/avatars/default.png'
import qrcode from '@/assets/qrcode.jpeg'
import { judgeClient } from '@/utils/detectDevice'

const client = judgeClient()
const visible = ref(false)
const userStore = useUserStore()
const groupStore = useGroupStore()

const avatar = computed(() => userStore?.userInfo.avatar)

const showSettingBox = () => (visible.value = true)
const onToMallChat = () => window.open('https://github.com/zongzibinbin/MallChat', '_blank')
const onToMallChatWeb = () => window.open('https://github.com/Evansy/MallChatWeb', '_blank')
const toggleGroupListShow = () => (groupStore.showGroupList = !groupStore.showGroupList)
</script>

<template>
  <aside class="side-toolbar">
    <ElAvatar
      v-login="showSettingBox"
      :src="avatar || defaultAvatar"
      class="side-toolbar-avatar"
      size="large"
    />
    <el-icon :size="32" class="menu-icon" color="var(--font-main)" @click="toggleGroupListShow">
      <IEpFold />
    </el-icon>

    <UserSettingBox v-model="visible" />
  </aside>
</template>

<style lang="scss" scoped src="./styles.scss" />
