<script lang="ts">
  import AppBar from '$lib/components/AppBar.svelte';
  import ShaderCanvas from '$lib/components/ShaderCanvas.svelte';
  import '../app.css';

  let { children } = $props();

  export const prerender = true;
</script>

<div class="background-container">
  <ShaderCanvas />
</div>

<div class="content-container">
  <AppBar>
    <a href="/about">About Me</a>
  </AppBar>
  {@render children()}
</div>

<style>
  .background-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

  .content-container {
    position: relative;
    z-index: 1;
  }
</style>
