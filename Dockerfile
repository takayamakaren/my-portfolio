# ---- base ----
FROM node:22-alpine AS base

WORKDIR /app

# package.json と lock ファイルだけ先にコピーしてキャッシュを活用
COPY package*.json ./

# ---- development ----
FROM base AS development

# 開発依存も含めてインストール（node_modules はボリュームで上書きされるが
# イメージビルド時にも入れておくことで初回起動を高速化）
RUN npm install

COPY . .

EXPOSE 5173

# --host でコンテナ外からアクセスできるようにする
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
