<template>
  <h1>{{ $t("workstreams.addWorkstream.workstreamProjects.title") }}</h1>
  <div class="flex pt-6 justify-between items-end">
    <Button
      :label="$t('general.back')"
      severity="secondary"
      icon="pi pi-arrow-left"
      @click="$emit('action:back')"
    />
    <Button
      :label="$t('general.create')"
      icon="pi pi-check"
      iconPos="right"
      @click="handleNext"
    />
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["action:back", "action:next"]);

const handleNext = () => {
  //TODO: Some cool validations.

  emits("action:next");
};
</script>
