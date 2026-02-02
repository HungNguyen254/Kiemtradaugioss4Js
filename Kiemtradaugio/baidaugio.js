let number;
let i;
number = parseInt(prompt("Nhap mot so nguyen n:"));
if(number % 2 === 0){
    console.log(`So ${number} la so chan`);
    
}else {
    console.log(`So ${number} la so le`);
}
if(number > 0 ){
    console.log(`day so tu 1-${number}`);
    for(i = 1;i <=number ;i++){
        console.log(i);
    }
}else {
    console.log(`Gia tri ${number} khong hop le de tao day so`);
    
}