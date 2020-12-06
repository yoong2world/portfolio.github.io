import * as THREE from '//yoong2world.github.io/ydy/webgl/public/js/vendor/three/build/three.module.js'

import * as HELPER from '//yoong2world.github.io/ydy/webgl/public/js/utils/helper.js'

export default class Background{
  constructor(scene){
    this.scene = scene
    this.particleCount = 5000
    this.range = 1000
    this.parameters = [
      {
        color: [0.5, 0.75, 0.5], 
        size: 1
      },
      {
        color: [0.45, 0.75, 0.5], 
        size: 1
      },
      {
        color: [0.4, 0.75, 0.5], 
        size: 1
      },
      {
        color: [0.35, 0.75, 0.5], 
        size: 1
      },
      {
        color: [0.3, 0.75, 0.5], 
        size: 1
      },
    ]
    this.materials = []

    this.init()
  }

  init(){
    this.geometry = new THREE.Geometry()

    for (let i = 0; i < this.particleCount; i++) {

      let vertex = new THREE.Vector3()
      vertex.x = Math.random() * this.range - this.range/2
      vertex.y = Math.random() * this.range - this.range/2
      vertex.z = Math.random() * this.range - this.range/2

      this.geometry.vertices.push(vertex)
    }
    
    this.particles = new THREE.Group()

    for (let i = 0; i < this.parameters.length; i++) {

      let color = this.parameters[i].color
      let size = this.parameters[i].size

      this.materials[i] = new THREE.PointsMaterial({
        color: color,
        size: size,
        map: HELPER.createCircleTexture('rgb(255,255,255,0.1)', 256)
      })
      
      let particle = new THREE.Points(this.geometry, this.materials[i])
      this.particles.add(particle)
    }

    this.particles.rotation.x = Math.random() * 3
    this.particles.rotation.y = Math.random() * 3
    this.particles.rotation.z = Math.random() * 3

    this.scene.add(this.particles)
  }

  update(){
    let time = Date.now() * 0.00001

    for (let i = 0; i < this.particles.children.length; i++) {
      this.particles.children[i].rotation.y = time * (i < 4 ? i + 1 : -(i + 1))
    }

    for (let i = 0; i < this.materials.length; i++) {
      let color = this.parameters[i].color
      let h = (330 * (color[0] + time) % 360) / 360

      this.materials[i].color.setHSL(h, color[1], color[2])
    }
  }
}

