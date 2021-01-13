var arrayStringsAreEqual = function(word1, word2) {
    
    return word1.reduce((a,c)=>a+c) == word2.reduce((a,c)=>a+c)
    
};

console.log(arrayStringsAreEqual(["ab", "c"],["a", "bc"]))