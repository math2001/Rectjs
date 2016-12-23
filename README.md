# Rectjs

Rectjs is a simple file that helps you with rects (to use the baslise canvas for example)

If you've already used the pygame's rect, well the goal of this is to be the exact same, in javascript.

Otherwise, here's how you use it

```javascript
> var myRect = new Rect(0, 0, 10, 10)
undefined
> [myRect.x, myRect.y, myRect.width, myRect.height]
[ 0, 0, 10, 10 ]
> myRect.top == myRect.x
true
> myRect.bottom
10
> myRect.center
[ 5, 5 ]
> myRect.centerx = 0
0
> myRect.left
-5
>
```
