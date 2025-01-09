<!-- src/lib/components/ApplicationCard.svelte -->
<script lang="ts">
  import { Card, CardContent } from "$lib/components/ui/card";
  import * as Icons from "lucide-svelte";

  let { name, description } = $props<{ name: string; description: string }>();

  let iconComponent = $state(() => {
    const iconNames = Object.keys(Icons);
    const randomIcon = iconNames[Math.floor(Math.random() * iconNames.length)];
    return Icons[randomIcon];
  });
</script>

<Card
  class="w-64 h-[150px] flex group hover:scale-110 cursor-pointer hover:text-blue-500 dark:hover:text-blue-200 transition-all flex-col justify-between"
>
  <CardContent class="p-4 flex flex-col h-full">
    <div class="flex items-center mb-2">
      <h3 class="text-lg font-semibold">{name}</h3>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-300 flex-grow">
      {description}
    </p>
  </CardContent>
</Card>
