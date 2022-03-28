const removeFromArray = function(array, ...valueToRemove) {
    valueToRemove.sort()
    for (i = 0; i < array.length; i++){
        for (j = 0; j < valueToRemove.length; j++) {
            if (array[i] === valueToRemove[j]) {
                array.splice(i,1);
            } else continue;
        } 
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
