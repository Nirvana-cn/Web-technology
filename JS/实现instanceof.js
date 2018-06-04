function new_instance_of(leftVaule, rightVaule) {
    let rightProto = rightVaule.prototype;
    leftVaule = leftVaule.__proto__;
    while (true) {
        if (leftVaule === null) {
            return false;
        }
        if (leftVaule === rightProto) {
            return true;
        }
        leftVaule = leftVaule.__proto__
    }
}