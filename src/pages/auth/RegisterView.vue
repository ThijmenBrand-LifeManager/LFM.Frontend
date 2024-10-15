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
          <h2>Register to LifeManager</h2>
          <p>Please fill out the requested information.</p>
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
        <span>
          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="enter your email..."
            v-model="email"
          />
        </span>
        <span>
          <label for="email">Username</label>
          <input
            type="text"
            id="username"
            placeholder="choose a username..."
            v-model="username"
          />
        </span>
        <span>
          <label for="password">Password</label>
          <input
            @keyup.enter="handleSubmit"
            type="password"
            id="password"
            v-model="password"
            placeholder="create a password"
          />
        </span>
        <input
          @click="handleSubmit"
          type="submit"
          id="submit"
          value="Register!"
        />
      </div>
      <div class="register-container">
        <p>Already an account?</p>
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "vue-auth3";

const auth = useAuth();

const email = ref("");
const username = ref("");
const password = ref("");

const handleSubmit = async () => {
  alert("Unfortunatly, this feature is not yet implemented.");
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
      display: flex;
      flex-direction: column;
      margin: 10px;
      width: 100%;

      label {
        font-size: 0.8rem;
        margin-bottom: 5px;
        font-weight: 500;
      }

      input {
        height: 2pc;
        padding: 0.5em;
        border: 1.5px solid #ccc;
        border-radius: 5px;
      }
    }

    input[type="submit"] {
      width: 100%;
      height: 2pc;
      margin: 10px;
      background-color: rgb(80, 80, 251);
      color: white;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      cursor: pointer;
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
