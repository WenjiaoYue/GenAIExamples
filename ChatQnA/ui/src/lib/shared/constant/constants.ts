// commonVariables.ts
interface CommonVariables {
  cardClass: string;
  titleClass: string;
  subtitleClass: string;
  borderBClass: string;
  latencyContainerClass: string;
  latencyValueClass: string;
  latencySubtitleClass: string;
  reductionClass: string;
  reductionValueClass: string;
  reductionSubtitleClass: string;
  borderClass: string;
  latencySubContentClass: string;
}

export const generateCommonVariables = (borderColor: string, bgColor:  string): CommonVariables => ({
  cardClass: `w-full border-2 border-solid ${borderColor} p-1 text-white xl:p-6`,
  titleClass: "text-xl xl:text-2xl",
  subtitleClass: "text-xs xl:text-base",
  borderBClass: `border-b-2 ${borderColor} pb-2 text-xl leading-tight  xl:pb-4 xl:text-2xl xl:leading-normal`,
  latencyContainerClass: `w-full border-2 border-solid ${borderColor}`,
  latencyValueClass: `text-xl ${bgColor} p-2  xl:p-6 xl:text-2xl`,
  latencySubtitleClass: "py-1 text-lg text-white xl:text-xl xl:py-4",
  reductionClass: `${bgColor} p-2  xl:p-6`,
  reductionValueClass: "text-2xl",
  reductionSubtitleClass: "text-xs leading-tight xl:text-base",
  borderClass: `border-2 ${borderColor} px-2 text-xl font-normal  xl:px-6 xl:text-2xl`,
  latencySubContentClass: "text-xs text-white pt-2  xl:pt-6 xl:pt-4 xl:text-base",
});


// Intel® Xeon® 6
// export const commonVariables = generateCommonVariables("border-[#00c7fd]", "bg-[#00c7fd]");
// export const cardContents = {
// 	title1: "Intel® Xeon® 6",
// 	subtitle1: "with Performance Cores",
// 	title2: "Llama 2 70b",
// 	bit: 4,
// 	latency: "158",
// 	lantencyContent: "Latency",
// 	latencySubtitle: "ms",
// 	reduction: "6.4X",
// 	reductionSubtitle: "Next-Token Latency Versus 4ᵗʰ Gen Xeon® using 16 bit",
//   	lantencySubContent: "",
// };

// 5ᵗʰ Gen Intel® Xeon® Processor
// export const commonVariables = generateCommonVariables("border-[#6ddcff]", "bg-[#6ddcff]");
// export const cardContents = {
// 	title1: "5ᵗʰ Gen Intel® Xeon® Processor",
// 	subtitle1: "",
// 	title2: "Llama 2 70b",
// 	bit: 4,
// 	latency: "159",
// 	lantencyContent: "Latency",
// 	latencySubtitle: "ms",
// 	reduction: "3.6X",
// 	reductionSubtitle: "Next-Token Latency Versus 4ᵗʰ Gen Xeon® using 16 bit",
// 	lantencySubContent: "",
// };

// 4ᵗʰ Gen Intel® Xeon® Processor
export const commonVariables =  generateCommonVariables("border-[#8bae46]", "bg-[#8bae46]");
export const cardContents = {
	title1: "4ᵗʰ Gen Intel® Xeon® Processor",
	subtitle1: "",
	title2: "Llama 2 70b",
	bit: 4,
	latency: "192",
	lantencyContent: "Latency",
	latencySubtitle: "ms",
	reduction: "3X",
	reductionSubtitle: "Next-Token Latency Versus 16 bit format",
	lantencySubContent: "",
};

// 4ᵗʰ Gen Intel® Xeon® Processor
// export const commonVariables =  generateCommonVariables("border-[#b1d272]", "bg-[#b1d272]");

// export const cardContents = {
// 	title1: "4ᵗʰ Gen Intel® Xeon® Processor",
// 	subtitle1: "",
// 	title2: "Llama 2 70b",
// 	bit: 16,
// 	latency: "566",
// 	lantencySubContent: "Next-Token",
// 	lantencyContent: "Latency",
// 	latencySubtitle: "ms",
// 	reduction: "",
// 	reductionSubtitle: "",
// };
