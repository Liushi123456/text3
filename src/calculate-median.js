function calculate_median(arr) {
  //请勿改动函数名
   var newarr = [];
   var result;
   //取出数组中所有的偶数元素,放在newarr数组中
   for (var i = 0; i < arr.length; i++) {
     if (i%2===0) {
       newarr=arr[i];
     }
   }
  //对newarr数组进行排序
   var i, j, temp;
   for (j = 0; j < newarr.length-1; j++)
   {
    for (i = 0; i < newarr.length-1-j; i++)
    {
     if (newarr[i] > newarr[i + 1])
     {
      temp = newarr[i];
      newarr[i] = newarr[i + 1];
      newarr[i + 1] = temp;
     }
    }
   //计算新数组的中位数
    if(newarr.length%2===0){
       result = (newarr[newarr.length/2]+newarr[newarr.length/2+1])/2;
    }else {
       result=newarr[newarr.length/2];
    }
    return result;
}

module.exports = calculate_median;
