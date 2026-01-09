let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
strip.setPixelColor(26, neopixel.colors(NeoPixelColors.Indigo))
strip.setPixelColor(27, neopixel.colors(NeoPixelColors.Indigo))
strip.setPixelColor(28, neopixel.colors(NeoPixelColors.Indigo))
strip.show()
for (let index = 0; index < 4; index++) {
    basic.pause(2000)
    strip.rotate(1)
    strip.show()
}
basic.forever(function () {
	
})
