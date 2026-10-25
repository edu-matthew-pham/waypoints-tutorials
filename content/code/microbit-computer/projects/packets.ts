radio.setGroup(42)
radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
})
