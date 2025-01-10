<script lang="ts">
  import LegalCards from "./legal-cards.svelte";
  import LegalSearch from "./legal-search.svelte";
</script>

<div
  class="w-full md:overflow-y-hidden overflow-x-hidden overflow-y-auto h-auto md:max-h-full md:h-full px-6 py-8"
>
  <div class="space-y-4 md:h-full h-auto relative min-h-0 pb-32">
    <LegalSearch />
    <LegalCards />
  </div>
</div>
