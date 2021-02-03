function add(num1,num2=6){
    num2 = num2 || 15;
    return num1+num2;
}

 const total = add(5,1);
 console.log(total);