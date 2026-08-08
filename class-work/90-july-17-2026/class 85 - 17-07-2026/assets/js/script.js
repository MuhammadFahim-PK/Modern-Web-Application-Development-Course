//  Rest Opetators
function foo(a, b, ...c) {
    //  use Reduce
    // return a + b + c.reduce((sum, num) => sum + num, 0);
    // return a + b + c.reduce((sum, num) => sum + num, 0);

    //  Use Map
    let num = 0;
    c.map((value)=>{
        num += value;
    })

    return a + b + num;
}

let getValue = foo(10, 20, 30, 40, 50);

console.log(getValue);

