# مشروع إعدادات Gunicorn

هذا المشروع يحتوي على إعدادات خادم Gunicorn WSGI.

## تفاصيل الإعدادات

- Workers: 4
- Bind Address: 0.0.0.0:8000
- Timeout: 120 seconds

## Setup
1. Install requirements
2. Run Gunicorn with the config file:
```bash
gunicorn -c gunicorn_config.py your_app:app
```

## النشر
تم نشر المشروع على GitHub Pages. يمكنك مشاهدته على:
https://khaledmohamed44.github.io/m_pack20/

To deploy new changes:
```bash
npm run deploy
```
# khaled
# m_pack
# m_pack10
