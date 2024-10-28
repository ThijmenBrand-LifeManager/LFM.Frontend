<template>
  <div class="workstream-cards">
    <Card
      v-for="workstream in filteredWorkstreams"
      :key="workstream.id"
      style="width: 10rem; overflow: hidden"
    >
      <template #title>
        <h1>{{ workstream.name }}</h1>
      </template>
      <template #content>
        <p>{{ workstream.description }}</p>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { WorkstreamState } from "@/lib/models/workstream/WorkstreamState";
import { Workstream } from "@/lib/services/workstream/models/workstream";
import { computed } from "vue";

const props = defineProps({
  workstreams: {
    type: Array as () => Workstream[],
    default: [],
  },
  filter: Number as () => WorkstreamState | null,
});

const filteredWorkstreams = computed(() => {
  if (!props.filter) {
    return props.workstreams;
  }

  return props.workstreams.filter(
    (workstream) => workstream.state === props.filter
  );
});
</script>

<style scoped lang="scss">
.workstream-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
