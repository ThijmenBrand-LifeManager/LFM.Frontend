<template>
  <div>
    <div class="workstream-card">
      <div class="card-header">
        <span class="workstream-icon">
          <img
            src="@/assets/icons/example-workstream.svg"
            alt="workstream icon"
          />
        </span>
        <span>
          <h2>{{ workstream.name }}</h2>
          <p>{{ workstream.description }}</p>
        </span>
      </div>
      <div class="card-body"><p>here still comes some data</p></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Workstream } from "@/lib/services/workstream/models/workstream";

defineProps({
  workstream: {
    type: Object as () => Workstream,
    required: true,
  },
});
</script>

<style lang="scss">
.workstream-card {
  height: 15em;
  width: 25em;
  border: 2px solid #e5e5e5;
  background-color: $background-color-tertiary;
  border-radius: 10px;
  cursor: pointer;

  .card-header {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;

    .workstream-icon {
      margin-right: 1rem;
      img {
        width: 2em;
        height: 2em;
      }
    }

    h2,
    p {
      margin: 0;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: 500;
    }

    p {
      font-size: 0.875rem;
    }
  }

  .card-body {
    background-color: $background-color-secondary;
    justify-content: space-between;
    margin: 0rem 1rem;
    border-radius: 10px;
    border: 2px solid #e5e5e5;
    height: 9em;
  }
}
</style>
