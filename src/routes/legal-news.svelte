<script lang="ts">
  import { onMount } from "svelte";
  import { Card, CardContent } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";

  const newsItems = $state([
    {
      title:
        "Blackstone Law Strengthens Corporate Practice with New Partner Appointment",
      category: "Firm News",
      date: "January 12, 2024",
      image: "https://picsum.photos/id/28/800/400", // Professional office setting
      description:
        "Leading corporate lawyer Sarah Martinez joins the firm's expanding business law division.",
    },
    {
      title: "Notable Victory in High-Stakes Commercial Litigation Case",
      category: "Case Success",
      date: "January 10, 2024",
      image: "https://picsum.photos/id/175/800/400", // Justice/courthouse themed
      description:
        "Our litigation team secures a landmark victory in Johnson Industries antitrust case.",
    },
    {
      title: "Blackstone Law Named Top Tier Firm in Corporate Law",
      category: "Recognition",
      date: "January 8, 2024",
      image: "https://picsum.photos/id/101/800/400", // Achievement/success themed
      description:
        "Legal Excellence Awards recognizes Blackstone Law as a leader in corporate practice.",
    },
    {
      title: "Pro Bono Initiative Reaches Milestone",
      category: "Community",
      date: "January 5, 2024",
      image: "https://picsum.photos/id/203/800/400", // Community/people themed
      description:
        "Firm's commitment to community service helps over 1,000 clients in need.",
    },
    {
      title: "New Office Opening in Downtown Financial District",
      category: "Expansion",
      date: "January 3, 2024",
      image: "https://picsum.photos/id/164/800/400", // Architecture/building themed
      description:
        "Blackstone Law continues growth with new office location to better serve clients.",
    },
  ]);
  let currentIndex = $state(0);
  let carousel: HTMLDivElement;
  let isAutoScrolling = false;

  function scrollToIndex(index: number) {
    if (!carousel) return;

    const targetIndex = Math.max(0, Math.min(index, newsItems.length - 1));
    const slideWidth = carousel.offsetWidth;

    isAutoScrolling = true;
    carousel.scrollTo({
      left: slideWidth * targetIndex,
      behavior: "smooth",
    });

    // Update current index after scroll
    setTimeout(() => {
      currentIndex = targetIndex;
      isAutoScrolling = false;
    }, 500); // Adjust timing to match scroll duration
  }

  function nextSlide() {
    scrollToIndex((currentIndex + 1) % newsItems.length);
  }

  function previousSlide() {
    scrollToIndex((currentIndex - 1 + newsItems.length) % newsItems.length);
  }

  // Handle manual scroll
  function handleScroll(event: Event) {
    if (isAutoScrolling || !carousel) return;

    const slideWidth = carousel.offsetWidth;
    const scrollPosition = carousel.scrollLeft;
    const newIndex = Math.round(scrollPosition / slideWidth);

    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
    }
  }

  let autoScrollInterval: number;

  function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoScroll() {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = undefined;
    }
  }

  onMount(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  });
</script>

<div class="relative w-full h-full overflow-hidden pt-14">
  <div
    bind:this={carousel}
    class="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory"
    style="scrollbar-width: none; -ms-overflow-style: none;"
    on:scroll={handleScroll}
    on:mouseenter={stopAutoScroll}
    on:mouseleave={startAutoScroll}
  >
    {#each newsItems as item, index}
      <div
        class="min-w-full flex-shrink-0 snap-start space-x-2"
        style="scroll-snap-align: start;"
      >
        <Card class="h-full border-0 bg-white dark:bg-gray-950">
          <CardContent class="p-0 h-full">
            <img
              src={item.image}
              alt={item.title}
              class="w-full h-48 object-cover rounded-lg mx-2"
            />
            <div class="p-6 space-y-4">
              <Badge variant="secondary" class="mb-2">
                {item.category}
              </Badge>
              <h3 class="text-xl font-bold tracking-tight dark:text-white">
                {item.title}
              </h3>
              <p class="text-sm text-muted-foreground dark:text-gray-400">
                {item.description}
              </p>
              <p class="text-sm text-muted-foreground dark:text-gray-400">
                {item.date}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    {/each}
  </div>

  <!-- Navigation Buttons -->
  <button
    class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 dark:bg-white/20 hover:bg-black/70 dark:hover:bg-white/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
    on:click={previousSlide}
  >
    <ChevronLeft class="h-5 w-5" />
  </button>
  <button
    class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 dark:bg-white/20 hover:bg-black/70 dark:hover:bg-white/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
    on:click={nextSlide}
  >
    <ChevronRight class="h-5 w-5" />
  </button>

  <!-- Slide Indicators -->
  <div
    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
  >
    {#each newsItems as _, index}
      <button
        class="w-2 h-2 rounded-full transition-colors {index === currentIndex
          ? 'bg-black dark:bg-white'
          : 'bg-black/30 dark:bg-white/30 hover:bg-black/50 dark:hover:bg-white/50'}"
        on:click={() => scrollToIndex(index)}
        aria-label="Go to slide {index + 1}"
      />
    {/each}
  </div>
</div>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>
