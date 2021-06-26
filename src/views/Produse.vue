<template>
  <div class="productmanager">
    <div class="d-flex justify-content-center">
      <SearchBar @change="watchSearch" :placeholder="placeholder"></SearchBar>
    </div>
    <div class="row justify-content-center" id="smallFilter">
      <div class="col-10">
        <button
          class="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          style="width: 100%"
        >
          Căutare după criterii
        </button>
        <div class="collapse" id="collapseExample">
          <FilterComponent
            v-on:filterCategorie="setCategorie"
            v-on:filterLocalitate="setLocalitate"
            v-on:anulare="anulare"
          />
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col col-lg-3" id="bigFilter" style="padding: 20px">
        <FilterComponent
          v-on:filterCategorie="setCategorie"
          v-on:filterLocalitate="setLocalitate"
          v-on:anulare="anulare"
        />
      </div>
      <div class="col-lg-8">
        <div class="row d-flex justify-content-center flex-wrap">
          <el-col
            v-for="(produs, index) in searchValueShow ? filteredProduse : list"
            :key="index"
          >
            <div
              class="produseCard"
              v-on:click="
                $router.push({ path: `produs/${produs._id.toString()}` })
              "
            >
              <el-card
                :body-style="{
                  padding: '20px',
                  height: '270px',
                }"
              >
                <div :style="getPhotos(produs.img)"></div>
                <div style="padding: 14px">
                  <h4 style="font-size: 16px; font-weight: bold">
                    {{ produs.numeProdus }}
                  </h4>
                  <div
                    class="details"
                    style="display: flex; flex-direction: column"
                  >
                    <span
                      style="font-size: 12px; margin: 5px; font-weight: bold"
                      >Prețul: {{ produs.pretProdus }} RON</span
                    >
                    <span
                      style="
                        font-size: 12px;
                        color: red;
                        font-weight: bold;
                        margin: 5px;
                      "
                      >Expiră:
                      {{ moment(produs.dataExpirarii).format("LLL") }}</span
                    >
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
        </div>
        <div class="infinite-wrapper">
          <infinite-loading
            force-use-infinite-wrapper
            @infinite="infiniteHandler"
          ></infinite-loading>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "../components/SearchBar.vue";
import FilterComponent from "../components/FilterComponent.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { SearchBar, FilterComponent },

  computed: mapGetters(["user", "esteLogat", "rolUtilizator", "esteFirma"]),
  data() {
    return {
      page: 1,
      currentDate: new Date(),
      list: [],
      categorie: "",
      localitate: "",
      localProdus: {},
      toggledDropDown: false,
      unFilteredProduse: [],
      filteredProduse: [],
      searchedValue: "",
      searchValueShow: false,
      placeholder: "Introduceți denumirea unui produs",
    };
  },
  methods: {
    ...mapActions(["getAllProduse"]),
    setLocalitate(localitate) {
      this.localitate = localitate;
      this.watchSearch();
    },
    setCategorie(categorie) {
      this.categorie = categorie;
      this.watchSearch();
    },
    anulare() {
      this.categorie = "";
      this.localitate = "";
      this.watchSearch();
    },
    async watchSearch(search) {
      if (search) {
        this.searchedValue = search;
        this.searchValueShow = true;
        const searchProdus = await axios.get(
          "http://localhost:8081/api/produse",
          {
            params: {
              search: search,
            },
          }
        );
        if (this.categorie != "" && this.localitate != "") {
          this.filteredProduse = searchProdus.data.filter(
            (produs) =>
              produs.categorieProdus == this.categorie &&
              produs.localitate == this.localitate &&
              produs.numeProdus
                .toLowerCase()
                .includes(this.searchedValue.toLowerCase())
          );
        } else if (this.categorie != "") {
          this.filteredProduse = searchProdus.data.filter(
            (produs) =>
              produs.categorieProdus == this.categorie &&
              produs.numeProdus
                .toLowerCase()
                .includes(this.searchedValue.toLowerCase())
          );
        } else if (this.localitate != "") {
          this.filteredProduse = searchProdus.data.filter(
            (produs) => produs.localitate == this.localitate
          );
        } else {
          this.filteredProduse = searchProdus.data;
          console.log("bruh");
        }
      } else {
        if (this.categorie != "" && this.localitate != "") {
          this.filteredProduse = this.list.filter(
            (produs) =>
              produs.categorieProdus == this.categorie &&
              produs.localitate == this.localitate
          );
          this.searchValueShow = true;
        } else if (this.categorie != "") {
          this.filteredProduse = this.list.filter(
            (produs) => produs.categorieProdus == this.categorie
          );
          this.searchValueShow = true;
        } else if (this.localitate != "") {
          this.filteredProduse = this.list.filter(
            (produs) => produs.localitate == this.localitate
          );
          this.searchValueShow = true;
        } else {
          this.searchValueShow = false;
          this.filteredProduse = this.list;
        }
      }
    },
    infiniteHandler($state) {
      axios
        .get("http://localhost:8081/api/produse", {
          params: {
            page: this.page,
          },
        })
        .then(({ data }) => {
          if (data.length) {
            this.page += 1;
            this.list.push(...data);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
    getPhotos(filename) {
      // return { backgroundColor: "yellow", height: "200px" };
      return {
        backgroundImage: `url("/assets/products/${filename}")`,
        height: "120px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        borderRadius: "20px",
        border: "1px solid #27ae60 ",
        boxShadow: " inset 0px 0px 10px 1px rgba(0,0,0,0.2)",
      };
    },
  },
  async created() {
    // this.unFilteredProduse = await this.getAllProduse();
  },
};
</script>

<style scoped>
* {
  font-family: "Raleway", sans-serif;
}

.el-col {
  width: 200px;
  transition: 0.3s all;
  margin: 20px;
}

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
img {
  width: 80%;
}
@media (max-width: 750px) {
  #bigFilter {
    display: none !important;
  }
  .el-col {
    width: 150px;

    transition: 0.3s all;
    margin-top: 20px !important;
    margin: 5px;
  }
}
@media (min-width: 751px) and (max-width: 1120px) {
  #bigFilter {
    display: none !important;
  }
  .el-col {
    width: 22%;
    transition: 0.3s all;
    margin-top: 20px !important;
    margin: 5px;
  }
}

@media (min-width: 1121px) and (max-width: 1480px) {
  #smallFilter {
    display: none !important;
  }
  .el-col {
    width: 23%;
    transition: 0.3s all;
    margin-top: 20px !important;
    margin: 5px;
  }
}

@media (min-width: 1480px) {
  #smallFilter {
    display: none !important;
  }
}
</style>

