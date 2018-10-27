function recursion(tr){
let arr=[];
arr.push([tr.value]);
if(tr.left){
arr.push([recursion(tr.left).concat(recursion(tr.right))]);
}
//console.log(arr);
return arr;
}