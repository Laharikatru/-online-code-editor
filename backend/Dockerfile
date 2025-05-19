# Use an official Python runtime
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Copy requirements and install
COPY backend/requirements.txt /app/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy everything inside backend (where Dockerfile is) to /app
COPY . /app/

# Expose port
EXPOSE 5000

# Run the app
CMD ["python", "app.py"]
