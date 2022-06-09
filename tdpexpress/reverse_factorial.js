function reverseFactorial(num) {
    let x= 1,
    n=1;
    while(x<= num){
        if (x=== num) return `${n}!`;
        x*= ++n;
    }
    return 'not a factorial';
}
module.exports= reverseFactorial;