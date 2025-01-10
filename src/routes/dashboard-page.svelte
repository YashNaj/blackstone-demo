<script lang="ts">
  import { AppGrid, QuoteOfTheDay } from "./index";
  import LegalNews from "./legal-news.svelte";
  import * as Card from "$lib/components/ui/card";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import Bell from "lucide-svelte/icons/bell";
  import PeopleDashboard from "./people-dashboard.svelte";
  export let quote;
</script>

<Tabs.Root value="news" class="space-y-4 md:h-full h-auto min-h-0 pb-32 ">
  <div
    class="sm:sticky sm:top-0 top-32 fixed bg-white dark:bg-black z-[10] flex items-center justify-between space-y-2 py-2"
  >
    <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
  </div>
  <Tabs.List class="flex w-fit md:sticky fixed z-[10]">
    <Tabs.Trigger value="news">News</Tabs.Trigger>
    <Tabs.Trigger value="applications">Applications</Tabs.Trigger>
    <Tabs.Trigger value="people">People</Tabs.Trigger>
    <Tabs.Trigger value="notifications">
      <Bell size={"1rem"} class="pr-1" />
      <span class="md:block hidden"> Notifications </span>
    </Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content value="news" class="h-full w-full flex-1 md:py-0 py-8 ">
    <div
      class="flex flex-col md:flex-row sm:h-full h-[60rem] py-8 md:py-0 flex-grow md:space-x-4 md:space-y-0 space-y-8"
    >
      <div
        class="border relative flex flex-col flex-1 md:flex-1 bg-white px-2 pt-3 sm:py-0 dark:bg-black dark:border-white rounded-lg shadow-sm"
      >
        <h3
          class="font-bold px-6 pt-4 pb-2 z-[3] absolute top-0 left-0 text-white w-full backdrop-blur rounded-t-md backdrop-brightness-75"
        >
          News
        </h3>
        <div class="absolute top-0 left-0 w-full h-full rounded-lg">
          <LegalNews />
        </div>
      </div>
      <Card.Root class="flex-1 flex flex-col">
        <Card.Header class="font-bold">
          Daily Quote
          <Card.Description>Daily inspiration</Card.Description>
        </Card.Header>
        <Card.Content class="w-full h-full flex flex-col">
          <QuoteOfTheDay />
        </Card.Content>
      </Card.Root>
    </div>
  </Tabs.Content>

  <Tabs.Content
    value="applications"
    class="h-full  w-full flex-1 overflow-y-auto md:py-0 py-8"
  >
    <AppGrid />
  </Tabs.Content>

  <Tabs.Content
    value="people"
    class="h-full w-full overflow-y-auto  md:py-0 py-8"
  >
    <PeopleDashboard />
  </Tabs.Content>

  <Tabs.Content
    value="notifications"
    class="h-full w-full min-h-0 h-80 dark:text-white"
    ><span class="opacity-50 dark:text-white dark:opacity-100">
      There are no notifications at this time
    </span>
  </Tabs.Content>
</Tabs.Root>
