import * as THREE from '//yoong2world.github.io/ydy/webgl/public/js/vendor/three/build/three.module.js'

export default class Sphere{
  constructor(scene){
    this.scene = scene
    this.initSphere()
    // this.initPhotos()
    this.initLights()
  }

  //처음 한번 실행
  initSphere(){
    let t = this

    //create sphere mesh
    t.sphereGeometry = new THREE.SphereGeometry(
      1, // radius -- default 1
      // 25, // widthSegments -- default 8
      // 13, // heightSegments -- default 6
      8, // widthSegments -- default 8
      6, // heightSegments -- default 6
      0, // phiStart -- default 0
      Math.PI * 2, // phiLength -- default Math.PI * 2
      0, // thetaStart -- default 0
      Math.PI // thetaLength -- default Math.PI
    )



    
    // Geometry
    t.geometry = new THREE.SphereGeometry(1, 8, 6);
    
    t.loader = new THREE.TextureLoader
    t.loader.crossOrigin = ''
    t.loader.setPath( '/img/work/' );

    // t.sphereMesh = new THREE.Mesh(
    //   t.sphereGeometry,
    //   new THREE.MeshPhongMaterial( {
    //       color: 0x156289,
    //       emissive: 0x072534,
    //       side: THREE.DoubleSide,
    //       flatShading: true,
    //       // map: this.loader.load('/img/work/doosan.png'),
    //       // bumpMap: this.loader.load('/img/work/doosan.png'),
    //   } )
    // )

    let materials = []

    let arrImages = [
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
    ] 

    console.log(t.sphereGeometry,'spher')
    // var geometry = new THREE.Geometry();
    
    //   geometry.vertices.push(
    //     new THREE.Vector2( 0.0625,  1 ),
    //   );


    //create sphere mesh
    t.sphereGeometry = new THREE.SphereGeometry(
        1, // radius -- default 1
        25, // widthSegments -- default 8
        13, // heightSegments -- default 6
        //8, // widthSegments -- default 8
        //6, // heightSegments -- default 6
        0, // phiStart -- default 0
        Math.PI * 2, // phiLength -- default Math.PI * 2
        0, // thetaStart -- default 0
        Math.PI // thetaLength -- default Math.PI
    )




    // Geometry
    t.geometry = new THREE.SphereGeometry(1, 8, 6);

    t.loader = new THREE.TextureLoader;
    //t.loader.crossOrigin = '';
    //t.loader.setPath( '/img/work/' );

    t.sphereMesh = new THREE.Mesh(
        t.sphereGeometry,
        new THREE.MeshPhongMaterial( {
          color: 0x156289,
          emissive: 0x072534,
          side: THREE.DoubleSide,
          flatShading: true,
          // map: this.loader.load('/img/work/doosan.png'),
          // bumpMap: this.loader.load('/img/work/doosan.png'),
        } )
    );

    let materials = [];

    let arrImages = [
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
      'armypedia.png',
      'doosanemerging.png',
      'doosaninfra.png',
      'doosan.png',
      'hankook.png',
      'jung.png',
      'kcs.png',
      'lifeplus.png',
    ];

    //console.log(t.sphereMesh,'spher');
    // var geometry = new THREE.Geometry();

    //   geometry.vertices.push(
    //     new THREE.Vector2( 0.0625,  1 ),
    //   );

    // var face;
    // face = new THREE.Face3 (0,1,5); face.materialIndex = 0;
    // geometry.faces.push (face);
    // face = new THREE.Face3 (1,4,5); face.materialIndex = 0;
    // geometry.faces.push (face);
    // face = new THREE.Face3 (3,5,4); face.materialIndex = 1;
    // geometry.faces.push (face);
    // face = new THREE.Face3 (2,3,4); face.materialIndex = 1;
    // geometry.faces.push (face);


    // face = new THREE.Face3 (0,3,1); face.materialIndex = 3;
    // geometry.faces.push (face);
    // face = new THREE.Face3 (1,3,2); face.materialIndex = 3;
    // geometry.faces.push (face);
    // face = new THREE.Face3 (1,2,4); face.materialIndex = 2;
    // geometry.faces.push (face);
    // face = new THREE.Face3 (0,5,3); face.materialIndex = 2;
    // geometry.faces.push (face);

    // geometry.faceVertexUvs[0].push( [new THREE.Vector2(0,0), new THREE.Vector2(1,0), new THREE.Vector2(0,1)] );
    // geometry.faceVertexUvs[0].push( [new THREE.Vector2(1,0), new THREE.Vector2(1,1), new THREE.Vector2(0,1)] );
    // geometry.faceVertexUvs[0].push( [new THREE.Vector2(1,0), new THREE.Vector2(1,1), new THREE.Vector2(0,1)] );
    // geometry.faceVertexUvs[0].push( [new THREE.Vector2(0,0), new THREE.Vector2(1,0), new THREE.Vector2(0,1)] );

    // geometry.computeBoundingSphere();
    // geometry.computeFaceNormals();
    // geometry.computeVertexNormals();

    // var materialArray = [];
    // materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/jmchen.jpg' ) }));
    // materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'images/confucius.jpg' ) }));
    // materialArray.push(new THREE.MeshBasicMaterial( {color: 0x009999}))
    // materialArray.push(new THREE.MeshBasicMaterial( {color: 0x888888}))

    //t.sphereGeometry.faces.forEach(function(face, i) {
    //  let texture = t.loader.load( arrImages[i] )
    //  materials[i] = new THREE.MeshBasicMaterial({ map:texture })
    //})

    //t.sphereMesh = new THREE.Mesh(t.geometry, materials)

    t.scene.add( t.sphereMesh )
  }

  initLights(){
    this.lights = []
    this.lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 )
    this.lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 )
    this.lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 )
    
    this.lights[ 0 ].position.set( 0, 200, 0 )
    this.lights[ 1 ].position.set( 100, 200, 100 )
    this.lights[ 2 ].position.set( - 100, - 200, - 100 )
    
    this.scene.add( this.lights[ 0 ] )
    this.scene.add( this.lights[ 1 ] )
    this.scene.add( this.lights[ 2 ] )
  }

  //프레임마다 실행
  update(time){
    this.sphereMesh.rotation.y += 0.001
  }
}