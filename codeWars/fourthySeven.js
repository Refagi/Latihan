function likeOrDislike(buttons) {
  let currentState = 'Nothing'; // Awalnya, tidak ada tindakan

  for (let button of buttons) {
    if (button === currentState) {
      currentState = 'Nothing'; // Jika tombol yang sama ditekan, kembali ke 'Nothing'
    } else {
      currentState = button; // Jika tombol berbeda, update status
    }
  }
  return currentState;
}
console.log( likeOrDislike(['Dislike'])) //Dislike );
console.log( likeOrDislike(['Like','Like'])) //, Nothing );
console.log( likeOrDislike(['Dislike','Like'])) //, Like );
console.log( likeOrDislike(['Like','Dislike','Dislike']))//, Nothing );

console.log( likeOrDislike(['Dislike','Dislike']))//, Nothing );
console.log( likeOrDislike(['Like','Like','Like'])) //, Like );
console.log( likeOrDislike(['Like','Dislike'])) //, Dislike );
console.log( likeOrDislike(['Dislike','Like','Dislike']))//, Dislike );
console.log( likeOrDislike(['Like','Like','Dislike','Like','Like','Like','Like','Dislike']))//, Dislike );
console.log( likeOrDislike([]))//, Nothing );