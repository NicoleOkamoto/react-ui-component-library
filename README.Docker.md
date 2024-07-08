## RunningInDocker

# Setting up and Running Your React UI Component Library in Docker

This Docker setup will allow you to host your React UI Component Library on localhost:8018.

## Prerequisites

- Docker installed on your machine

## Instructions

### Build Docker Image

1. Clone the repository or navigate to your project directory.
2. Build the Docker image:

```
docker build -t okamoto_nicole_assignment13 .
```

### Run Docker Container

3. Run the Docker container:

```
docker run -p 8018:80 --name okamoto_nicole_assignment13 okamoto_nicole_assignment13
```

### Access the Application

4. Open your web browser and go to [http://localhost:8083](http://localhost:8083) to view your React UI Component Library.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.
