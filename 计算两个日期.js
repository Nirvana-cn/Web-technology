function monthDayDiff(startDate, endDate) {
    let flag = [1, 3, 5, 7, 8, 10, 12, 4, 6, 9, 11, 2];
    let start = new Date(startDate);
    let end = new Date(endDate);
    let year = end.getFullYear() - start.getFullYear();
    let month = end.getMonth() - start.getMonth();
    let day = end.getDate() - start.getDate();
    if (month < 0) {
        year--;
        month = end.getMonth() + (12 - start.getMonth());
    }
    if (day < 0) {
        month--;
        let index = flag.findIndex((temp) => {
            return temp === start.getMonth() + 1
        });
        let monthLength;
        if (index <= 6) {
            monthLength = 31;
        } else if (index > 6 && index <= 10) {
            monthLength = 30;
        } else {
            monthLength = 28;
        }
        day = end.getDate() + (monthLength - start.getDate());
    }
    console.log(`总计相差${12 * year + month}个月${day}天`);
}

monthDayDiff('2017-3-3', '2018-3-3');