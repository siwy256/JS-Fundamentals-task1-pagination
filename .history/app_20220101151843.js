// actualPageIdx to index wybranej strony (indexujemy od 0)
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// przykładowe dane
const data = [1,2,3,4,5,6,25,28,33,38,40,99,274,454,566,788,,699,800];

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
 
  const firstEntry = entriesOnPage * actualPageIdx; 
  console.log({firstEntry});

  const entriesOnSelectedPage = dataEntries.slice(firstEntry, entriesOnPage);
  console.log({entriesOnPage});

  return entriesOnSelectedPage;  
};


let result = paginateArray(data, settings);
console.log(result);
result = paginateArray([1], {actualPageIdx: 0, entriesOnPage: 0});
console.log(result);
// result === [3,4]


