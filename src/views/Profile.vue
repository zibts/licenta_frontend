<template>
  <div class="profile">
    <h1>Profil</h1>
    <div class="card">
      <ul class="list-group">
        <li class="list-group-item">Email : {{ user.email }}</li>
        <li class="list-group-item">
          Nume utilizator :{{ user.numeUtilizator }}
        </li>
        <li class="list-group-item">
          Nume, prenume {{ user.utilizator.nume }},
          {{ user.utilizator.prenume }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["getProfile"]),
  },
  created() {
    this.getProfile();
  },
};
</script>

<style scoped>
</style>