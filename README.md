[English] | [日本語](./README_ja.md)

# djangoReactApp
A sample web application using Django and React, integrated with Inertia.

## Prepare
```shell
pip install -r requirements.txt
cd frontend
npm i
```

## Start Up

### Dev
Run each commands in different terminals.

```shell
python manage.py runserver 8080
```

```shell
cd frontend
npm run dev
```

### Prod

Make sure that you should modify `djangoReactApp/settings.py` as below.
```diff
 # SECURITY WARNING: don't run with debug turned on in production!
-DEBUG = True
+DEBUG = False

-ALLOWED_HOSTS = []
+ALLOWED_HOSTS = ["localhost"] # add hosts which you're going to use
```

Run commands below.
```shell
cd frontend
npm run build
cd ..
python manage.py collectstatic
python manage.py runserver 8080 # add --insecure if you want to host assets too
```