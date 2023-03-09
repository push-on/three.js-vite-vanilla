import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
}

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	45,
	sizes.width / sizes.height
)
camera.position.set(10, 10, 10)
camera.lookAt(new THREE.Vector3())
scene.add(camera)
scene.add(new THREE.AxesHelper(3))
scene.add(new THREE.GridHelper(20, 30, 0x3c4043, 0x202020))
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true
} as any)
renderer.setSize(sizes.width, sizes.height)
const contorls = new OrbitControls(camera, canvas as any)
contorls.enableDamping = true

const cubeMesh = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0x0288d1 })
)
scene.add(cubeMesh)

window.addEventListener('resize', () => {
	// update window size variable
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight
	// update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()
	// update renderer
	renderer.setSize(sizes.width, sizes.height)
})

export const AnimationLoop = () => {
	contorls.update()
	renderer.render(scene, camera)
	window.requestAnimationFrame(AnimationLoop)
}
