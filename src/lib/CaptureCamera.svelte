<script lang="ts">
  import { onMount } from "svelte"
  // trigger request camera permission
  export let onReady;
  
  onMount(() => {
    window.navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      onReady(stream)
    })
  })

</script>


<slot />
