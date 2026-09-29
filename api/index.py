import sys
import os

# Add the current directory to sys.path so we can import backend
sys.path.append(os.path.dirname(os.path.abspath(__file__)) + "/../")

from backend.app.main import app

# Vercel expects 'app' to be the variable name for the handler
