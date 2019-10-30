function countWords(str) {
    
    return (str.match(/[^\s]+/g) ? str.match(/[^\s]+/g).length : 0);
}

console.log(countWords('  Hello Gomer   '));
