import fs from 'fs';

// Write to a file
fs.writeFileSync('example.txt', 'Hello, this is a test file created using Node.js!');

// Read the file contents
const data = fs.readFileSync('example.txt', 'utf-8');
console.log('File Contents:', data);

// Append to the file
fs.appendFileSync('example.txt', '\nAppended text.');
console.log('Updated File Contents:', fs.readFileSync('example.txt', 'utf-8'));

import os from 'os';

// Get OS information
console.log('OS Platform:', os.platform());
console.log('OS Release:', os.release());
console.log('Total Memory:', os.totalmem() / (1024 * 1024), 'MB');
console.log('Free Memory:', os.freemem() / (1024 * 1024), 'MB');
console.log('CPU Info:', os.cpus());
console.log('Home Directory:', os.homedir());
console.log('System Uptime (in seconds):', os.uptime());


import path from 'path';
import { fileURLToPath } from 'url';

// Define __filename and __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Join paths
const joinedPath = path.join(__dirname, 'example', 'test.txt');
console.log('Joined Path:', joinedPath);

// Get the base name
console.log('Base Name:', path.basename(joinedPath));

// Get the directory name
console.log('Directory Name:', path.dirname(joinedPath));

// Get the file extension
console.log('File Extension:', path.extname(joinedPath));

// Resolve an absolute path
const absolutePath = path.resolve('example.txt');
console.log('Absolute Path:', absolutePath);


// main.js
import { myObject } from './library.js';

// Access properties and methods
console.log(myObject.name); // Output: Fahad
console.log(myObject.greet()); // Output: Hello, my name is Fahad!

// Call method to change name
console.log(myObject.changeName('Ali')); // Output: Name changed to Ali
console.log(myObject.greet()); // Output: Hello, my name is Ali!
