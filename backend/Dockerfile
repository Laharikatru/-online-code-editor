# Use an official Python runtime
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory inside the container
WORKDIR /app

# Copy files from the current folder (backend/) to /app
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy everything else from backend/
COPY . .

# Expose port (update if you're using a different one)
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
