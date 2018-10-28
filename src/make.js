module.exports = (function(){
 let arr =[];
 function x1(){
  for(let i=0;i<arguments.length;i++){
  let v= arguments[i];
  if(typeof(v)== 'function'){
   let r=0;
   for(let j=0;j<arr.length;j++){
    r=v(r,arr[j])
   }
   return r;
  }else{
   arr.push(v);
  }
  }
  return x1
 }
 return x1
})();
