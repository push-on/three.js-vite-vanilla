import * as THREE from 'three'

const sizes = { width: 600, height: 600 }
const scene = new THREE.Scene()
const cubeMesh = new THREE.Mesh(
	new THREE.BoxGeometry(0.5, 0.5, 0.5),
	new THREE.MeshBasicMaterial({ color: 0xcc74c6 })
)
scene.add(cubeMesh)
const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height)
camera.position.set(2, 2, 3)
camera.lookAt(cubeMesh.position)
scene.add(camera)

// Render
scene.add(new THREE.AxesHelper(3))
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true } as any)
renderer.setSize(sizes.width, sizes.height)

// GameLoop
export const AnimationLoop = () => {
	window.requestAnimationFrame(AnimationLoop)
	renderer.render(scene, camera)
}
