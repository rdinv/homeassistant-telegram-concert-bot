const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я бот для уведомлений о концертах. Используйте /status для проверки состояния.');
});

// Обработчик команды /status
bot.onText(/\/status/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Бот работает нормально!');
});

// Обработка ошибок
bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
});

// Обработка успешного запуска
bot.on('message', (msg) => {
    console.log('Received message:', msg.text);
});

console.log('Bot is running and waiting for messages...');