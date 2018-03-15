const list = [
    {
        type: 1,
        flag: true
    },
    {
        type: 2,
        flag: false
    },
    {
        type: 3,
        flag: true
    }
]

function getList(filter=bool(true)) {
    return list.filter(filter)
}

function bool(flag) {
    return function () {
        return !!flag
    }
}