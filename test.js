import paginateArray from './paginateArray.js'; // eslint-disable-line

((testedFunction) => {
  let arr;
  let msg = '';
  const msgErr = ' - !!!';
  const msgOk = ' - ok.';

  msg = 'Test: dataEntries can\'t be a object.';
  try {
    testedFunction({}, { actualPageIdx: 0, entriesOnPage: 0 });
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: dataEntries can\'t be null.';
  try {
    testedFunction(null, { actualPageIdx: 0, entriesOnPage: 0 });
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: dataEntries can\'t containe other values than numbers.';
  try {
    testedFunction([1, 2, 'a'], { actualPageIdx: 0, entriesOnPage: 0 });
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: settings can\'t be [].';
  try {
    testedFunction([1, 2], []);
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: settings can\'t be undefined.';
  try {
    testedFunction([1, 2]);
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: settings: {actualPageIdx, entriesOnPage} have to be a number';
  try {
    testedFunction([1, 2], { actualPageIdx: 1, entriesOnPage: 'a' });
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: settings: {actualPageIdx, entriesOnPage} have to be a number';
  try {
    testedFunction([1, 2], { actualPageIdx: undefined, entriesOnPage: 1 });
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: settings: {actualPageIdx, entriesOnPage} have to be a positive integer';
  try {
    testedFunction([1, 2], { actualPageIdx: -1, entriesOnPage: -1 });
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk);// eslint-disable-line
  }

  msg = 'Test: settings: {actualPageIdx, entriesOnPage} have to be a positive integer';
  try {
    testedFunction([1, 2], { actualPageIdx: 1, entriesOnPage: -1 });
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: settings: {actualPageIdx, entriesOnPage} have to be a positive integer';
  try {
    testedFunction([1, 2], { actualPageIdx: -1, entriesOnPage: 1 });
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: settings: {actualPageIdx, entriesOnPage} have to be integer';
  try {
    testedFunction([1, 2], { actualPageIdx: 1.2, entriesOnPage: 1 });
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: settings: {actualPageIdx, entriesOnPage} have to be integer';
  try {
    testedFunction([1, 2], { actualPageIdx: 1.2, entriesOnPage: 1.2 });
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: settings: {actualPageIdx, entriesOnPage} have to be integer';
  try {
    testedFunction([1, 2], { actualPageIdx: 2, entriesOnPage: 1.2 });
    console.error(msg + msgErr); // eslint-disable-line
  } catch (e) {
    console.log(msg + msgOk); // eslint-disable-line
  }

  msg = 'Test: valid A';
  arr = testedFunction([33, 33, 44], { actualPageIdx: 33, entriesOnPage: 3 });
  if (JSON.stringify([]) === JSON.stringify(arr)) {
    console.log(msg + msgOk, arr); // eslint-disable-line
  } else {
    console.error(msg + msgErr); // eslint-disable-line
  }

  msg = 'Test: valid B';
  arr = testedFunction([1, 3, 4], { actualPageIdx: 0, entriesOnPage: 5 });
  if (JSON.stringify([1, 3, 4]) === JSON.stringify(arr)) {
    console.log(msg + msgOk, arr); // eslint-disable-line
  } else {
    console.error(msg + msgErr); // eslint-disable-line
  }

  msg = 'Test: valid C';
  arr = testedFunction([1, 3, 4, 6, 7, 8, 9], { actualPageIdx: 1, entriesOnPage: 3 });
  if (JSON.stringify([6, 7, 8]) === JSON.stringify(arr)) {
    console.log(msg + msgOk, arr); // eslint-disable-line
  } else {
    console.error(msg + msgErr); // eslint-disable-line
  }
})(paginateArray);
