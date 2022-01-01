// actualPageIdx to index wybranej strony (indexujemy od 0)
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// przykładowe dane
const data = [1,2,3,4,5,6,123,12123,2423,34,234,23,234,234,0,234,,56,4];

const settings = { actualPageIdx: 1, entriesOnPage: 2 }; 
console.log('start');

/**
 * @param  {array} dataEntries
 * @param {{actualPageIdx: number, entriesOnPage: number}} settings description
 */
const paginateArray = (dataEntries, settings) => {
  //@todo walidacja

  const {entriesOnPage, actualPageIdx} = settings;
       
  const arrayLength = dataEntries.length;

  const pageCount = Math.floor(arrayLength / entriesOnPage);


  // ...
  // return entriesOnSelectedPage
};


const result = paginateArray(data, settings);
const result2 = paginateArray([], {actualPageIdx: 1, entriesOnPage: 2});
// result === [3,4]


