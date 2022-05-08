import words from './words.json'

export default function chooseWord(){
    return words[Math.floor(Math.random() * words.length)];
}