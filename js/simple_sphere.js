var container,
    renderer,
    camera,
    scene;

init();
addSphere();
addPointLight();
animate();



function init() {
  // get the DOM element to attach to
  // - assume we've got jQuery to hand
  $container = $('#container');

  // create a WebGL renderer
  renderer = new THREE.WebGLRenderer();

  // set the scene size
  var WIDTH = 400,
    HEIGHT = 400;

  // set some camera attributes
  var VIEW_ANGLE = 45,
      ASPECT = WIDTH / HEIGHT,
      NEAR = 0.1,
      FAR = 10000;

  // create camera
  camera =
    new THREE.PerspectiveCamera(
      VIEW_ANGLE,
      ASPECT,
      NEAR,
      FAR);

  // and a scene
  scene = new THREE.Scene();

  // add the camera to the scene
  scene.add(camera);

  // the camera starts at 0,0,0
  // so pull it back
  camera.position.z = 200;

  // start the renderer
  renderer.setSize(WIDTH, HEIGHT);

  // attach the render-supplied DOM element
  $container.append(renderer.domElement);

}

function render() {
  // draw!
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame( animate );

  render();
}

function addSphere() {
  // set up the sphere vars
  var radius = 50,
    segments = 16,
    rings = 16;

  // create the sphere's material
  var sphereMaterial =
  new THREE.MeshLambertMaterial(
    {
      color: 0xffffff
    });

  // create a new mesh with
  // sphere geometry - we will cover
  // the sphereMaterial next!
  var sphere = new THREE.Mesh(

  new THREE.SphereGeometry(
    radius,
    segments,
    rings),

  sphereMaterial);

  // add the sphere to the scene
  scene.add(sphere);

  // sphere geometry
  sphere.geometry

  // which contains the vertices and faces
  sphere.geometry.vertices // an array
  sphere.geometry.faces // also an array

  // its position
  sphere.position // contains x, y and z
  sphere.rotation // same
  sphere.scale // ... same

  // set the geometry to dynamic
  // so that it allow updates
  sphere.geometry.dynamic = true;

  // changes to the vertices
  sphere.geometry.verticesNeedUpdate = true;

  // changes to the normals
  sphere.geometry.normalsNeedUpdate = true;
}

function addPointLight() {
  // create a point light
  var pointLight =
    new THREE.PointLight(0xFFFFFF);

  // set its position
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 190;

  // add to the scene
  scene.add(pointLight);
}
