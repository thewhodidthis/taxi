// # Taxi
// Teeny tiny turtle graphics agent

const RAD = 180 / Math.PI
const DEG = Math.PI / 180

export default function createTaxi(target = {}, handler) {
  const draw = typeof handler === "function" ? handler : (sx, sy, dx, dy) => {
    target?.beginPath()
    target?.moveTo(sx, sy)
    target?.lineTo(dx, dy)
    target?.stroke()
  }

  const data = { x: 0, y: 0, angle: 0, trace: true }
  const taxi = {
    get data() {
      return Object.assign({}, data, { angle: data.angle * DEG })
    },
  }

  taxi.face = (a) => {
    if (a !== undefined) {
      data.angle = a * RAD
    }

    return taxi
  }

  taxi.goto = (x = data.x, y = data.y, a) => {
    data.x = x
    data.y = y

    return taxi.face(a)
  }

  taxi.mask = taxi.pu = () => {
    data.trace = false

    return taxi
  }

  taxi.tail = taxi.pd = () => {
    data.trace = true

    return taxi
  }

  taxi.turn = taxi.lt = (a = 0) => {
    data.angle += a * DEG

    return taxi
  }

  taxi.move = taxi.fd = (r = 0) => {
    const x = data.x + (r * Math.cos(data.angle))
    const y = data.y - (r * Math.sin(data.angle))

    if (data.trace) {
      draw(data.x, data.y, x, y)
    }

    return taxi.goto(x, y)
  }

  taxi.rt = v => taxi.lt(-v)
  taxi.bk = v => taxi.fd(-v)

  return taxi
}
