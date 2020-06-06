## revolutionapp

This repo contains the core biolerplate for our app:
- express server
- react client app
- package configuration
- live reloading for server and client app

Notes about the architecture:
- The server runs on localhost:5000
- The client app runs on localhost:3000, and a proxy is specified in client/package.json
- To view an API response example, go to localhost:3000/users


Will need:
- Database (probably PG)
- ORM or some sort of Relational Mapping Library

# To get started:

start the server:
`npm run watch` from the root of the project

start the client app:
`npm start` from /client

visit localhost:3000
