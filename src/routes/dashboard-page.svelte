<script lang="ts">
  import { AppGrid, QuoteOfTheDay } from "./index";
  import LegalNews from "./legal-news.svelte";
  import * as Card from "$lib/components/ui/card";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import Bell from "lucide-svelte/icons/bell";
  import PeopleDashboard from "./people-dashboard.svelte";
  export let quote;
</script>

<div
  class="flex items-center fixed justify-between space-y-2 bg-inherit sticky"
>
  <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
</div>

<Tabs.Root value="news" class="space-y-4 h-full  pt-8 pb-32 ">
  <Tabs.List class="flex w-fit sticky">
    <Tabs.Trigger value="news">News</Tabs.Trigger>
    <Tabs.Trigger value="applications">Applications</Tabs.Trigger>
    <Tabs.Trigger value="people">People</Tabs.Trigger>
    <Tabs.Trigger value="notifications">
      <Bell size={"1rem"} class="pr-1" />
      Notifications
    </Tabs.Trigger>
  </Tabs.List>

  <Tabs.Content value="news" class="h-full w-full flex-1">
    <div class="flex flex-col md:flex-row flex-grow space-x-4 h-full">
      <div
        class="border relative flex flex-col flex-1 bg-white dark:bg-black dark:border-white rounded-lg shadow-sm"
      >
        <h3 class="font-bold px-6 pt-4 z-[3]">News</h3>
        <div class="absolute top-0 left-0 w-full h-full rounded-lg">
          <LegalNews />
        </div>
      </div>
      <Card.Root class="flex-1">
        <Card.Header>
          <Card.Title>Quote of the day</Card.Title>
          <Card.Description>Daily inspiration</Card.Description>
        </Card.Header>
        <Card.Content>
          <QuoteOfTheDay />
        </Card.Content>
      </Card.Root>
    </div>
  </Tabs.Content>

  <Tabs.Content
    value="applications"
    class="h-full w-full flex-1 overflow-y-auto"
  >
    <AppGrid />
  </Tabs.Content>

  <Tabs.Content value="people" class="h-full w-full overflow-y-auto">
    <PeopleDashboard />
  </Tabs.Content>

  <Tabs.Content
    value="notifications"
    class="h-full w-full grid place-items-center dark:text-white"
    ><span class="opacity-50 dark:text-white dark:opacity-100">
      There are no notifications at this time
    </span>
  </Tabs.Content>
</Tabs.Root>
