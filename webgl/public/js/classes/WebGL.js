//three js
import * as THREE from '../vendor/three/build/three.module.js'
import { OrbitControls } from '../vendor/threejs/examples/jsm/controls/OrbitControls.js'

//our objects
import Sphere from './Sphere.js'
import Background from './Background.js'


//helpers
import { GUI } from '../vendor/three/examples/jsm/libs/dat.gui.module.js'
import Stats from '../vendor/three/examples/jsm/libs/stats.module.js'

export default class WebGL{
  constructor(option){
    //global settings
    this.container = document.getElementById('container')
    this.option = {
      scene: {
        backgroundColor: 0x000000
      }
    }
    this.init()
    this.render()
  } 

  init(){
    //canvas
    if(this.container == undefined){
      this.container = document.createElement('div')
  	  document.body.appendChild(this.container)
    }

    //renderer
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
  	this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.domElement.setAttribute('id', 'canvas')
    this.container.appendChild(this.renderer.domElement)

    //scene
    this.scene = new THREE.Scene()
    if (this.option.scene.backgroundColor != undefined) {
      this.scene.background = new THREE.Color(this.option.scene.backgroundColor)
    }

    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 500 )
    this.camera.position.z = 2

    this.mouse = new THREE.Vector2()

    //our classes
    this.sphere = new Sphere(this.scene)
    this.background = new Background(this.scene)

    //listeners
    window.addEventListener('resize', this.onWindowResize.bind(this), false)
    document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false)
    document.addEventListener('touchstart', this.onDocumentTouchStart.bind(this), false)
    document.addEventListener('touchmove', this.onDocumentTouchMove.bind(this), false)

    this.helpers()
    this.initGUI()
    this.initStats()
  }

  render(time){
    requestAnimationFrame(this.render.bind(this))
    //camera interaction
    let x = this.camera.position.x
    let y = this.camera.position.y
    let z = this.camera.position.z
    var rotSpeed = (this.mouse.x - this.camera.position.x) * 0.000005
    this.camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed)
    this.camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed)

    //update our classes
    this.sphere.update(time)
    this.background.update(time)

    this.renderer.render(this.scene, this.camera)
    this.stats.update()
    this.camera.lookAt(this.scene.position)
  }

  onDocumentMouseMove(e){
    this.mouse.x = e.clientX - (window.innerWidth/2)
    this.mouse.y = -(e.clientY - (window.innerHeight/2))
  }
  
  onDocumentTouchStart(e) {

    if (e.touches.length === 1) {

      e.preventDefault()
      mouseX = e.touches[0].pageX - windowHalfX
      // mouseY = e.touches[0].pageY - windowHalfY
    }
  }

  onDocumentTouchMove(e) {

    if (e.touches.length === 1) {

      e.preventDefault()
      mouseX = e.touches[0].pageX - windowHalfX
      // mouseY = e.touches[0].pageY - windowHalfY
    }
  }

  helpers(){
    //scene helpeers
    let axesHelper = new THREE.AxesHelper( 5 )
    this.scene.add( axesHelper )
    let gridHelper = new THREE.GridHelper( 100, 100 )
    this.scene.add( gridHelper )
    this.orbit = new OrbitControls( this.camera, this.renderer.domElement )
    this.orbit.enableZoom = true
    this.orbit.minDistance = 1.6;
    this.orbit.maxDistance = 3;
  }

  initGUI(){
    //datGUI
    this.gui = new GUI()
  }

  initStats(){
    this.stats = new Stats()
    this.container.appendChild(this.stats.dom)
  }

  onWindowResize(){
    const width = window.innerWidth
    const height = window.innerHeight

    this.camera.aspect = width / height
  	this.camera.updateProjectionMatrix()

    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }
}
