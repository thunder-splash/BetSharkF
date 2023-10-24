# Используем образ с Node.js
FROM node:16

# Создаем рабочую директорию
WORKDIR /usr/src/app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код проекта
COPY . .

# Запускаем приложение
CMD ["npm", "run", "dev"]