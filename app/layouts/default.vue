<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const hideLayout = route.path.startsWith("/auth/");

</script>

<template>
	<div>
		<FeaturesHeader v-if="!hideLayout" />
		<slot />
		<FeaturesFooter v-if="!hideLayout" />
	</div>
</template>
