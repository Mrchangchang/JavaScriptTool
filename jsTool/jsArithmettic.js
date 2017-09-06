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