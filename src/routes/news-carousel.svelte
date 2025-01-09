<!-- news-carousel.svelte -->
<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>

<div class="w-full h-full relative flex flex-1">
  <Carousel.Root class="w-full absolute top-0 left-0 h-full flex flex-col">
    <Carousel.Content
      class="w-full h-full bg-purple-400
      "
    >
      {#each Array(5) as _, i (i)}
        <Carousel.Item class="h-full  w-full">
          <div
            class="h-full w-full p-6 flex items-center bg-red-400 justify-center"
          >
            <span class="text-4xl font-semibold">{i + 1}</span>
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
</div>
