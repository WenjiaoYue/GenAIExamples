<script>
	import "tailwindcss/tailwind.css";
	import "../app.postcss";
	import Notifications from "svelte-notifications";
	import { onMount } from "svelte";
	import Header from "$lib/modules/frame/header.svelte";
	import Footer from "$lib/modules/frame/footer.svelte";

	onMount(() => {
		window.deviceType = window.innerWidth > 640 ? "pc" : "mobile";
		window.onresize = () => {
			window.deviceType = window.innerWidth > 640 ? "pc" : "mobile";
		};
		window.addEventListener("load", function () {
			setTimeout(function () {
				// This hides the address bar:
				window.scrollTo(0, 1);
			}, 0);
		});
	});
</script>

<Notifications>
		<Header />
		<slot />
		<Footer />
</Notifications>
