'use strict';

// function find(collection, ch) {
//     for (let item of collection) {
//         if (item.name === ch) {
//             return item;
//         }
//     }
//
//     return null;
// }
//
// function summarize(collection) {
//     let result = [];
//     for (let item of collection) {
//         let obj = find(result, item)
//         if (obj) {
//             obj.summary++;
//         } else {
//             result.push({name: item, summary: 1});
//         }
//     }
//     return result;
// }
//
// function split(item) {
//     if (item.includes("-")) {
//         let array = item.split("-");
//         return {key: array[0], count: parseInt(array[1], 10)};
//     }
//
//     if (item.includes("[")) {
//         let key = item.charAt(0);
//         let count = parseInt(item.substr(2, item.length - 1));
//         return {key, count};
//     }
//
//     if (item.includes(":")) {
//         let array = item.split(":");
//         return {key: array[0], count: parseInt(array[1], 10)};
//     }
// }
//
// function push(result, key, count) {
//     for (var i = 0; i < count; i++) {
//         result.push(key);
//     }
// }
//
// function expand(collection) {
//     let result = [];
//     for (let item of collection) {
//         if (item.length === 1) {
//             result.push(item);
//         } else {
//             let {key, count} = split(item);
//             push(result, key, count);
//         }
//     }
//     return result;
// }

module.exports = function countSameElements(collection) {
    // let expandedArray = expand(collection);
    // return summarize(expandedArray);
    let map = new Map();
    collection.forEach(value => {
        let val, count;
        if (value.length > 2) {
            [val, count] = value.split('-');
            if (!count) {
                [val, count] = value.split(':');
            }
            if (!count) {
                val = value.substring(0, 1);
                count = value.substring(2, value.length - 1);
            }
        }else{
            val = value;
        }
        count = count ? Number(count) : 1;
        map.set(val, map.has(val) ? map.get(val) + count : count);
    });
    return Array.from(map).map(value => {
        return {name: value[0], summary: value[1]}
    });
};
