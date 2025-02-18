# Silent Crash on Large POST Requests in Node.js

This repository demonstrates a common, yet subtle, bug in Node.js servers that can lead to silent crashes when handling large POST requests. The server fails to handle large request bodies gracefully, resulting in a crash without any helpful error messages in the console.

## Problem

The provided `bug.js` demonstrates a Node.js HTTP server that doesn't properly handle large POST requests.  If a request body exceeds a certain size, the server will crash without providing any error information in the console logs. This makes debugging and identifying the root cause significantly challenging.

## Solution

The solution, found in `bugSolution.js`, addresses this issue by implementing request body size limits. By setting a `maxBodySize` and using the `data` event to monitor the incoming body size, the server can prevent crashes by rejecting excessively large requests with appropriate error responses.

## How to reproduce

1.  Clone this repository.
2.  Navigate to the repository's directory.
3.  Run `node bug.js`.
4.  Send a large POST request (e.g., using tools like `curl` or `Postman`) to `http://localhost:3000`. You will likely see the server crash without an error message in the console.
5. Run `node bugSolution.js` to see the fix in action.