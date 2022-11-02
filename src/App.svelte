<script lang="ts">
  let reminders = ["google.com"];
</script>

<main>
  <h1>Reminders</h1>

  {#each reminders as reminder}
    <p>{reminder}</p>
  {/each}

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>
