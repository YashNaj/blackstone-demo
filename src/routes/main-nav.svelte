<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { ROUTES } from "$lib/index";
  let className: string | undefined | null = undefined;
  export { className as class };
</script>

<nav class={cn("flex items-center space-x-4 lg:space-x-6", className)}>
  {#each ROUTES as route}
    <a
      href={route.url}
      class="hover:text-primary text-sm font-medium transition-colors"
    >
      {route.title}
    </a>
  {/each}
</nav>
