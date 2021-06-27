<template>
  <div
    class="productmanager"
    style="display: flex; justify-content: center; flex-wrap: wrap"
  >
    <div
      class="row"
      v-if="rezervari.length == 0"
      style="color: black; font-weight: bold; font-size: 48px"
    >
      Nu aveți rezervări
    </div>
    <div
      class="row"
      style="display: flex; justify-content: center; padding: 30px"
      v-for="(rezervare, index) in rezervari"
      :key="index"
    >
      <div class="card" style="width: 450px">
        <h5 class="card-header">Codul rezervării : {{ rezervare.code }}</h5>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <div class="row">
            <div class="col">
              <p class="card-text">
                <span style="font-weight: bold">Produsul :</span>
                {{ rezervare.produsId[0].numeProdus }}
              </p>
              <p class="card-text">
                <span style="font-weight: bold">Cantitatea rezervată :</span>
                {{ rezervare.cantitateRezervata }}
              </p>
              <p class="card-text">
                <span style="font-weight: bold">Pretul produselor :</span>
                {{
                  rezervare.produsId[0].pretProdus *
                  rezervare.cantitateRezervata
                }}
              </p>
            </div>
            <div class="col">
              <p class="card-text">
                <span style="font-weight: bold">Furnizorul :</span>
                {{ rezervare.furnizorId[0].firma.nume }}
              </p>
              <p class="card-text">
                <span style="font-weight: bold">Adresa :</span>
                {{ rezervare.furnizorId[0].firma.adresa }}
              </p>
              <p class="card-text">
                <span style="font-weight: bold">Localitatea :</span>
                {{ rezervare.furnizorId[0].firma.locatia }}
              </p>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted" style="font-weight: bold">
          <span style="color: black"> Expiră pe data de: </span>
          <span style="color: red">{{
            moment(rezervare.produsId[0].dataExpirarii).format("LLL")
          }}</span>
        </div>
        <div
          class="card-footer text-muted"
          style="color: black !important; font-weight: bold"
          :class="[
            typeof rezervare.realizat === 'undefined'
              ? 'inProgress'
              : rezervare.realizat
              ? 'done'
              : 'fail',
          ]"
        >
          Status:
          <span v-if="typeof rezervare.realizat === 'undefined'"
            >În așteptare</span
          >
          <span
            v-if="
              typeof rezervare.realizat === 'boolean' && !rezervare.realizat
            "
            >Nu ați reușit la timp.
          </span>
          <span
            v-if="typeof rezervare.realizat === 'boolean' && rezervare.realizat"
            >Realizată</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["user", "esteLogat", "rolUtilizator", "esteFirma"]),
  data() {
    return {
      currentDate: new Date(),
      localProdus: {},
      rezervari: [],
      produsInterMed: {},
    };
  },
  methods: {
    ...mapActions(["getAllRezervari"]),
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
      this.rezervari = await this.getAllRezervari();
    },
  },
  async created() {
    this.rezervari = await this.getAllRezervari();
    console.log(this.rezervari);
  },
};
</script>

<style scoped>
* {
  font-family: "Raleway", sans-serif;
}
.fail {
  background: #eb5757;
}
.inProgress {
  background: #f2c94c;
}
.done {
  background: #27ae60;
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
  .card {
    width: 300px !important;
  }
}
</style>


