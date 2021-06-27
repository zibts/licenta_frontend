<template>
  <!-- Section: Sidebar -->
  <div class="body">
    <!-- Section: Filters -->
    <section>
      <h5>Căutare avansată</h5>
      <hr />
      <!-- Section: Condition -->
      <section class="mb-4">
        <h6 class="font-weight-bold mb-3">Categorie</h6>
        <ul>
          <li
            v-on:click="setCategory('carne')"
            :class="[selectedCategory == 'carne' ? 'active' : 'notActive']"
          >
            <img
              src="../assets/categorii/carne.png"
              alt=""
              style="width: 40px"
            />
            Carne
          </li>
          <li
            v-on:click="setCategory('lactate')"
            :class="[selectedCategory == 'lactate' ? 'active' : 'notActive']"
          >
            <img
              src="../assets/categorii/lactate.png"
              alt=""
              style="width: 40px"
            />
            Lactate
          </li>
          <li
            v-on:click="setCategory('bauturi')"
            :class="[selectedCategory == 'bauturi' ? 'active' : 'notActive']"
          >
            <img
              src="../assets/categorii/bauturi.png"
              alt=""
              style="width: 50px"
            />
            Băuturi
          </li>
          <li
            v-on:click="setCategory('fructe')"
            :class="[selectedCategory == 'fructe' ? 'active' : 'notActive']"
          >
            <img
              src="../assets/categorii/fructe.png"
              alt=""
              style="width: 50px"
            />
            Fructe
          </li>
          <li
            v-on:click="setCategory('legume')"
            :class="[selectedCategory == 'legume' ? 'active' : 'notActive']"
          >
            <img
              src="../assets/categorii/legume.png"
              alt=""
              style="width: 50px"
            />
            Legume
          </li>
          <li
            v-on:click="setCategory('catering')"
            :class="[selectedCategory == 'catering' ? 'active' : 'notActive']"
          >
            <img
              src="../assets/categorii/catering.png"
              alt=""
              style="width: 50px"
            />
            Catering
          </li>
        </ul>
      </section>
      <hr />
      <!-- Section: Condition -->
      <section class="mb-4">
        <h6 class="font-weight-bold mb-3">Localitate</h6>
        <ul>
          <li
            v-on:click="setlocatie('Iași')"
            :class="[selectedlocatie == 'Iași' ? 'active' : 'notActive']"
          >
            Iași
          </li>
          <li
            v-on:click="setlocatie('Chișinău')"
            :class="[selectedlocatie == 'Chișinău' ? 'active' : 'notActive']"
          >
            Chișinău
          </li>
          <li
            v-on:click="setlocatie('București')"
            :class="[selectedlocatie == 'București' ? 'active' : 'notActive']"
          >
            București
          </li>
          <li
            v-on:click="setlocatie('Cluj')"
            :class="[selectedlocatie == 'Cluj' ? 'active' : 'notActive']"
          >
            Cluj
          </li>
          <li
            v-on:click="setlocatie('Timișoara')"
            :class="[selectedlocatie == 'Timișoara' ? 'active' : 'notActive']"
          >
            Timișoara
          </li>
          <li
            v-on:click="setlocatie('Miercurea-Ciuc')"
            :class="[
              selectedlocatie == 'Miercurea-Ciuc' ? 'active' : 'notActive',
            ]"
          >
            Miercurea-Ciuc
          </li>
        </ul>
      </section>
      <!-- Section: Condition -->
    </section>
    <button
      class="btn btn-primary"
      type="button"
      v-on:click="$emit('anulare'), setlocatie(''), setCategory('')"
      style="width: 100%"
    >
      Anulare criterii
    </button>
    <!-- Section: Filters -->
  </div>
  <!-- Section: Sidebar -->
</template>
<script>
export default {
  data() {
    return {
      selectedCategory: "",
      selectedlocatie: "",
    };
  },
  methods: {
    setCategory: function (item) {
      this.selectedCategory = item;
      this.$emit("filterCategorie", item);
    },
    setlocatie: function (locatie) {
      this.selectedlocatie = locatie;
      this.$emit("filterlocatie", locatie);
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #27ae60;
  border-color: #27ae60;
}
.btn:focus,
.btn {
  background-color: #1b8448;
  border-color: #1b8448;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary:active:focus:not(:disabled):not(.disabled),
.btn:focus,
.btn:active,
.btn:hover {
  background-color: #27ae60;
  border-color: #27ae60;
  box-shadow: none !important;
  outline: 0;
}
.active {
  border: 2px solid #206b34;
}
@media (max-width: 750px) {
  /* img {
    display: none;
  }
  li {
    min-width: 40px !important;
  } */
}
@media (min-width: 751px) and (max-width: 1120px) {
  img {
    width: 30px !important;
  }
  li {
    min-width: 40px !important;
  }
}

@media (min-width: 1121px) and (max-width: 1480px) {
  img {
    width: 35px !important;
  }
  li {
    min-width: 40px !important;
  }
}
ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 10px;
  min-width: 80px;
  height: 80px;
  text-decoration: none;
  background: #e9e9e9;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
}
.body {
  background-color: white;
  padding: 30px;
}
</style>