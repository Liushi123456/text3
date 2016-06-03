function calculate_median(arr) {
  //请勿改动函数名
   var newarr = [];
   var result;
   for (var i = 0; i < arr.length; i++) {
     if (i%2===0) {
       newarr=arr[i];
     }
   }
   function compare(v1,v2) {
     return v2 - v1;
   }
   newarr=newarr.sort(compare);
    /*if (newarr.length <= 1) { return newarr; }
　　var pivotIndex = Math.floor(newarr.length / 2);
　　var pivot = newarr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < newarr.length; i++){
　　　　if (newarr[i] < pivot) {
　　　　　　left.push(newarr[i]);
　　　　} else {
　　　　　　right.push(newarr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));*/
    if(newarr.length%2===0){
       result = (newarr[newarr.length/2]+newarr[newarr.length/2-1])/2;
    }else {
       result=newarr[newarr.length/2];
    }
    return result;
}

module.exports = calculate_median;
