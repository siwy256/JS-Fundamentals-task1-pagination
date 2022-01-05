import paginateArrayValidation from './paginateArrayValidation.js'; // eslint-disable-line
// turn off for tests:

// /**
//  *
//  * @param  {number[]} dataEntries array of entries - only numbers
//  * @param {{actualPageIdx: number, entriesOnPage: number}}
//       settings index od page and number of entries on single page
//  * @returns {number[]}
//  */

export default function paginateArray(dataEntries, settings) {
  paginateArrayValidation(dataEntries, settings);

  const { actualPageIdx, entriesOnPage } = settings;

  /**
   * @type {number} - sample of usage type check
   */

  // const arrayLength = dataEntries.length;
  // const pageCount = Math.floor(arrayLength / entriesOnPage);

  const firstEntry = entriesOnPage * actualPageIdx;
  const lastEntry = firstEntry + entriesOnPage;

  const entriesOnSelectedPage = dataEntries.slice(firstEntry, lastEntry);

  return entriesOnSelectedPage;
}
