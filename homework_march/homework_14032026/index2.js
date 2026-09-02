



function getCommonItems(arr1, arr2) {
const commonItems = [];
    for (let i = 0; i < arr1.length; i++) {
            if (arr2.includes(arr1[i])) {
                 commonItems.push(arr1[i]);
            }
    }
    return commonItems;
}

const list1 = ['Java', 'MySQL', 'Git', 'Docker', 'API'];
const list2 = ['Git', 'Docker', 'TypeScript', 'React', 'API'];
commonItems = getCommonItems(list1, list2);
console.log(commonItems); // [Git, Docker, API]