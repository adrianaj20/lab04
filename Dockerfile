# Utilizar una imagen base de Node.js 14
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de la aplicación
COPY . .

# Instalar las dependencias
RUN npm install

# Exponer el puerto 9000
EXPOSE 9000

# Iniciar la aplicación
CMD ["npm", "start"]

