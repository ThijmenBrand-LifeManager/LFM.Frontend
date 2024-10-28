<template>
  <div class="flex flex-col">
    <div class="flex items-center">
      <DatePicker v-model="model" showIcon fluid :showOnFocus="false" />
    </div>
  </div>
  <p v-if="error" class="block text-xs font-normal text-red-500">
    {{ error.$message }}
  </p>
</template>

<script lang="ts" setup>
import { ErrorObject } from "@vuelidate/core";

const model = defineModel<Date>();

defineProps({
  error: {
    type: Object as () => ErrorObject,
    default: null,
  },
});
</script>

<style scoped lang="scss">
.p-datepicker {
  width: 100%;
}
</style>
