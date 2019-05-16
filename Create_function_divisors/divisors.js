function divisors(integer) {

    if (integer > 1) {

        divisorsArr = addDivisorsToArray(integer);

        if (divisorsArr.length != 0){
            return divisorsArr;
        };

        return (integer + ' is a prime')

    };
    
    return false;
};

function addDivisorsToArray(integer) {
    array = [];

    for (let index = 2; index < integer; index++) {
        if (integer % index == 0) {
            array.push(index);
        }; 
    };

    return array;
};

console.log(divisors(13))
