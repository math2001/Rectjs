var assert = require('assert'),
    Rect = require('../rect').Rect


describe('Test Rect', function () {

    describe('#getter', function () {

        var rect = new Rect(0, 2, 10, 20)

        describe('#single', function () {
            it('checks that the positions', function () {
                assert.equal(rect.x, 0)
                assert.equal(rect.y, 2)
                assert.equal(rect.width, 10)
                assert.equal(rect.height, 20)
                assert.equal(rect.right, 10)
                assert.equal(rect.bottom, 22)
            })

            it('checks that the sizes', function () {
                assert.equal(rect.size[0], rect.width, 'incoherence between size and [width, height]')
                assert.equal(rect.size[1], rect.height, 'incoherence between center and [width, height]')
                assert.equal(rect.width, 10, 'width')
                assert.equal(rect.height, 20, 'height')
            })

            it('checks that the centres', function () {
                assert.equal(rect.center[0], rect.centerx, 'incoherence between center and [centerx, centery]')
                assert.equal(rect.center[1], rect.centery, 'incoherence between center and [centerx, centery]')
                assert.equal(rect.centerx, 5, 'centerx')
                assert.equal(rect.centery, 12, 'centery')
            })

            it('checks that the aliases', function () {
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


        it('checks that the positions and the sizes are valid', function () {
            var rect = new Rect(0, 2, 10, 20)
            rect.x = 5
            rect.y = -5
            assert.equal(rect.x, 5, 'rect.x setter not working')
            assert.equal(rect.right, 15)
            assert.equal(rect.y, -5)
            assert.equal(rect.bottom, 15)
        })
        

    })

})
