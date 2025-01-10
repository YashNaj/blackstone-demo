<script lang="ts">
  import { ROUTES } from "$lib/index";
  import { page } from "$app/stores";
  import * as Button from "$lib/components/ui/button";
  import { cn } from "$lib/utils";
  import { goto } from "$app/navigation";
  let { isOpen = $bindable() } = $props();

  let className: string | undefined | null = undefined;
  export { className as class };
  let currentPath = $state($page.url.pathname);
  $effect(() => {
    currentPath = $page.url.pathname;
  });
  async function navigate(url: string) {
    return goto(url);
    isOpen = false;
  }
</script>

<nav class={cn("flex flex-col w-full", className)}>
  {#each ROUTES as route}
    <Button.Root
      variant="ghost"
      onclick={() => navigate(route.url)}
      class={cn(
        "w-full justify-start gap-2 px-4 py-6 text-base hover:bg-muted",
        currentPath === route.url && "bg-muted",
      )}
    >
      <div class="flex items-center">
        <!-- If your routes have icons, add them here -->
        {#if route.icon}
          <svelte:component this={route.icon} class="h-5 w-5 mr-3" />
        {/if}
        {route.title}
      </div>
    </Button.Root>
  {/each}
</nav>
