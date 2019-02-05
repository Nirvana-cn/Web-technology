function initialize(money, count) {
    return function red() {
        if (count === 0) {
            console.log('GAME OVER');
            return
        }
        if (count === 1) {
            console.log('获得的红包金额为：' + money.toFixed(2));
            count--;
            return
        }
        let bonus = (Math.random() * (money - 0.1 * (count - 1))).toFixed(2);
        money -= bonus;
        count--;
        console.log('获得的红包金额为：' + bonus)
    }
}