FROM homeassistant/aarch64-base:latest

# Установка Node.js
RUN \
    apk add --no-cache \
        nodejs \
        npm

# Создание рабочей директории
WORKDIR /usr/src/app

# Копирование файлов приложения
COPY run.sh /
COPY package.json .
COPY bot.js .

# Установка зависимостей Node.js
RUN npm install

# Права на выполнение
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]