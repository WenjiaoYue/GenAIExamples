<script>
	import {
		commonVariables,
		cardContents,
	} from "$lib/shared/constant/constants";
	import { latencyWritable } from "$lib/shared/stores/common/Store";
	const {
		cardClass,
		titleClass,
		subtitleClass,
		borderClass,
		latencySubContentClass,
		borderBClass,
		latencyContainerClass,
		latencyValueClass,
		latencySubtitleClass,
		reductionClass,
		reductionValueClass,
		reductionSubtitleClass,
	} = commonVariables;
</script>

<div
	class="mx-4 mt-6 flex h-full w-[15%] flex-col items-center gap-2 text-center font-light"
>
	<div class={cardClass}>
		<p class={titleClass}>{cardContents.title1}</p>
		<p class={subtitleClass}>{cardContents.subtitle1}</p>
	</div>

	<div class={cardClass}>
		<p class={borderBClass}>{cardContents.title2}</p>
		<p class="mt-2">
			<span class={borderClass}>{cardContents.bit}</span> bit format
		</p>
	</div>

	<div class={latencyContainerClass}>
		<p class={latencyValueClass}>
			{#if $latencyWritable !== '0'}
				<span>{$latencyWritable}</span>
			{/if}
			{cardContents.latencySubtitle}
		</p>
		{#if cardContents.lantencySubContent !== ""}
			<p class={latencySubContentClass}>{cardContents.lantencySubContent}</p>
		{/if}
		<p class={latencySubtitleClass}>{cardContents.lantencyContent}</p>
	</div>

	{#if cardContents.reduction !== ""}
		<div class={reductionClass}>
			<p>
				<span class={reductionValueClass}>{cardContents.reduction}</span> Reduction
			</p>
			<p class={reductionSubtitleClass}>{cardContents.reductionSubtitle}</p>
		</div>
	{/if}
</div>
