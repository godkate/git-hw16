let arr = [];
for (let i = 0; ; i++) {
    i = prompt('Enter your number');
    if (i === null) {
        alert('End');
        break;
    }
    if (i !== null) {
        arr.push (i);
    }
    console.log(arr);
}
arr.sort ((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
})
console.log(arr);
arr.splice(2, 3);
console.log(arr);
