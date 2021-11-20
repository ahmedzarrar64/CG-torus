var camera, scene, renderer, controls,vartices, line,j, vartices2;
var sphere, cube;

init();
j=vartices2.length-1;
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
  
  //vartices 1
  
  var vartices =[];
	var r =3;
  for(var j=0;j<= 2*Math.PI;j+=0.2){
  for(var i=0; i<= 2*Math.PI;i+=0.01){
  var x = r* Math.cos(i)*Math.sin(j);
  var y = r* Math.sin(i)*Math.sin(j);
  var z= r* Math.cos(j);
  
  vartices.push(new THREE.Vector3(x,y,z));
  } }
  
  geometry = new THREE.BufferGeometry();
  geometry.setFromPoints(vartices);
  
  var material= new THREE.LineBasicMaterial({color:0x0000ff});
   line = new THREE.Line(geometry,material);
  /* line.rotation.x-=1.6 */;
  scene.add(line);
  
  
  
  // vartices 2
  
 vartices2 = [];
  var r =15;
  for(var i=0; i<= 7*Math.PI;i+=0.01){
  var a = r* Math.cos(i);
  var c = r* Math.sin(i);
  var b = r*i*0.2;
  
  
  vartices2.push(new THREE.Vector3(a,b,c));
  }
  geometry = new THREE.BufferGeometry();
  geometry.setFromPoints(vartices2);
  
  var material= new THREE.LineBasicMaterial({color:0x00ff00});
   var helix = new THREE.Line(geometry,material);
  /* helix.rotation.x-=1.6 */;
  scene.add(helix);
 


}
var delta;
function animate() {
/* line.rotation.y+=0.1 */
  requestAnimationFrame(animate);
  line.position.set(vartices2[j].x,vartices2[j].y,vartices2[j].z);
  j-=5;
  if(j< 0) j=vartices2.length-1;
  render();
}

function render() {
  renderer.render(scene, camera);
}
