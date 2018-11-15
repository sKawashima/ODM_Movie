import sample1 from '../img/sample1.jpg'

const c = document.getElementById('odmm')
const ctx = c.getContext('2d')

const img = new Image()
img.src = sample1

img.onload = () => {
  ctx.drawImage(img, 0, 0)
}

// const draw = () => {}
