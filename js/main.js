var containter, scene, camera, renderer;

var controls;

init();
animate();

function init(){
    //setup
    container = document.getElementById('container');

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 100);

    renderer = new THREE.WebGLRenderer( { alpha: true });

    renderer.setSize( window.innerWidth, window.innerHeight);

    //Events
    window.addEventListener("resize", onWindowResize, false);

    container.appendChild( renderer.domElement );
    document.body.appendchild( container );
}

function animate(){
    requestAnimationFrame( animate );
    render();
}

function render(){

    renderer.clear();
    renderer.render( scene, camera );
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}