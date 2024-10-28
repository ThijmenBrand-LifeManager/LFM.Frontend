<!-- <template>
  <span v-if="show">
    <small v-if="customError" class="input-error">{{ customError }}</small>
    <small class="input-error" v-for="error of errors" :key="error.$uid">
      {{ error.$message }}</small
    >
  </span>
</template>

<script setup lang="ts">
import { ErrorObject } from "@vuelidate/core";

defineProps({
  show: Boolean,
  errors: {
    type: Array as () => Array<ErrorObject>,
    default: [],
  },
  customError: {
    type: String,
    default: "",
  },
});
</script> -->
