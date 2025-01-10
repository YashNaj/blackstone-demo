<!-- QuoteOfTheDay.svelte -->
<script lang="ts">
  import * as Button from "$lib/components/ui/button";
  import { RefreshCw } from "lucide-svelte";

  let quote: { author: string; content: string } | null = $state(null);
  let loading = $state(false);

  async function fetchQuote() {
    loading = true;
    console.log("Fetching new quote...");
    try {
      const response = await fetch("http://api.quotable.io/random");
      console.log("Response status:", response.status);

      if (!response.ok) {
        console.error("Response not OK:", response.statusText);
        throw new Error("Failed to fetch quote");
      }

      const data = await response.text();
      console.log("Raw response:", data);

      quote = JSON.parse(data);
      console.log("Parsed quote:", quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
      quote = null;
    } finally {
      loading = false;
      console.log("Loading complete, loading state:", loading);
    }
  }

  // Initial fetch
  $effect(() => {
    console.log("Running initial fetch");
    fetchQuote();
  });
</script>

<div class="space-y-4 sm:space-y-0 h-full w-full flex flex-col justify-between">
  {#if loading}
    <div class="animate-pulse h-20 bg-muted rounded" />
  {:else if quote}
    <blockquote class="space-y-2">
      <p class="text-lg">{quote.content}</p>
      <footer class="text-sm text-muted-foreground">— {quote.author}</footer>
    </blockquote>
  {:else}
    <div class="text-sm text-muted-foreground">Failed to load quote</div>
  {/if}

  <Button.Root
    variant="outline"
    class="w-full"
    on:click={fetchQuote}
    disabled={loading}
  >
    <RefreshCw class="mr-2 h-4 w-4 {loading ? 'animate-spin' : ''}" />
    New Quote
  </Button.Root>
</div>
