const {DayjsUsage} = require('../usages/dayjs_usage')
const expect = require('chai').expect

describe('Dayjs Test', function() {
    describe('Success Test', function() {
        it('Get Current Time', function() {
            let dayjsUsage = new DayjsUsage()
            expect(dayjsUsage.getCurrentTime()).to.be.a('string')
        })
        it('Get Current Time With UTC Offset', function() {
            let dayjsUsage = new DayjsUsage()
            expect(dayjsUsage.getCurrentTimeWithUtcOffset(0)).to.be.a('string')
        })
        it('Parse a Date String', function() {
            let dayjsUsage = new DayjsUsage()
            expect(dayjsUsage.parseDatestring('2021-02-24T23:52:57:397 +0400'))
                .to.equal('Feb 25, 2021, 01:52:57:397, +0600')
        })
        it('Parse a Date String and Store With UTC Offset', function() {
            let dayjsUsage = new DayjsUsage()
            expect(dayjsUsage.parseDatestringAndStoreWithUtcOffset(
                '2021-02-24T23:52:57:397 +0400',
                0
            )).to.equal('Feb 24, 2021, 19:52:57:397, +0000')
        })
        it('Add a number of months to a date', function() {
            let dayjsUsage = new DayjsUsage()
            expect(dayjsUsage.addMonthsToDate(
                '2021-02-24T23:52:57:397 +0600',
                25
            )).to.equal('Mar 24, 2023, 23:52:57:397, +0600')
        })
        it('Get the difference between to dates in days', function() {
            let dayjsUsage = new DayjsUsage()
            expect(dayjsUsage.getDaysDiff(
                '2021-03-24T23:52:57:397 +0600',
                '2021-04-24T23:52:57:397 +0600'
            )).to.equal(31)
        })
        it('Check if a timestamp is between', function() {
            let dayjsUsage = new DayjsUsage()
            expect(dayjsUsage.checkIfBetween(
                '2021-03-24T23:52:57:397 +0600',
                '2021-03-24T23:50:57:397 +0600',
                '2021-03-24T23:59:57:397 +0600'
            )).to.equal(true)
        })
        it('Check if a timestamp is between', function() {
            let dayjsUsage = new DayjsUsage()
            expect(dayjsUsage.checkIfBetween(
                '2021-03-24T23:50:57:397 +0600',
                '2021-03-24T23:52:57:397 +0600',
                '2021-03-24T23:59:57:397 +0600'
            )).to.equal(false)
        })
    })
    describe('Failure Test', function() {
        it('Get Current Time With UTC Offset, without providing an offset, should throw error', function() {
            let dayjsUsage = new DayjsUsage()
            expect(function() {
                dayjsUsage.getCurrentTimeWithUtcOffset()
            }).to.throw('dayjs(...).utc(...).utcOffset(...).format is not a function')
        })
        it('Parse a Date String with mismatching format, should return Invalid Date', function() {
            let dayjsUsage = new DayjsUsage()
            expect(dayjsUsage.parseDatestring(
                '2021-02-24T23:52:57:397 +0400',
                'HELLO'
            )).to.equal('Invalid Date')
        })
        it('Add a number of months to a date, providing a string instead of number, should return Invalid Date', function() {
            let dayjsUsage = new DayjsUsage()
            expect(dayjsUsage.addMonthsToDate(
                '2021-02-24T23:52:57:397 +0600',
                'ab'
            )).to.equal('Invalid Date')
        })
    })
})
