const button = document.getElementById("countButton");
let typedText = document.getElementById("textInput").value;
let palavras = document.getElementById("wordsDiv")

button.addEventListener("click", function(e) {  
    typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 
// Isto muda todas as letras para minúsculas
typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
// Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
// Iremos aprender mais sobre como usar a função replace numa lição mais à frente.
    const words = typedText.split(" ")       
    const letterCounts = {};
    const wordsCounts = {}
for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1; 
     } else { 
        letterCounts[currentLetter]++; 
     }
    // faça algo com cada letra 
 }
 for (let i = 0; i < words.length; i++) {
    currentWords = words[i];
    if (wordsCounts[currentWords] === undefined) {
        wordsCounts[currentWords] = 1; 
     } else { 
        wordsCounts[currentWords]++; 
     }
    // faça algo com cada palavra
 }
 

 // Para saber quantas vezes cada letra apareceu, você pode usar um loop for..in em letterCounts.  
 
 
 for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span); 
 }
 for (let letter in wordsCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${wordsCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span); 
 }
   
});



