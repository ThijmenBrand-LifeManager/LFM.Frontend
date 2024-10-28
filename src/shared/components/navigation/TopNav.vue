<template>
  <div class="top-nav-container">
    <span class="right-content">
      <router-link to="/account" class="account-section">
        <img src="@/assets/icons/account.svg" alt="logo" />
        <p>{{ props.username }}</p>
      </router-link>
    </span>

    <span class="left-content"> <BreadCrumbs /> </span>
  </div>
</template>

<script setup lang="ts">
import BreadCrumbs from "@/shared/components/navigation/BreadCrumbs.vue";

const props = defineProps<{
  username: string;
}>();
</script>

<style scoped lang="scss">
.top-nav-container {
  position: fixed;
  z-index: 0;
  top: 0;
  right: 0;
  height: $navbar-height;
  background-color: $background-color-secondary;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: calc(100% - $navbar-width - 40px - 40px);
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid $border-color-primary;

  .account-section {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 30px;
      height: 30px;
    }

    span {
      color: $text-color-primary;
      font-size: 1.2rem;
      margin-left: 10px;
    }
  }
}
</style>
