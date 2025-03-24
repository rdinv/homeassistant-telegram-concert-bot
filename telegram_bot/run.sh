#!/usr/bin/with-contenv bashio

# Получаем конфигурацию
export TELEGRAM_TOKEN=$(bashio::config 'telegram_token')
export LOG_LEVEL=$(bashio::config 'log_level')

bashio::log.info "Starting Telegram Concert Bot..."

# Запуск бота
node bot.js