<template>
  <section>
    <div class="title-section">
      <h1>Workstreams</h1>
      <button>
        <router-link to="/home/workstreams/create"
          >Create Workstream</router-link
        >
      </button>
    </div>
    <div class="workstream-status-selection">
      <span class="view-mode">
        <p>Active workstreams</p>
        <p class="amount">{{ activeWorkstreams.length }}</p>
      </span>
      <span class="view-mode">
        <p>Completed workstreams</p>
        <p class="amount">{{ completedWorkstreams.length }}</p>
      </span>
      <span class="view-mode">
        <p>All workstreams</p>
        <p class="amount">{{ workstreams.length }}</p>
      </span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const workstreams = ref([]);
const activeWorkstreams = ref([]);
const completedWorkstreams = ref([]);
</script>

<style lang="scss">
$menu-border-width: 2px;

.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  button {
    background-color: $primary-application-color;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;

    a {
      color: white;
      text-decoration: none;
    }
  }
}

.workstream-status-selection {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;

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
</style>
