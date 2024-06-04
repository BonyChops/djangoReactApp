[English](./README.md) | [日本語]

# djangoReactApp
Django + React + Inertia + Vite で作るサンプル Web アプリ。

## 準備
```shell
pip install -r requirements.txt
cd frontend
npm i
```

## 起動

### 開発時
以下のコマンドを別々のターミナルで実行してください。

```shell
python manage.py runserver 8080
```

```shell
cd frontend
npm run dev
```

### 本番環境

`djangoReactApp/settings.py` を以下のように書き換えてください。
```diff
 # SECURITY WARNING: don't run with debug turned on in production!
-DEBUG = True
+DEBUG = False

-ALLOWED_HOSTS = []
+ALLOWED_HOSTS = ["localhost"] # add hosts which you're going to use
```

以下のコマンドを実行します。
```shell
cd frontend
npm run build
cd ..
python manage.py collectstatic
python manage.py runserver 8080 # add --insecure if you want to host assets too
```