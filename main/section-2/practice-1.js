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
    // let arr = [];
    // let result = [];
    // collection.forEach(value => {
    //     if (typeof (arr[value]) === 'undefined') {
    //         arr[value] = 1;
    //     } else {
    //         arr[value]++;
    //     }
    // });
    // for(let item in arr){
    //     result.push({key: item, count: arr[item]});
    // }
    // return result;

    // let map = new Map();
    // collection.forEach(value => {
    //     map.set(value, map.has(value) ? map.get(value) + 1 : 1);
    // });
    // return Array.from(map).map(value => {
    //     return {key: value[0], count: value[1]}
    // });

    let result = [];
    collection.forEach(value => {
        let res = result.find(val => val.key === value);
        if (res) {
            res.count++;
        } else {
            result.push({key: value, count: 1});
        }
    });
    return result;
};
