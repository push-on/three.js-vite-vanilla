import * as THREE from 'three'
import gsap from 'gsap'
const sizes = { width: 600, height: 600 }
const scene = new THREE.Scene()
const cubeMesh = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 0xcc74c6 })
)
scene.add(cubeMesh)
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.set(10, 10, 10)
camera.lookAt(cubeMesh.position)
scene.add(camera)
scene.add(new THREE.AxesHelper(3))
scene.add(new THREE.GridHelper(20, 30, 0x3c4043, 0x202020))
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true } as any)
renderer.setSize(sizes.width, sizes.height)


const timeline = gsap.timeline({ defaults: { duration: 1, }, repeat: 100 })
timeline
	.to(cubeMesh.position, { y: 3 })
	.to(cubeMesh.rotation, { y: 5 }, '<')
	.to(cubeMesh.position, { y: 0 })
	.to(cubeMesh.rotation, { y: 0 }, '<')
	.to(cubeMesh.position, { y: - 3 })
	.to(cubeMesh.rotation, { y: 5 }, '<')
	.to(cubeMesh.position, { y: 0 })
	.to(cubeMesh.rotation, { y: 0 }, '<')


export const AnimationLoop = () => {
	renderer.render(scene, camera)
	window.requestAnimationFrame(AnimationLoop)
}
