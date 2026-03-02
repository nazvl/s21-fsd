export const socket = new WebSocket(import.meta.env.VITE_SERVER);

socket.onopen = () => {
    console.log('Соединение установлено');
    socket.send('Привет');
};

socket.onmessage = (event) => {
    console.log('server message: ', event.data);
};