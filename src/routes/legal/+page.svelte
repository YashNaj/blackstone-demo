<script lang="ts">
  import LegalCards from "./legal-cards.svelte";
  import LegalSearch from "./legal-search.svelte";
</script>

<div class="w-full max-h-full h-full px-6 py-8 overflow-hidden">
  <div
    class="flex items-center fixed justify-between space-y-2 bg-inherit sticky"
  >
    <h2 class="text-3xl font-bold tracking-tight">Legal</h2>
  </div>

  <div class="w-full h-full flex flex-col pt-8 overflow-y-auto pb-10">
    <LegalSearch />
    <div class="w-full h-full overflow-y-auto mb-10">
      <LegalCards />
    </div>
  </div>
</div>
