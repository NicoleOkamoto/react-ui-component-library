### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t okamoto_nicole_coding_assignment12 .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t okamoto_nicole_coding_assignment12 .`.

Then, push it to your registry, e.g. `docker push myregistry.com/okamoto_nicole_coding_assignment12`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.
