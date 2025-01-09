<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "$lib/components/ui/card";
  import {
    Avatar,
    AvatarImage,
    AvatarFallback,
  } from "$lib/components/ui/avatar";
  import { Badge } from "$lib/components/ui/badge";
  import {
    Calendar,
    Cake,
    Gift,
    PartyPopper,
    Users2,
    CalendarClock,
    GraduationCap,
    Scale,
  } from "lucide-svelte";

  const upcomingMeetings = $state([
    {
      title: "Bar Association Annual Meeting",
      date: "2024-01-15T14:00:00",
      attendees: ["All Partners"],
      location: "Grand Conference Center",
      type: "external",
    },
    {
      title: "Client Case Review - Johnson v. Smith",
      date: "2024-01-16T09:00:00",
      attendees: ["Sarah Mitchell, JD", "James Parker, JD", "Litigation Team"],
      location: "Conference Room A",
      type: "internal",
    },
    {
      title: "Pro Bono Committee Meeting",
      date: "2024-01-17T11:00:00",
      attendees: ["Pro Bono Committee Members"],
      location: "Partner's Boardroom",
      type: "internal",
    },
    {
      title: "New Associates Orientation",
      date: "2024-01-18T10:00:00",
      attendees: ["HR, Managing Partners, New Associates"],
      location: "Training Room",
      type: "internal",
    },
  ]);

  const newHires = $state([
    {
      name: "Alexandra Chen, JD",
      role: "Associate Attorney",
      startDate: "2024-01-22",
      department: "Corporate Law",
      education: "Harvard Law School",
      avatar: "/avatars/alexandra.jpg",
    },
    {
      name: "Marcus Thompson, JD",
      role: "Senior Associate",
      startDate: "2024-01-29",
      department: "Litigation",
      education: "Yale Law School",
      avatar: "/avatars/marcus.jpg",
    },
    {
      name: "Rachel Patel",
      role: "Legal Secretary",
      startDate: "2024-01-24",
      department: "Family Law",
      education: "B.A. Legal Studies",
      avatar: "/avatars/rachel.jpg",
    },
  ]);

  const celebrations = $state([
    {
      type: "work_anniversary",
      name: "David Richardson, JD",
      date: "2024-01-16",
      years: 25,
      achievement: "Named Partner Anniversary",
      avatar: "/avatars/david.jpg",
    },
    {
      type: "certification",
      name: "Emily Watson, JD",
      date: "2024-01-17",
      achievement: "Patent Bar Certification",
      avatar: "/avatars/emily.jpg",
    },
    {
      type: "birthday",
      name: "Michael Brooks, JD",
      date: "2024-01-19",
      role: "Managing Partner",
      avatar: "/avatars/michael.jpg",
    },
    {
      type: "work_anniversary",
      name: "Patricia Martinez",
      date: "2024-01-20",
      years: 15,
      role: "Senior Paralegal",
      avatar: "/avatars/patricia.jpg",
    },
  ]);

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      weekday: "short",
    });
  }

  function formatTime(dateString: string) {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  }
</script>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  <!-- Upcoming Meetings -->
  <Card class="col-span-full md:col-span-2 bg-white dark:bg-gray-950">
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle class="flex items-center gap-2">
          <CalendarClock class="h-5 w-5" />
          Upcoming Meetings & Events
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4 md:grid-cols-2">
        {#each upcomingMeetings as meeting}
          <div
            class="flex flex-col space-y-2 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg"
          >
            <div class="flex items-center justify-between">
              <Badge
                variant={meeting.type === "external" ? "secondary" : "outline"}
              >
                {formatDate(meeting.date)}
              </Badge>
              <span class="text-sm font-medium dark:text-gray-300"
                >{formatTime(meeting.date)}</span
              >
            </div>
            <h4 class="font-semibold dark:text-gray-100">{meeting.title}</h4>
            <p class="text-sm text-muted-foreground dark:text-gray-400">
              {meeting.location}
            </p>
            <div class="flex items-center gap-1">
              <Users2 class="h-4 w-4 text-muted-foreground" />
              <span class="text-sm text-muted-foreground dark:text-gray-400">
                {meeting.attendees.join(", ")}
              </span>
            </div>
          </div>
        {/each}
      </div>
    </CardContent>
  </Card>

  <!-- Welcome New Hires -->
  <Card class="bg-white dark:bg-gray-950">
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle class="flex items-center gap-2">
          <Scale class="h-5 w-5" />
          Welcoming Soon
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        {#each newHires as hire}
          <div
            class="flex items-center space-x-4 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg"
          >
            <Avatar class="h-10 w-10">
              <AvatarImage src={hire.avatar} alt={hire.name} />
              <AvatarFallback
                >{hire.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}</AvatarFallback
              >
            </Avatar>
            <div class="flex-1 space-y-1">
              <p class="text-sm font-medium leading-none dark:text-gray-100">
                {hire.name}
              </p>
              <p class="text-sm text-muted-foreground dark:text-gray-400">
                {hire.role}
              </p>
              <p class="text-xs text-muted-foreground dark:text-gray-400">
                {hire.department}
              </p>
              <div class="flex items-center pt-1">
                <Calendar class="h-3 w-3 mr-1 text-muted-foreground" />
                <span class="text-xs text-muted-foreground dark:text-gray-400">
                  Starts {formatDate(hire.startDate)}
                </span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </CardContent>
  </Card>

  <!-- Celebrations -->
  <Card class="md:col-span-2 lg:col-span-2 bg-white dark:bg-gray-950">
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle class="flex items-center gap-2">
          <PartyPopper class="h-5 w-5" />
          Milestones & Celebrations
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <div class="grid gap-4 md:grid-cols-2">
        {#each celebrations as celebration}
          <div
            class="flex items-center space-x-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg"
          >
            <Avatar class="h-12 w-12">
              <AvatarImage src={celebration.avatar} alt={celebration.name} />
              <AvatarFallback
                >{celebration.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}</AvatarFallback
              >
            </Avatar>
            <div class="flex-1">
              <div class="flex items-center gap-2">
                {#if celebration.type === "birthday"}
                  <Cake class="h-4 w-4 text-pink-500" />
                {:else if celebration.type === "certification"}
                  <GraduationCap class="h-4 w-4 text-green-500" />
                {:else}
                  <Gift class="h-4 w-4 text-blue-500" />
                {/if}
                <p class="text-sm font-medium dark:text-gray-100">
                  {celebration.name}
                </p>
              </div>
              <p class="text-sm text-muted-foreground dark:text-gray-400">
                {#if celebration.type === "birthday"}
                  Birthday on {formatDate(celebration.date)}
                {:else if celebration.type === "certification"}
                  {celebration.achievement} on {formatDate(celebration.date)}
                {:else}
                  {celebration.years} Year{celebration.years > 1 ? "s" : ""} Anniversary
                  on {formatDate(celebration.date)}
                {/if}
              </p>
              {#if celebration.role}
                <p
                  class="text-xs text-muted-foreground dark:text-gray-400 mt-1"
                >
                  {celebration.role}
                </p>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </CardContent>
  </Card>
</div>
