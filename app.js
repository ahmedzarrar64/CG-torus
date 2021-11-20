var camera, scene, renderer, controls,vartices;
var sphere, cube;
init();
animate();

function init() {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 5, 1.5).setLength(100);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  //renderer.setClearColor(0xcccccc);
  document.body.appendChild(renderer.domElement);
 
  controls = new THREE.OrbitControls(camera, renderer.domElement);

  var plane = new THREE.GridHelper(100, 10);
  scene.add(plane);
  
  var vartices =[];
	var r =3;
  var R=12;
  for(var o=0;o<= 2*Math.PI;o+=0.1){
  for(var i=0; i<= 2*Math.PI;i+=0.01){
  var x = (R+(r*Math.cos(o)))*Math.cos(i);
  var y = (R+(r*Math.cos(o)))*Math.sin(i);
  var z = r* Math.sin(o);
  
  vartices.push(new THREE.Vector3(x,y,z));
  }
  }
  geometry = new THREE.BufferGeometry();
  geometry.setFromPoints(vartices);
  
  var material= new THREE.LineBasicMaterial({color:0x0000ff});
  var line = new THREE.Line(geometry,material);
  scene.add(line);

}
var delta;
function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  renderer.render(scene, camera);
}
