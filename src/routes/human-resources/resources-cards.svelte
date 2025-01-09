<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import {
    FolderOpen,
    Users,
    FileText,
    HeartPulse,
    PiggyBank,
    Shield,
    BookOpen,
  } from "lucide-svelte";

  const hrDocs = $state([
    {
      title: "401k",
      icon: PiggyBank,
      description: "Retirement plans and documentation",
      count: 12,
    },
    {
      title: "Administration Documents",
      icon: FileText,
      description: "Internal policies and procedures",
      count: 24,
    },
    {
      title: "Bluekey Employee Handbook",
      icon: BookOpen,
      description: "Company policies and guidelines",
      count: 1,
    },
    {
      title: "Covid-19",
      icon: HeartPulse,
      description: "Health and safety protocols",
      count: 8,
    },
    {
      title: "Disability & Life Insurance",
      icon: Shield,
      description: "Benefits and coverage information",
      count: 15,
    },
    {
      title: "Employee of the Quarter",
      icon: Users,
      description: "Recognition program details",
      count: 4,
    },
  ]);

  function handleCardClick(title) {
    // Handle navigation or file opening
    console.log(`Opening ${title} documents`);
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each hrDocs as doc}
    <Card
      class="hover:bg-gray-50 cursor-pointer transition-colors"
      on:click={() => handleCardClick(doc.title)}
    >
      <CardHeader
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <CardTitle class="text-lg font-medium">
          {doc.title}
        </CardTitle>
        <svelte:component this={doc.icon} class="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent>
        <p class="text-sm text-gray-600">
          {doc.description}
        </p>
        <div class="mt-4 flex items-center text-sm text-gray-500">
          <FolderOpen class="mr-2 h-4 w-4" />
          {doc.count}
          {doc.count === 1 ? "document" : "documents"}
        </div>
      </CardContent>
    </Card>
  {/each}
</div>
