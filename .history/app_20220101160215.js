// actualPageIdx to index wybranej strony (indexujemy od 0)
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// przykładowe dane
const data = [1,2,3,4,5,6,25,28,33,38,40,99,274,454,566,788,699,800];

const settings = { actualPageIdx: 1, entriesOnPage: 2 }; 


console.log('Start');

// /**
//  * 
//  * @param  {number[]} dataEntries array of entries - only numbers 
//  * @param {{actualPageIdx: number, entriesOnPage: number}} settings index od page and number of entries on single page
//  * @returns {number[]}
//  */

const paginateArray = (dataEntries, settings) => {
	if(! (dataEntries instanceof Array) ) { throw new Error('first parameter "dataEntries" has to be array type'); } 
	
	const isAllEntriesTypeOfNumber = dataEntries.every( (item)=> typeof item === 'number');
	if(! isAllEntriesTypeOfNumber) { 
		throw new Error(`some elements in array isn't number type.`);
	}

	if(typeof settings !=='object') { throw new Error('second parameter "setings" has to be object type.'); } 
	
	if( ('actualPageIdx' in settings) && ('entriesOnPage' in settings)) {		
	} else { 
		throw new Error('second parameter "setings" has to be object type {actualPageIdx, entriesOnPage}.'); 
	} 
	
	const {actualPageIdx, entriesOnPage} = settings;	
	
	if( (typeof actualPageIdx!=="number") || (typeof entriesOnPage!=="number")) {		
		throw new Error('parameters "actualPageIdx", "entriesOnPage" in "setings" has to be number type.'); 
	} 

	if( ! Number.isInteger(actualPageIdx) ) {
		throw new Error(`parameter "actualPageIdx" in "setings" has to be integer.`); 
	}
	if( ! Number.isInteger(entriesOnPage ) ) {
		throw new Error('parameter "entriesOnPage" in "setings" has to be integer.'); 
	}




   
	//@todo walidacja

	
	/**
	 * @type {number} - sample of usage type check 
	 */
  	const arrayLength = dataEntries.length;

  	const pageCount = Math.floor(arrayLength / entriesOnPage);
 
  	const firstEntry = entriesOnPage * actualPageIdx; 
  	const lastEntry = firstEntry + entriesOnPage;

	const entriesOnSelectedPage = dataEntries.slice(firstEntry, lastEntry);
	console.log({firstEntry, lastEntry, entriesOnPage});

  	return entriesOnSelectedPage;  
};

paginateArray([], settings);

let result = paginateArray(data, settings);
//console.dir(result);

result = paginateArray(data, {actualPageIdx: 0, entriesOnPage: 5});
console.log(result);
// result === [3,4]


