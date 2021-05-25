const dayjs = require('dayjs')

const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

const defaultDateFormat = 'YYYY-MM-DD HH:mm:ss:SSS ZZ'
const defaultDisplayFormat = 'MMM DD, YYYY, HH:mm:ss:SSS, ZZ'

class DayjsUsage {

    getCurrentTime(dateFormat=null) {
        return dayjs().format(dateFormat ?? defaultDisplayFormat);
    }
    getCurrentTimeWithUtcOffset(utcOffset, dateFormat=null) {
        return dayjs().utc().utcOffset(utcOffset).format(dateFormat ?? defaultDisplayFormat)
    }
    parseDatestring(dateString, inputFormat=null, dateFormat=null) {
        return dayjs(dateString, inputFormat ?? defaultDateFormat)
            .format(dateFormat ?? defaultDisplayFormat)
    }
    parseDatestringAndStoreWithUtcOffset(dateString, utcOffset, inputFormat=null, dateFormat=null) {
        return dayjs
            .utc(dateString, inputFormat ?? defaultDateFormat)
            .utcOffset(utcOffset)
            .format(dateFormat ?? defaultDisplayFormat)
    }
    addMonthsToDate(dateString, numberOfMonths, inputFormat=null, dateFormat=null) {
        let currentDate = dayjs(dateString, inputFormat ?? defaultDateFormat)
        let endDate = currentDate.month(currentDate.month() + numberOfMonths)
        return endDate.format(dateFormat ?? defaultDisplayFormat)
    }
    getDaysDiff(startDatestring, endDatestring) {
        let startDate = dayjs(startDatestring, defaultDateFormat)
        let endDate = dayjs(endDatestring, defaultDateFormat)

        return endDate.diff(startDate, 'day')
    }
    checkIfBetween(checkTimeString, startTimeString, endTimeString) {
        let checkTime = dayjs(checkTimeString, defaultDateFormat)
        let startTime = dayjs(startTimeString, defaultDateFormat)
        let endTime = dayjs(endTimeString, defaultDateFormat)

        return checkTime.isBetween(startTime, endTime, 'second', '[]')
    }
}

module.exports = {
    DayjsUsage: DayjsUsage
}
