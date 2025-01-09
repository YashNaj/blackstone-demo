<script>
  import { Input } from "$lib/components/ui/input";
  import { Button } from "$lib/components/ui/button";
  import { Search, Grid2X2, List, Filter } from "lucide-svelte";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuTrigger,
  } from "$lib/components/ui/dropdown-menu";

  let viewMode = $state("grid");
  let searchQuery = $state("");
  let selectedTags = $state(new Set());

  const tags = [
    "High Priority",
    "Required",
    "Confidential",
    "Templates",
    "HR Related",
    "Important",
  ];

  function toggleTag(tag) {
    if (selectedTags.has(tag)) {
      selectedTags.delete(tag);
    } else {
      selectedTags.add(tag);
    }
  }
</script>

<div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
  <div class="relative flex-1 max-w-md">
    <Search class="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
    <Input
      type="search"
      placeholder="Search legal documents..."
      class="pl-8 w-full"
      bind:value={searchQuery}
    />
  </div>

  <div class="flex gap-2">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Filter class="h-4 w-4 mr-2" />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {#each tags as tag}
          <DropdownMenuCheckboxItem
            checked={selectedTags.has(tag)}
            onCheckedChange={() => toggleTag(tag)}
          >
            {tag}
          </DropdownMenuCheckboxItem>
        {/each}
      </DropdownMenuContent>
    </DropdownMenu>

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
