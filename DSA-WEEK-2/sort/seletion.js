function selection(arr){
    let n=arr.length
    for(let i=0;i<n-1;i++){
        let min=i
        for(let j=i+1;j<n;j++){
            if(arr[j] < arr[min]){
                min=j

            }
        }
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }
    return arr
}
console.log(selection([5, 3, 8, 4, 2])); 