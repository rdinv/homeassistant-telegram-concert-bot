const TelegramBot = require('node-telegram-bot-api');

// Получаем токен из переменных окружения
const token = process.env.TELEGRAM_TOKEN;
if (!token) {
    console.error('TELEGRAM_TOKEN не установлен!');
    process.exit(1);
}

// Создаем бота
const bot = new TelegramBot(token, {polling: true});

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я бот для уведомлений о концертах. Сейчас работаю в тестовом режиме.');
});

// Обработчик команды /status
bot.onText(/\/status/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Бот работает нормально! Запущен как Add-on в Home Assistant.');
});

// Логируем запуск бота
console.log('Бот запущен и ожидает сообщений...');