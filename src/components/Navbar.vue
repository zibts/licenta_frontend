<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <router-link class="navbar-brand" to="/">
      <img
        v-on:click="setActive('about')"
        class="logo"
        src="../assets/logo.png"
        alt="Savipt"
      />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Aici sunt elementele pentru utilziatorii care nu sunt logati -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li
          class="nav-item"
          v-on:click="setActive('about')"
          :class="[activeItem == 'about' ? 'active' : 'notActive']"
        >
          <router-link class="nav-link barbtn" to="/">Despre</router-link>
        </li>

        <li
          class="nav-item"
          v-on:click="setActive('produse')"
          :class="[activeItem == 'produse' ? 'active' : 'notActive']"
        >
          <router-link class="nav-link barbtn" to="/produse"
            >Vizualizează produse</router-link
          >
        </li>

        <li v-if="!esteLogat" class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle barbtn"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Înregistrare
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li
              class="nav-item"
              v-on:click="setActive('register')"
              :class="[activeItem == 'register' ? 'active' : 'notActive']"
              v-if="!esteLogat"
            >
              <router-link class="nav-link barbtn" to="/register"
                >Înregistrare utilizator</router-link
              >
            </li>
            <li
              class="nav-item"
              v-on:click="setActive('register-firma')"
              :class="[activeItem == 'register-firma' ? 'active' : 'notActive']"
              v-if="!esteLogat"
            >
              <router-link class="nav-link barbtn" to="/registerfirma"
                >Înregistrare firma</router-link
              >
            </li>
          </div>
        </li>
        <li
          class="nav-item"
          v-on:click="setActive('login')"
          :class="[activeItem == 'login' ? 'active' : 'notActive']"
          v-if="!esteLogat"
        >
          <router-link class="nav-link barbtn" to="/login">Login</router-link>
        </li>

        <li v-if="esteLogat" class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle barbtn"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Contul meu
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li
              class="dropdown-item"
              v-on:click="setActive('prod-mele')"
              :class="[activeItem == 'prod-mele' ? 'active' : 'notActive']"
              v-if="esteFirma && rolUtilizator == 'firma'"
            >
              <router-link to="/produsemanager">Produsele mele</router-link>
            </li>
            <li
              class="dropdown-item"
              v-on:click="setActive('rez-mele')"
              :class="[activeItem == 'rez-mele' ? 'active' : 'notActive']"
              v-if="!esteFirma && rolUtilizator == 'user'"
            >
              <router-link to="/rezervariuser">Rezervările mele</router-link>
            </li>
            <li
              class="dropdown-item"
              v-on:click="setActive('profil')"
              :class="[activeItem == 'profil' ? 'active' : 'notActive']"
              v-if="esteLogat"
            >
              <router-link to="/profile">Profil</router-link>
            </li>
            <div class="dropdown-divider"></div>
            <li>
              <a
                to="/logout"
                v-if="esteLogat"
                class="dropdown-item"
                @click.prevent="logoutUser"
                >Log out</a
              >
            </li>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return { activeItem: "" };
  },
  computed: {
    ...mapGetters(["esteLogat", "rolUtilizator", "esteFirma"]),
  },
  methods: {
    ...mapActions(["logout"]),
    checkrole() {
      console.log(this.rolUtilizator);
    },
    logoutUser() {
      this.logout();
    },
    setActive: function (item) {
      this.activeItem = item;
    },
  },
};
</script>
<style scoped lang="scss">
.logo {
  width: 80px;
  margin-left: 30%;
}
.navbar-toggler {
  background-color: #27ae60;
}
.navbar {
  background: white;
  box-shadow: rgba(50, 50, 93, 0.1) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.1) 0px 3px 7px -3px;
}

.dropdown-item {
  display: flex;
  justify-content: center;

  a {
    color: black;
  }
}

.dropdown-item.active,
.dropdown-item:active {
  background: #e3e3e3 !important;
  a {
    color: black;
  }
}
.nav-item {
  background-color: #27ae60;
  margin: 10px;
  padding: 2px 7px 2px 7px;
  border-radius: 30px;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 12px;
  border-radius: 8px;
  transition: 0.5s;
}
.nav-item.active {
  background: rgba(39, 174, 96, 0.35);
  color: #1b8448 !important;
}
.nav-item.active .barbtn {
  color: #1b8448 !important;
}
.navbar-toggler {
  margin-right: 10%;
}
.nav-item.dropdown.show {
  transition: 0.3s all;
}
.dropdown-menu {
  margin-left: -40px;
  margin-top: 10px;
  transition: 0.3s all;
}

@media (max-width: 990px) {
  .dropdown-menu {
    margin-left: 0px;
    margin-top: 0px;
  }
}

.dropdown-item {
  font-size: 12px;
}

.barbtn {
  color: white !important;
}
</style>
