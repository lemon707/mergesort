var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;
    
    while (i < lowHalf.length && j < highHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            array[k] = lowHalf[i];
            i += 1;
    
        } else {
            array[k] = highHalf[j];
            j += 1;
        }
        k += 1;
    }
    
    while (i < lowHalf.length) {
        array[k] = lowHalf[i];
        i += 1;
        k += 1;
    }
    
    while (j < highHalf.length) {
        array[k] = highHalf[j];
        j += 1;
        k += 1;
    }
};

var mergeSort = function(array, p, r) {
    var q = Math.floor((p + r) / 2);
    if(p < r){
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
var array2 = [42, 0, -2, 6, -4];

var result1 = mergeSort(array, 0, array.length-1);
var result2 = mergeSort(array2, 0, array2.length-1);

console.log('result1', result1);
console.log('result2', result2);
