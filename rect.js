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
        if (x != null) this._x = x
        if (y != null) this._y = y
        if (width != null) this._width = width
        if (height != null) this._height = height

        this._right = this._x + this._width
        this._bottom = this._y + this._height

        this._centerx = this._x + Math.round(this._width / 2)
        this._centery = this._y + Math.round(this._height / 2)
    }

    get left() { return this.x }
    get top() { return this.y }
    get bottom() { return this._bottom }
    get right() { return this._right }

    get height() { return this._height }
    get width() { return this._width }
    get size() { return [this._width, this._height] }

    get center() { return [this._centerx, this._centery] }
    get centerx() { return this._centerx }
    get centery() { return this._centery }

    get topleft() { return [this.left, this.top] }
    get bottomleft() { return [this.left, this.bottom] }
    get topright() { return [this.right, this.top] }
    get bottomright() { return [this.right, this.bottom] }

    // mid-size
    get midtop() { return [this._centerx, this._y] }
    get midbottom() { return [this._centerx, this.bottom] }
    get midleft() { return [this._x, this._centery] }
    get midright() { return [this.right, this._centery] }

    // aliases
    get x() { return this._x }
    get y() { return this._y }
    get w() { return this._width }
    get h() { return this._height }


    //
    // setters
    //

    set left(left) { this.__update({x: left}) }
    set top(top) { this.__update({y: top}) }
    set right(x) { this.__update({x: x - this._width}) }
    set bottom(y) { this.__update({y: y - this._height}) }

    set width(width) { this.__update({width: width}) }
    set height(height) { this.__update({height: height}) }
    set size(size) { this.__update({height: size[1], width: size[0]}) }


    // center

    set centerx(centerx) { this.__update({x: centerx - Math.round(this._width / 2)}) }
    set centery(centery) { this.__update({y: centery - Math.round(this._height / 2)}) }
    set center(center) {
        this.__update({x: center[0] - Math.round(this._width / 2),
                       y: center[1] - Math.round(this._height / 2)})
    }

    // corners

    set topleft(topleft) { this.__update({x: topleft[0], y: topleft[1]}) }
    set bottomleft(bottomleft) { this.__update({x: bottomleft[0], y: bottomleft[1] - this._height}) }
    set topright(topright) { this.__update({x: topright[0] - this._width, y: topright[1]}) }
    set bottomright(bottomright) { this.__update({x: bottomright[0] - this._width, y: bottomright[1] - this._height}) }

    // aliases

    set x(x) { this.__update({x: x}) }
    set y(y) { this.__update({y: y}) }
    set w(width) { this.__update({width: width}) }
    set h(height) { this.__update({height: height}) }


}

module.exports = {
    Rect: Rect
}
