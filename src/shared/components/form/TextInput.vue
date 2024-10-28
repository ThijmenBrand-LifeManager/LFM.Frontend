<template>
  <div class="flex flex-col">
    <div class="flex items-center">
      <InputText :id="inputName" v-model="model" :invalid="invalid" />
    </div>
  </div>
  <p v-if="error" class="block text-xs font-normal text-red-500">
    {{ error.$message }}
  </p>
</template>

<script lang="ts" setup>
import { ErrorObject } from "@vuelidate/core";

const model = defineModel<string>();

defineProps({
  invalid: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Object as () => ErrorObject,
    default: null,
  },
  inputName: {
    type: String,
    required: true,
  },
});
</script>
