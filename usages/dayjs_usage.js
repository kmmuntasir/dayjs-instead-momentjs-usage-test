const dayjs = require('dayjs')

const customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

class DayjsUsage {

    defaultDateFormat = 'YYYY-MM-DD HH:mm:ss:SSS ZZ'
    defaultDisplayFormat = 'MMM DD, YYYY, HH:mm:ss:SSS, ZZ'

    getCurrentTime(dateFormat=null) {
        return dayjs().format(dateFormat ?? this.defaultDisplayFormat);
    }
    getCurrentTimeWithUtcOffset(utcOffset, dateFormat=null) {
        return dayjs().utc().utcOffset(utcOffset).format(dateFormat ?? this.defaultDisplayFormat)
    }
    parseDatestring(dateString, inputFormat=null, dateFormat=null) {
        return dayjs(dateString, inputFormat ?? this.defaultDateFormat)
            .format(dateFormat ?? this.defaultDisplayFormat)
    }
    parseDatestringAndStoreWithUtcOffset(dateString, utcOffset, inputFormat=null, dateFormat=null) {
        return dayjs
            .utc(dateString, inputFormat ?? this.defaultDateFormat)
            .utcOffset(utcOffset)
            .format(dateFormat ?? this.defaultDisplayFormat)
    }
    addMonthsToDate(dateString, numberOfMonths, inputFormat=null, dateFormat=null) {
        let currentDate = dayjs(dateString, inputFormat ?? this.defaultDateFormat)
        let endDate = currentDate.month(currentDate.month() + numberOfMonths)
        return endDate.format(dateFormat ?? this.defaultDisplayFormat)
    }
    getDaysDiff(startDatestring, endDatestring) {
        let startDate = dayjs(startDatestring, this.defaultDateFormat)
        let endDate = dayjs(endDatestring, this.defaultDateFormat)

        return endDate.diff(startDate, 'day')
    }
    checkIfBetween(checkTimeString, startTimeString, endTimeString) {
        let checkTime = dayjs(checkTimeString, this.defaultDateFormat)
        let startTime = dayjs(startTimeString, this.defaultDateFormat)
        let endTime = dayjs(endTimeString, this.defaultDateFormat)

        return checkTime.isBetween(startTime, endTime, 'second', '[]')
    }
}

module.exports = {
    DayjsUsage: DayjsUsage
}
