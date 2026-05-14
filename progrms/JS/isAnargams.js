function isAnagrams(str1, str2){
    str1 = str1.toLowerCase().replace(/\s/g, '');
    str2 = str2.toLowerCase().replace(/\s/g, '');

    if(str1.length !== str2.length){
        return false;
    }

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log('isAngrams', isAnagrams("Silent", "listen"));
console.log('isAngrams', isAnagrams("Si lent", " listen"));
console.log('isAngrams', isAnagrams("lent ", " ten"));