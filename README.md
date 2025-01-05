# Express.js - Empty JSON Request Body Not Parsed

This repository demonstrates a common issue in Express.js applications where an empty JSON request body is not parsed correctly, resulting in `req.body` being empty.

## Bug Description

The Express.js application uses `express.json()` middleware to parse JSON request bodies. However, when a POST request is made with an empty JSON body (e.g., `{}`), the `req.body` remains empty.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `node bug.js`.
4. Send a POST request to `http://localhost:3000/data` with an empty JSON body using a tool like Postman or curl (ensure the `Content-Type` header is set to `application/json`).
5. Observe that the console logs an empty object, and the response is 'Data received'.

## Solution

The solution involves using a middleware to handle empty JSON bodies explicitly. This middleware checks if the request body is empty and provides an appropriate response or default value.

## How to use the solution

1.  Clone this repository.
2. Run `npm install`
3. Run `node bugSolution.js`
4. Send a POST request to `http://localhost:3000/data` with an empty JSON body using a tool like Postman or curl (ensure the `Content-Type` header is set to `application/json`).
5. The server will now handle the empty body gracefully and provide a message indicating an empty body was received. 
