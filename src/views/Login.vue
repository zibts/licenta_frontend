<template>
  <div class="login">
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Login</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="loginUser">
            <div class="form-group">
              <label for="username">Nume utilizator</label>
              <input
                id="numeUtilizator"
                type="text"
                placeholder="Introduceti numele utilizatorului"
                v-model="numeUtilizator"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="parola">Parola</label>
              <input
                id="parola"
                type="password"
                class="form-control"
                placeholder="Parola"
                v-model="parola"
              />
            </div>
            <input type="submit" class="btn btn-primary" value="Login" />
            <router-link to="/register" class="card-link"
              >Înregistrează-te aici</router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      numeUtilizator: "",
      parola: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let utilizator = {
        numeUtilizator: this.numeUtilizator,
        parola: this.parola,
      };
      this.login(utilizator)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("profile");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.card {
  width: 60%;
  border-radius: 0%;
}

.btn {
  border-radius: 0;
}
</style>