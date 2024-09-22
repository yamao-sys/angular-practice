FROM node:20.14.0-alpine

WORKDIR /app/sample_todos

RUN npm install -g @angular/cli

COPY ./frontend/sample_todos/package*.json ./

CMD sh -c "npm install && ng serve --host=0.0.0.0"
