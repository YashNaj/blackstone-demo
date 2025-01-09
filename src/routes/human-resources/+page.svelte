<script lang="ts">
  import HRCards from "./resources-cards.svelte";
  import HRSearchBar from "./resources-search.svelte";
</script>

<div class="w-full max-h-full overflow-y-hidden h-full px-6 py-8">
  <div
    class="flex items-center fixed justify-between space-y-2 bg-inherit sticky"
  >
    <h2 class="text-3xl font-bold tracking-tight">Human Resources</h2>
  </div>
  <div class="w-full h-auto pt-8"></div>
  <HRSearchBar />
  <HRCards />
</div>
