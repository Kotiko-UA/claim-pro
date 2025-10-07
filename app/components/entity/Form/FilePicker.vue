<template>
  <div class="file-picker">
    <div
      ref="dropzone"
      class="dropzone"
      role="button"
      tabindex="0"
      @click="openFileDialog"
      @keydown.enter.prevent="openFileDialog"
      @dragenter.prevent="onDragEnter"
      @dragover.prevent
      @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop"
      :data-drag-active="dragActive"
    >
      <img
        class="upload-icon"
        :src="filePickerIcon"
        alt="upload icon placeholder"
      />
      <p class="picker-text">Drag & drop</p>

      <input
        ref="input"
        type="file"
        :accept="acceptString"
        multiple
        @change="onFileChange"
        style="display: none"
      />
    </div>

    <ul class="file-list" v-if="files.length">
      <li
        class="file-item"
        v-for="(file, index) in files"
        :key="fileKey(file, index)"
      >
        <span class="file-name">{{ file.name }}</span>
        <span class="file-size">{{ readableSize(file.size) }}</span>
        <button
          class="del-button"
          type="button"
          @click="removeFile(index)"
          aria-label="delete file"
        >
          <IconDel />
        </button>
      </li>
    </ul>

    <div class="file-errors" v-if="errors.length">
      <div v-for="(err, i) in errors" :key="i" class="error">{{ err }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import filePickerIcon from '@/assets/images/icons/file-picker-icon.svg?url'
import IconDel from '@/assets/images/icons/icon-close.svg'

const MAX_FILES = 10
const MAX_FILE_SIZE = 10 * 1024 * 1024
const ACCEPT_EXTENSIONS = [
  '.pdf',
  '.doc',
  '.docx',
  '.xls',
  '.xlsx',
  '.jpg',
  '.jpeg',
  '.png',
]
const acceptString = ACCEPT_EXTENSIONS.join(',')

const emit = defineEmits<{
  (e: 'update:files', files: File[]): void
  (e: 'change', files: File[]): void
}>()

const input = ref<HTMLInputElement | null>(null)
const dropzone = ref<HTMLElement | null>(null)
const files = ref<File[]>([])
const errors = ref<string[]>([])
const dragActive = ref(false)
let dragCounter = 0

function openFileDialog() {
  input.value?.click()
}

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (!target.files) return
  handleFiles(Array.from(target.files))
  target.value = ''
}

function onDragEnter(e: DragEvent) {
  dragCounter++
  dragActive.value = true
}

function onDragLeave(e: DragEvent) {
  dragCounter = Math.max(0, dragCounter - 1)
  if (dragCounter === 0) dragActive.value = false
}

function onDrop(e: DragEvent) {
  dragCounter = 0
  dragActive.value = false
  if (!e.dataTransfer) return
  handleFiles(Array.from(e.dataTransfer.files))
}

function handleFiles(incoming: File[]) {
  errors.value = []
  const remainingSlots = MAX_FILES - files.value.length
  if (incoming.length > remainingSlots) {
    errors.value.push(
      `You can add only ${remainingSlots} more file(s). Some files will be skipped.`
    )
  }
  for (const file of incoming) {
    if (files.value.length >= MAX_FILES) break
    if (!hasAllowedExtension(file.name)) {
      errors.value.push(`File "${file.name}" has an invalid extension.`)
      continue
    }
    if (file.size > MAX_FILE_SIZE) {
      errors.value.push(`File "${file.name}" exceeds the 10 MB limit.`)
      continue
    }
    if (isDuplicate(file)) {
      errors.value.push(`File "${file.name}" has already been added.`)
      continue
    }
    files.value.push(file)
  }
  emit('update:files', files.value.slice())
  emit('change', files.value.slice())
}

function hasAllowedExtension(name: string) {
  const idx = name.lastIndexOf('.')
  if (idx === -1) return false
  const ext = name.slice(idx).toLowerCase()
  return ACCEPT_EXTENSIONS.includes(ext)
}

function isDuplicate(file: File) {
  return files.value.some(
    f =>
      f.name === file.name &&
      f.size === file.size &&
      f.lastModified === file.lastModified
  )
}

function removeFile(index: number) {
  files.value.splice(index, 1)
  emit('update:files', files.value.slice())
  emit('change', files.value.slice())
}

function readableSize(bytes: number) {
  if (bytes < 1024) return bytes + ' B'
  const kb = bytes / 1024
  if (kb < 1024) return kb.toFixed(1) + ' KB'
  const mb = kb / 1024
  return mb.toFixed(2) + ' MB'
}

function fileKey(file: File, index: number) {
  return `${file.name}-${file.size}-${file.lastModified}-${index}`
}
</script>
<style lang="scss" scoped>
.file-picker {
  width: 100%;
  min-height: 178px;

  border-radius: 8px;
  background-color: #f8fbff;
  @include laptop {
    // width: 580px;
    min-height: 292px;
  }
}
.dropzone {
  width: 100%;
  height: 178px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  @include laptop {
    height: 292px;
  }
}
.upload-icon {
  width: 48px;
  height: 48px;
}
.picker-text {
  color: var(--Dark7);
}

.file-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.file-item {
  display: flex;
  align-items: flex-end;
  gap: 4px;
}
.file-name {
  color: var(--Dark7);
  font-size: 14px;
}
.file-size {
  color: var(--Dark7);
  font-size: 12px;
}
.del-button {
  width: 24px;
  height: 24px;
  & > svg {
    color: var(--Dark);
    width: 24px;
    height: 24px;
  }
}
.file-errors {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.error {
  color: red;
  font-size: 12px;
}
</style>
