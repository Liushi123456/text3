function calculate_median(arr) {
  //请勿改动函数名
   var newarr=[];
   //取出数组中所有的偶数元素,放在newarr数组中
   for (var i = 0; i < arr.length; i++) {
     if ((i+1)%2===0) {
        newarr=arr[i];
     }
   }
  //对newarr数组进行排序
   var length = newarr.length;
   var i, j, temp;
   for (i = 0; i < newarr.length; i++) {
       for (j = 0; j < newarr.length-i-1; j++) {
           if (newarr[j] > newarr[j + 1]) {
               temp = newarr[j];
               newarr[j] = newarr[j + 1];
               newarr[j + 1] = temp;
           }
       }
   }

   //计算新数组的中位数
   var result=(newarr.length%2===0)?(newarr[newarr.length/2]+newarr[newarr.length/2-1])/2:newarr[newarr.length/2];
    /*if(newarr.length%2===0){
      var result = (newarr[newarr.length/2]+newarr[newarr.length/2+1])/2;
    }else {
       result = newarr[newarr.length/2];
    }*/
   
    return result;
}
module.exports = calculate_median;
