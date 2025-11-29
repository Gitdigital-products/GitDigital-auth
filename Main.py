from fastapi import FastAPI
from routes import tokens, users

app = FastAPI(title="GitDigital Auth Service")

app.include_router(tokens.router, prefix="/tokens")
app.include_router(users.router, prefix="/users")

@app.get("/")
def root():
    return {"status": "auth service online"}
