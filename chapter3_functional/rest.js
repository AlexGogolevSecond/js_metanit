function sum(...numbers){
    let result = 0;
    for(const n of numbers)
        result += n;
    console.log(result);
}
sum(6, 4, 5)     // 15
