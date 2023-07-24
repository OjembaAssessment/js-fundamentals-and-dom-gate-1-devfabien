
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
for(let i=0;i<kkeys.length;i++){
let span=document.createElement('span');
span.append(kkeys[i]);
span.setAttribute('style',"background-color:yellow;margin:6px;padding:3px");
console.log(span)
document.body.insertAdjacentElement('afterbegin',span);
}













