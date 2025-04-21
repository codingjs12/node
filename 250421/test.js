let list = [1,5,4,8,6];

let newList = [];
let newList2 = [];
for(let i = 0; i < list.length; i++) {
    if(list[i] >= 5) {
        newList.push(list[i]);
    }
}

for(let i = 0; i < list.length; i ++) {
    newList2.push(list[i] * 2);
}

console.log(newList);
console.log(newList2);

let newList3 = newList2.filter(x => x  > 5);

let newList4 = newList.filter(function(x) {
    if(x > 5) { return x; }
});

console.log(newList3);
console.log(newList4);