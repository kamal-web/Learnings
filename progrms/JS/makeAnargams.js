function makeAnargams(str1, str2){
    let charMap = {};
    str1 = str1.toLowerCase().replace(/\s/g, '');
    str2 = str2.toLowerCase().replace(/\s/g, '');

    console.log('formatStr1', str1);
    console.log('formatStr2',  str2);

    for(let character of str1){
        charMap[character] = (charMap[character] || 0) + 1;
    }

    console.log('str1', charMap);
    for(let character2 of str2){
        charMap[character2] = (charMap[character2] || 0) - 1;
            
    }
    console.log('str2', charMap);

    const minimalDeletionCount = Object.values(charMap).reduce((acc, item)=> acc+Math.abs(item), 0);
    return minimalDeletionCount;
    
}

console.log('minimal deletions to make anagrams', makeAnargams('cde','abc'));
console.log('minimal deletions to make anagrams', makeAnargams('abc','amnop'));
console.log('minimal deletions to make anagrams', makeAnargams('absdjkvuahdakejfnfauhdsaavasdlkj','djfladfhiawasdkjvalskufhafablsdkashlahdfa'));
