<script>
  import { Placeholder } from "..";
  import Training from "./training.svelte";
</script>

<div class="w-full max-h-full h-full overflow-y-hidden px-6 pt-8">
  <div
    class="flex items-center fixed justify-between space-y-2 bg-inherit sticky"
  >
    <h2 class="text-3xl font-bold tracking-tight">Training</h2>
  </div>

  <div class="w-full h-full flex flex-col overflow-y-auto pb-10">
    <Training />
  </div>
</div>
