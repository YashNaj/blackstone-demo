<script lang="ts">
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";

  let courses = $state([
    {
      title: "New Employee Orientation",
      time: "2 hours",
      status: "In Progress",
    },
    {
      title: "Compliance Training 2024",
      time: "1 hour",
      status: "Not Started",
    },
    { title: "Management Skills 101", time: "3 hours", status: "Completed" },
    { title: "IT Security Basics", time: "45 mins", status: "Not Started" },
  ]);

  let projects = $state([]);
</script>

<div class="grid gap-6 pt-8 pb-10">
  <!-- Projects Card -->
  <Card>
    <CardHeader>
      <CardTitle>My Projects</CardTitle>
    </CardHeader>
    <CardContent>
      {#if projects.length === 0}
        <p class="text-sm text-gray-500">There are no projects.</p>
      {:else}
        <div class="grid gap-2">
          {#each projects as project}
            <div>{project.name}</div>
          {/each}
        </div>
      {/if}
    </CardContent>
  </Card>

  <!-- Training Courses Card -->
  <Card>
    <CardHeader>
      <CardTitle>Training Courses</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4">
        {#each courses as course}
          <div class="flex justify-between items-center p-2 bg-gray-50 rounded">
            <div>
              <h3 class="font-medium">{course.title}</h3>
              <p class="text-sm text-gray-500">{course.time}</p>
            </div>
            <span
              class="px-2 py-1 rounded text-sm {course.status === 'Completed'
                ? 'bg-green-100 text-green-800'
                : course.status === 'In Progress'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800'}"
            >
              {course.status}
            </span>
          </div>
        {/each}
      </div>
    </CardContent>
  </Card>

  <!-- Teams and New Hire Cards -->
  <div class="grid grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle>Teams Transitioning</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="flex justify-center items-center p-6">
          <div class="text-center">
            <h3 class="font-bold text-xl">FastTrack</h3>
            <p class="text-sm text-gray-500">Team transition program</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>New Hire Forms</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="flex justify-center items-center p-6">
          <div class="text-center">
            <h3 class="font-bold text-xl">Forms Portal</h3>
            <p class="text-sm text-gray-500">Access onboarding documents</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</div>
