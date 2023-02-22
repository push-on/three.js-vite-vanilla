import * as THREE from 'three'

// scene sizes
const sizes = { width: 800, height: 600 }

// initialize scene
const scene = new THREE.Scene()

// Object properties
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: '#f76394' })
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








// Render
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true } as any)
renderer.setSize(sizes.width, sizes.height)

export const redCube = renderer.render(scene, camera)

