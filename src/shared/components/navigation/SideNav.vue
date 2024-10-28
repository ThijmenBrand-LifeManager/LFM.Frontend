<template>
  <nav class="side-nav">
    <span class="logo-section">
      <img src="/logo_secundair.svg" alt="Logo" />
      <p>LifeManager</p>
    </span>

    <span class="navigation-content">
      <router-link to="/" class="menu-item"
        ><img src="@/assets/icons/dashboard.svg" alt="dashboard-icon" />
        Dashboard</router-link
      >
      <router-link to="/workstreams" class="menu-item"
        ><img src="@/assets/icons/workstream.svg" alt="workstream-icon" />
        Workstreams</router-link
      >
      <router-link to="/projects" class="menu-item"
        ><img src="@/assets/icons/project.svg" alt="project-icon" />
        Projects</router-link
      >
    </span>
    <span class="settings-section">
      <router-link to="/settings" class="menu-item"
        ><img src="@/assets/icons/settings.svg" alt="settings-icon" />
        Settings</router-link
      >
    </span>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.router-link-exact-active {
  background-color: $background-color-primary;
  color: $text-color-primary;
}

.side-nav {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  width: $navbar-width;
  background-color: $background-color-secondary;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid $border-color-primary;

  .logo-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    * {
      margin: 5px;
    }

    img {
      width: 50px;
      height: 50px;
    }

    p {
      color: #6385f2;
      text-decoration: none;
      font-size: 1.3rem;
      margin-top: 10px;
    }
  }

  .navigation-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;

    .menu-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 1em 0.5em;
      justify-content: left;
      text-decoration: none;
      margin-top: 10px;
      font-weight: 500;
      width: 90%;
      border-radius: $border-radius-primary;

      img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        color: $text-color-primary;
      }

      &:hover {
        background-color: $background-color-primary;
        color: $text-color-primary;
      }
    }
  }

  .settings-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: auto;

    .menu-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 1em 0.5em;
      justify-content: left;
      text-decoration: none;
      margin-top: 10px;
      font-weight: 500;
      width: 90%;
      border-radius: $border-radius-primary;

      img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        color: $text-color-primary;
      }

      &:hover {
        background-color: $background-color-primary;
        color: $text-color-primary;
      }
    }
  }
}
</style>
