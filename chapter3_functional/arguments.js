function sum() {
    for (arg of arguments) {
        console.log('arg: ' + arg);
    }
}

sum(6);
sum(6, 4);
sum(6, 4, 5);
sum(6, 4, 'abc');

