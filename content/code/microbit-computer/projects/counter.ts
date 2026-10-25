let count = 0
input.onButtonPressed(Button.A, function () {
    count += 1
    serial.writeValue("count", count)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    if (serial.readLine() == "reset") {
        count = 0
        serial.writeValue("count", count)
    }
})
