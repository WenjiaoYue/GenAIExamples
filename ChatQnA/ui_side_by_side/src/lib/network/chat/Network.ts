import { env } from "$env/dynamic/public";
import { SSE } from "sse.js";

const RAG_BASE_URL = env.RAG_BASE_URL;
const WITHOUT_RAG_BASE_URL = env.WITHOUT_RAG_BASE_URL;

export async function fetchTextStream(
	query: string,
	knowledge_base_id: string,
	group: string
) {
	console.log("1", query);

	let payload = {};
	let url = "";

	if (group == "1") {
		url = `${WITHOUT_RAG_BASE_URL}/code_chat`;
		payload = {
			prompt: query,
			stream: true
		};
	} else if (group == "2") {
		url = `${RAG_BASE_URL}/code_chat`;
		payload = {
			prompt: query,
			stream: true
		};
		
	}

	return new SSE(url, {
		headers: { "Content-Type": "application/json" },
		payload: JSON.stringify(payload),
	});
}
