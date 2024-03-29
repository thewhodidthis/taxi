## about

Teeny tiny [turtle](https://docs.python.org/3/library/turtle.html) brains.

## setup

Load via script tag:

```html
<!-- Just an IIFE namespaced `taxi` -->
<script src="https://thewhodidthis.github.io/taxi/taxi.js"></script>
```

Source from an import map:

```json
{
  "imports": {
    "@thewhodidthis/taxi": "https://thewhodidthis.github.io/taxi/main.js"
  }
}
```

Download from GitHub directly if using a package manager:

```sh
# Add to package.json
npm install thewhodidthis/taxi
```

## usage

Initialize with a [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) to draw on. For example,

```js
import createTaxi from "@thewhodidthis/taxi"

const canvas = document.createElement("canvas")
const target = canvas.getContext("2d")

const size = 99
const half = size * 0.5

const jack = createTaxi(target)

// Mix in a couple of helper methods for the sake of it
const jill = Object.assign({
  skin(s) {
    target.strokeStyle = s

    return this
  },
  hint(n) {
    target.lineWidth = n

    return this
  },
}, jack)

// Prepare.
jill
  // Set pen color.
  .skin("red")
  // Move to canvas mid.
  .goto(canvas.width * 0.5, canvas.height * 0.5)
  // Lift pen.
  .pu()
  // Go back a bit.
  .bk(half)
  // Turn right.
  .rt(90)
  // Go back again.
  .bk(half)
  // Drop pen.
  .pd()

const tick = (n) => {
  if (n === 0) {
    return
  }

  jill.move(size).turn(90)

  tick(n - 1)
}

// Be square.
tick(4)
```
