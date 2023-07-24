
let para= document.getElementById('myParagraph').innerText;
let splitted=para.split(' ');
  let wordMap = {};
  for (var i = 0; i < splitted.length; i++) {
    let currentWordCount = wordMap[splitted[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[splitted[i]] = count + 1;
  }
 let vvalue= (Object.values(wordMap).sort((a, b)=>b - a)).slice(0,5);
 let kkeys= Object.keys(wordMap).sort((a, b)=>wordMap[b] - wordMap[a]).slice(0,5);
var kk=[...kkeys];
console.log(kk);
var g=kk[0].toString();
for(let i=0;i<kk.length;i++){
let span=document.createElement('span');
span.append(kk[i]);
span.setAttribute('style',"background-color:yellow");
console.log(span)
}












