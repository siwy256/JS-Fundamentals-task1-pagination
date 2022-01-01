import { paginateArrayValidation } from './paginateArrayValidation.js';
import {paginateArray} from './paginateArray.js';
import {} from './test.js';

// actualPageIdx to index wybranej strony (indexujemy od 0)
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// przykładowe dane
const data = [1,2,3,4,5,6,25,28,33,38,40,99,274,454,566,788,699,800];
const settings = { actualPageIdx: 1, entriesOnPage: 2 }; 


console.log(paginateArray(data, settings));