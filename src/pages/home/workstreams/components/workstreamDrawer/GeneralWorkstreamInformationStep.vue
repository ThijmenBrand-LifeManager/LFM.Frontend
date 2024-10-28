<template>
  <div class="flex flex-col">
    <h1>
      {{ $t("workstreams.addWorkstream.workstreamInformation.title") }}
    </h1>
    <div class="mb-4">
      <small>{{ $t("workstreams.addWorkstream.requiredFields") }}</small>
    </div>
  </div>
  <div class="flex flex-col gap-2 mb-2">
    <label for="workstreamTitle"
      >{{
        $t("workstreams.addWorkstream.workstreamInformation.workstreamTitle")
      }}*</label
    >
    <TextInput
      v-model="props.workstreamValues.workstreamTitle"
      input-name="workstreamTitle"
      :invalid="v$.workstreamTitle.$error"
      :error="v$.workstreamTitle.$errors[0]"
    />
  </div>
  <div class="flex flex-col gap-2 mb-2">
    <label for="description">{{
      $t(
        "workstreams.addWorkstream.workstreamInformation.workstreamDescription"
      )
    }}</label>
    <Textarea
      id="description"
      v-model="props.workstreamValues.workstreamDescription"
      rows="5"
      cols="30"
    />
  </div>

  <div class="flex flex-col gap-2">
    <label for="startDate">{{
      $t("workstreams.addWorkstream.workstreamInformation.startDate")
    }}</label>
    <CustomDatePicker v-model="props.workstreamValues.workstreamStartDate" />
  </div>
  <div class="flex pt-6 justify-between items-end">
    <Button
      :label="$t('general.reviewAndCreate')"
      severity="secondary"
      icon="pi pi-check"
      @click="handleCreate"
    />
    <Button
      :label="$t('general.next')"
      icon="pi pi-arrow-right"
      iconPos="right"
      @click="handleNext"
    />
  </div>
</template>

<script lang="ts" setup>
import TextInput from "@/shared/components/form/TextInput.vue";
import CreateWorkstreamDto from "@/lib/models/workstream/CreateWorkstream";
import { useVuelidate } from "@vuelidate/core";
import { minLength, required } from "@vuelidate/validators";
import CustomDatePicker from "@/shared/components/form/CustomDatePicker.vue";

const props = defineProps({
  workstreamValues: {
    type: Object as () => CreateWorkstreamDto,
    required: true,
  },
});

const rules = {
  workstreamTitle: { required, minLength: minLength(3) },
};

const v$ = useVuelidate(rules, props.workstreamValues);

const emits = defineEmits(["action:next", "action:create"]);

const handleCreate = async () => {
  if (!(await v$.value.$validate())) return;

  emits("action:create", props.workstreamValues);
};

const handleNext = async () => {
  if (!(await v$.value.$validate())) return;

  emits("action:next");
};
</script>
