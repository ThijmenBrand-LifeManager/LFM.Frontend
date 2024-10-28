<template>
  <span v-for="(matched, idx) in targetRoutes" :key="idx" class="bread-crumbs">
    <a :href="matched.path" :class="{ grayout: grayout(idx) }">
      {{ matched.name }}
    </a>
    <span v-if="idx != Object.keys(targetRoutes).length - 1"> / </span>
  </span>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const targetRoutes = computed(() =>
  route.matched.filter((m) => m.path !== "/")
);

const grayout = (idx: number) => {
  return idx != Object.keys(targetRoutes.value).length - 1;
};
</script>

<style lang="scss" scoped>
.bread-crumbs {
  font-size: 0.8rem;

  .grayout {
    color: $text-color-tertiary;
  }

  a {
    color: $text-color-primary;
    text-decoration: none;

    &:hover {
      color: $primary-application-color;
      text-decoration: none;
    }
  }
}
</style>
