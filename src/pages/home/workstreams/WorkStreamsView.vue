<template>
  <WorkstreamDrawer
    :show="showWorkstreamDrawer"
    @update:show="showWorkstreamDrawer = $event"
    @create="handleCreate"
  />
  <section>
    <div class="title-section">
      <h1>{{ $t("workstreams.title") }}</h1>
      <Button
        @click="showWorkstreamDrawer = true"
        icon="pi pi-plus"
        :label="$t('workstreams.addWorkstream.title')"
      />
    </div>
    <Tabs value="0">
      <TabList>
        <Tab v-for="tab in workstreamTabs" :key="tab.title" :value="tab.id">{{
          tab.title
        }}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel v-for="tab in workstreamTabs" :key="tab.id" :value="tab.id">
          <WorkstreamFilterTab
            :workstreams="workstreams.data"
            :filter="tab.filter"
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </section>
</template>

<script setup lang="ts">
import CreateWorkstreamModel from "@/lib/models/workstream/CreateWorkstream";
import WorkstreamDrawer from "./components/workstreamDrawer/WorkstreamDrawer.vue";

import { useListWorkstreams } from "@/lib/services/workstream/query";
import Button from "primevue/button";
import { reactive, ref } from "vue";
import { useCreateWorkstream } from "@/lib/services/workstream/mutations";
import { WorkstreamState } from "@/lib/models/workstream/WorkstreamState";
import { useAuth } from "vue-auth3";
import WorkstreamFilterTab from "@/pages/home/workstreams/components/WorkstreamFilterTab.vue";

const workstreams = reactive(useListWorkstreams());

const workstreamTabs = [
  { id: "0", title: "Active", filter: WorkstreamState.InProgress },
  { id: "1", title: "Completed", filter: WorkstreamState.Stopped },
  { id: "2", title: "All", filter: null },
];

const createWorkstream = useCreateWorkstream();
console.log(useAuth());

const handleCreate = (values: CreateWorkstreamModel) => {
  console.log("Running create");
  createWorkstream.mutate(
    {
      name: values.workstreamTitle,
      description: values.workstreamDescription,
      startDate: values.workstreamStartDate,
      state: WorkstreamState.NotStarted,
    },
    {
      onSuccess: () => {
        showWorkstreamDrawer.value = false;
        console.log("Workstream created successfully");
      },
    }
  );
};

const activeWorkstreams = ref([]);
const completedWorkstreams = ref([]);
const showWorkstreamDrawer = ref(false);
</script>

<style lang="scss">
$menu-border-width: 2px;

.p-drawer-right .p-drawer.lfm-drawer {
  width: 40rem;
}

.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }
}

.workstream-status-selection {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;

  .view-mode {
    display: flex;
    flex-direction: row;
    padding: 0.5rem 1rem;
    border-bottom: $menu-border-width solid $text-color-tertiary;
    cursor: pointer;

    &:hover {
      color: $primary-application-color;
      border-bottom: $menu-border-width solid $primary-application-color;
    }

    .amount {
      background-color: $primary-application-color;
      padding: 0.2rem 0.5rem;
      border-radius: $border-radius-primary;
      color: white;
      font-size: 0.6rem;
    }

    p {
      font-size: 0.8rem;
      font-weight: 500;
      margin: 0rem 0.2rem;
    }
  }
}

.workstreams-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
  gap: 1rem;
}
</style>
