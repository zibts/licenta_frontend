<template>
  <form class="formBody d-flex justify-content-center">
    <div
      class="card mb-3"
      style="
        height: 80vh;
        margin-top: -20px;
        transition: 0.3s all;
        overflow: auto;
        width: 85%;
      "
    >
      <div class="row d-flex justify-content-center">
        <!-- avatar -->
        <div class="col-lg-5 d-flex justify-content-center flex-column">
          <div id="#photoDiv" :style="getPhotos(produs.img)"></div>
          <h2 style="padding-bottom: 5px; color: black">
            {{ produs.numeProdus }}
            🛒
          </h2>
          <h3 style="color: green">
            {{ produs.pretProdus }} <span style="color: black">RON</span>
          </h3>
          <el-button
            v-if="rolUtilizator == 'user'"
            type="primary"
            style="margin: 7px"
            data-toggle="modal"
            data-target="#exampleModal"
            >Rezervă produs</el-button
          >
        </div>
        <!-- @click="rezervareProdus()" -->

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style="margin-top: 200px"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Introduceți cantitatea și confirmați rezervarea
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
                  <span
                    class="input-group-text"
                    id="basic-addon3"
                    style="margin-left: 7%"
                    >Cantitate</span
                  >
                  <input
                    type="text"
                    style="margin-left: 0 !important"
                    class="form-control"
                    placeholder="Introduceti cantitatea disponibila"
                    aria-label="cant"
                    aria-describedby="basic-addon3"
                    v-model="this.cantitateRezervata"
                  />
                </div>
                <hr />
                <h6 class="modal-title" id="exampleModalLabel">
                  Adresa și locația furnizorului
                </h6>
                <div class="input-group mb-3">
                  <span
                    class="input-group-text"
                    id="basic-addon2"
                    style="margin-left: 7%"
                    >Adr.</span
                  >
                  <div
                    class="form-control"
                    style="
                      margin-right: 7%;
                      background: #f7f7f7;
                      border: 3px solid #dfdfdf;
                      border-radius: 5px;
                      font-size: 16px;
                    "
                  >
                    {{ furnizor.adresa }}
                  </div>
                </div>
                <div class="input-group mb-3">
                  <span
                    class="input-group-text"
                    id="basic-addon2"
                    style="margin-left: 7%"
                    >Loc.</span
                  >
                  <div
                    class="form-control"
                    style="
                      margin-right: 7%;
                      background: #f7f7f7;
                      border: 3px solid #dfdfdf;
                      border-radius: 5px;
                      font-size: 16px;
                    "
                  >
                    {{ furnizor.locatie }}
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Renunțare
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  @click="rezervareProdus()"
                >
                  Confirmare
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- info -->
        <div class="col-lg-4">
          <h3 style="margin-top: 20px">Informații produs</h3>
          <hr />
          <div
            class="row"
            style="display: flex; justify-content: center; align-items: center"
          >
            <h4>Categoria :</h4>
            <ul>
              <li>
                {{
                  produs.categorieProdus.charAt(0).toUpperCase() +
                  produs.categorieProdus.slice(1)
                }}
              </li>
            </ul>
          </div>
          <hr />
          <div class="row">
            <h4>Descrierea produsului</h4>
            <textarea
              class="form-control"
              aria-label="With textarea"
              placeholder="Introduceti aici o scurtă descriere a produsului"
              readonly
              v-model="produs.descriereProdus"
            ></textarea>
          </div>
          <hr />
          <h4>Data expirării si cantitatea disponibila</h4>

          <div class="row">
            <div class="col">
              <div class="input-group mb-3">
                <span
                  class="input-group-text"
                  id="basic-addon3"
                  style="margin-left: 7%"
                  >Cantitate disponibilă</span
                >
                <input
                  type="text"
                  style="margin-left: 0 !important"
                  class="form-control"
                  placeholder="Nu sunt informatii"
                  aria-label="Cantitate disponibila"
                  readonly
                  aria-describedby="basic-addon3"
                  v-model="produs.cantitateDisponibila"
                />
              </div>
              <div class="input-group mb-3">
                <span
                  class="input-group-text"
                  id="basic-addon2"
                  style="margin-left: 7%"
                  ><i class="fa fa-calendar-times-o" aria-hidden="true"></i
                ></span>
                <div
                  class="form-control"
                  style="
                    margin-right: 7%;
                    background: #f7f7f7;
                    border: 3px solid #dfdfdf;
                    border-radius: 5px;
                    font-size: 16px;
                    color: red;
                    font-weight: bold;
                  "
                >
                  {{ moment(produs.dataExpirarii).format("LLL") }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- data -->
        <div class="col-lg-3">
          <h3 style="margin-top: 20px">Informații furnizor</h3>
          <hr />
          <div class="input-group mb-3" style="margin-top: 35px">
            <span
              class="input-group-text"
              id="basic-addon3"
              style="margin-left: 7%"
              >Nume</span
            >
            <input
              type="text"
              style="margin-left: 0 !important"
              class="form-control"
              placeholder="Nu sunt informatii"
              aria-label="Furnizor nume"
              readonly
              aria-describedby="basic-addon3"
              v-model="furnizor.nume"
            />
          </div>

          <div class="input-group mb-3" style="margin-top: 35px">
            <span
              class="input-group-text"
              id="basic-addon3"
              style="margin-left: 7%"
              >Adresa</span
            >
            <input
              type="text"
              style="margin-left: 0 !important"
              class="form-control"
              placeholder="Nu sunt informatii"
              aria-label="Furnizor adresa"
              readonly
              aria-describedby="basic-addon3"
              v-model="furnizor.adresa"
            />
          </div>
          <div class="input-group mb-3" style="margin-top: 35px">
            <span
              class="input-group-text"
              id="basic-addon3"
              style="margin-left: 7%"
              >Localitate</span
            >
            <input
              type="text"
              style="margin-left: 0 !important"
              class="form-control"
              placeholder="Nu sunt informatii"
              aria-label="Furnizor localitate"
              readonly
              aria-describedby="basic-addon3"
              v-model="furnizor.locatie"
            />
          </div>
          <div class="input-group mb-3" style="margin-top: 35px">
            <span
              class="input-group-text"
              id="basic-addon3"
              style="margin-left: 7%"
              >Telefon</span
            >
            <input
              type="text"
              style="margin-left: 0 !important"
              class="form-control"
              placeholder="Nu sunt informatii"
              aria-label="Furnizor telefon"
              readonly
              aria-describedby="basic-addon3"
              v-model="furnizor.telefon"
            />
          </div>

          <el-button
            type="primary"
            data-toggle="modal"
            data-target="#exampleModalLong"
            style="margin: 7px"
            @click="$router.push({ path: '/produse' })"
            >Înapoi</el-button
          >
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      produs: {},
      furnizor: {},
      furnizorId: "",
      cantitateRezervata: 1,
      img: [],
    };
  },
  computed: {
    ...mapGetters(["rolUtilizator"]),
  },
  methods: {
    ...mapActions([
      "getOneProdus",
      "getProdusFirma",
      "getProdusFirmaId",
      "addRezervare",
    ]),
    renunta() {
      this.$emit("added");
    },
    getPhotos(filename) {
      // return { backgroundColor: "yellow", height: "200px" };
      return {
        backgroundImage: `url("/assets/products/${filename}")`,
        height: "300px",
        width: "80%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        borderRadius: "20px",
        border: "2px solid #27ae60 ",
        boxShadow: " inset 0px 0px 10px 1px rgba(0,0,0,0.2)",
        margin: "20px",
        alignSelf: "center",
      };
    },
    rezervareProdus() {
      let rezervareNoua = {
        produsId: this.produs._id,
        furnizorId: this.furnizorId,
        cantitateRezervata: this.cantitateRezervata,
        deadline: this.produs.dataExpirarii,
      };
      this.addRezervare(rezervareNoua);
    },
  },
  async created() {
    console.log(this.$route.params.id);
    this.produs = await this.getOneProdus(this.$route.params.id);
    this.furnizor = await this.getProdusFirma(this.$route.params.id);
    this.furnizorId = await this.getProdusFirmaId(this.$route.params.id);
    console.log(this.furnizorId);
    console.log(this.produs);
    console.log(this.furnizor);
  },
};
</script>

<style scoped>
.col-lg-4,
.col-lg-5 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.el-button {
  background-color: #27ae60;
  border-color: #27ae60;
  width: 50%;
  align-self: center;
}
#photoDiv {
  display: flex !important;
  justify-content: center !important;
}
.color input {
  background-color: #f1f1f1;
}
.active {
  border: 2px solid #206b34;
}

* {
  font-family: "Raleway", sans-serif;
}
.row {
  margin: 5px;
}
ul {
  margin: 10px;
  list-style-type: none;
  flex-wrap: wrap;
}
h2 {
  font-size: 36px;
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 5px !important;
  padding: 22px;
}
h3 {
  font-size: 22px;
  margin-left: 5%;
  margin-right: 5%;
}
h4 {
  display: flex;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 14px;
}
@media (max-width: 760px) {
  .upload {
    margin-top: 0 !important;
  }
}
li {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-left: -70px;
  min-width: 100px;
  height: 36px;
  text-decoration: none;
  background: #e9e9e9;
  box-sizing: border-box;
  border-radius: 31px;
  font-size: 12px;
}
input {
  margin-left: 7%;
  margin-right: 7%;
  background: #f7f7f7;
  border: 3px solid #dfdfdf;
  border-radius: 5px;
  font-size: 12px;
}
textarea {
  margin-left: 7%;
  font-size: 12px;
  margin-right: 7%;
  background: #f7f7f7;
  border: 3px solid #dfdfdf;
  border-radius: 5px;
}
.input-group-text {
  font-size: 12px;
}
.form-control:focus {
  border-color: #206b34;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(32, 107, 52, 1);
}
</style>