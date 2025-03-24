ARG BUILD_FROM
FROM $BUILD_FROM

# Установка Node.js
ENV NODE_VERSION 18
RUN \
    apk add --no-cache \
        nodejs \
        npm \
        git

# Создание рабочей директории
WORKDIR /usr/src/app

# Копирование файлов приложения
COPY run.sh /
COPY package.json .
COPY bot.js .

# Установка зависимостей
RUN npm install

# Права на выполнение
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]