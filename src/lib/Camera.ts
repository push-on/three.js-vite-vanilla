import * as THREE from 'three'

const sizes = { width: 600, height: 600 }
const AR = sizes.width / sizes.height
const cursor = { x: 0, y: 0 }

window.addEventListener("mousemove", (event) => {
	cursor.x = event.clientX / sizes.width - 0.5
	cursor.y = event.clientY / sizes.height - 0.5

	console.log("x: ", cursor.x, " y: ", cursor.y)
})


const scene = new THREE.Scene()
const cubeMesh = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xe44032 })
)
scene.add(cubeMesh)


// Cameras

// clipping
const clip = { near: 0.1, far: 100 }

// Perspective Camera
const camera = new THREE.PerspectiveCamera(40, AR, clip.near, clip.far)

// Orthographic camera
// const OC = {
// 	Left: -1 * AR,
// 	Right: 1 * AR,
// 	Top: 1,
// 	Bottom: -1,
// }
// const camera = new THREE.OrthographicCamera(OC.Left, OC.Right, OC.Top, OC.Bottom, clip.near, clip.far)

const i = 5
const c = { x: 0, y: 0, z: i }
camera.position.set(c.x, c.y, c.z)

camera.lookAt(cubeMesh.position)
scene.add(camera)



scene.add(new THREE.AxesHelper(3))
scene.add(new THREE.GridHelper(20, 30, 0x3c4043, 0x202020))
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true } as any)
renderer.setSize(sizes.width, sizes.height)

// const clock = new THREE.Clock()
export const AnimationLoop = () => {
	// const elapsedTime = clock.getElapsedTime()
	// cubeMesh.rotation.y = elapsedTime * 0.5
	renderer.render(scene, camera)
	window.requestAnimationFrame(AnimationLoop)
}
