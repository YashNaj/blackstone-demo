<!-- MobileNav.svelte -->
<script lang="ts">
  import * as Drawer from "$lib/components/ui/drawer";
  import * as Button from "$lib/components/ui/button";
  import { Menu, X } from "lucide-svelte";
  import { TeamSwitcher, Search, UserNav } from ".";
  import MobileMainNav from "./mobile-main-nav.svelte";
  import { fly, fade } from "svelte/transition";
  import { quartOut } from "svelte/easing";
  import { onNavigate } from "$app/navigation";

  let isOpen = $state(false);
  let overlayOpacity = $derived(isOpen ? 0.4 : 0);
  onNavigate(() => {
    isOpen = false;
  });
</script>

<Button.Root
  variant="ghost"
  size="icon"
  class="md:hidden"
  on:click={() => (isOpen = true)}
>
  <Menu class="h-5 w-5" />
</Button.Root>

{#if isOpen}
  <!-- Backdrop -->
  <div
    class="fixed backdrop-blur-md inset-0 bg-black/40 z-40"
    on:click={() => (isOpen = false)}
    transition:fade={{ duration: 200 }}
  />
{/if}

<Drawer.Root open={isOpen} onOpenChange={(open) => (isOpen = open)}>
  <Drawer.Content
    class="fixed inset-y-0 right-0 w-full z-50 flex h-full flex-col bg-white dark:bg-black shadow-xl"
  >
    <div
      class="flex items-center justify-between p-4 border-b dark:border-blue-900 dark:border-opacity-50"
    >
      <span class="text-lg font-semibold">Navigation</span>
      <Button.Root variant="ghost" size="icon" onclick={() => (isOpen = false)}>
        <X class="h-5 w-5" />
      </Button.Root>
    </div>

    <div
      class="flex-1 overflow-y-auto"
      in:fly={{
        x: 50,
        delay: 200,
        duration: 300,
        easing: quartOut,
      }}
    >
      <!-- Team Switcher -->
      <div
        class="p-4 border-b dark:border-blue-900 dark:border-opacity-50"
        in:fly={{ x: 50, delay: 250, duration: 300, easing: quartOut }}
      >
        <TeamSwitcher />
      </div>

      <!-- Search -->
      <div
        class="p-4 border-b dark:border-blue-900 dark:border-opacity-50"
        in:fly={{ x: 50, delay: 300, duration: 300, easing: quartOut }}
      >
        <Search />
      </div>

      <!-- Navigation Links -->
      <div
        class="py-2"
        in:fly={{ x: 50, delay: 350, duration: 300, easing: quartOut }}
      >
        <MobileMainNav class="" bind:isOpen />
      </div>

      <!-- User Navigation -->
    </div>
  </Drawer.Content>
</Drawer.Root>

<style>
  /* Optional: Add smooth transitions for interactive elements */
  :global(.drawer-content) {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
</style>
