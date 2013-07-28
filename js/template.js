var container, renderer, camera, scene,
    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2;

var mouseX = 0, mouseY = 0;

init();
animate();

function init() {
  container = document.createElement('div');
  document.body.appendChild(container);

  // create a WebGL renderer
  /* renderer = new THREE.WebGLRenderer(); */

  // create a Canvas renderer
  renderer = new THREE.CanvasRenderer();

  // set the scene size
  var WIDTH = window.innerWidth,
      HEIGHT = window.innerHeight;

  // set some camera attributes
  var VIEW_ANGLE = 75,
      ASPECT = WIDTH / HEIGHT,
      NEAR = 1,
      FAR = 10000;

  // create camera
  camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR );
  camera.position.z = 100;

  // and a scene
  scene = new THREE.Scene();

  // add the camera to the scene
  scene.add(camera);

  // the camera starts at 0,0,0
  // so pull it back
  camera.position.z = 200;

  // start the renderer
  renderer.setSize(WIDTH - 50, HEIGHT - 50);

  // attach the render-supplied DOM element
  container.appendChild(renderer.domElement);

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'touchstart', onDocumentTouchStart, false );
  document.addEventListener( 'touchmove', onDocumentTouchMove, false );
  window.addEventListener( 'resize', onWindowResize, false );
}

function render() {
  // draw!
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame( animate );

  render();
}

function onWindowResize() {

  windowHalfX = WIDTH / 2;
  windowHalfY = HEIGHT / 2;

  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();

  renderer.setSize( WIDTH, HEIGHT);

}

//

function onDocumentMouseMove(event) {

  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;

}

function onDocumentTouchStart( event ) {

  if ( event.touches.length > 1 ) {

    event.preventDefault();

    mouseX = event.touches[ 0 ].pageX - windowHalfX;
    mouseY = event.touches[ 0 ].pageY - windowHalfY;

  }

}

function onDocumentTouchMove( event ) {

  if ( event.touches.length == 1 ) {

    event.preventDefault();

    mouseX = event.touches[ 0 ].pageX - windowHalfX;
    mouseY = event.touches[ 0 ].pageY - windowHalfY;

  }

}

