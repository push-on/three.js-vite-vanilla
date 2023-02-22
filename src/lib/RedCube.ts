import * as THREE from 'three'

// sizes
const sizes = { width: 800, height: 600 }

// scene
const scene = new THREE.Scene()

// Object
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: '#c97c3c' })
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
cubeMesh.rotateY(15)
scene.add(cubeMesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Render
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true } as any)

renderer.setSize(sizes.width, sizes.height)
export const redCube = renderer.render(scene, camera)