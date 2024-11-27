import fs from 'fs';

try {
    const data = fs.readFileSync('example.txt', 'utf-8'); // Blocking operation
    console.log('File Contents:', data);
} catch (err) {
    console.error('Error reading file:', err);
}
console.log('This line will run after the file is read.');



fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File Contents:', data);
});
console.log('This line will run before the file is read.');

console.log('Start');

setTimeout(() => {
    console.log('Asynchronous timeout finished');
}, 2000); // 2-second delay

console.log('End');

import axios from 'axios';

console.log('Fetching data...');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Post Data:', response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

console.log('This line will run before the data is fetched.');



async function fetchData() {
    console.log('Fetching data...');
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Post Data:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    console.log('Fetch complete.');
}

fetchData();
console.log('This line will run before the fetch is complete.');
