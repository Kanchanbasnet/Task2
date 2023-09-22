function findIntersection(arr1, arr2) {
    const intersection = [];

    for (const element of arr1) {
        if (arr2.includes(element) && !intersection.includes(element)) {
            intersection.push(element);
        }
    }

    return intersection;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findIntersection(array1, array2);
console.log('Common elements:', commonElements); 
