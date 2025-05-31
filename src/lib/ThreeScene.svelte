<script lang="ts">
  import * as THREE from 'three'
  import { onMount } from 'svelte'

  const width = 300,
    height = 400

  const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10)
  camera.position.z = 1

  const scene = new THREE.Scene()

  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.2)
  const material = new THREE.MeshNormalMaterial()

  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  let canvas: HTMLCanvasElement

  onMount(() => {
    if (!canvas) return
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.setSize(width, height)
    renderer.setAnimationLoop(animate)

    function animate(time: number) {
      mesh.rotation.x = time / 2000
      mesh.rotation.y = time / 1000

      renderer.render(scene, camera)
    }
  })
</script>

<canvas bind:this={canvas}></canvas>
