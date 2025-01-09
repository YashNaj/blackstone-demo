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

<div class="w-full h-full px-4 py-4 overflow-y-auto">
  <div class=" flex flex-wrap items-center space-x-4 justify-between space-y-4">
    {#each applications as app}
      <ApplicationCard name={app.name} description={app.description} />
    {/each}
  </div>
</div>
