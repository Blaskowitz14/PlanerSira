# Installation 
1) install myplaner-api 

2) create and activate a venv

3) Run these commands in your console for install requirements : 
<pip install poetry>
<poetry install>

4) create a postgres database on your local machine 

5) create “.env” file in the root directory and set env. variables: 

SECRET_KEY = "YOUR SECRET_KEY"


REFRESH_SECRET_KEY = "YOUR REFRESH_SECRET_KEY"

PG_URL = 'postgresql://postgres:postgres@localhost:5432/db' #YOUR PATH

SQLALCHEMY_URL = 'postgresql+psycopg2://postgres:postgres@localhost:5432/db' #YOUR PATH



6) Run <uvicorn app.main:app> in the root directory.
