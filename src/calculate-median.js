function calculate_median(arr) {
  //请勿改动函数名
   var newarr=[];
   var length;
   //取出数组中所有的偶数元素,放在newarr数组中
   for ( var i = 0; i < arr.length; i++) {
     if ((i+1)%2===0) {
        length=newarr.push(arr[i]);
     }
   }
  //对newarr数组进行排序
   var temp;
   for (i = 0; i < newarr.length; i++) {
       for (j = i+1; j < newarr.length; j++) {
           if (newarr[i] > newarr[j]) {
               temp = newarr[i];
               newarr[i] = newarr[j];
               newarr[j] = temp;
           }
       }
   }
   //计算新数组的中位数
   var result=(length%2===0?(newarr[length/2]+newarr[length/2-1])/2:newarr[(length-1)/2]);
   return result;
}
module.exports = calculate_median;
