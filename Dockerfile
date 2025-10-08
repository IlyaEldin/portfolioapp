# Используем официальный Node.js образ
FROM node:24-alpine

# Устанавливаем Bun
RUN npm install -g bun

# Создаем директорию приложения
WORKDIR /app

# Копируем package.json и bun.lockb
COPY package.json bun.lock ./

# Устанавливаем зависимости
RUN bun install

# Копируем исходный код
COPY . .

# Открываем порт
EXPOSE 5173

# Запускаем приложение
CMD ["bun", "run", "dev"]