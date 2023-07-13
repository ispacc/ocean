export class WebSocketClient {
    extra_headers = {
        'User-Agent': 'MyUserAgent',
        'X-Custom-Header': 'CustomValue'
    }
    private socket: WebSocket | null = null;
    private readonly url: string;
    private readonly token?: string;

    constructor(url: string, token?: string) {
        this.url = url;
        this.token = token;
    }

    connect(): void {
        this.socket = new WebSocket(this.url, this.token);

        this.socket.onopen = () => {
            console.log('WebSocket连接已建立');
            if (this.token) {
                this.sendToken(this.token);
            }
        };

        this.socket.onmessage = (event) => {
            const message = event.data;
            console.log('收到WebSocket消息:', message);
            // 处理接收到的消息
        };

        this.socket.onclose = () => {
            console.log('WebSocket连接已关闭');
        };
    }

    disconnect(): void {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
    }

    send(message: string): void {
        if (this.socket) {
            this.socket.send(message);
        }
    }

    private sendToken(token: string): void {
        const tokenMessage = JSON.stringify({token});
        this.send(tokenMessage);
    }
}
