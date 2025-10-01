<script setup lang="ts">
import { ref } from 'vue'
import iconPen from '@/assets/images/icons/pen-icon.svg?url'
import iconFigures from '@/assets/images/icons/figure-icon.svg?url'
import iconCalc from '@/assets/images/icons/calc-icon.svg?url'
import iconHeart from '@/assets/images/icons/heart-icon.svg?url'
const tabs = [
  {
    id: 'tab1',
    label: 'Appraisals and Umpire Services',
  },
  { id: 'tab2', label: 'Daily & CAT Deployments' },
  { id: 'tab3', label: 'Estimate Supplement Services for Insurance Claims' },
  { id: 'tab4', label: 'Expert Witness Support' },
]
const tab1Text = [
  'Independent valuation of property damage (buildings, equipment,inventory, etc.)',
  'Detailed loss assessments following fire, water, wind, or other perils',
  'Appraisal representation for either the policyholder or insurer',
  'Umpire services when needed to resolve disputes',
  'Comprehensive reports that comply with industry and legal standards',
]
const tab3Text = [
  'Review of initial insurance estimates: We carefully review the insurer`s original estimate for potential discrepancies or omissions.',
  'Identification of additional repairs: Our expert appraisers identify overlooked damages or necessary repairs that were not initially included in the insurer’s estimate.',
  'Detailed supplemental estimates: We provide clear, itemized estimates for the missing or underestimated repair work, including labor, materials, and overhead costs.',
  'Compliance with insurance policy terms: All supplements are prepared to ensure they comply with the terms and conditions of your insurance policy, making the process smoother and more efficient.',
  'Professional communication with insurers: We assist in presenting the supplemental estimate to the insurance company, settlement adjustments.',
]
const tab4Text = [
  'Independent valuation of property damage (buildings, equipment, inventory, etc.)',
  'Detailed loss assessments following fire, water, wind, or other perils',
  'Appraisal representation for either the policyholder or insurer',
  'Umpire services when needed to resolve disputes',
  'Comprehensive reports that comply with industry and legal standards',
]
const activeTab = ref('tab1')

function setTab(id: string) {
  activeTab.value = id
}
</script>

<template>
  <section class="tab-section">
    <div class="container">
      <div class="tab-buttons">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="setTab(tab.id)"
          :class="{ active: activeTab === tab.id }"
        >
          {{ tab.label }}
        </button>
      </div>

      <div
        class="tab-content"
        :class="{ active: activeTab === 'tab1' }"
        id="tab1"
      >
        <div class="big-number">1</div>
        <div class="title-wrap">
          <img class="tab-icon" :src="iconPen" alt="decorative" />
          <h2 class="tab-title">
            Appraisals and
            <br />
            Umpire Services
          </h2>
          <p class="tab-title-text">
            When a property loss occurs and there’s a dispute over the value of
            the damage, our appraisers provide a fair, independent, and
            professional resolution.
            <br />
            We specialize in appraisals under the Appraisal Clause found in
            residential and commercial insurance policies, offering a neutral
            third-party evaluation of the amount of loss. Our services are
            designed to help insurance companies and policyholders avoid
            litigation and reach timely, equitable settlements.
          </p>
        </div>
        <div class="benefits-wrap">
          <h2 class="benefits-title">
            Our Insurance Appraisal Services
            <span>Include:</span>
          </h2>
          <ul class="benefits-list">
            <entity-pin-text-item v-for="text in tab1Text" :text="text" />
          </ul>
          <p class="tab-title-text">
            Our team has deep expertise in insurance policies, construction
            costs, property valuation, and claim documentation. We work
            efficiently to protect your financial interests while maintaining
            professionalism and impartiality throughout the process.
          </p>
        </div>
      </div>
      <div
        class="tab-content"
        :class="{ active: activeTab === 'tab2' }"
        id="tab2"
      >
        <div class="big-number">2</div>
        <div class="title-wrap">
          <img class="tab-icon" :src="iconFigures" alt="decorative" />
          <h2 class="tab-title">
            Daily &
            <br />
            CAT Deployments
          </h2>
          <p class="tab-title-text">
            Beyond catastrophe response, our independent adjusters provide
            comprehensive daily adjustment services for both residential and
            commercial property claims. From routine losses to complex cases, we
            handle every claim with the same level of accuracy, professionalism,
            and care.
          </p>
        </div>
        <div class="benefits-wrap">
          <p class="tab-title-text">
            Our team conducts prompt on-site inspections, thoroughly documents
            damages, and prepares detailed, accurate estimates that align with
            policy coverage. We specialize in a wide range of property claims,
            including fire, water, wind, hail, and other everyday losses.
            <br />
            <br />
            For carriers, we offer a seamless extension of your claims team —
            delivering timely reporting, consistent communication, and reliable
            results. Whether it’s a single-family home, multi-unit complex, or
            commercial property, we ensure fair, efficient, and professional
            claim resolution every step of the way.
          </p>
        </div>
      </div>
      <div
        class="tab-content"
        :class="{ active: activeTab === 'tab3' }"
        id="tab3"
      >
        <div class="big-number">3</div>
        <div class="title-wrap">
          <img class="tab-icon" :src="iconCalc" alt="decorative" />
          <h2 class="tab-title">
            Estimate Supplement
            <br />
            Services for Insurance Claims
          </h2>
          <p class="tab-title-text">
            In the event of a property loss, policyholders often find that
            initial estimates provided by insurance adjusters may not fully
            capture the scope of repairs or replacements required. Our estimate
            supplement services bridge this gap by providing a detailed,
            accurate, and comprehensive breakdown of additional costs to ensure
            that the insured party receives the full reimbursement necessary to
            restore the property to its pre-loss condition.
          </p>
        </div>
        <div class="benefits-wrap">
          <h2 class="benefits-title">
            Our Estimate Supplement Services
            <span>Include:</span>
          </h2>
          <ul class="benefits-list">
            <entity-pin-text-item v-for="text in tab3Text" :text="text" />
          </ul>
          <p class="tab-title-text">
            Our team is equipped with industry-specific knowledge to prepare
            accurate estimates for all types of claims, including damage to
            buildings, equipment, and inventory. With our estimate supplement
            services, you can be confident that you’re receiving the full
            financial support needed to cover your business’s restoration costs.
          </p>
        </div>
      </div>
      <div
        class="tab-content"
        :class="{ active: activeTab === 'tab4' }"
        id="tab4"
      >
        <div class="big-number">4</div>
        <div class="title-wrap">
          <img class="tab-icon" :src="iconHeart" alt="decorative" />
          <h2 class="tab-title">
            Expert Witness
            <br />
            Support
          </h2>
          <p class="tab-title-text">
            When a property loss occurs and there’s a dispute over the value of
            the damage, our appraisers provide a fair, independent, and
            professional resolution.
            <br />
            We specialize in appraisals under the Appraisal Clause found in
            residential and commercial insurance policies, offering a neutral
            third-party evaluation of the amount of loss. Our services are
            designed to help insurance companies and policyholders avoid
            litigation and reach timely, equitable settlements.
          </p>
        </div>
        <div class="benefits-wrap">
          <h2 class="benefits-title">
            Our Insurance Appraisal Services
            <span>Include:</span>
          </h2>
          <ul class="benefits-list">
            <entity-pin-text-item v-for="text in tab4Text" :text="text" />
          </ul>
          <p class="tab-title-text">
            Our team has deep expertise in insurance policies, construction
            costs, property valuation, and claim documentation. We work
            efficiently to protect your financial interests while maintaining
            professionalism and impartiality throughout the process.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.tab-section {
  background-image: url('/bg/what-tab-bg-1.svg'), url('/bg/what-tab-bg-2.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: top left, top right;
  background-size: contain, contain;
}
.tab-buttons {
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  @include laptop {
    flex-direction: row;
    justify-content: center;
  }
}

.tab-buttons button {
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: var(--Dark);
  border: none;
  border-left: 1px solid var(--Grey-light);
  @include laptop {
    border-left: none;
    border-top: 1px solid var(--Grey-light);
  }
  &.active {
    border-left: 3px solid #81b7d5;
    @include laptop {
      border-left: none;
      border-top: 3px solid #81b7d5;
    }
  }
}

.tab-content {
  position: relative;
  display: none;
  flex-direction: column;
  gap: 32px;
  align-items: flex-end;
  @include laptop {
    flex-direction: row;
    justify-content: space-between;
  }
}

.tab-content.active {
  display: flex;
}
.tab-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  @include laptop {
    margin-bottom: 24px;
  }
}
.big-number {
  position: absolute;
  top: 0;
  right: 56px;

  color: #eaeff6;
  font-family: 'Manrope';
  font-size: 150px;
  font-weight: 800;
  line-height: 100%;
  @include backdrop-blur(12px);
  z-index: 0;
  @include laptop {
    font-size: 300px;
    left: 80px;
    right: auto;
  }
}
.title-wrap {
  position: relative;
  z-index: 2;
}
.tab-title {
  margin-bottom: 16px;
  color: var(--Dark);
  font-size: 24px;
  font-weight: 700;
  line-height: 140%;
  @include laptop {
    font-size: 32px;
  }
}
.tab-title-text {
  color: var(--Dark);
  line-height: 140%;
  @include laptop {
    font-size: 20px;
  }
}
.benefits-wrap {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 16px;
  border-left: 1px solid rgba(110, 131, 162, 0.5);
  @include laptop {
    gap: 24px;
    padding-left: 48px;
  }
}
.benefits-title {
  color: var(--Dark);
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
  @include laptop {
    font-size: 32px;
  }
  & > span {
    font-style: italic;
    font-weight: 300;
  }
}
.benefits-list {
  display: flex;
  gap: 8px;
  flex-direction: column;
}
</style>
