<script setup lang="ts">
import { ref } from 'vue'
import InfoIcon from '@/assets/images/icons/info-icon.svg'
import CloseIcon from '@/assets/images/icons/icon-close.svg'
import PenIcon from '@/assets/images/icons/pen-icon.svg'

const isPopupOpen = ref(false)

const openPopup = () => {
  isPopupOpen.value = true
}

const closePopup = () => {
  isPopupOpen.value = false
}
</script>

<template>
  <div class="popup-wrap">
    <button class="open-popup-btn" @click="openPopup">
      <InfoIcon class="info-icon" />
    </button>
    <Transition name="fade">
      <div v-if="isPopupOpen" class="info-popup">
        <div class="popup-top-wrap">
          <div class="popup-title-wrap">
            <PenIcon class="pen-icon" />
            <h3 class="popup-title">Note on Document and Photo Uploads:</h3>
          </div>
          <button class="close-popup-btn">
            <CloseIcon class="close-icon" @click="closePopup" />
          </button>
        </div>
        <ul class="popup-list">
          <li class="popup-list-item">
            <p class="list-item-text">
              Supported document formats:
              <span>PDF, DOC, DOCX, XLS, XLSX</span>
            </p>
          </li>
          <li class="popup-list-item">
            <p class="list-item-text">
              Supported image formats:
              <span>JPG, JPEG, PNG</span>
            </p>
          </li>
          <li class="popup-list-item">
            <p class="list-item-text">
              Maximum file size:
              <span>10 MB</span>
            </p>
          </li>
          <li class="popup-list-item">
            <p class="list-item-text">
              It is recommended to give files clear names
              <span>(e.g., Carrier_Estimate.pdf, Roof_Photo1.jpg)</span>
            </p>
          </li>
          <li class="popup-list-item">
            <p class="list-item-text">Multiple files can be uploaded at once</p>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>
<style scoped lang="scss">
.popup-wrap {
  position: relative;
}
.info-icon {
  width: 24px;
  height: 24px;
  color: #6d8db9;
  transition: color 400ms ease-in-out;
  &:hover {
    color: var(--Blue);
  }
}
.open-popup-btn,
.close-popup-btn {
  cursor: pointer;
}
// popup
.info-popup {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;
  width: 100%;
  max-width: 343px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background: var(--Light);
  box-shadow: 0 4px 29.8px 0 rgba(227, 234, 243, 0.65);
  @include tablet {
    right: 64px;
    top: 64px;
    width: auto;
    max-width: 600px;
    padding: 24px;
    gap: 32px;
  }
  @include laptop {
    max-width: 700px;
  }
}
// popup top
.popup-top-wrap {
  display: flex;
  justify-content: space-between;
}
.popup-title-wrap {
  display: flex;
  gap: 8px;
  align-items: center;
}

.pen-icon {
  width: 32px;
  height: 32px;
}
.popup-title {
  color: var(--Dark, #1d3557);
  font-size: 16px;
  line-height: 140%;
  @include tablet {
    font-size: 20px;
  }
}
.close-icon {
  width: 24px;
  height: 24px;
  color: #6d8db9;
  transition: color 400ms ease-in-out;
  &:hover {
    color: var(--Blue);
  }
}

.popup-list-item {
  position: relative;
  padding-left: 12px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 9px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: currentColor;
  }
}
.list-item-text {
  color: var(--Dark, #1d3557);

  font-size: 14px;

  line-height: 140%;
  & > span {
    font-weight: 700;
  }
  @include tablet {
    font-size: 16px;
  }
}
// animate popup
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
