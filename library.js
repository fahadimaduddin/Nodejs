// lib.js
export const myObject = {
    name: 'Fahad',
    greet() {
        return `Hello, my name is ${this.name}!`;
    },
    changeName(newName) {
        this.name = newName;
        return `Name changed to ${this.name}`;
    }
};