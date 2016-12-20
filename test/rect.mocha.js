var assert = require('assert'),
    Rect = require('../rect').Rect



describe('Test Rect', function () {

    describe('#getter', function () {

        var rect = new Rect(0, 2, 10, 20)

        describe('#single', function () {
            it('checks that the positions are valid', function () {
                assert.equal(rect.x, 0)
                assert.equal(rect.y, 2)
                assert.equal(rect.width, 10)
                assert.equal(rect.height, 20)
                assert.equal(rect.right, 10)
                assert.equal(rect.bottom, 22)
            })

            it('checks that the sizes are valid', function () {
                assert.equal(rect.size[0], rect.width, 'incoherence between size and [width, height]')
                assert.equal(rect.size[1], rect.height, 'incoherence between center and [width, height]')
                assert.equal(rect.width, 10, 'width')
                assert.equal(rect.height, 20, 'height')
            })

            it('checks that the centres are working', function () {
                assert.equal(rect.center[0], rect.centerx, 'incoherence between center and [centerx, centery]')
                assert.equal(rect.center[1], rect.centery, 'incoherence between center and [centerx, centery]')
                assert.equal(rect.centerx, 5, 'centerx')
                assert.equal(rect.centery, 12, 'centery')
            })

            it('checks that the aliases are working', function () {
                assert.equal(rect.left, rect.x)
                assert.equal(rect.top, rect.y)
            })
        })
        describe('#multi', function () {
            it('checks the corners', function () {

            })
            it('checks the mid-sides', function () {

            })
        })

    })
    describe('#setter', function () {

        var rect = new Rect(0, 2, 10, 20)
        it('checks that the positions and the sizes are valid', function () {
            rect.x = 5
            rect.y = -5
            assert.equal(rect.x, 5, 'rect.x setter not working')
            assert.equal(rect.right, 15)
            assert.equal(rect.y, -5)
            assert.equal(rect.bottom, 15)
        })

    })

})
