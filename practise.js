// const ans = isNaN(undefined);
// const ans1 = isNaN(null);
// const ans2 = isNaN('');

// console.log(ans);
// console.log(ans1);
// console.log(ans2);


// const key = Date.parse('afsf');

// console.log(typeof(key));
// console.log(key);

const moment = require('moment');
const tz = require('moment-timezone')
// const key = Date.parse('2015-12-25asff');
// console.log(key);

const key = new Date()
const key1 = moment("2016-11-20").tz('Europe/London').format('ddd, DD MMM YYYY hh:mm:ss zz');
// console.log(key);
console.log(key1);
