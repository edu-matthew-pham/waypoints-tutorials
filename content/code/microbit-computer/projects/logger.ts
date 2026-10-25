basic.forever(function () {
    serial.writeValue("time", Math.idiv(input.runningTime(), 1000))
    serial.writeValue("light", input.lightLevel())
    basic.pause(1000)
})
