const {DayjsUsage} = require('./usages/dayjs_usage')
const dayjsUsage = new DayjsUsage()

function line() {
    console.log('-----------------------------------------------------------------------------------------------------')
}

console.log("Starting...");

line()

console.log(`Current Time: ${dayjsUsage.getCurrentTime()}`)
line()

console.log(`Current Time With UTC Offset: ${dayjsUsage.getCurrentTimeWithUtcOffset(0)}`)
line()

console.log(`Parse a dateString: ${dayjsUsage.parseDatestring(
    '2021-02-24T23:52:57:397 +0400'
)}`)
line()

console.log(`Parse a dateString and storing with an utc offset: ${dayjsUsage.parseDatestringAndStoreWithUtcOffset(
    '2021-02-24T23:52:57:397 +0400',
    0
)}`)
line()

console.log(`Add 25 Months to a date: ${dayjsUsage.addMonthsToDate(
    '2021-02-24T23:52:57:397 +0600',
    25
)}`)
line()

console.log(`Get difference between two dates in days: ${dayjsUsage.getDaysDiff(
    '2021-03-24T23:52:57:397 +0600',
    '2021-04-24T23:52:57:397 +0600'
)}`)
line()

console.log(`Check if a timestamp is between: ${dayjsUsage.checkIfBetween(
    '2021-03-24T23:52:57:397 +0600',
    '2021-03-24T23:50:57:397 +0600',
    '2021-03-24T23:59:57:397 +0600'
)}`)
line()
