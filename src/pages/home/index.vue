<template>
  <SideNav />
  <TopNav :username="user?.username!" />
  <section class="main-page-content">
    <router-view />
  </section>
</template>

<script setup lang="ts">
import SideNav from "@/components/navigation/SideNav.vue";
import TopNav from "@/components/navigation/TopNav.vue";
import { User } from "@/lib/services/authentication/models/userModel";
import { useAuth } from "vue-auth3";

const user = useAuth().user<User>();
</script>

<style scoped lang="scss">
$padding: 2pc;

.main-page-content {
  width: calc(100% - $navbar-width - 40px - ($padding * 2));
  height: calc(100vh - $navbar-height - ($padding * 2));
  margin-top: $navbar-height;
  margin-left: $navbar-width + 40px;
  background-color: $background-color-primary;
  padding: $padding;
}
</style>
