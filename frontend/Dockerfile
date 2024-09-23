FROM node:20.14.0

# NOTE: コンテナでテストを行うためにchromiumをインストール
# 		: --no-install-recommendsオプションにより、関連する必須ではないパッケージのインストールを除外する。
RUN apt-get update \
	&& apt-get upgrade -y \
	&& apt-get install --no-install-recommends -y chromium

# # テスト用のChromiumのバイナリのパス設定
ENV CHROME_BIN=/usr/bin/chromium

WORKDIR /app/sample_todos

RUN npm install -g @angular/cli

COPY ./sample_todos/package*.json ./

CMD sh -c "npm install && ng serve --host=0.0.0.0"
