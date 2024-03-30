const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function toLanguageG(text) {
    let result = [];
    let words = text.split(" ");

    for (let word of words) {
        let newWord = '';

        for (let i = 0; i < word.length; i++) {
            if ("aeiou".indexOf(word[i].toLowerCase()) !== -1) {
                newWord += word[i] + 'g' + word[i];
            } else {
                newWord += word[i];
            }
        }
        result.push(newWord);
    }
    return result.join(" ");
}

rl.question('Masukkan teks yang ingin diubah ke dalam bahasa "G": ', (text) => {
    let translatedText = toLanguageG(text);
    console.log(`Hasil terjemahan: ${translatedText}`);
    rl.close();
});