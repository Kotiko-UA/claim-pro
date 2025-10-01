<script setup lang="ts">
const state = reactive({
  fullName: '',
  isCheck: false,
})
// watch(state, () => console.log(state))
</script>
<template>
  <section>
    <div class="container">
      <EntityInput
        label="Full Name:"
        placeholder="Enter text"
        v-model="state.fullName"
      />
      <EntityCheckbox label="check box" v-model="state.isCheck" />
    </div>
  </section>
</template>
<style lang="scss" module></style>
