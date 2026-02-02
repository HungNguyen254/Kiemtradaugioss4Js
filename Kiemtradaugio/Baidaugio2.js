let oddcount = 0;
let i = 1;
let result = 0;
for( i = 1;i <= 50;i++){
    if(i % 3 === 0){
        console.log(i + " Fizz");
        oddcount++;
    }else if(i % 5 ===0){
        console.log(i + " Buzz");
    }else if (i %  3 ===0 && i % 5 === 0){
        console.log("FIzzBuzz");
    }else {
        console.log(i);
    }
}
if(i % 3 === 0){
    result = i + i;
}
console.log("Tong cua tat ca cac so da in ra chu Fizz");

console.log(result);
