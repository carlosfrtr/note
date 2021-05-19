# pull official base image
FROM python:3.8.1-slim-buster

# set work directory
WORKDIR /usr/src/note

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# copy project
COPY . /usr/src/note

# install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["gunicorn", "-b", "0.0.0.0:5000", "-w=3", "wsgi:app"]