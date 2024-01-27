var mostCommonWord = function(paragraph, banned) {
    let wordList = paragraph.toLowerCase().split(/\W+/g).filter(word=> word)
   
    let obj={}

    for(let i=0;i<wordList.length;i++){
          obj[wordList[i]] ? obj[wordList[i]] +=1 : obj[wordList[i]]=1
    }

    return Object.keys(obj).sort((a,b)=> obj[b]-obj[a]).filter(word=> !banned.includes(word))[0]


};
