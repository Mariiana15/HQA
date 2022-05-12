import config from '../components/utils/configuration.json'

export const GetTasksRich = (token, token_, objectId, protocol, that) => {

    let ws = new WebSocket(config.webSocket.service, protocol)
    ws.onopen = () => {
        console.log("connect")
        let object = {
            token: token_, type: "tasks", state: "connect", message: {
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
       console.log(message)
        //ws.send(JSON.stringify({ token: "key", message }))
    }
    ws.onclose = () => {
        console.log('disconnected')
        // automatically try to reconnect on connection loss
    }
    return ws
}

export const GetTasksRichBD = (token_, objectId, protocol, that) => {

    console.log("Get task rich BD")
    let ws = new WebSocket(config.webSocket.service, protocol)
    ws.onopen = () => {
        console.log("connect")
        let object = {
            token: token_, type: "select", state: "connect", message: {
                objectId,
                body: ""
            }
        }
        ws.send(JSON.stringify(object));
    }
    ws.onmessage = evt => {
        const message = JSON.parse(evt.data)
        that.props.setUS(message)
       console.log(message)
        //ws.send(JSON.stringify({ token: "key", message }))
    }
    ws.onclose = () => {
        console.log('disconnected')
        // automatically try to reconnect on connection loss
    }
    return ws
}