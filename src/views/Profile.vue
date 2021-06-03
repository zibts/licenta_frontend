<template>
  <div>
    <div v-if="rolUtilizator == 'user'">
      <ProfileUser v-bind:user="user" />
    </div>
    <div v-if="rolUtilizator == 'firma' && esteFirma">
      <ProfileFirma v-bind:user="user" />
    </div>
  </div>
</template>

<script>
import ProfileUser from "../components/ProfileUser";
import ProfileFirma from "../components/ProfileFirma";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { ProfileUser, ProfileFirma },
  computed: mapGetters(["user", "esteLogat", "rolUtilizator", "esteFirma"]),
  methods: {
    ...mapActions(["getProfile"]),
  },
  created() {
    this.getProfile();
  },
};
</script>

<style scoped></style>
