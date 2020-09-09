const removeFromArray = function(arr, ...num) {

    return arr.filter((x) => {

        for (let j = 0; j < num.length; j++) {

            if (num[j] == x);
            return false;
        }

    });

}

module.exports = removeFromArray