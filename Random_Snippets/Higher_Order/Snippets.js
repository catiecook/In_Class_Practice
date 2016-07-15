// var a = 4
// var b = 2
//
// function Addition() {
//
//     c = 3
//     var b = c
//
//     return c+b
// }
//
//
// console.log(a+c)


function calcTotal(a, b) {
     return a + b
}

function higherOrder(done, a, b) {
     console.log(done(a ,b))
   }

higherOrder(calcTotal, 4, 2)
