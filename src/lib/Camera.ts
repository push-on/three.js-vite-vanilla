import * as THREE from 'three'
const sizes = { width: 600, height: 600 }
const scene = new THREE.Scene()
const cubeMesh = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xe44032 })
)
scene.add(cubeMesh)
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height)
camera.position.set(5, 5, 5)
camera.lookAt(cubeMesh.position)
scene.add(camera)
scene.add(new THREE.AxesHelper(3))
scene.add(new THREE.GridHelper(20, 30, 0x3c4043, 0x202020))
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true } as any)
renderer.setSize(sizes.width, sizes.height)

const clock = new THREE.Clock()

export const AnimationLoop = () => {

	const elapsedTime = clock.getElapsedTime()
	cubeMesh.rotation.y = elapsedTime * 0.5

	renderer.render(scene, camera)
	window.requestAnimationFrame(AnimationLoop)
}
