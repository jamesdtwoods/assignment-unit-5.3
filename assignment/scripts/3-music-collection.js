console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  console.log('in addToCollectioin:', collection, title, artist, yearPublished);
  collection.push({title, artist, yearPublished});
  return {title, artist, yearPublished};
} //end addToCollection

console.log('running addToCollection: ', addToCollection(myCollection, 'Definately Maybe', 'Oasis', 1994));
console.log('running addToCollection: ', addToCollection(myCollection, 'Dookie', 'Green Day', 1994));
console.log('running addToCollection: ', addToCollection(myCollection, 'Odelay', 'Beck', 1996));
console.log('running addToCollection: ', addToCollection(myCollection, 'White Blood Cells', 'The White Stripes', 2001));
console.log('running addToCollection: ', addToCollection(myCollection, 'Is This It', 'The Strokes', 2001));
console.log('running addToCollection: ', addToCollection(myCollection, 'Icky Thump', 'The White Stripes', 2007));

console.log(myCollection);


function showCollection(collection) {
  for (let i in collection) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
  } // end collection loop
} //end showCollection

console.log('running showCollection: ', showCollection(myCollection));


let artistArray = [];

function findByArtist(collection, artist) {
  let i=0;
  while (i < collection.length) {
    console.log('in findByArtist:', collection[i], artist);
    if (collection[i].artist === artist) {
    artistArray.push(collection[i]);
      } //end artist logic
    i++;
    } //end collection loop
  return artistArray;
} //end findByArtist

console.log('running findByArtist ', findByArtist(myCollection, 'The White Stripes'));




// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
