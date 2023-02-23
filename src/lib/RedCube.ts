import * as THREE from 'three'

// scene sizes
const sizes = { width: 800, height: 600 }

// initialize scene
const scene = new THREE.Scene()

// Object properties
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xd5d590 })
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// Camera properties
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)
camera.position.set(1, 1, 3)
// cubeMesh.rotation.set(0.5, 1, 0)

// position
cubeMesh.position.set(0, 0, 0)

// rotation
camera.rotation.set(0, 0, 0)

// scale
cubeMesh.scale.set(2, 0.5, 2)

// distance from scene center to cubeMesh
const cube_to_scene_center = cubeMesh.position.length()
console.log({ cube_to_scene_center })

// distance from cubeMesh to camera
const cube_to_camera = cubeMesh.position.distanceTo(camera.position)
console.log({ cube_to_camera })

// Axes Helper
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

// look at object
camera.lookAt(cubeMesh.position)

// re-order
// cubeMesh.rotation.reorder("XYZ")

// Object Groups
const group = new THREE.Group()
scene.add(group)

const cube_01 = new THREE.Mesh(
	new THREE.BoxGeometry(0.5, 0.5, 0.5),
	new THREE.MeshBasicMaterial({ color: 0x4fc1ff })
)

const cube_02 = new THREE.Mesh(
	new THREE.BoxGeometry(0.5, 0.5, 0.5),
	new THREE.MeshBasicMaterial({ color: 0x4ec9b0 })
)

const cube_03 = new THREE.Mesh(
	new THREE.BoxGeometry(0.5, 0.5, 0.5),
	new THREE.MeshBasicMaterial({ color: 0xcc74cb })
)

cube_01.position.set(0, 1, 0)
cube_02.position.set(1, 1, 0)
cube_03.position.set(-1, 1, 0)

group.add(cube_01, cube_02, cube_03)
// Render
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true } as any)
renderer.setSize(sizes.width, sizes.height)

export const redCube = renderer.render(scene, camera)

