export const socket = new WebSocket(import.meta.env.VITE_SERVER);



socket.onmessage = (event) => {
    console.log('server message: ', event.data);
};