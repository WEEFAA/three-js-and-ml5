<script lang="ts">
  import * as THREE from 'three'
  import { onMount } from 'svelte'
  
  type Poses = {
    confidence: number;
    name: string,
    x: number,
    y: number
  };
  
  const { width, height, poses } = $props()

  const camera = new THREE.PerspectiveCamera(100, width / height,  0.01, 1000)
  camera.position.z = 500

  const scene = new THREE.Scene()

  // const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.2)
  // const material = new THREE.MeshNormalMaterial()
  // const mesh = new THREE.Mesh(geometry, material)
  // scene.add(mesh)

  let keypointCircles = []

  for (let i = 0; i < 32; i++) {
    const geometry = new THREE.CircleGeometry(5, 30);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const circle = new THREE.Mesh(geometry, material);
    scene.add(circle);
    keypointCircles.push(circle);
  }

  $effect(() => {
    if(poses.length < 1) return 
    
    for(let i = 0; i < poses.length; i++){
      const pose = poses[i]
      const circle = keypointCircles[i]
      if(!circle) return
      circle.visible = true 
      const x = pose.x - 320; // center X
      const y = -(pose.y - 240); // invert and center Y
      circle.position.set(x, y, 0);
      if(pose.name.startsWith('right_')){
        circle.material.color.set(0x00ff00)
      } else if(pose.name.startsWith('left_')){
        circle.material.color.set(0x00ffff)
      }
    }
  })

  let canvas: HTMLCanvasElement

  onMount(() => {
    if (!canvas) return
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    renderer.setSize(width, height)
    renderer.setAnimationLoop(animate)

    function animate(time: number) {
      renderer.render(scene, camera)
    }
  })
</script>

<canvas bind:this={canvas}></canvas>
