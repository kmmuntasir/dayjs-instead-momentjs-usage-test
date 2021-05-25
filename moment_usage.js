var moment = require('moment'); // require
const moment_tz = require('moment-timezone');

// let date = moment("1997-12-31")

// console.log(date.format("YYYY-MM-DD HH:mm:ss:SSS +0600"))

// const tmz = 'Asia/Dhaka';
// const time = date.add(2, 'months').format('YYYY-MM-DD HH:mm:ss');
// console.log(time);

// var tmz = 'Asia/Dhaka';
// var fmt = 'HH:mm:ss';

// var time = moment_tz.tz(tmz);
// console.log("timeCheck =  () -->time: ", time);

let date = moment(new Date()).utcOffset('+0600').format("YYYY-MM-DD HH:mm:ss:SSS +0600");

console.log(date)