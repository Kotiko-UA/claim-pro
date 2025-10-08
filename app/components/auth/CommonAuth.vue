<script setup lang="ts">
import Logo from '@/assets/images/icons/logo-icon.svg?url'
import Arrow from '@/assets/images/icons/chevron-left.svg?url'

type CommonAuthProps = {
  title?: string  
  margin?: '48px'  | '24px'
  align?: 'center' | 'between'
}

const props = withDefaults(defineProps<CommonAuthProps>(), {
  title: '',  
  align: 'between',
  margin: '48px'
})
</script>

<template>
  <section class="auth-section">
    <div class="auth-bg"></div>
    <div class="auth-right-block">
      <div class="container auth-container">
        <div :class="['auth-content', { 'is-centered': props.align === 'center' }]">
          <NuxtLink to="/">
            <img class="auth-logo" loading="lazy" :src="Logo" alt="logo image" />
          </NuxtLink>

          <div>
            <h1 v-if="props.title" :class="['auth-title', { 'is-reset': props.margin === '24px' }]" v-html="props.title" />
            <slot name="form" />
          </div>

          <div class="flex flex-col items-center gap-4 mt-12">
          <slot name="auth-link" />
           <NuxtLink to="/" class="flex items-center gap-1 auth-link">
            <img class="w-4 h-4" loading="lazy" :src="Arrow" alt="logo image" />
            <span class="auth-link-text">Go Home</span>
          </NuxtLink>
          </div>
           
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

   .auth-section {
      height: 100svh;                 
      padding: 24px 16px;
      background-image: url('/bg/auth-hero.avif');
      background-repeat: no-repeat;
      background-position: top left;
      background-size: cover;
      box-sizing: border-box;        

      @include tablet {
        background: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100svh;              
      }
    }

    .auth-container{
      height: 100%;
    }

    .auth-right-block {
      display: flex;
      flex-direction: column;
      height: 100%;                   
      padding: 40px 0;
      box-sizing: border-box;        
      background-color: var(--Light);

      @include tablet {                   
        padding: 80px 0;
      }

    }

    .auth-content{
      display: flex;
      flex-direction: column;
      align-items: center;    
      text-align: center;
      justify-content: space-between;
      height: 100%;
    }

    .auth-content.is-centered {
      justify-content: center;
    }
    
    .auth-logo{
      width: 84px;
      height: 59px;
      margin-bottom: 48px;

      @include tablet {
        width: 120px;
        height: 85px;
      }

      @include laptop {
        width: 163px;
        height: 116px;
      }

    }

    .auth-bg{
      @include tablet {
        background-image: url('/bg/auth-hero.avif');
        background-repeat: no-repeat;
        background-position: top left;
        background-size: cover;
      }
    }

    :deep(.auth-title){
      font-style: italic;
      font-weight: 300;
      font-size: 28px;
      line-height: 120%;
      color: var(--Dark);
      margin-bottom: 48px;
        
        @include tablet {
          font-size: 36px;
        }

        @include laptop {
          font-size: 48px;
        }
    }

    :deep(.auth-title span){
      font-weight: 600;
      font-style: normal;
    }

    :deep(.auth-title.is-reset){
      margin-bottom: 24px;
    }

    
    :deep(.auth-link-text){
      display: flex;
      gap: 4px;
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      text-align: center;
      color: var(--Gray);
      
    }

    :deep(.auth-link) {
      position: relative;
      text-decoration: none;
      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0%;
        height: 1px;  
        background-color: var(--Gray);
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
}

</style>
