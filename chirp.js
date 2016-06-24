'use scrict';

function chirp(num, word) {
  if(word !== undefined) {
    if(num === 0) {
      return '';
    }
    return ' ' + word + chirp(--num, word);
  } else {
    if(num === 0) {
      return '';
    }
    return ' chirp' + chirp(--num);
  }
}

console.log(chirp(8, 'deeper'));