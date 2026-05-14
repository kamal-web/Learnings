function groupAnagrams(arr){
    let map = {};
    for(let word of arr){
        console.log(word);
        let key = word.toLowerCase().replace(/\s/g,'').split('').sort().join('');
        if(!map[key]){
            map[key] = [];
        }
        map[key].push(word);
    }
    return map;
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));