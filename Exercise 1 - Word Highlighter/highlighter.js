
let paragraph= document.getElementById('myParagraph');
let splitted=paragraph.split(' ');
  let wordMap = {};
  for (var i = 0; i < splitted.length; i++) {
    let currentWordCount = wordMap[splitted[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[splitted[i]] = count + 1;
  }
  console.log (Object.values(wordMap).sort((a, b)=>b - a)).slice(0,5);
 let kkeys= Object.keys(wordMap).sort((a, b)=>wordMap[b] - wordMap[a]).slice(0,5);






