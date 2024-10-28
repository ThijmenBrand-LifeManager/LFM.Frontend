<template>
  <Drawer
    :visible="show"
    @update:visible="$emit('update:show', $event)"
    :header="$t('workstreams.addWorkstream.title')"
    position="right"
    class="lfm-drawer"
  >
    <template #default>
      <Stepper :value="workstreamCreationSteps[0].id" linear>
        <StepList>
          <Step v-for="step in workstreamCreationSteps" :value="step.id">{{
            $t(step.title)
          }}</Step>
        </StepList>
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" :value="1">
            <WorkstreamDrawerStep1
              :workstreamValues="state"
              @action:create="activateCallback(4)"
              @action:next="activateCallback(2)"
            />
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" :value="2">
            <WorkstreamDrawerStep2
              @action:back="activateCallback(1)"
              @action:next="activateCallback(3)"
            />
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" :value="3">
            <WorkstreamDrawerStep3
              @action:back="activateCallback(2)"
              @action:next="activateCallback(4)"
            />
          </StepPanel>
          <StepPanel v-slot="{ activateCallback }" :value="4">
            <WorkstreamDrawerStep4
              @action:back="activateCallback(3)"
              @action:next="handleCreate"
            />
          </StepPanel>
        </StepPanels>
      </Stepper>
    </template>
  </Drawer>
</template>

<script lang="ts" setup>
import CreateWorkstreamModel from "@/lib/models/workstream/CreateWorkstream";
import WorkstreamDrawerStep1 from "@/pages/home/workstreams/components/workstreamDrawer/GeneralWorkstreamInformationStep.vue";
import WorkstreamDrawerStep2 from "@/pages/home/workstreams/components/workstreamDrawer/AddProjectsToWorkstreamStep.vue";
import WorkstreamDrawerStep3 from "@/pages/home/workstreams/components/workstreamDrawer/AddMemebersToWorkstreamStep.vue";
import WorkstreamDrawerStep4 from "@/pages/home/workstreams/components/workstreamDrawer/WorkstreamReviewStep.vue";
import { reactive } from "vue";

const emits = defineEmits(["update:show", "create"]);

const workstreamCreationSteps = [
  {
    id: 1,
    title: "workstreams.addWorkstream.steps.step1",
  },
  {
    id: 2,
    title: "workstreams.addWorkstream.steps.step2",
  },
  {
    id: 3,
    title: "workstreams.addWorkstream.steps.step3",
  },
  {
    id: 4,
    title: "workstreams.addWorkstream.steps.step4",
  },
];

const state = reactive<CreateWorkstreamModel>({
  workstreamTitle: "",
  workstreamDescription: "",
  workstreamStartDate: new Date(),
});

const handleCreate = () => {
  emits("create", state);
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
