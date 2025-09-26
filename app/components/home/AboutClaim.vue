<script setup lang="ts"></script>
<template>
	<section>
		<div class="container">
			<div class="about-wrap">
				<div class="about-title-wrap">
					<h2 class="about-title">About <span>Claim Pro</span></h2>
					<p class="about-text">
						Since 2018, our professionals have been
						<span
							>trusted to deliver professional and impartial insurance
							adjustment, appraisal and umpire services.</span
						>
						With a commitment to accuracy, fairness, and integrity, we
						specialize in handling property claims with the highest standards of
						service. Our team brings expertise in both residential and
						commercial losses, working diligently to provide thorough
						<span>inspections, clear documentation, and reliable results.</span>
						Whether responding to daily claims, catastrophic events, or
						appraisal disputes, <span>Claim Pro</span> is dedicated to bridging
						the gap between carriers and policyholders through
						<span>transparent, unbiased, and efficient claim resolution.</span>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
.about-wrap {
	max-width: 600px;
	display: flex;
	justify-content: space-between;
}
.about-title {
	margin-bottom: 24px;
	color: var(--Dark);

	color: var(--Dark, #1d3557);
	font-size: 48px;
	font-weight: 600;
	line-height: 120%;
	& > span {
		font-style: italic;
		font-weight: 300;
	}
}
.about-text {
	color: var(--Dark);
	font-size: 20px;
	line-height: 140%;
	& > span {
		font-weight: 700;
	}
}
</style>
