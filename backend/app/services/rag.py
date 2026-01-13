from typing import List
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_openai import ChatOpenAI
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain.docstore.document import Document
from app.core.config import settings

# Initialize HuggingFace Embeddings (runs locally, no API key needed)
embedding_function = HuggingFaceEmbeddings(
    model_name="all-MiniLM-L6-v2"
)

# Use valid Chroma settings. In client mode, we just need host/port if using HttpClient
import chromadb
chroma_client = chromadb.HttpClient(host=settings.CHROMA_DB_HOST, port=settings.CHROMA_DB_PORT)

vectorstats = Chroma(
    client=chroma_client,
    collection_name="portfolio_collection",
    embedding_function=embedding_function,
)

class RAGService:
    def __init__(self):
        self.text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)

    async def ingest_file(self, content: str, source: str):
        docs = [Document(page_content=content, metadata={"source": source})]
        splits = self.text_splitter.split_documents(docs)
        vectorstats.add_documents(splits)

    async def get_relevant_splits(self, query: str) -> List[Document]:
        return vectorstats.similarity_search(query, k=3)

    async def generate_response(self, query: str, context_docs: List[Document]):
        # OpenRouter Chat Client
        llm = ChatOpenAI(
            base_url="https://openrouter.ai/api/v1",
            api_key=settings.OPENROUTER_API_KEY,
            model=settings.OPENROUTER_MODEL,
            temperature=0
        )
        
        context_text = "\n\n".join([doc.page_content for doc in context_docs])
        
        prompt = f"""You are a helpful assistant for this portfolio website.
Use the following context to answer the user's question. If you don't know the answer based on the context, answer generally or say you don't know.

Context:
{context_text}

User Question: {query}

Answer:"""
        
        # Streaming response
        async for chunk in llm.astream(prompt):
            yield chunk.content

rag_service = RAGService()
