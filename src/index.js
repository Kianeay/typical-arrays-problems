
exports.min = function min (array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let result = Math.min.apply(Math,array);
        return result; 
    } else {
        return 0;
    }

}

exports.max = function max (array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        let result = Math.max.apply(Math,array);
    return result;
    } else {
        return 0;
    }

    }
     


exports.avg = function avg (array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        const sum = array.reduce((a, b) => a + b, 0);
        const avg = (sum / array.length);
    
        return avg;
    } else {
        return 0;
    }
    
   
}
     

