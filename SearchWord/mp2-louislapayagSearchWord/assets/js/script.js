document.getElementById('searchBtn').addEventListener('click', function() {
    let sentence = document.getElementById('sentenceInput').value;
    let word = document.getElementById('wordInput').value;
    let resultDiv = document.getElementById('result');
    
    let words = sentence.split(' ');
    
    if (words.includes(word)) {
        resultDiv.textContent = 'Word found!';
        resultDiv.className = 'found';
    } else {
        resultDiv.textContent = 'Word not found.';
        resultDiv.className = 'not-found';
    }
});