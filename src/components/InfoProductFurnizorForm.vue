<template>
  <form class="formBody">
    <div
      class="card mb-3"
      style="
        height: 75vh;
        margin-top: -20px;
        transition: 0.3s all;
        overflow: auto;
      "
    >
      <div class="row">
        <div class="col-md-4">
          <div :style="getPhotos(produs.img)"></div>
        </div>
        <div class="col-md-8">
          <h2>{{ produs.numeProdus }} 🛒</h2>
          <div
            class="row"
            style="display: flex; justify-content: center; align-items: center"
          >
            <h4>Categoria :</h4>
            <ul>
              <li>Carne</li>
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
          <h4>Prețul și data expirării</h4>
          <div class="row">
            <div class="col">
              <div class="input-group mb-3">
                <span
                  class="input-group-text"
                  id="basic-addon1"
                  style="margin-left: 7%"
                  >$</span
                >
                <input
                  type="text"
                  style="margin-left: 0 !important"
                  class="form-control"
                  placeholder="Pret"
                  aria-label="pret"
                  readonly
                  aria-describedby="basic-addon1"
                  v-model="produs.pretProdus"
                />
              </div>
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
                  readonly
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
                <input
                  type="text"
                  style="margin-left: 0 !important"
                  class="form-control"
                  placeholder="Pret"
                  aria-label="pret"
                  readonly
                  aria-describedby="basic-addon1"
                  v-model="produs.dataExpirarii"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <el-button
                type="primary"
                data-toggle="modal"
                data-target="#exampleModalLong"
                style="margin: 7px"
                @click="renunta"
                >Înapoi</el-button
              >
              <el-button
                type="primary"
                style="margin: 7px"
                data-toggle="modal"
                data-target="#exampleModalLong"
                @click="adaugareProdus()"
                >Modifică produs</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["produs"],
  data() {
    return {
      img: [],
      selectedCategory: "",
      dateProdusNou: {
        numeProdus: "",
        descriereProdus: "",
        pretProdus: "",
        categorieProdus: "",
        dataExpirarii: "",
        cantitateDisponibila: 0,
      },
    };
  },
  methods: {
    renunta() {
      this.$emit("added");
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
        margin: "35px",
      };
    },
  },
};
</script>

<style scoped>
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
  font-size: 28px;
  margin-left: 5%;
  margin-right: 5%;
  padding: 22px;
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