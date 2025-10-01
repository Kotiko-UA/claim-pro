<script setup lang="ts">
const state = reactive({
  fullName: '',
  isCheck: false,
  files: [],
})

const uploadedFiles = ref<File[]>([])

function handleFilesChanged(files: File[]) {
  console.log('files', files)
}
watch(state, () => console.log(state))
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
      <div class="mt-5">
        <EntityFilePicker
          v-model:files="state.files"
          @change="handleFilesChanged"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" module></style>
