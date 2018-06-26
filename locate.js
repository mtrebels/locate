// locate common elements within given arrays

function arraysInCommon(arrays) { // define function to iterate over arrays
    var i, common,
        L = arrays.length, min = Infinity; // minimum length array
    while (L) { 
        if (arrays[--L].length < min) { // iterate minumum array to prevent dupilcates
            min = arrays[L].length;
            i = L;
        }
    }
    common = arrays.splice(i, 1)[0]; // return common elements 
    return common.filter(function (itm, indx) {
        if (common.indexOf(itm) == indx) {
            return arrays.every(function (arr) {
                return arr.indexOf(itm) != -1;
            });
        }
    });
}

// first set of define the arrays 
// common elements are [23,566]

//var arr1 = [23, 34, 67, 89, 123, 566, 1000];
//var arr2 = [11, 22, 23, 24, 33, 37, 185, 566, 987, 1223, 1234];
//var arr3 = [23, 43, 67, 98, 566, 678];
//var arr4 = [1, 4, 5, 23, 34, 76, 87, 132, 566, 665];
//var arr5 = [1, 2, 3, 23, 24, 344, 566];

// second set of defined arrays
// common elements are [1,4,5,566]

var arr1 = [1, 3, 4, 4, 5, 43, 67, 98, 566, 678];
var arr2 = [1, 4, 4, 5, 23, 34, 76, 87, 132, 566, 665];
var arr3 = [1, 2, 4, 4, 5, 23, 24, 344, 566];

// join the arrays

var allArrays = [arr1, arr2, arr3];

// define common elements in join arrays and sort

int = arraysInCommon(allArrays).sort();

// output details

document.write("<pre>" + "defined arrays" + "</pre>");
document.write("<pre>" + JSON.stringify(arr1) + "</pre>");
document.write("<pre>" + JSON.stringify(arr2) + "</pre>");
document.write("<pre>" + JSON.stringify(arr3) + "</pre>");
// commented out as not relevant to second set of defined arrays
//document.write("<pre>" + JSON.stringify(arr4) + "</pre>");
//document.write("<pre>" + JSON.stringify(arr5) + "</pre>");
document.write("<pre>" + "common elements" + "</pre>");
document.write("<pre>" + JSON.stringify(int) + "</pre>")