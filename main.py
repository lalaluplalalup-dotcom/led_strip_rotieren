strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))

def on_forever():
    pass
basic.forever(on_forever)
