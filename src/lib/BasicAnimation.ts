import * as THREE from 'three'

const sizes = { width: 600, height: 600 }
const scene = new THREE.Scene()
const cubeMesh = new THREE.Mesh(
	new THREE.BoxGeometry(0.2, 0.2, 0.5),
	new THREE.MeshBasicMaterial({ color: 0xcc74c6 })
)
const cubeMesh_2 = new THREE.Mesh(
	new THREE.BoxGeometry(1.5, 0.1, 1.5),
	new THREE.MeshBasicMaterial({ color: 0x1f1f1f })
)
scene.add(cubeMesh, cubeMesh_2)
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height)
camera.position.set(2, 2, 3)
camera.lookAt(cubeMesh.position)
scene.add(camera)

// Render
scene.add(new THREE.AxesHelper(3))
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true } as any)
renderer.setSize(sizes.width, sizes.height)


// using threejs Clock

// let time = Date.now()

const clock = new THREE.Clock()
// GameLoop
export const AnimationLoop = () => {
	// Three.js Clock


	const elapsedTime = clock.getElapsedTime()
	cubeMesh.rotation.y = elapsedTime * Math.PI * 2
	cubeMesh.position.x = Math.cos(elapsedTime)
	cubeMesh.position.y = Math.sin(elapsedTime)


	// const curretTime = Date.now()
	// const deltaTime = curretTime - time
	// time = curretTime
	// cubeMesh.rotation.y += 0.001 * deltaTime

	renderer.render(scene, camera)
	window.requestAnimationFrame(AnimationLoop)
}
