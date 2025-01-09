<script lang="ts">
  import ApplicationCard from "./application-card.svelte";

  const applications = [
    { name: "Email", description: "Check your inbox and send messages" },
    { name: "Calendar", description: "Manage your schedule and events" },
    { name: "Tasks", description: "Keep track of your to-do list" },
    { name: "Files", description: "Access and manage your documents" },
    { name: "Chat", description: "Communicate with your team in real-time" },
    { name: "Analytics", description: "View insights and reports" },
    { name: "Settings", description: "Configure your account preferences" },
    { name: "Help", description: "Get support and documentation" },
    { name: "Projects", description: "Manage and track your projects" },
    { name: "Contacts", description: "Organize your network" },
    { name: "Notes", description: "Jot down ideas and information" },
    { name: "Time Tracker", description: "Monitor your productivity" },
    { name: "Email", description: "Check your inbox and send messages" },
    { name: "Calendar", description: "Manage your schedule and events" },
    { name: "Tasks", description: "Keep track of your to-do list" },
    { name: "Files", description: "Access and manage your documents" },
    { name: "Chat", description: "Communicate with your team in real-time" },
    { name: "Analytics", description: "View insights and reports" },
    { name: "Settings", description: "Configure your account preferences" },
    { name: "Help", description: "Get support and documentation" },
    { name: "Projects", description: "Manage and track your projects" },
    { name: "Contacts", description: "Organize your network" },
    { name: "Notes", description: "Jot down ideas and information" },
    { name: "Time Tracker", description: "Monitor your productivity" },
  ];
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 pt-3 overflow-y-auto h-full"
>
  {#each applications as app}
    <ApplicationCard name={app.name} description={app.description} />
  {/each}
</div>
