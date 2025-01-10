<script>
  import { Placeholder } from "..";
  import Training from "./training.svelte";
</script>

<div
  class="w-full overflow-y-hidden overflow-x-hidden md:overflow-y-auto h-auto md:max-h-full md:h-full px-6 py-8"
>
  <div
    class="space-y-4 md:h-full h-auto relative min-h-0 pb-3 md:overflow-y-auto"
  >
    <div
      class="sm:sticky sm:top-0 top-32 fixed bg-white dark:bg-black z-[10] flex items-center justify-between space-y-2 py-2"
    >
      <h2 class="text-3xl font-bold tracking-tight">Training</h2>
    </div>
    <Training />
  </div>
</div>
