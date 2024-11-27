// Import the http module using ES module syntax
import http from 'http';

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with the status and content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Handle different routes based on the URL path
    if (req.url === '/') {
        res.end('Welcome to the Home Page!');
    } else if (req.url === '/about') {
        res.end('This is the About Page.');
    } else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
});

// Set the port number for the server to listen on
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
