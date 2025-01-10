<script lang="ts">
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import { Search, Grid2X2, List } from "lucide-svelte";

  let viewMode = $state("grid");
  let searchQuery = $state("");
</script>

<div
  class="flex fixed md:sticky flex-row justify-between items-center mb-6 gap-4 z-[15]"
>
  <div class="relative flex-1 max-w-sm">
    <Search class="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
    <Input
      type="search"
      placeholder="Search documents..."
      class="pl-8 w-full"
      bind:value={searchQuery}
    />
  </div>

  <div class="flex gap-2">
    <Button
      variant={viewMode === "grid" ? "default" : "outline"}
      size="sm"
      on:click={() => (viewMode = "grid")}
    >
      <Grid2X2 class="h-4 w-4" />
    </Button>
    <Button
      variant={viewMode === "list" ? "default" : "outline"}
      size="sm"
      on:click={() => (viewMode = "list")}
    >
      <List class="h-4 w-4" />
    </Button>
  </div>
</div>
