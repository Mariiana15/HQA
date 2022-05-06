export const GetTasksRich = (token, objectId, protocol, that) => {

    let ws = new WebSocket('ws://localhost:8081/app', protocol)
    ws.onopen = () => {
        console.log("connect")
        let object = {
            token: "key", type: "tasks", state: "connect", message: {
                token,
                objectId,
                body: ""
            }
        }
        ws.send(JSON.stringify(object));
    }
    ws.onmessage = evt => {
        const message = JSON.parse(evt.data)
        that.props.setUS(message)
        //ws.send(JSON.stringify({ token: "key", message }))
    }
    ws.onclose = () => {
        console.log('disconnected')
        // automatically try to reconnect on connection loss
    }
    return ws
}