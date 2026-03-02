export const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
    console.log('Соединение установлено');
    socket.send('Привет');
};

socket.onmessage = (event) => {
    console.log('Сообщение от сервера:', event.data);
};