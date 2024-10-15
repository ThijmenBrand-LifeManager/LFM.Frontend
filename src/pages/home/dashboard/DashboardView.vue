<template>
  <div v-if="auth.check()">
    <h1>Dashboard</h1>
    <p>welcome {{ user?.username }}</p>
  </div>
  <div v-else>
    <h1>Dashboard</h1>
    <p>you are not logged in</p>
  </div>

  <button
    @click="
      auth.logout({ makeRequest: false, redirect: { name: routeNames.LOGIN } })
    "
  >
    Logout
  </button>
</template>

<script setup lang="ts">
import { User } from "@/lib/services/authentication/models/userModel";
import { routeNames } from "@/pages/routes";
import { useAuth, useUser } from "vue-auth3";

const auth = useAuth();
const user = useUser<User>();
</script>
