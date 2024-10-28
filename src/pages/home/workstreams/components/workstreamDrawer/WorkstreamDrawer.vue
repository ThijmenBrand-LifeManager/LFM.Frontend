<template>
  <Drawer
    :visible="show"
    @update:visible="$emit('update:show', $event)"
    :header="$t('workstreams.addWorkstream.title')"
    position="right"
    class="lfm-drawer"
  >
    <template #default>
      <Stepper value="1">
        <StepList>
          <Step value="1">{{
            $t("workstreams.addWorkstream.steps.step1")
          }}</Step>
          <Step value="2">{{
            $t("workstreams.addWorkstream.steps.step2")
          }}</Step>
          <Step value="3">{{
            $t("workstreams.addWorkstream.steps.step3")
          }}</Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" value="1">
            <WorkstreamDrawerStep1
              :workstreamValues="state"
              @action:create="handleCreate"
            />
          </StepPanel>
        </StepPanels>
      </Stepper>
    </template>
  </Drawer>
</template>

<script lang="ts" setup>
import CreateWorkstreamModel from "@/lib/models/workstream/CreateWorkstream";
import WorkstreamDrawerStep1 from "@/pages/home/workstreams/components/workstreamDrawer/WorkstreamDrawerStep1.vue";
import { reactive } from "vue";

const emits = defineEmits(["update:show", "create"]);

const state = reactive<CreateWorkstreamModel>({
  workstreamTitle: "",
  workstreamDescription: "",
  workstreamStartDate: new Date(),
});

const handleCreate = (values: CreateWorkstreamModel) => {
  emits("create", values);
};

defineProps({
  show: Boolean,
});
</script>

<style lang="scss">
.p-inputtext {
  width: 100%;
}

.p-textarea {
  width: 100%;
}

.input-error {
  color: red;
}
</style>
