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

console.log('running findByArtist ', findByArtist(myCollection, 'The White Stripes'));
console.log('running findByArtist ', findByArtist(myCollection, 'The Strokes'));
console.log('running findByArtist ', findByArtist(myCollection, 'The Killers'));



console.log("STRETCH GOALS");

function search(collection, searchCriteria){
  let artistYearArray = [];
  console.log('in search collection', collection, 'search criteria:', searchCriteria.artist, searchCriteria.year);
    for (let i=0; i < collection.length; i++) {
      console.log('in for search loop:', collection[i], searchCriteria.artist, searchCriteria.year);
      if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year) {
      artistYearArray.push(collection[i]);
        } //end if true logic
      } //end for loop
    return artistYearArray; 
 } //end search




console.log('running search ', search(myCollection, { artist: 'The White Stripes', year: 2001 }));
// console.log('running search ', search(myCollection, {artist: '', year: 2001}));
// console.log('running search ', search(myCollection, {}));



// let testSearchObject = {
//   artist: "The White Stripes", 
//   yearPublished: 2001
// };
// console.log("***************************");
// console.log('running search ', search(myCollection, testSearchObject));
// console.log("***************************");

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


// let searchCriteriaS = [];

function searchS(collection, searchCriteria){
  let artistYearArrayS = [];
  console.log('in search:', collection, searchCriteria.artist, searchCriteria.year);
  if (searchCriteria.trackName !== undefined){
    for (let i=0; i < collection.length; i++) {
      console.log('in collection loop', collection, searchCriteria.trackName);
      for (let j=0; j < collection[i].length; j++) {
        console.log(`${j}. Name: ${collection[i].tracks[j].name}`);
        if (collection[i].tracks[j].name === searchCriteria.trackName) {
          artistYearArrayS.push(collection[i]);
        }
      } // end tracks loop
    } 
    return artistYearArrayS;  
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

console.log('running search ', searchS(myCollectionS, {artist: 'The White Stripes', year: 2001, trackName: 'Hotel Yorba'}));
console.log('running search ', searchS(myCollectionS, {artist: 'Green Day', year: 1994}));





//  *************************************************************************
//  *************************************************************************
//  *************************************************************************
//  *************************************************************************
//  *************************************************************************
//  *************************************************************************
//  *************************************************************************
//  *************************************************************************
// OLD CODE BELOW

/*

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  console.log('in addToCollectioin:', collection, title, artist, yearPublished);
  collection.push({title, artist, yearPublished});
  return {title, artist, yearPublished};
} //end addToCollection

console.log('running addToCollection: ', addToCollection(myCollection, 'Definitely Maybe', 'Oasis', 1994));
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




function findByArtist(collection, artist) {
  let artistArray = [];
  let i=0;
  while (i < collection.length) {
    console.log(`in findByArtist:  ${collection[i]} ${artist}`);
    if (collection[i].artist === artist) {
    artistArray.push(collection[i]);
      } //end artist logic
    i++;
    } //end collection loop
  return artistArray;
} //end findByArtist

console.log('running findByArtist ', findByArtist(myCollection, 'The White Stripes'));
console.log('running findByArtist ', findByArtist(myCollection, 'The Strokes'));
console.log('running findByArtist ', findByArtist(myCollection, 'The Killers'));



console.log("STRETCH GOALS");

let searchCriteria = [];

function search(collection, searchCriteria){
  let artistYearArray = [];
  console.log('in search:', collection, searchCriteria.artist, searchCriteria.year);
    for (i=0; i < collection.length; i++) {
      console.log('in for search loop:', collection[i], searchCriteria.artist, searchCriteria.year);
      if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year) {
      artistYearArray.push(collection[i]);
      return artistYearArray;
        } //end if true logic
      } //end for loop
      return artistYearArray; 
 } //end search

console.log('running search ', search(myCollection, {artist: 'The White Stripes', year: 2001}));
console.log('running search ', search(myCollection, {artist: 'The White Stripes', year: 1999}));


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
  for (let i in collection) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
    for (let t in collection[i].tracks) {
      console.log(`${t}. Name: ${collection[i].tracks[t].name} Duration ${collection[i].tracks[t].duration}`);
    } // end tracks loop
  } // end collection loop
  return collection;
} //end showCollection

console.log('running showCollection: ', showCollectionS(myCollectionS));


let searchCriteriaS = [];

function searchS(collection, searchCriteria){
  let artistYearArrayS = [];
  console.log('in search:', collection, searchCriteria.artist, searchCriteria.year);
  if (searchCriteria.trackName !== undefined){
    for (let i in collection) {
      console.log('in collection loop', collection, searchCriteria.trackName);
      for (let t in collection[i].tracks) {
        console.log(`${t}. Name: ${collection[i].tracks[t].name}`);
        if (collection[i].tracks[t].name === searchCriteria.trackName) {
          artistYearArrayS.push(collection[i].tracks[t]);
        }
      } // end tracks loop
    } 
    return artistYearArrayS;  
  } else {
      for (i=0; i < collection.length; i++) {
        console.log('in for search loop:', collection[i], searchCriteria.artist, searchCriteria.year);
        if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year) {
        artistYearArrayS.push(collection[i]);
        return artistYearArrayS;
          } //end if true logic
        } //end for loop
    }  
    return artistYearArrayS; 
 } //end search

console.log('running search ', searchS(myCollectionS, {artist: 'The White Stripes', year: 2001, trackName: 'Hotel Yorba'}));
console.log('running search ', searchS(myCollectionS, {artist: 'Green Day', year: 1994}));

*/

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
