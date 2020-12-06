import * as THREE from '//yoong2world.github.io/ydy/webgl/public/js/vendor/three/build/three.module.js'
import { GLTFLoader } from '//yoong2world.github.io/ydy/webgl/public/js/vendor/three/examples/jsm/loaders/GLTFLoader.js'

export function loadShaders(manager) {
  let shaderFiles = {
    particleVertexShader: '/assets/shaders/particle.vert',
    particleFragmentShader: '/assets/shaders/particle.frag',
  }

  const keys = Object.keys(shaderFiles)

  let fileLoader = new THREE.FileLoader(manager)
  for (let key of keys) {
    fileLoader.load(shaderFiles[key], function ( data ) {
    	shaderFiles[key] = data
    })
  }
  return shaderFiles 
}

export function loadModels(manager) {
  let modelFiles = {
    logo: `/assets/models/logo.glb`,
    
  }

  const keys = Object.keys(modelFiles)

  let fileLoader = new GLTFLoader(manager)
  for (let key of keys) {
    fileLoader.load(modelFiles[key], function ( data ) {
    	modelFiles[key] = data
    })
  }
  return modelFiles
}