import * as THREE from '/js/vendor/three/build/three.module.js'

export function setStyle(element, id, value){
  element.style.setProperty('--' + id, value)
}

export function clamp(num, a, b){
  return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b))
}

export function clamp01(num){
  return Math.max(Math.min(num, Math.max(0, 1)), Math.min(0, 1))
}

export function lerp(start, end, amt){
  return (1-amt)*start+amt*end
}

export function createCircleTexture(color, size) {
  let matCanvas = document.createElement('canvas')
  matCanvas.width = matCanvas.height = size
  let matContext = matCanvas.getContext('2d')

  // create texture object from canvas.
  let texture = new THREE.Texture(matCanvas)

  //transparent background
  matContext.fillStyle = "rgba(0,0,0,0)"
  matContext.fillRect(0, 0, size, size)

  //draw a circle
  let center = size / 2
  matContext.beginPath()
  matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false)
  matContext.closePath()
  matContext.fillStyle = color
  matContext.fill()

  // need to set needsUpdate
  texture.needsUpdate = true

  // return a texture made from the canvas
  return texture
}