console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let album = {
    title,
    artist,
    yearPublished
  };
  collection.push(album);
  return album;
} //end addToCollection

console.log('running addToCollection: ', addToCollection(myCollection, 'Definitely Maybe', 'Oasis', 1994));
console.log('running addToCollection: ', addToCollection(myCollection, 'Dookie', 'Green Day', 1994));
console.log('running addToCollection: ', addToCollection(myCollection, 'Odelay', 'Beck', 1996));
console.log('running addToCollection: ', addToCollection(myCollection, 'White Blood Cells', 'The White Stripes', 2001));
console.log('running addToCollection: ', addToCollection(myCollection, 'Is This It', 'The Strokes', 2001));
console.log('running addToCollection: ', addToCollection(myCollection, 'Icky Thump', 'The White Stripes', 2007));

console.log(myCollection);


function showCollection(collection) {
  for (let i=0; i<collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
  } // end collection loop
  return true;
} //end showCollection

console.log('running showCollection: ', showCollection(myCollection));



function findByArtist(collection, artist) {
  let artistArray = [];
  for (let i=0; i<collection.length; i++) {
    if (collection[i].artist === artist) {
    artistArray.push(collection[i]);
      } //end artist logic
    }//end collection loop
    console.log('expect artistArray:', artistArray);
  return artistArray;
} //end findByArtist

console.log('running findByArtist for The White Stripes', findByArtist(myCollection, 'The White Stripes'));
console.log('running findByArtist for The Strokes', findByArtist(myCollection, 'The Strokes'));
console.log('running findByArtist for The Killers', findByArtist(myCollection, 'The Killers'));



console.log("STRETCH GOALS");

function search(collection, searchCriteria){

  let artistYearArray = [];
  if (searchCriteria === undefined || searchCriteria.artist === undefined || searchCriteria.year === undefined ||
     searchCriteria === '' || searchCriteria.artist === '' || searchCriteria.year === '') {
    return collection; 
  } else {
    for (let i=0; i < collection.length; i++) {
      console.log('in for search loop:', collection[i], searchCriteria.artist, searchCriteria.year);
      if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year) {
      artistYearArray.push(collection[i]);
        }//end if true logic
      }//end for loop
  }
  return artistYearArray; 
 } //end search






console.log('running search for white stripes', search(myCollection, { artist: 'The White Stripes', year: 2001 }));
console.log('running search for white stripes 3k', search(myCollection, { artist: 'The White Stripes', year: 3000 }));

// console.log('running search for 2001', search(myCollection, {artist: '', year: 2001}));
console.log('running search for nothing', search(myCollection));



console.log("STREEEETCHY GOALS");

let myCollectionS = [];

function addToCollectionS(collection, title, artist, yearPublished, tracks) {
  console.log('in addToCollectioinS:', collection, title, artist, yearPublished, tracks);
  collection.push({title, artist, yearPublished, tracks});
  return {title, artist, yearPublished, tracks};
} //end addToCollection


console.log('running addToCollectionS: ', addToCollectionS(myCollectionS, 'Definitely Maybe', 'Oasis', 1994,
 [{name:"Rock 'n' Roll Star", duration:'5:23'}, 
 {name:'Columbia', duration:'6:17'},
 {name:'Cigarettes & Alcohol', duration:'4:49'}]));

 console.log('running addToCollectionS: ', addToCollectionS(myCollectionS, 'Dookie', 'Green Day', 1994,
 [{name:'Longview', duration:'3:59'}, 
 {name:'Welcome to Paradise', duration:'3:44'},
 {name:'Basket Case', duration:'3:02'}]));

 console.log('running addToCollectionS: ', addToCollectionS(myCollectionS, 'White Blood Cells', 'The White Stripes', 2001,
 [{name:"Dead Leaves and the Dirty Ground", duration:'3:04'}, 
 {name:"Hotel Yorba", duration:'2:10'},
 {name:"We're Going to Be Friends", duration:'2:22'}]));


function showCollectionS(collection) {
  for (let i=0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}:`);
    for (let j=0; j < collection[i].tracks.length; j++) {
      console.log(`       ${j+1}. Name: ${collection[i].tracks[j].name} Duration ${collection[i].tracks[j].duration}`);
    } // end tracks loop
  } // end collection loop
  return collection;
} //end showCollection

console.log('running showCollection: ', showCollectionS(myCollectionS));




function searchS(collection, searchCriteria){
  let artistYearArrayS = [];
  console.log('in search:', collection, searchCriteria.artist, searchCriteria.year, searchCriteria.trackName);
  if (searchCriteria.trackName !== undefined){
    for (let i=0; i < collection.length; i++) {
      console.log('in collection loop', collection, searchCriteria.trackName);
      for (let j=0; j < collection[i].tracks.length; j++) {
        console.log(`${j+1}. Name: ${collection[i].tracks[j].name}`);
        if (collection[i].tracks[j].name === searchCriteria.trackName) {
          artistYearArrayS.push(collection[i]);
        }
      } // end tracks loop
    } 
  } else {
      for (let i=0; i < collection.length; i++) {
        console.log('in for search loop:', collection[i], searchCriteria.artist, searchCriteria.year);
        if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year) {
        artistYearArrayS.push(collection[i]);
          } //end if true logic
        } //end for loop
    }  
  return artistYearArrayS; 
 } //end search



console.log('running search for hotel yorba', searchS(myCollectionS, {artist: 'The White Stripes', year: 2001, trackName: 'Hotel Yorba'}));
console.log('running search for green day', searchS(myCollectionS, {artist: 'Green Day', year: 1994}));
console.log('running search for nothing', searchS(myCollectionS, {}));




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
