<template>
  <div v-if="auth.authenticated()">
    <h1>Dashboard</h1>
    <p>welcome {{ username }}</p>
  </div>
  <div v-else>
    <h1>Dashboard</h1>
    <p>you are not logged in</p>
  </div>

  <button @click="auth.logout()">Logout</button>
</template>

<script setup lang="ts">
import { userStore } from "@/lib/services/authentication/authentication";
import { computed } from "vue";
import { useAuth } from "@/lib/services/authentication/authentication";

const username = computed(() => userStore.user?.username);
const auth = useAuth();
</script>

<style lang=""></style>
