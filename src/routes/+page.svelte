<script lang="ts">
  import { DashboardPage } from "./index.js";
  let data = $props();
  let quote = $state(data.initiaQuote);
  $effect(() => {
    console.log(data);
  });
</script>

<div
  class="w-full md:overflow-y-hidden overflow-x-hidden overflow-y-auto h-auto md:max-h-full md:h-full px-6 py-8"
>
  <div
    class="fixed top-0 left-0 w-full h-[25vh] bg-white dark:bg-black cursor-none mouse-event-none z-[10] sm:hidden"
  ></div>
  <DashboardPage {quote} />
</div>
