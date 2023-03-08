import * as THREE from 'three'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const sizes = { width: 600, height: 600 }
const AR = sizes.width / sizes.height
const cursor = { x: 0, y: 0 }

window.addEventListener("mousemove", (event) => {
	cursor.x = event.clientX / sizes.width - 0.5
	cursor.y = - (event.clientY / sizes.height - 0.5)
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

const i = 10
const c = { x: i, y: i, z: i }
// const c = { x: 0, y: 2, z: i }
camera.position.set(c.x, c.y, c.z)

camera.lookAt(new THREE.Vector3())
scene.add(camera)



scene.add(new THREE.AxesHelper(3))
scene.add(new THREE.GridHelper(20, 30, 0x3c4043, 0x202020))
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true } as any)
renderer.setSize(sizes.width, sizes.height)

// const camera_distence = 10
// const speed = 20

// contorls
// const contorls = new TrackballControls(camera, canvas as any) 
const contorls = new OrbitControls(camera, canvas as any)

// const clock = new THREE.Clock()
export const AnimationLoop = () => {
	// const elapsedTime = clock.getElapsedTime()
	// cubeMesh.rotation.y = elapsedTime * 0.5

	// update camera
	// camera.position.x = cursor.x * speed
	// camera.position.y = cursor.y * speed

	// camera.position.x = Math.sin(cursor.x * Math.PI * 2) * camera_distence
	// camera.position.z = Math.cos(cursor.x * Math.PI * 2) * camera_distence
	// camera.position.y = cursor.y * speed

	// camera.lookAt(new THREE.Vector3())

	renderer.render(scene, camera)
	window.requestAnimationFrame(AnimationLoop)
}
