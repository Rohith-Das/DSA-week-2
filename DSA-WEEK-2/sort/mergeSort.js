function mergeSort(arr){
    if(arr.length <=1){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
   let left=arr.slice(0,mid);
   let right=arr.slice(mid)
    
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let sortArr=[];
    while(left.length && right.length){
        if(left[0]<= right[0]){
            sortArr.push(left.shift())
        }else{
            sortArr.push(right.shift())
        }
    }
    return [...sortArr,...left,...right]
}
const arr=[8,20,-2,9,-6]
console.log(mergeSort(arr))