<template>
  <div class="page-background">
    <div class="login-container">
      <div aria-label="authentication-header">
        <div class="background layer0"></div>
        <div class="background layer1"></div>
        <div class="header-content">
          <img
            alt="lifemanager-logo"
            height="100"
            width="100"
            src="/logo.webp"
          />
          <h2>Welcome back</h2>
          <p>Please enter your details to sign in</p>
        </div>
      </div>
      <div class="sso-login-container">
        <span class="sso-login">
          <img
            src="../../assets/icons/google-logo.png"
            alt="sign in with Google"
          />
        </span>
        <span class="sso-login">
          <img
            src="../../assets/icons/microsoft-logo.webp"
            alt="sign in with Microsoft"
          />
        </span>
      </div>
      <span class="seperation-line">
        <hr />
        <p>OR</p>
        <hr />
      </span>
      <div class="credentials-container">
        <IftaLabel>
          <InputText id="username" v-model="email" variant="outlined" />
          <label for="username">Email address</label>
        </IftaLabel>
        <IftaLabel>
          <InputText
            v-model="password"
            inputId="password"
            variant="outlined"
            type="password"
          />
          <label for="password">Password</label>
        </IftaLabel>
        <Button @click="handleSubmit" label="Sign in" />
      </div>
      <div class="register-container">
        <p>Don't have an account?</p>
        <router-link to="/register">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routeNames } from "@/pages/routes";
import InputText from "primevue/inputtext";
import { ref } from "vue";
import { useAuth } from "vue-auth3";

const auth = useAuth();

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  auth.login({
    data: {
      email: email.value,
      password: password.value,
    },
    body: {
      email: email.value,
      password: password.value,
    },
    redirect: { name: routeNames.DASHBOARD },
    remember: true,
    staySignedIn: true,
    fetchUser: true,
  });
};
</script>

<style scoped lang="scss">
.page-background {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30em;
  background-color: #fff;
  border-radius: 10px;
  border: 7px solid white;

  div[aria-label="authentication-header"] {
    display: grid;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;

    .background {
      grid-row-start: 1;
      grid-column-start: 1;
      width: 28em;
      height: 10em;
    }

    .layer0 {
      background: radial-gradient(
          circle 40vh at 50% -80%,
          rgba(255, 255, 255, 0) 30%,
          rgba(255, 255, 255, 1) 60%
        ),
        conic-gradient(
            from 90deg at 1.5px 1.5px,
            #8880 90deg,
            rgba(42, 15, 164, 0.1) 0
          )
          center -1px / 40px 40px;
    }

    .layer1 {
      background: radial-gradient(
        circle 40vh at 50% -60%,
        rgba(42, 15, 164, 0.2) 0%,
        rgba(255, 255, 255, 0) 50%
      );
    }

    .header-content {
      grid-row-start: 1;
      grid-column-start: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 4vh;
    }

    img {
      border-radius: 50%;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 5px;
    }

    p {
      font-size: 1rem;
      color: #666;
    }
  }

  .sso-login-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 75%;

    .sso-login {
      cursor: pointer;
      margin: 5px;
      border: 1.5px solid #ccc;
      display: inline-block;
      padding: 0.5em 4em;
      border-radius: 10px;

      img {
        width: 2em;
        height: 2em;
      }
    }
  }

  .seperation-line {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding: 1em;

    hr {
      width: 100%;
      border: 0.5px solid #ccc;
    }

    p {
      margin: 0 20px;
      color: #666;
      font-weight: 500;
      font-size: smaller;
    }
  }

  .credentials-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;

    span {
      width: 100%;
      margin: 0.5em 0;
    }

    .p-inputtext {
      width: 100%;
    }

    .p-button {
      width: 100%;
    }
  }

  .register-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 70%;

    p {
      margin-right: 5px;
    }

    a {
      color: rgb(80, 80, 251);
      font-weight: 600;
    }
  }
}
</style>
