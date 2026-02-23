// Подключаем библиотеку express
const express = require('express');
const cors = require('cors');
// Создаем приложение
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());               // Для JSON
app.use(express.urlencoded({ extended: true }));


app.post('/auth', async (req, res) => {
    console.log(req);
    const { login, password } = req.body;

    // Проверка наличия обязательных полей
    if (!login || !password) {
        return res.status(400).json({ message: 'Логин и пароль обязательны' });
    }

    try {
        // Выполняем запрос на стороннюю службу
        const response = await fetch(`https://auth.21-school.ru/auth/realms/EduPowerKeycloak/protocol/openid-connect/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                client_id: 's21-open-api',
                username: login,
                password: password,
                grant_type: 'password'
            })
        });

        // Чтение ответа
        const data = await response.json();

        // Проверка успешности ответа (статус-код 2xx)
        if (!response.ok) {
            return res.status(response.status).json({ message: data.error_description || 'Ошибка авторизации' });
        }

        // Все хорошо, отправляем данные клиенту
        res.json(data);

    } catch (error) {
        // Обработка ошибок сети или сбоя выполнения
        console.error('Ошибка при выполнении запроса:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});


// Запускаем сервер
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

