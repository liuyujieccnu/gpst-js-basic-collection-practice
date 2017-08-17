'use strict';

// function find(collection, ch) {
//     for (let item of collection) {
//         if (item.key === ch) {
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
//             obj.count++;
//         } else {
//             result.push({key: item, count: 1});
//         }
//     }
//     return result;
// }
//
// function split(item) {
//     let array = item.split("-");
//     return {key: array[0], count: parseInt(array[1], 10)};
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
//
// function includes(collection, ch) {
//     for (let item of collection) {
//         if (item === ch) {
//             return true;
//         }
//     }
//
//     return false;
// }
//
// function discount(collection, promotionItems) {
//     let result = [];
//     for (let item of collection) {
//         let key = item.key;
//         let count = item.count;
//         if (includes(promotionItems, key)) {
//             count = count - Math.floor(count / 3);
//         }
//         result.push({key, count});
//     }
//     return result;
// }

module.exports = function createUpdatedCollection(collectionA, objectB) {
    // let expandedArray = expand(collectionA);
    // let summarizedArray = summarize(expandedArray);
    // return discount(summarizedArray, objectB.value);
    let map = new Map();
    collectionA.forEach(value => {
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
    let collectionB = Array.from(map).map(value => {
        return {key: value[0], count: value[1]}
    });
    return collectionB.map(item => {
        if (objectB.value.includes(item.key))
            item.count = item.count - Math.floor(item.count / 3);
        return item;
    });
};
