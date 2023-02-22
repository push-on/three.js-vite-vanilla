import * as THREE from 'three'

// sizes
const sizes = { width: 800, height: 600 }

// scene
const scene = new THREE.Scene()

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: '#c97c3c' })
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

// position
camera.position.set(0, 0.4, 3)
cubeMesh.position.set(0, 0, 0)

// rotation
cubeMesh.rotation.set(0.5, 1, 0)
camera.rotation.set(0, 0, 0)

// scale
cubeMesh.scale.set(2, 0.5, 2)

// distance from scene center to cubeMesh
const cube_to_scene_center = cubeMesh.position.length()
// distance from cubeMesh to camera
const cube_to_camera = cubeMesh.position.distanceTo(camera.position)

console.log({ cube_to_scene_center })
console.log({ cube_to_camera })

// Axes Helper
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

// Render

const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true } as any)
renderer.setSize(sizes.width, sizes.height)
export const redCube = renderer.render(scene, camera)