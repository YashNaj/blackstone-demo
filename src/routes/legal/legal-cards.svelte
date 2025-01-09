<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import {
    Scale,
    File,
    Gavel,
    BriefcaseIcon,
    FileLock2,
    Building2,
    FileSignature,
    FileWarning,
  } from "lucide-svelte";

  const legalDocs = $state([
    {
      title: "Contracts & Agreements",
      icon: File,
      description: "Standard contracts and service agreements",
      count: 45,
      tags: ["High Priority"],
    },
    {
      title: "Compliance Documents",
      icon: Scale,
      description: "Regulatory compliance and certifications",
      count: 28,
      tags: ["Required"],
    },
    {
      title: "Corporate Governance",
      icon: Building2,
      description: "Board documents and corporate policies",
      count: 15,
      tags: ["Confidential"],
    },
    {
      title: "NDAs",
      icon: FileLock2,
      description: "Non-disclosure agreements",
      count: 32,
      tags: ["Templates"],
    },
    {
      title: "Legal Policies",
      icon: Gavel,
      description: "Internal legal procedures and policies",
      count: 23,
      tags: ["Required"],
    },
    {
      title: "Employment Law",
      icon: BriefcaseIcon,
      description: "Labor laws and employment regulations",
      count: 19,
      tags: ["HR Related"],
    },
    {
      title: "Intellectual Property",
      icon: FileSignature,
      description: "Patents, trademarks, and IP documentation",
      count: 12,
      tags: ["Confidential"],
    },
    {
      title: "Dispute Resolution",
      icon: FileWarning,
      description: "Mediation and arbitration procedures",
      count: 8,
      tags: ["Important"],
    },
  ]);

  function handleCardClick(title) {
    console.log(`Opening ${title} documents`);
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each legalDocs as doc}
    <Card
      class="hover:bg-gray-50 dark:hover:text-black cursor-pointer transition-colors"
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
        <p class="text-sm text-gray-600 mb-3">
          {doc.description}
        </p>
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-500 flex items-center">
            <File class="mr-2 h-4 w-4" />
            {doc.count}
            {doc.count === 1 ? "document" : "documents"}
          </div>
          {#each doc.tags as tag}
            <span
              class="inline-flex items-center dark:bg-white dark:text-blue-900 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
            >
              {tag}
            </span>
          {/each}
        </div>
      </CardContent>
    </Card>
  {/each}
</div>
