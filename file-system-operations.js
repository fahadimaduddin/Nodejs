// 1. Importing the fs Module
import fs from 'fs'; // ES module syntax

// 2. Basic Operations with Examples
// a. Reading a File

fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File Contents:', data);
});

// b. Writing to a File

fs.writeFile('output.txt', 'This is the content written to the file.', (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
        return;
    }
    console.log('File written successfully.');
});

// c. Appending Data to a File

fs.appendFile('output.txt', '\nThis is appended content.', (err) => {
    if (err) {
        console.error('Error appending to the file:', err);
        return;
    }
    console.log('Content appended successfully.');
});

// d. Deleting a File

fs.unlink('output.txt', (err) => {
    if (err) {
        console.error('Error deleting the file:', err);
        return;
    }
    console.log('File deleted successfully.');
});

// 3. File and Directory Operations

// a. Creating a Directory

fs.mkdir('new-directory', { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully.');
});

// b. Reading Directory Contents

fs.readdir('new-directory', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Directory Contents:', files);
});
