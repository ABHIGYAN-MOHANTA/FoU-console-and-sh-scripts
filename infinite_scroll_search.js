(function scrollUntilWordFound(word) {
    const delay = 500;  // Delay between scrolls (in milliseconds)

    function checkForWord() {
        if (document.body.innerText.includes(word)) {
            console.log(`Found the word: "${word}"`);
            return;  // Stop scrolling if the word is found
        } else {
            window.scrollBy(0, window.innerHeight);  // Scroll down by the viewport height
            setTimeout(checkForWord, delay);  // Check again after the delay
        }
    }

    checkForWord();  // Start the process
})("specificWord");  // Replace "specificWord" with the word you're looking for
