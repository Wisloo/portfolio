function removeSpaces() {
    let input = document.getElementById('inputText').value;
    let result = input.replaceAll(' ', '');
    document.getElementById('output').textContent = result;
}