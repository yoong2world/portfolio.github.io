import * as THREE from './vendor/threejs/build/three.module.js'
import { OrbitControls } from './vendor/threejs/examples/jsm/controls/OrbitControls.js';
var scene, camera, renderer, mesh;

var container, HEIGHT,
    WIDTH, fieldOfView, aspectRatio,
    nearPlane, farPlane, stats,
    geometry, particleCount,
    i, h, color, size,
    materials = [],
    mouseX = 0,
    mouseY = 0,
    windowHalfX, windowHalfY, cameraZ,
    fogHex, fogDensity, parameters = {},
    parameterCount, particles;

function init() {

    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;

    fieldOfView = 75;
    aspectRatio = WIDTH / HEIGHT;
    nearPlane = 1;
    farPlane = 3000;

    cameraZ = farPlane / 3; /*	So, 1000? Yes! move on!	*/
    fogHex = 0x000000; /* As black as your heart.	*/
    fogDensity = 0.0007; /* So not terribly dense?	*/

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(fogHex, fogDensity);

    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 500 );
    camera.position.z = 2;
    
    geometry = new THREE.Geometry(); /*	NO ONE SAID ANYTHING ABOUT MATH! UGH!	*/

    particleCount = 20000; /* Leagues under the sea */

    /*	Hope you took your motion sickness pills;
     We're about to get loopy.	*/

    for (i = 0; i < particleCount; i++) {

      var vertex = new THREE.Vector3();
      vertex.x = Math.random() * 2000 - 1000;
      vertex.y = Math.random() * 2000 - 1000;
      vertex.z = Math.random() * 2000 - 1000;

      geometry.vertices.push(vertex);
    }

    /*	We can't stop here, this is bat country!	*/

    parameters = [
      [
        [1, 1, 0.5], 5
      ],
      [
        [0.95, 1, 0.5], 4
      ],
      [
        [0.90, 1, 0.5], 3
      ],
      [
        [0.85, 1, 0.5], 2
      ],
      [
        [0.80, 1, 0.5], 1
      ]
    ];
    parameterCount = parameters.length;

    /*	I told you to take those motion sickness pills.
     Clean that vommit up, we're going again!	*/

    for (i = 0; i < parameterCount; i++) {

      color = parameters[i][0];
      size = parameters[i][1];

      materials[i] = new THREE.PointCloudMaterial({
        size: size
      });

      particles = new THREE.PointCloud(geometry, materials[i]);

      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;

      scene.add(particles);
    }

    
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0x000000, 1 );
    
    container = document.getElementById('sphere')
    container.appendChild( renderer.domElement );
    

    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    stats.domElement.style.right = '0px';
    container.appendChild(stats.domElement);

    var orbit = new OrbitControls( camera, renderer.domElement );
    orbit.enableZoom = true;
    
    var lights = [];
    lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    
    lights[ 0 ].position.set( 0, 200, 0 );
    lights[ 1 ].position.set( 100, 200, 100 );
    lights[ 2 ].position.set( - 100, - 200, - 100 );
    
    scene.add( lights[ 0 ] );
    scene.add( lights[ 1 ] );
    scene.add( lights[ 2 ] );
    
    // SphereBufferGeometry
    var sphereBufferGeometry = new THREE.SphereBufferGeometry(
      // radius -- default 1
      1,
      // widthSegments -- default 8
      25,
      // heightSegments -- default 6
      13,
      // phiStart -- default 0
      0,
      // phiLength -- default Math.PI * 2
      Math.PI * 2,
      // thetaStart -- default 0
      0,
      // thetaLength -- default Math.PI
      Math.PI
    );
    
    mesh = new THREE.Mesh(
        sphereBufferGeometry,
        new THREE.MeshPhongMaterial( {
            color: 0x156289,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            flatShading: true
        } )
    );
    
    scene.add( mesh );
    
    var axesHelper = new THREE.AxesHelper( 10 );
    scene.add( axesHelper );

    
    /* Event Listeners */

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);
}

function animate() {

    requestAnimationFrame( animate );

    render();
    stats.update();

    mesh.rotation.y += 0.001;

    renderer.render( scene, camera );
};


function render() {
    var time = Date.now() * 0.00005;

    camera.position.x += (mouseX - camera.position.x) * 0.00001;
    camera.position.y += (-mouseY - camera.position.y) * 0.00001;

    camera.lookAt(scene.position);

    for (i = 0; i < scene.children.length; i++) {

      var object = scene.children[i];

      if (object instanceof THREE.PointCloud) {

        object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
      }
    }

    for (i = 0; i < materials.length; i++) {

      color = parameters[i][0];

      h = (360 * (color[0] + time) % 360) / 360;
      materials[i].color.setHSL(h, color[1], color[2]);
    }

    renderer.render(scene, camera);
  }

  function onDocumentMouseMove(e) {
    mouseX = e.clientX - windowHalfX;
    mouseY = e.clientY - windowHalfY;
  }

  /*	Mobile users?  I got your back homey	*/

  function onDocumentTouchStart(e) {

    if (e.touches.length === 1) {

      e.preventDefault();
      mouseX = e.touches[0].pageX - windowHalfX;
      mouseY = e.touches[0].pageY - windowHalfY;
    }
  }

  function onDocumentTouchMove(e) {

    if (e.touches.length === 1) {

      e.preventDefault();
      mouseX = e.touches[0].pageX - windowHalfX;
      mouseY = e.touches[0].pageY - windowHalfY;
    }
  }

  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }

init();
animate();