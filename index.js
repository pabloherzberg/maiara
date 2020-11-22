const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({antialias:true})

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

const box = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0xff0000})

const texture =new THREE.TextureLoader().load( './maiara.jpeg' );

const material2 = new THREE.MeshBasicMaterial({map:texture})


const light = new THREE.AmbientLight( 0x404040 )

const cube = new THREE.Mesh(box, material2)

scene.add(cube)
camera.position.z = 2

scene.add( light );


const animate = ()=>{
    requestAnimationFrame(animate)
    cube.rotation.z += .01
    cube.rotation.y -= .01
    cube.rotation.x += .01
    renderer.render(scene, camera)
}

animate()