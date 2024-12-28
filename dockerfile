FROM node:19
# env 數值在 docker 啟動時傳入
WORKDIR /frontend
COPY . .
# COPY package*.json ./frontend
RUN npm install 
RUN npm run build
EXPOSE 3000 
CMD ["npm", "start"] 

