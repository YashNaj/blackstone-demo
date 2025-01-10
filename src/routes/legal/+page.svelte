<script lang="ts">
  import LegalCards from "./legal-cards.svelte";
  import LegalSearch from "./legal-search.svelte";
</script>

<div
  class="w-full md:overflow-y-hidden overflow-x-hidden overflow-y-auto h-auto md:max-h-full md:h-full px-6 py-8"
>
  <div class="space-y-4 md:h-full h-auto relative min-h-0 pb-32">
    <div
      class="sm:sticky sm:top-0 top-32 fixed bg-white dark:bg-black z-[10] flex items-center justify-between space-y-2 py-2"
    >
      <h2 class="text-3xl font-bold tracking-tight">Legal</h2>
    </div>
    <LegalSearch />
    <LegalCards />
  </div>
</div>
