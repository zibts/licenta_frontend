<template>
  <div class="productmanager">
    <div
      class="modal fade bd-example-modal-xl"
      style="margin-top: 100px"
      id="exampleModalLong"
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
      <el-col>
        <el-button
          type="primary"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalLong"
        >
          <i class="fas fa-plus" style="margin: 5px"></i>Adaugă
          produs</el-button
        ></el-col
      >
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col v-for="(o, index) in unFilteredProduse" :key="index">
        <el-card :body-style="{ padding: '20px', height: '400px' }">
          <div :style="getPhotos(o.img)"></div>
          <div style="padding: 14px">
            <h4>{{ o.numeProdus }}</h4>
            <div class="details" style="display: flex; flex-direction: column">
              <span style="font-size: 14px; margin: 5px"
                >Prețul: {{ o.pretProdus }} RON</span
              >
              <span style="font-size: 12px; color: gray; margin: 5px"
                >Expiră: {{ o.dataExpirarii }}</span
              >
            </div>

            <div class="bottom clearfix">
              <el-button type="primary">Modificare</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AddProductForm from "../components/AddProductForm";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { AddProductForm },

  computed: mapGetters(["user", "esteLogat", "rolUtilizator", "esteFirma"]),
  data() {
    return {
      currentDate: new Date(),
      unFilteredProduse: [],
    };
  },
  methods: {
    ...mapActions(["getProductFirma"]),
    getPhotos(filename) {
      // return { backgroundColor: "yellow", height: "200px" };
      return {
        backgroundImage: `url("/assets/products/${filename}")`,
        height: "200px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        borderRadius: "20px",
        border: "2px solid #27ae60 ",
        boxShadow: " inset 0px 0px 10px 1px rgba(0,0,0,0.2)",
      };
    },
    async refreshList() {
      this.unFilteredProduse = await this.getProductFirma();
    },
  },
  async created() {
    this.unFilteredProduse = await this.getProductFirma();
    console.log(this.unFilteredProduse);
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
  width: 20%;
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


