function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let words = 0;
    let vowels = 0;
    
    // Define vowels for checking
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    // Variable to track if we are in a word
    let inWord = false;
    
    for (let char of sentence) {
        // Increment the length counter
        length += 1;
        
        // Check if the character is a vowel
        if (vowelSet.has(char)) {
            vowels += 1;
        }
        
        // Check if the character is a space
        if (char === ' ') {
            if (inWord) {
                words += 1;
                inWord = false;
            }
        } else if (char !== '.') {
            inWord = true;
        }
    }
    
    // Final word count increment if the last word doesn't end with a space
    if (inWord) {
        words += 1;
    }
    
    // Since the sentence ends with a point, we don't count it as a part of the words
    console.log(`Length of the sentence: ${length}`);
    console.log(`Number of words in the sentence: ${words}`);
    console.log(`Number of vowels in the sentence: ${vowels}`);
}

// Example usage
const sentence = "This is a simple sentence.";
analyzeSentence(sentence);
