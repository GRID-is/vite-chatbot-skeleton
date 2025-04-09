import openai
import os

from starlette.applications import Starlette
from starlette.requests import Request
from starlette.responses import JSONResponse
from starlette.routing import Route
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel as Model
from pydantic import BaseModel
from typing import List, Literal

# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")


class Message(BaseModel):
    role: Literal["user", "assistant"]
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]

async def chat(request: Request):
    try:
        payload = await request.json()
        chat_request = ChatRequest(**payload)
    except Exception as e:
        return JSONResponse({"error": "Invalid request payload", "details": str(e)}, status_code=400)

    messages = chat_request.messages

    # Send the conversation history to OpenAI's API
    response = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": msg.role, "content": msg.content} for msg in messages]
    )

    # Extract the reply from OpenAI's response
    print("response=", response)
    reply = response.choices[0].message.content
    return JSONResponse({"reply": reply})

app = Starlette(
    debug=True,
    routes=[
        Route("/chat", chat, methods=["POST"]),
    ],
    middleware=[Middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"])],
)
