// actualPageIdx to index wybranej strony (indexujemy od 0)
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// przykładowe dane
const data = [1,2,3,4,5,6,123,12123,2423,34,234,23,234,234,0,234,,56,4];

const settings = { actualPageIdx: 1, entriesOnPage: 2 }; 


console.log('Start');



/**
 * @param  {number[]} dataEntries array of entries - only numbers 
 * @param {{actualPageIdx: number, entriesOnPage: number}} settings index od page and number of entries on single page
 * @returns {number[]}
 */
const paginateArray = (dataEntries, settings) => {
  //@todo walidacja

  const {entriesOnPage, actualPageIdx} = settings;
    
  /**
   * @type {number}
   */
  const arrayLength = dataEntries.length;

  const pageCount = Math.floor(arrayLength / entriesOnPage);
 
  const firstEntries = entriesOnPage * actualPageIdx; 
  console.log({firstEntries});

  const entriesOnSelectedPage = dataEntries.slice(firstEntries, entriesOnPage);
  console.log({entriesOnPage});

  return entriesOnSelectedPage;  
};


const result = paginateArray(data, settings);
console.log(result);
const result2 = paginateArray([1], {actualPageIdx: 0, entriesOnPage: 0});
// result === [3,4]


