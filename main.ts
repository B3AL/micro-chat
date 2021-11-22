input.onButtonPressed(Button.A, function () {
    radio.sendString("hi")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("i want to go home")
})
radio.setGroup(50)
