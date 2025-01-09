<script lang="ts">
	import { DashboardMainNav, TeamSwitcher, UserNav, Search } from ".";
	import LogoDark from "$lib/img/blackstone-logo-black.png";
	import LogoLight from "$lib/img/blackstone-logo-white.png";
	import "../app.css";
	import ThemeToggle from "./theme-toggle.svelte";
	let { children } = $props();
	import { getTheme } from "$lib/theme.svelte";
	let currentTheme: string;

	$effect(() => {
		currentTheme = getTheme();
	});
</script>

<header
	class="border-b dark:border-white dark:border-opacity-50 fixed top-0 left-0 z-[10] dark:bg-black w-screen flex flex-col h-auto bg-white"
>
	<div
		class="flex border-b dark:border-blue-900 dark:border-opacity-50 justify-start items-center w-full h-14 bg-white dark:bg-black"
	>
		<div class="logo-container h-14 min-h-0 ml-3 flex flex-grow px-3 py-2">
			<img
				alt="logo"
				class="max-w-full dark:hidden block object-contain"
				src={LogoLight}
			/>
			<img
				alt="logo"
				class="max-w-full hidden dark:block object-contain"
				src={LogoDark}
			/>
		</div>
		<h2
			class="w-full h-full flex dark:text-white font-bold justify-start items-center"
		>
			<div class="w-fit h-full">
				<div
					class="w-[.01rem] h-full opacity-50 flex flex-col dark:bg-blue-900 bg-black"
				></div>
			</div>
			<span
				class="dark:opacity-100 opacity-50 dark:text-white h-full w-full flex flex-col ml-4 justify-center"
			>
				Intranet Demo
			</span>
		</h2>
		<div class="flex pr-3 justiy-end items-center">
			<ThemeToggle />
		</div>
	</div>

	<div
		class="flex h-16 items-center px-4 dark:bg-black dark:border-blue-900 w-full h-auto light:bg-white py-4"
	>
		<TeamSwitcher />
		<DashboardMainNav class="mx-6 hidden md:block" />
		<div class="ml-auto flex items-center space-x-4">
			<Search />
			<UserNav />
		</div>
	</div>
</header>
<!-- Added flex flex-col and pb-8 -->
<div class="min-h-0 h-full pt-32 flex-grow flex-1">
	{@render children()}
</div>
