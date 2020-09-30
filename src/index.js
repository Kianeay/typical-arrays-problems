
exports.min = function min (array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let len = array.length, min = Infinity;
        while (len--) {
          if (array[len] < min) {
            min = array[len];
          }
        }
        return min;
    } else {
        return 0;
    }

}

exports.max = function max (array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let len = array.length, max = -Infinity;
        while (len--) {
          if (array[len] > max) {
            max = array[len];
          }
        }
        return max;
    } else {
        return 0;
    }

    }
     


exports.avg = function avg (array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let total = 0;
        for(let i = 0; i < array.length; i++) {
            total += array[i];
        }
        let avg = total / array.length;
        return avg;
    } else {
        return 0;
    }
    
   
}
     

