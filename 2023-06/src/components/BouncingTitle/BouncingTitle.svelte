<script lang="ts">
  const letterDelayPairs = [
    ['h', 'animation-delay-0'],
    ['e', 'animation-delay-100'],
    ['l', 'animation-delay-200'],
    ['l', 'animation-delay-300'],
    ['o', 'animation-delay-400'],
    ['!', 'animation-delay-500'],
  ];
</script>

<h1 class="text-7xl font-bold text-white mb-12">
  {#each letterDelayPairs as [letter, delay]}
    <span class={`inline-block animate-bounce ${delay}`}>{letter}</span>
  {/each}
</h1>
