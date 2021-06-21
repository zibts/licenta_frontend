<template>
  <div class="productmanager">
    <div
      class="modal fade bd-example-modal-xl"
      style="margin-top: 100px"
      id="addProduct"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <AddProductForm @added="refreshList()" />
        </div>
      </div>
    </div>

    <el-row type="flex" class="row-bg" justify="center" sty>
      <SearchBar @change="watchSearch" :placeholder="placeholder"></SearchBar>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col
        v-for="(produs, index) in searchValueShow ? filteredProduse : list"
        :key="index"
      >
        <el-card
          :body-style="{
            borderRadius: '50px',
            padding: '20px',
            height: '300px',
          }"
        >
          <div :style="getPhotos(produs.img)"></div>
          <div style="padding: 14px">
            <h4 style="font-size: 16px">{{ produs.numeProdus }}</h4>
            <div class="details" style="display: flex; flex-direction: column">
              <span style="font-size: 12px; margin: 5px"
                >Prețul: {{ produs.pretProdus }} RON</span
              >
              <span style="font-size: 12px; color: gray; margin: 5px"
                >Expiră: {{ moment(produs.dataExpirarii).format("LLL") }}</span
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="infinite-wrapper">
      <infinite-loading
        force-use-infinite-wrapper
        @infinite="infiniteHandler"
      ></infinite-loading>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import AddProductForm from "../components/AddProductForm";
import SearchBar from "../components/SearchBar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { AddProductForm, SearchBar },

  computed: mapGetters(["user", "esteLogat", "rolUtilizator", "esteFirma"]),
  data() {
    return {
      page: 1,
      currentDate: new Date(),
      list: [],
      localProdus: {},
      unFilteredProduse: [],
      filteredProduse: [],
      searchValueShow: false,
      placeholder: "Introduceți denumirea unui produs",
    };
  },
  methods: {
    ...mapActions(["getAllProduse"]),
    methods: {
      //   moment: function (data) {
      //     return moment(data).format("LLL");
      //   },
    },
    async watchSearch(param) {
      if (param) {
        this.searchValueShow = true;
        const searchProdus = await axios.get(
          "http://localhost:8081/api/produse",
          {
            params: {
              search: param,
            },
          }
        );
        this.filteredProduse = searchProdus.data;
      } else {
        this.filteredProduse = this.list;
        this.searchValueShow = false;
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
        height: "145px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        borderRadius: "20px",
        border: "2px solid #27ae60 ",
        boxShadow: " inset 0px 0px 10px 1px rgba(0,0,0,0.2)",
      };
    },
  },
  async created() {
    // this.unFilteredProduse = await this.getAllProduse();
  },
};
</script>

<style>
* {
  font-family: "Raleway", sans-serif;
}
.el-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.el-col {
  width: 200px;
  transition: 0.3s all;
  margin: 20px;
}

.el-button {
  background-color: #27ae60;
  border-color: #27ae60;
}
.el-button--primary:focus,
.el-button--primary:hover {
  background-color: #1b8448;
  border-color: #1b8448;
}
img {
  width: 80%;
}
@media (max-width: 1020px) {
  .el-col {
    width: 40%;
  }
}
@media (max-width: 680px) {
  .el-col {
    width: 80%;
  }
}
</style>

