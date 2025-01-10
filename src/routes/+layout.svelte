<script lang="ts">
	import {
		DashboardMainNav,
		TeamSwitcher,
		UserNav,
		Search,
		MobileNav,
	} from ".";
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

<div
	class="fixed top-0 left-0 w-full h-[33lvh] bg-white dark:bg-black cursor-none mouse-event-none z-[5] sm:hidden"
></div>

<header
	class="border-b dark:border-blue-900 dark:border-opacity-50 fixed top-0 left-0 z-[20] dark:bg-black w-screen flex flex-col h-auto bg-white"
>
	<div
		class="flex border-b dark:border-blue-900 dark:border-opacity-50 justify-start items-center w-full h-14 bg-white dark:bg-black"
	>
		<!-- Mobile Menu Button -->

		<!-- Logo Container - adjusted for mobile -->
		<div
			class="logo-container h-14 w-80 min-h-0 ml-3 flex flex-shrink px-3 py-2"
		>
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

		<!-- Title with divider -->
		<h2
			class="w-full h-full flex dark:text-white font-bold justify-start items-center"
		>
			<div class="w-fit h-full">
				<div
					class="w-[.01rem] h-full opacity-50 flex flex-col dark:bg-blue-900 bg-black"
				></div>
			</div>
			<span
				class="dark:opacity-100 opacity-50 dark:text-white h-full w-full md:text-regular text-xs flex flex-col ml-4 justify-center truncate"
			>
				Intranet Demo
			</span>
		</h2>

		<div class="md:hidden pl-3">
			<MobileNav />
		</div>
		<!-- Theme Toggle -->
		<div class="sm:flex hidden pr-3 justify-end items-center">
			<ThemeToggle />
		</div>
	</div>

	<!-- Desktop Navigation Bar - hidden on mobile -->
	<div
		class="hidden md:flex h-16 items-center px-4 dark:bg-black w-full light:bg-white py-4"
	>
		<TeamSwitcher />
		<DashboardMainNav class="mx-6" />
		<div class="ml-auto flex items-center space-x-4">
			<Search />
			<UserNav />
		</div>
	</div>

	<!-- Mobile Search/User Nav - shown only on mobile -->
	<div class="md:hidden flex items-start justify-between px-4 py-2 space-x-2">
		<Search />
		<UserNav />
	</div>
</header>

<div class="min-h-0 h-full pt-32 flex-grow flex-1">
	{@render children()}
</div>
