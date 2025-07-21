<script lang="ts">
  import Logo from '$lib/assets/logo-transparent.png';
  
  export let title = "Portfolio";
</script>

<header class="w-full">
  <nav class="flex p-8 justify-between items-center">
    <img src={Logo} class="w-32" alt={title} />
    <div class="flex gap-2">
      <slot />
    </div>
  </nav>
</header>

<style>
</style>
