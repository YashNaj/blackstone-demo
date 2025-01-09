<script lang="ts">
  import { DashboardPage } from "./index.js";
  let data = $props();
  let quote = $state(data.initiaQuote);
  $effect(() => {
    console.log(data);
  });
</script>

<div class="w-full max-h-full overflow-y-hidden h-full px-6 py-8">
  <DashboardPage {quote} />
</div>
