function continueStraight () {
    if (moving == 1) {
        cuteBot.motors(direction * 50, direction * 50)
    }
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "start_stop") {
        if (moving == 0) {
            moving = 1
            continueStraight()
        } else {
            moving = 0
            cuteBot.stopcar()
        }
    } else if (receivedString == "left") {
        cuteBot.moveTime(cuteBot.Direction.left, direction * 50, 0.25)
        continueStraight()
    } else if (receivedString == "right") {
        cuteBot.moveTime(cuteBot.Direction.right, direction * 50, 0.25)
        continueStraight()
    } else if (receivedString == "reverse_direction") {
        direction = direction * -1
        continueStraight()
        if (direction == -1) {
            basic.showString("R")
        } else {
            basic.showString("F")
        }
    }
})
let direction = 0
let moving = 0
cuteBot.stopcar()
radio.setGroup(0)
moving = 0
direction = 1
basic.showString("F")
