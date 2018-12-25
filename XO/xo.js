//** Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contain any char.*/

function XO(str) {
    return (str.toLowerCase().split(/[^o]/gi).join('').length === 
    str.toLowerCase().split(/[^x]/gi).join('').length)    
}


console.log(XO('joXx'))