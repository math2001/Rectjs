var assert = require('assert'),
    Rect = require('../rect').Rect


describe('Test Rect', function () {

    describe('#getter', function () {

        var rect = new Rect(0, 2, 10, 20)

        describe('#single', function () {
            it('checks the positions', function () {
                assert.equal(rect.x, 0)
                assert.equal(rect.y, 2)
                assert.equal(rect.width, 10)
                assert.equal(rect.height, 20)
                assert.equal(rect.right, 10)
                assert.equal(rect.bottom, 22)
            })

            it('checks the sizes', function () {
                assert.equal(rect.size[0], rect.width, 'incoherence between size and [width, height]')
                assert.equal(rect.size[1], rect.height, 'incoherence between center and [width, height]')
                assert.equal(rect.width, 10, 'width')
                assert.equal(rect.height, 20, 'height')
            })

            it('checks the centres', function () {
                assert.equal(rect.center[0], rect.centerx, 'incoherence between center and [centerx, centery]')
                assert.equal(rect.center[1], rect.centery, 'incoherence between center and [centerx, centery]')
                assert.equal(rect.centerx, 5, 'centerx')
                assert.equal(rect.centery, 12, 'centery')
            })

            it('checks the aliases', function () {
                assert.equal(rect.left, 0)
                assert.equal(rect.top, 2)
                assert.equal(rect.w, 10)
                assert.equal(rect.h, 20)

                assert.equal(rect.size[0], 10)
                assert.equal(rect.size[1], 20)
            })
        })
        describe('#multi', function () {
            it('checks the corners', function () {
                assert.equal(rect.topleft[0], 0, 'topleft 0')
                assert.equal(rect.topleft[1], 2, 'topleft 1')

                assert.equal(rect.bottomleft[0], 0, 'bottomleft 0')
                assert.equal(rect.bottomleft[1], 22, 'bottomleft 1')

                assert.equal(rect.topright[0], 10, 'topright 0')
                assert.equal(rect.topright[1], 2, 'topright 1')

                assert.equal(rect.bottomright[0], 10, 'bottomright 0')
                assert.equal(rect.bottomright[1], 22, 'bottomright 0')
            })

            it('checks the mid-sides', function () {
                assert.equal(rect.midtop[0], 5, 'midtop 0')
                assert.equal(rect.midtop[1], 2, 'midtop 1')

                assert.equal(rect.midleft[0], 0, 'midleft 0')
                assert.equal(rect.midleft[1], 12, 'midleft 1')

                assert.equal(rect.midbottom[0], 5, 'midbottom 0')
                assert.equal(rect.midbottom[1], 22, 'midbottom 1')

                assert.equal(rect.midright[0], 10, 'midright 0')
                assert.equal(rect.midright[1], 12, 'midright 1')
            })
        })

     })
    describe('#setter', function () {

        context('#sides', function () {

            var rect = new Rect(0, 2, 10, 20)
            specify('checking left', function left() {
                rect.left = 7
                assert.equal(rect.left, 7, "rect.left")
            })
            specify('checking right', function right() {
                rect.right = 3
                assert.equal(rect.right, 3, "rect.right")
                assert.equal(rect.left, -7, "rect.left")
            })
            specify('checking top', function top() {
                rect.top = 4
                assert.equal(rect.top, 4, "rect.top")
            })
            specify('checking bottom', function bottom() {
               rect.bottom = 6
               assert.equal(rect.bottom, 6, "rect.bottom")
               assert.equal(rect.top, -14, "rect.top")
            })
        })

        context('#sizes', function () {
            var rect = new Rect(0, 2, 10, 20)
            specify('checking width', function width() {
                rect.width = 4
                assert.equal(rect.width, 4, "rect.width")
            })
            specify('checking height', function height() {
                rect.height = 5
                assert.equal(rect.height, 5, "rect.height")
            })
            specify('checking size', function size() {
                rect.size = [34, 54]
                assert.equal(rect.width, 34, "rect.width")
                assert.equal(rect.height, 54, "rect.height")
                assert.equal(rect.size[0], 34, "rect.size[0]")
                assert.equal(rect.size[1], 54, "rect.size[1]")
            })
        })

        context('#corners', function () {
            var rect = new Rect(0, 2, 10, 20)

            specify('checking top left', function topLeft() {
                // be careful, it's flipped ([left, top])
                rect.topleft = [5, 3]
                assert.equal(rect.left, 5, "rect.left")
                assert.equal(rect.top, 3, "rect.top")
            })
            specify('checking bottom left', function bottomLeft() {
                rect.bottomleft = [2, 7]
                assert.equal(rect.left, 2, "rect.left")
                assert.equal(rect.bottom, 7, "rect.bottom")
            })
            specify('checking top right', function topRight() {
                rect.topright = [3, 6]
                assert.equal(rect.right, 3, "rect.right")
                assert.equal(rect.top, 6, "rect.top")
            })
            specify('checking bottom right', function bottomRight() {
                rect.bottomright = [0, 4]
                assert.equal(rect.right, 0, "rect.right")
                assert.equal(rect.bottom, 4, "rect.bottom")
            })
            specify('checking all of them mixed up', function allOfThemMixedUp() {
                // far from complete
                rect.topleft = [1, -1]
                assert.equal(rect.bottomleft[0], 1, "rect.bottomleft[0]")
                assert.equal(rect.bottomleft[1], 19, "rect.bottomleft[1]")

                assert.equal(rect.bottomright[0], 11, "rect.bottomright[0]")
                assert.equal(rect.bottomright[1], 19, "rect.bottomright[1]")

                assert.equal(rect.topright[0], 11, "rect.topright[0]")
                assert.equal(rect.topright[1], -1, "rect.topright[1]")
            })
        })

        context('#centers', function () {
            var rect = new Rect(0, 2, 10, 20)
            specify('checking centerx', function centerx() {
                rect.centerx = 20
                assert.equal(rect.centerx, 20, "rect.centerx")
                assert.equal(rect.left, 15, "rect.left")
                assert.equal(rect.right, 25, "rect.right")
            })
            specify('checking centery', function centery() {
                rect.centery = 55
                assert.equal(rect.centery, 55, "rect.centery")
                assert.equal(rect.top, 45, "rect.top")
                assert.equal(rect.bottom, 65, "rect.top")
            })
            specify('checking centers', function centers() {
                rect.center = [5, 1]

                assert.equal(rect.center[0], 5, "rect.center[0]")
                assert.equal(rect.centerx, 5, "rect.centerx")
                assert.equal(rect.center[1], 1, "rect.center[1]")
                assert.equal(rect.centery, 1, "rect.centery")

                assert.equal(rect.left, 0, "rect.left")
                assert.equal(rect.right, 10, "rect.right")

                assert.equal(rect.top, -9, "rect.top")
                assert.equal(rect.bottom, 11, "rect.bottom")
            })
        })

        context('#mid-sizes', function () {
            var rect = new Rect(0, 2, 10, 20)
            specify('checking midleft', function midleft() {
                rect.midleft = [-5, 5]
                assert.equal(rect.left, -5, "rect.left")
                assert.equal(rect.centery, 5, "rect.centery")
                assert.equal(rect.top, -5, "rect.top")
            })
            specify('checking midrigth', function midrigth() {
                rect.midright = [8, 3]
                assert.equal(rect.right, 8, "rect.right")
                assert.equal(rect.left, -2, "rect.left")
                assert.equal(rect.centery, 3, "rect.centery")
                assert.equal(rect.top, -7, "rect.top")
            })
            specify('checking midtop', function midtop() {
                rect.midtop = [4, 2]
                assert.equal(rect.top, 2, "rect.top")
                assert.equal(rect.centerx, 4, "rect.centerx")
                assert.equal(rect.left, 4 - 5, "rect.left")
            })
            specify('checking midbottom', function midbottom() {
                rect.midbottom = [7, -9]
                assert.equal(rect.bottom, -9, "rect.bottom")
                assert.equal(rect.top, -29, "rect.top")
                assert.equal(rect.centerx, 7, "rect.centerx")
                assert.equal(rect.left, 2, "rect.left")
            })
        })

        context('#checking-aliases', function () {
            var rect = new Rect(5, 10, 15, 20)
            specify('width', function () {
                rect.w = 7
                assert.equal(rect.width, 7, "rect.width")
                rect.width = 8
                assert.equal(rect.w, 8, "rect.w")
            })
            specify('height', function () {
                rect.h = 2
                assert.equal(rect.height, 2, "rect.height")
                rect.height = 3
                assert.equal(rect.h, 3, "rect.h")
            })

            specify('checking left', function left() {
                rect.x = 4
                assert.equal(rect.left, 4, "rect.left")
                rect.left = 2
                assert.equal(rect.x, 2, "rect.x")
            })

            specify('checking top', function top() {
               rect.y = 3
               assert.equal(rect.top, 3, "rect.top")
               rect.top = 2
               assert.equal(rect.y, 2, "rect.y")
            })
        })

    })
})
