<script lang="ts">
  import ThreeScene from './lib/ThreeScene.svelte'
  import CaptureCamera from "./lib/CaptureCamera.svelte"
  import { onMount } from "svelte"
  
  let display_state = $state("idle")
  let blazePoses = $state([])
  let videoRef: HTMLVideoElement;
  
  onMount(() => {
    const ml5 = window.ml5 
    const bodyPose = ml5.bodyPose("BlazePose")
    display_state = "loading_model"
    bodyPose.ready.then((pose) => {
      display_state = "model_ready"
      pose.detectStart(videoRef, (detectedPoses) => {
        blazePoses = detectedPoses?.[0]?.keypoints ?? []
      })
    })
  })
  
</script>

<main>
  <p>{display_state}</p>
  <CaptureCamera onReady={(stream) => videoRef.srcObject = stream}>
    <video bind:this={videoRef} id="pose-video-output" width="640" height="480" autoplay muted playsinline></video>
  </CaptureCamera>
  <ThreeScene poses={blazePoses} width={640} height={480} />

</main>

<style>
  #pose-video-output {
    visibility: hidden;
    position: absolute;
    top: 0;
    left:0;
  }
</style>
