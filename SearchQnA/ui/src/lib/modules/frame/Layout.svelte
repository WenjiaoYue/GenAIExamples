<!--
  Copyright (c) 2024 Intel Corporation

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->

<script lang="ts">
	import Scrollbar from "$lib/shared/components/scrollbar/Scrollbar.svelte";
</script>

<div class="h-full overflow-hidden relative">
	<div class="h-full flex items-start">
		<div class="relative flex flex-col h-full pl-0 w-full bg-white">
			<Scrollbar
				className="h-0 grow "
				classLayout="h-full"
				alwaysVisible={false}
			>
				<slot />
			</Scrollbar>
		</div>
	</div>
</div>
