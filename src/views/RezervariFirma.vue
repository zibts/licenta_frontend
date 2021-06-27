<template>
  <div class="body">
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#cautaRezervarea"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      v-if="!confirmProduct || rezervareConfirmare == {}"
      class="modal fade"
      style="margin-top: 200px"
      id="cautaRezervarea"
      tabindex="-1"
      role="dialog"
      aria-labelledby="cautaRezervareaLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cautaRezervareaLabel">
              Introduceți codul rezervării
            </h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">COD</span>
              <input
                type="text"
                style="margin-left: 0 !important"
                class="form-control"
                placeholder="Introduceti codul rezervării"
                aria-label="cod"
                aria-describedby="basic-addon1"
                v-model="code"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="renunta"
            >
              Renunță
            </button>
            <button
              type="button"
              @click="getRezervare(code)"
              class="btn btn-primary"
            >
              Pasul următor
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="confirmProduct && rezervareConfirmare != {}"
      class="modal fade"
      style="margin-top: 200px"
      id="confirmaRezervarea"
      tabindex="-1"
      role="dialog"
      aria-labelledby="configrmaRezervareaLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="confirmaRezervareaLabel">
              Detaliile rezervării și confirmarea
            </h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="card" style="width: 450px">
              <h5 class="card-header">
                Codul rezervării : {{ rezervareConfirmare.code }}
              </h5>
              <div class="card-body">
                <h5 class="card-title"></h5>
                <div class="row">
                  <div class="col">
                    <p class="card-text">
                      <span style="font-weight: bold">Produsul :</span>
                      {{ rezervareConfirmare.produsId[0].numeProdus }}
                    </p>
                    <p class="card-text">
                      <span style="font-weight: bold"
                        >Cantitatea rezervată :</span
                      >
                      {{ rezervareConfirmare.cantitateRezervata }}
                    </p>
                    <p class="card-text">
                      <span style="font-weight: bold">Pretul produselor :</span>
                      {{
                        rezervareConfirmare.produsId[0].pretProdus *
                        rezervareConfirmare.cantitateRezervata
                      }}
                    </p>
                  </div>
                  <div class="col">
                    <p class="card-text">
                      <span style="font-weight: bold">Nume:</span>
                      {{ rezervareConfirmare.utilizatorId[0].utilizator.nume }}
                    </p>
                    <p class="card-text">
                      <span style="font-weight: bold">Prenume :</span>
                      {{
                        rezervareConfirmare.utilizatorId[0].utilizator.prenume
                      }}
                    </p>
                    <p class="card-text">
                      <span style="font-weight: bold">Telefon :</span>
                      {{
                        rezervareConfirmare.utilizatorId[0].utilizator.telefon
                      }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-footer text-muted" style="font-weight: bold">
                <span style="color: black"> Expiră pe data de: </span>
                <span style="color: red">{{
                  moment(rezervareConfirmare.produsId[0].dataExpirarii).format(
                    "LLL"
                  )
                }}</span>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="renunta"
            >
              Renunță
            </button>
            <button
              type="button"
              @click="getRezervare(this.code)"
              class="btn btn-primary"
            >
              Pasul următor
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="productmanager"
      style="display: flex; justify-content: center; flex-wrap: wrap"
    >
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
                  <span style="font-weight: bold">Nume:</span>
                  {{ rezervare.utilizatorId[0].utilizator.nume }}
                </p>
                <p class="card-text">
                  <span style="font-weight: bold">Prenume :</span>
                  {{ rezervare.utilizatorId[0].utilizator.prenume }}
                </p>
                <p class="card-text">
                  <span style="font-weight: bold">Telefon :</span>
                  {{ rezervare.utilizatorId[0].utilizator.telefon }}
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
              v-if="
                typeof rezervare.realizat === 'boolean' && rezervare.realizat
              "
              >Realizată</span
            >
          </div>
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
      rezervareConfirmare: {},
      confirmProduct: false,
      code: "",
    };
  },
  methods: {
    ...mapActions(["getAllRezervariFirma", "getOneRezervariFirma"]),
    async getRezervare(code) {
      this.confirmProduct = true;
      this.rezervareConfirmare = await this.getOneRezervariFirma(code);

      console.log(this.rezervareConfirmare);
    },
    renunta() {
      this.rezervareConfirmare = {};
      this.confirmProduct = false;
    },

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
      this.rezervari = await this.getAllRezervariFirma();
    },
  },
  async created() {
    this.rezervari = await this.getAllRezervariFirma();
    console.log("i tries");
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


