<template>
  <form @submit.prevent="formSubmit" class="login-form">
    <fieldset>
      <legend>{{ title }}</legend>
      <label>
        Username:
        <input type="text" name="username" v-model="username" />
        <span v-if="submitted && !username" class="error">
          Username is required
        </span>
      </label>
      <label>
        Password:
        <input type="password" name="password" v-model="password" />
        <span v-if="submitted && !password" class="error">
          Password is required
        </span>
      </label>
      <button type="submit">Login</button>
    </fieldset>
  </form>
</template>

<script>
import { computed, ref } from 'vue';
export default {
  name: 'LoginForm',
  props: {
    title: String,
    onLogin: Function,
  },
  setup(props) {
    const title = computed(() => props.title || 'Log In');
    const username = ref('');
    const password = ref('');
    const submitted = ref(false);
    const formSubmit = () => {
      if (username.value && password.value) {
        props.onLogin({ username: username.value, password: password.value });
      }
      submitted.value = true;
    };
    return { formSubmit, title, username, password, submitted };
  },
};
</script>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-form fieldset,
.login-form label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.login-form fieldset {
  border: 1px solid lightgray;
  padding: 10px 80px;
}
.login-form input,
.login-form button {
  margin: 4px 0;
}
.login-form .error {
  margin: -2px 0 4px 0;
  color: red;
}
</style>