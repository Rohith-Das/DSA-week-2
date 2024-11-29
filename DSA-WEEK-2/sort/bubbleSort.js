function bubble(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
            }
        }
    }
    return arr
}
console.log(bubble([99,7,55,999,3,1]))