<template>
  <div class="register">
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Înregistrare</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="inregistrareUtilizator">
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
              <label for="username">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Introduceti email-ul"
                v-model="email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="nume">Nume</label>
              <input
                id="nume"
                type="text"
                placeholder="Introduceti numele"
                v-model="nume"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="username">Prenume</label>
              <input
                id="prenume"
                type="text"
                placeholder="Introduceti prenumele"
                v-model="prenume"
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
            <div class="form-group">
              <label for="parola">Confirmati parola</label>
              <input
                id="parolaConfirm"
                type="passwordConfirm"
                class="form-control"
                placeholder="Parola"
                v-model="parolaConfirm"
              />
            </div>
            <button class="btn btn-primary">Înregistrare</button>
            <router-link to="/login" class="card-link"
              >Deja aveti un cont ?</router-link
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
      email: "",
      parola: "",
      parolaConfirm: "",
      nume: "",
      prenume: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    inregistrareUtilizator() {
      let utilizator = {
        numeUtilizator: this.numeUtilizator,
        email: this.email,
        parola: this.parola,
        parola_confirmare: this.parolaConfirm,
        utilizator: {
          nume: this.nume,
          prenume: this.prenume,
        },
      };
      this.register(utilizator).then((res) => {
        if (res.data.success) {
          this.$router.push("login");
        }
      });
    },
  },
};
</script>