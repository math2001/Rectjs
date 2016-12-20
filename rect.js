"use strict";

class Rect {

    constructor(x, y, width, height) {
        this._x = x
        this._y = y
        this._height = height
        this._width = width
        this.__update()
    }

    __update({x=null, y=null, width=null, height=null}={}) {
        // the user shouldn't call this function at all
        if (x != null) {
            this._x = x
        } else if (y != null) {
            this._y = y
        } else if (width != null) {
            this._width = width
        } else if (height != null) {
            this._height = height
        }
        this._right = this._x + this._width
        this._bottom = this._y + this._height

        this._centerx = this._x + Math.round(this._width / 2)
        this._centery = this._y + Math.round(this._height / 2)
    }

    set x(x) { this.__update({x:x}) }
    set y(y) { this.__update({y:y}) }
    set right(x) { this.__update({x:x - this._width}) }
    set bottom(y) { this.__update({y:y - this._height}) }

    get x() { return this._x }
    get y() { return this._y }
    get height() { return this._height }
    get width() { return this._width }
    get bottom() { return this._bottom }
    get right() { return this._right }

    get center() { return [this._centerx, this._centery] }
    get centerx() { return this._centerx }
    get centery() { return this._centery }

    // aliases
    get left() { return this.x }
    get top() { return this.y }
}

module.exports = {
    Rect: Rect
}
