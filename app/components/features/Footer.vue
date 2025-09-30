<script setup lang="ts">
import navLinks from '@/shared/files/nav-links'
</script>
<template>
  <footer class="footer-el">
    <div class="container">
      <div class="footer-wrap">
        <div class="logo-wrap">
          <EntityLogo class="footer-logo" />
          <p class="logo-text">
            At Claim Pro, we believe that our success is driven by the dedicated professionals who
            serve our clients. Since our inception in 2018, we have been committed to providing
            exceptional service and support in the insurance claims process.
          </p>
        </div>
        <nav class="footer-nav">
          <nuxt-link
            class="footer-nav-link"
            v-for="link in navLinks"
            :key="link.title"
            :to="link.to"
          >
            {{ link.title }}
          </nuxt-link>
        </nav>
        <div class="contact-wrap">
          <div class="footer-contact-links-wrap">
            <EntityNavIconLink
              class="footer-contact-link footer-phone"
              href="tel:3075006992"
              type="phone"
              text="(307) 500 6992"
            />
            <EntityNavIconLink
              class="footer-contact-link footer-mail"
              href="mailto:admin@getclaimpro.com"
              type="mail"
              text="admin@getclaimpro.com"
            />
          </div>
          <div class="footer-blue-icons-wrap">
            <EntityShareButton2 :style="'!text-[#1D3557]'" />
            <EntitySocialLinks class="footer-social-links" />
          </div>
        </div>
      </div>

      <div class="policy-wrap">
        <p class="all-rights-text">© 2025 | Claim Pro | All Rights Reserved</p>
        <nuxt-link class="policy-link" to="/PrivacyPolicy">Privacy Policy</nuxt-link>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer-el {
  padding: 24px 0;
  background-color: #f8fbff;
}
.footer-wrap {
  margin-bottom: 32px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  border-bottom: 1px solid rgba(217, 217, 217, 0.5);
  @include tablet {
    flex-direction: row;
    justify-content: space-between;
  }
  @include laptop {
    margin-bottom: 48px;
  }
}

.logo-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  @include tablet {
    max-width: 39%;
  }
  @include laptop {
    max-width: 393px;
    gap: 24px;
  }
}
.footer-logo {
  width: 102px;
  height: 72px;
}
.logo-text {
  color: var(--Dark);
  font-size: 14px;
  line-height: 140%;
  @include laptop {
    font-size: 16px;
  }
}
// nav
.footer-nav {
  display: flex;
  flex-direction: column;
}
.footer-nav-link {
  padding: 16px;
  color: var(--Dark);
  line-height: 140%;
}
// contact
.contact-wrap {
  display: flex;
  justify-content: space-between;
  @include tablet {
    flex-direction: column;
  }
}

.footer-blue-icons-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include tablet {
    gap: 16px;
    align-items: flex-start;
  }
  @include laptop {
    flex-direction: row;
  }
}
.footer-social-links {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  @include tablet {
    gap: 16px;
  }
}

//policy
.policy-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  @include laptop {
    flex-direction: row;
    justify-content: space-between;
  }
}
.all-rights-text,
.policy-link {
  color: var(--Text-secondary);
  font-size: 14px;
  line-height: 120%;
}
</style>
