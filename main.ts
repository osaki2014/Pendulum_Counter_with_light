input.onButtonPressed(Button.A, function () {
    明るさ基準 = 明るさ基準 + 5
    basic.showNumber(明るさ基準)
})
input.onButtonPressed(Button.AB, function () {
    回数 = 0
})
input.onButtonPressed(Button.B, function () {
    明るさ基準 = 明るさ基準 - 5
    basic.showNumber(明るさ基準)
})
let 明るさ基準 = 0
let 回数 = 0
回数 = 0
明るさ基準 = 150
basic.forever(function () {
    if (input.lightLevel() < 明るさ基準) {
        回数 = 回数 + 1
    }
    basic.showNumber(回数)
    serial.writeString("" + (input.lightLevel()))
})
