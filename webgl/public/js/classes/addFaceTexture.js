http://jyunming-chen.github.io/tutsplus/tutsplus8p.html
<!DOCTYPE html>
<html>
<head>
<style>
	body {
		background-color: #fff;
		color: #111;
		margin: 0px;
		overflow: hidden;
		font-family: Monospace;
		font-size: 20px;
		position: absolute;
	}
	#info {
		position: absolute;
		top: 0px; width: 100%;
		
		padding: 5px;
		text-align: center;
		color: #ffff00
	}
	strong {color:red}
</style>
</head>

<body>

<div id="container"></div>
<div id="info">
    webgl tutorial 8p <br/>
	custom geometry<br/>
	[<strong> dirty </strong> vertices]
</div>


<script src="js/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
<script src="js/KeyboardState.js"></script>

<script>
var clock = new THREE.Clock();
var scene, renderer, camera;
var controls, keyboard = new KeyboardState();

var angle = 0;
var turn = 0;

var cube, posZ = 0, sign = 1;

init();
animate();

function init()
{
	var width = window.innerWidth;
	var height = window.innerHeight;

	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize (width, height);
	renderer.setClearColor (0x888888);
	
	document.body.appendChild (renderer.domElement);

	scene = new THREE.Scene();

	var geometry = new THREE.Geometry();
	geometry.vertices.push(
		new THREE.Vector3( -5,  0, 3 ),
		new THREE.Vector3(  5,  0, 3 ),
		new THREE.Vector3(  5,  0, -3 ),
		new THREE.Vector3( -5,  0, -3 ),
		new THREE.Vector3(  5, 10,  0 ),
		new THREE.Vector3( -5, 10,  0 )
	);
	
	var face;
	face = new THREE.Face3 (0,1,5); face.materialIndex = 0;
	geometry.faces.push (face);
	face = new THREE.Face3 (1,4,5); face.materialIndex = 0;
	geometry.faces.push (face);
	face = new THREE.Face3 (3,5,4); face.materialIndex = 1;
	geometry.faces.push (face);
	face = new THREE.Face3 (2,3,4); face.materialIndex = 1;
	geometry.faces.push (face);
	
	
	face = new THREE.Face3 (0,3,1); face.materialIndex = 3;
	geometry.faces.push (face);
	face = new THREE.Face3 (1,3,2); face.materialIndex = 3;
	geometry.faces.push (face);
	face = new THREE.Face3 (1,2,4); face.materialIndex = 2;
	geometry.faces.push (face);
	face = new THREE.Face3 (0,5,3); face.materialIndex = 2;
	geometry.faces.push (face);

	geometry.faceVertexUvs[0].push( [new THREE.Vector2(0,0), new THREE.Vector2(1,0), new THREE.Vector2(0,1)] );				 
	geometry.faceVertexUvs[0].push( [new THREE.Vector2(1,0), new THREE.Vector2(1,1), new THREE.Vector2(0,1)] );				 
	geometry.faceVertexUvs[0].push( [new THREE.Vector2(1,0), new THREE.Vector2(1,1), new THREE.Vector2(0,1)] );				 
	geometry.faceVertexUvs[0].push( [new THREE.Vector2(0,0), new THREE.Vector2(1,0), new THREE.Vector2(0,1)] );				 

	geometry.computeBoundingSphere();
	geometry.computeFaceNormals();
	geometry.computeVertexNormals();

	var materialArray = [];
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/jmchen.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/confucius.jpg' ) }));
	materialArray.push(new THREE.MeshBasicMaterial( {color: 0x009999}))
	materialArray.push(new THREE.MeshBasicMaterial( {color: 0x888888}))
	
	var material = new THREE.MeshFaceMaterial(materialArray);
	cube = new THREE.Mesh (geometry, material);
	scene.add (cube);

	camera = new THREE.PerspectiveCamera (45, width/height, 1, 10000);
	camera.position.y = 160;
	camera.position.z = 400;
	camera.lookAt (new THREE.Vector3(0,0,0));

	// add control here (after the camera is defined)
	controls = new THREE.OrbitControls (camera, renderer.domElement);

	var gridXZ = new THREE.GridHelper(100, 10);
	gridXZ.setColors( new THREE.Color(0xff0000), new THREE.Color(0xffffff) );
	scene.add(gridXZ);

	var pointLight = new THREE.PointLight (0xffffff);
	pointLight.position.set (0,300,200);
	scene.add (pointLight);

	var ambientLight = new THREE.AmbientLight (0x111111);
	scene.add(ambientLight);
	
	window.addEventListener ('resize', onWindowResize, false);	
	
}

function animate()
{
	var dt = clock.getDelta();
	
	cube.scale.set (4,4,4);
//	cube.position.set (50*Math.cos(angle), 0, 50*Math.sin(angle));
	
	if (turn) {
		angle -= dt;
		cube.rotation.y -= 5*dt;
	}
	
	requestAnimationFrame ( animate ); 
	update();
	render();  
}

function update()
{
	controls.update();
	keyboard.update();         
	// if ( keyboard.down("Z"))  turn ^= 1;               

	if (posZ > 3 || posZ < -3)
		sign *= -1;
	posZ += 0.2*sign;

	cube.geometry.verticesNeedUpdate = true;
	
	cube.geometry.vertices[4].z = posZ;
	cube.geometry.vertices[5].z = -posZ;
}

function onWindowResize()
{
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize (window.innerWidth, window.innerHeight);
}

function render()
{
	renderer.render (scene, camera);
}
</script>
</body>

</html>