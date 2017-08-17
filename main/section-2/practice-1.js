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

module.exports = function countSameElements(collection) {
    // let result = [];
    // for (let item of collection) {
    //     let obj = find(result, item);
    //     if (obj) {
    //         obj.count++;
    //     } else {
    //         result.push({key: item, count: 1});
    //     }
    // }
    // return result;
    let map = new Map();
    collection.forEach(value => {
        map.set(value, map.has(value) ? map.get(value) + 1 : 1);
    });
    return Array.from(map).map(value => {
        return {key: value[0], count: value[1]}
    });
};
