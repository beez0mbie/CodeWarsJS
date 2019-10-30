var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}
var i = partitionOn(isEven, items);
// Test.assertEquals( i, 3, 'partioned at 3' );
// Test.assertSimilar( items.slice(0, i), [1, 3, 5] );
// Test.assertSimilar( items.slice(i),    [2, 4, 6] );

function partitionOn(pred, items) {
    let arrF = [];
    let arrT = []
    items.forEach(element => {
        pred(element) ? arrT.push(element) : arrF.push(element);
    });
    items.splice(0)
    items.push(...arrF)
    items.push(...arrT)
    return arrF.length;    
}

console.log(i, items)