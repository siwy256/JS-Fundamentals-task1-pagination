export default function paginateArrayValidation(dataEntries, settings) {
  // validating
  if (!(dataEntries instanceof Array)) { throw new Error('first parameter "dataEntries" has to be array type'); }

  const isAllEntriesTypeOfNumber = dataEntries.every((item) => typeof item === 'number');
  if (!isAllEntriesTypeOfNumber) { throw new Error('some elements in array isn\'t number type.'); }

  if (typeof settings !== 'object') { throw new Error('second parameter "setings" has to be object type.'); }

  if (('actualPageIdx' in settings) && ('entriesOnPage' in settings)) {
    // nothing
  } else { throw new Error('second parameter "setings" has to be object type {actualPageIdx, entriesOnPage}.'); }

  const { actualPageIdx, entriesOnPage } = settings;

  if ((typeof actualPageIdx !== 'number') || (typeof entriesOnPage !== 'number')) { throw new Error('parameters "actualPageIdx", "entriesOnPage" in "setings" has to be number type.'); }

  if (!Number.isInteger(actualPageIdx)) { throw new Error('parameter "actualPageIdx" in "setings" has to be a positive integer.'); }
  if (!Number.isInteger(entriesOnPage)) { throw new Error('parameter "entriesOnPage" in "setings" has to be a positive integer.'); }

  if (actualPageIdx < 0) { throw new Error('parameter "actualPageIdx" in "setings" has to be a positive integer.'); }
  if (entriesOnPage < 0) { throw new Error('parameter "actualPageIdx" in "setings" has to be a positive integer.'); }
  // end of validating
}
