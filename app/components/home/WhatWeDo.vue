<script setup lang="ts">
import calcIcon from '@/assets/images/icons/calc-icon.svg'
import figureIcon from '@/assets/images/icons/figure-icon.svg'
import heartIcon from '@/assets/images/icons/heart-icon.svg'
import penIcon from '@/assets/images/icons/pen-icon.svg'
</script>
<template>
	<section class="what-section">
		<div class="container">
			<div class="card-main-wrap">
				<div class="title-card">
					<h2 class="what-title">What We <span>Do</span></h2>
					<p class="what-text">
						Discover our core services designed to support insurers,
						contractors, and clients at every stage of the claims process.
					</p>
				</div>
				<div class="card-wrap bg-[#FFF]">
					<div class="icon-wrap">
						<img loading="lazy" class="w-10 h-10" :src="penIcon" alt="icon" />
						<h3 class="card-title">Appraisals and Umpire Services</h3>
					</div>
					<p class="card-text text-[#1D3557]">
						When a property loss occurs and there’s a dispute over the value of
						the damage, our appraisers provide a fair, independent, and
						professional resolution.
					</p>
				</div>
				<div class="card-wrap bg-[#1D3557]">
					<div class="icon-wrap">
						<img
							loading="lazy"
							class="w-10 h-10"
							:src="figureIcon"
							alt="icon" />
						<h3 class="card-title">Daily & CAT Deployments</h3>
					</div>
					<p class="card-text text-[#F5F5F5]">
						Beyond catastrophe response, our independent adjusters provide
						comprehensive daily adjustment services for both residential and
						commercial property claims.
					</p>
				</div>
				<div class="card-wrap bg-[#6D8DB9]">
					<div class="icon-wrap">
						<img loading="lazy" class="w-10 h-10" :src="calcIcon" alt="icon" />
						<h3 class="card-title">
							Estimate Supplement Services for Insurance Claims
						</h3>
					</div>
					<p class="card-text text-[#F5F5F5]">
						In the event of a property loss, policyholders often find that
						initial estimates provided by insurance adjusters may not fully
						capture the scope of repairs or replacements required.
					</p>
				</div>
				<div class="card-wrap bg-[#FFF]">
					<div class="icon-wrap">
						<img loading="lazy" class="w-10 h-10" :src="heartIcon" alt="icon" />
						<h3 class="card-title">Expert Witness Support</h3>
					</div>
					<p class="card-text text-[#1D3557]">
						Beyond catastrophe response, our independent adjusters provide
						comprehensive daily adjustment services for both residential and
						commercial property claims. From routine losses to complex cases, we
						handle every claim with the same level of accuracy, professionalism,
						and care.
					</p>
				</div>
				<div class="last-card">
					<p class="last-card-text">
						From appraisals to CAT deployments, we provide reliable solutions
						tailored to your business needs.
					</p>
					<EntityLearnMore class="!ml-auto" to="/WhatWeDo" />
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
.what-section {
	background-image: url('/bg/what-we-bg.svg');
	background-repeat: no-repeat;
	background-position: top left;
	background-size: contain;
}
.card-main-wrap {
	display: grid;
	justify-content: space-between;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	row-gap: 48px;
}
.title-card {
	width: 398px;
	height: 246px;
	display: flex;
	justify-content: start;
	align-items: flex-start;
	gap: 32px;
	flex-direction: column;
}
.what-title {
	color: var(--Dark);
	font-size: 48px;
	font-weight: 600;
	line-height: 120%;
	& > span {
		font-style: italic;
		font-weight: 300;
	}
}
.what-text {
	color: var(--Dark);

	font-size: 20px;
	line-height: 120%; /* 24px */
}

.card-wrap {
	display: flex;
	width: 398px;
	height: 246px;
	padding: 24px;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	border-radius: 8px;
	box-shadow: 0 4px 29.8px 0 rgba(227, 234, 243, 0.65);
}
.icon-wrap {
	display: flex;
	align-items: flex-start;
	gap: 16px;
}
.card-title {
	font-size: 24px;
	font-weight: 700;
	line-height: 140%;
}
.card-text {
	font-size: 20px;
	line-height: 120%;

	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	text-overflow: ellipsis;
}
.last-card {
	width: 398px;
	height: 246px;
	display: flex;
	flex-direction: column;
	gap: 32px;
}
.last-card-text {
	margin-top: auto;

	color: var(--Dark);
	font-size: 20px;
	line-height: 120%;
}
</style>
