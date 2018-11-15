import sample1 from '../img/sample1.jpg'

const viewC = document.getElementById('odmm')
const viewCtx = viewC.getContext('2d')

const analyzeC = document.getElementById('analyze')
const analyzeCtx = analyzeC.getContext('2d')

const view = document.getElementById('view')
const viewHeight = 200

const app = []
app['time'] = 1

const img = new Image()
img.src = sample1

img.onload = () => {
  // Promise.resolve() // 順番に処理
  //  .then(matchSize)
  //  .then(draw)
 matchSize()
 window.requestAnimationFrame(draw)
 // draw()
}

const matchSize = () => {
  const vw = view.clientWidth // canvasのサイズ調整
  viewC.width = vw
  viewC.height = viewHeight
  analyzeC.width = vw
  analyzeC.height = 719
  const resolution = vw / img.width // 画像のサイズ調整
  img.width *= resolution
  img.height *= resolution
  analyzeCtx.drawImage(img, 0, 0, img.width, img.height)
}

const draw = () => {
  const imgData = analyzeCtx.getImageData(0, app['time'], analyzeC.width, 1) // 高さ1pxを解析

  for (let i = 0; i < viewHeight; i++) { // 高さ1pxを引き伸ばして表示
    viewCtx.putImageData(imgData, 0, i)
  }

  app['time']--
  // if (app['time'] == img.height) {
  //   app['time'] = 0
  // }
  if (app['time'] == 0) {
    app['time'] = img.height-1
  }
  window.requestAnimationFrame(draw)
}
