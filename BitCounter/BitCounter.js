// My varinant
var countBitsMy = function(n){
    var binary = (n).toString(2);
    var summaryOfOnes = 0
    for (let index = 0; index < binary.length; index++) {
        if (binary[index] === '1'){
            summaryOfOnes += 1
        }
    }
    return summaryOfOnes
}

//Best variant
var countBitsSample1 = n => n.toString(2).split('0').join('').length;

//Best variant which i noticed
var countBitsSample2 = function(n) {
    return n.toString(2).replace(/0/g,'').length;
  };

console.log(countBitsSample2(12345))