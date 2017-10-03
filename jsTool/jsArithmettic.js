/**
 * Created by 楠楠 on 2017/9/6.
 */
//冒泡排序
/*冒泡排序就是从最开始的位置或结算的位置反方向对比，如
果比它大/小就交换继续走，第一遍走完，最
后一个位置是最大值或最小值
*
*
* */
function exchange(array, i, j) {
    var t = array[i];
    array[i] = array[j];
    array[j] = t;
}
function bubbleSort(numbers) {
    for (var i=0;i < numbers.length; i++) {
        for( var j=0; j < numbers.length; j++) {
            if (numbers[j] > numbers[j+1]) {
                exchange(numbers, j, j + 1)
            }
        }
        console.log(numbers)
    }
    return numbers;
}
var  nums = [2,3,4,3,1,5,7,122,341,-1];
console.log("1123");
console.log(bubbleSort(nums));
//快速排序
//从一开始找一个中介，然后把比它小的放左边，然后重新对中介两边的数据各自重新找个中介，如此循环
function quickSort(arr) {
    if (arr.length <= 1 ) {
        return arr
    }
    console.log('原数组是' + arr);
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex,1)[0];
    var left = [];
    var right = [];
    console.log('将中介提出来的数组是：' + arr);
    for (var i = 0; i < arr.length ; i ++) {
        console.log("此刻中介元素是：" + pivot +"当前元素是：" + arr[i]);
        if (arr[i] < pivot) {
            left.push(arr[i]);
            console.log("移动" + arr[i] + "到左边")
        }else {
            right.push(arr[i]);
            console.log("移动" + arr[i] +"到右边");
        }
    }
    return quickSort(left).concat(pivot,quickSort(right));
}
console.log("快速排序");
var nums = [2,3,4,3,1,5,7,122,341,-1];
console.log(quickSort(nums));