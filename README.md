# Better Images App
This is an easy app with [Nextjs](https://nextjs.org/), [Cloudinary](https://cloudinary.com/) and [Redux Toolkit](https://redux-toolkit.js.org/) that uses cloudinary image enhancement for improve the photos that you upload.

## Env setup
For configurate the env variables you have to chage <code>.env.sample</code> into <code>.env.local</code> and write your cloudinary credentials.
```bash
NEXT_PUBLIC_CLOUD_NAME=XD
NEXT_PUBLIC_UPLOAD_PRESET=TEXTXD
NEXT_PUBLIC_API_KEY=TESTTEST
```

## Setup
### Local setup
First you need [node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed, then run these commands for install and run the app:
```bash
git clone https://github.com/angelsornichero/better-images-app.git
cd better-images-app
npm i 

npm run (dev, start, test)
```
### Docker setup
You must have installed [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/) for run the project, afterwards run this commands:
```bash
docker-compose build
docker-compose up
```

For development I reccomend use [devcontainers](https://code.visualstudio.com/docs/devcontainers/containers)