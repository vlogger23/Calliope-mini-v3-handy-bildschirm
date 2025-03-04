input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.ArrowEast)
    basic.setLedColors(0x00ffff, 0x00ffff, 0x00ffff)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.ArrowSouth)
    basic.setLedColors(0x007fff, 0x007fff, 0x007fff)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.ArrowWest)
    basic.setLedColors(0xb09eff, 0xb09eff, 0xb09eff)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.ArrowNorth)
    basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
})
