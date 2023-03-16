// 1. Design a method to delete the element at a particular index.

let a = [1,2,3,4,5,6];
let b = [];
let user = 3;
let c = 0;

for (i=0;i<a.length;i++) {
   if(a[i] !== user) {
    b[c] = a[i];
    c++;
   }
}
console.log(b);