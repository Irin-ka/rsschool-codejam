module.exports = function recursion(tr,arr=[[]],i=0){
 arr[i].push(tr.value);
 if(tr.left){
  if(!Array.isArray(arr[i+1])) arr.push([]);
  recursion(tr.left,arr, i+1);
 }
  if(tr.right){
   if(!Array.isArray(arr[i+1])) arr.push([]);
   recursion(tr.right,arr,i+1)
  }
 return arr;
}