<script lang="ts" setup>
	defineProps<{ classes?: string; styles?: string }>();
</script>

<template>
	<div class="d-inline-block">
		<NuxtImg
			src="/assets/images/logo/low-wb.png"
			:class="classes"
			:style="styles"
		/>
	</div>
</template>
