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
        <div class="col-md-8">
          <h2>Adauga produs 🛒</h2>
          <div class="row">
            <h4>Alegeti una din categoriile de mai jos</h4>
            <ul>
              <li
                v-on:click="setCategory('carne')"
                :class="[selectedCategory == 'carne' ? 'active' : 'notActive']"
              >
                Carne
              </li>
              <li
                v-on:click="setCategory('lactate')"
                :class="[
                  selectedCategory == 'lactate' ? 'active' : 'notActive',
                ]"
              >
                Lactate
              </li>
              <li
                v-on:click="setCategory('bauturi')"
                :class="[
                  selectedCategory == 'bauturi' ? 'active' : 'notActive',
                ]"
              >
                Băuturi
              </li>
              <li
                v-on:click="setCategory('fructe')"
                :class="[selectedCategory == 'fructe' ? 'active' : 'notActive']"
              >
                Fructe
              </li>
              <li
                v-on:click="setCategory('legume')"
                :class="[selectedCategory == 'legume' ? 'active' : 'notActive']"
              >
                Legume
              </li>
              <li
                v-on:click="setCategory('catering')"
                :class="[
                  selectedCategory == 'catering' ? 'active' : 'notActive',
                ]"
              >
                Catering
              </li>
            </ul>
          </div>
          <hr />
          <div class="row">
            <h4>Denumirea produsului</h4>
            <input
              type="text"
              class="form-control"
              placeholder="Introduceti aici denumirea produsului"
              aria-label="denumireproduse"
              v-model="dateProdusNou.numeProdus"
            />
          </div>
          <hr />
          <div class="row">
            <h4>Descrierea produsului</h4>
            <textarea
              class="form-control"
              aria-label="With textarea"
              placeholder="Introduceti aici o scurtă descriere a produsului"
              v-model="dateProdusNou.descriereProdus"
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
                  aria-describedby="basic-addon1"
                  v-model="dateProdusNou.pretProdus"
                />
              </div>
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <span
                  class="input-group-text"
                  id="basic-addon2"
                  style="margin-left: 7%"
                  ><i class="fa fa-calendar-times-o" aria-hidden="true"></i
                ></span>
                <input
                  class="form-control"
                  type="datetime-local"
                  value="2011-08-19T13:45:00"
                  style="margin-left: 0 !important"
                  id="example-datetime-local-input"
                  aria-describedby="basic-addon2"
                  v-model="dateProdusNou.dataExpirarii"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="upload" style="margin-top: 100px">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleUploadChange"
              :file-list="img"
              :multiple="false"
              list-type="picture"
              accept=".jpg, .png, .jpeg"
              style="width: 100%"
            >
              <div class="uploadBody">
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  Trageți aici un fișier sau
                  <em>dați click pentru a încărca poză</em>
                </div>
                <div class="el-upload__tip" slot="tip">
                  fișiere de tip jpg/png
                </div>
              </div>
            </el-upload>
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
              v-model="dateProdusNou.cantitateDisponibila"
            />
          </div>
          <el-button
            type="primary"
            data-toggle="modal"
            data-target="#addProduct"
            style="margin: 7px"
            @click="renunta"
            >Renunță</el-button
          >
          <el-button
            type="primary"
            style="margin: 7px"
            data-toggle="modal"
            data-target="#addProduct"
            @click="adaugareProdus()"
            >Adaugă</el-button
          >
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
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
    ...mapActions(["addProduct"]),
    handleUploadChange(file) {
      this.img = file;
    },
    setCategory: function (item) {
      this.selectedCategory = item;
    },
    addProdus: function () {
      this.dateProdusNou.categorieProdus = this.selectedCategory;
      console.log(this.dateProdusNou);
    },

    renunta() {
      this.selectedCategory = "";
      this.dateProdusNou = {
        numeProdus: "",
        descriereProdus: "",
        pretProdus: "",
        categorieProdus: "",
        dataExpirarii: "",
        cantitateDisponibila: 0,
      };
      this.$emit("added");
    },
    adaugareProdus() {
      console.log(this.img);

      let fd = new FormData();
      fd.append("numeProdus", this.dateProdusNou.numeProdus);
      fd.append("descriereProdus", this.dateProdusNou.descriereProdus);
      fd.append("pretProdus", this.dateProdusNou.pretProdus);
      fd.append("categorieProdus", this.selectedCategory);
      fd.append("dataExpirarii", this.dateProdusNou.dataExpirarii);
      fd.append(
        "cantitateDisponibila",
        this.dateProdusNou.cantitateDisponibila
      );
      fd.append("image", this.img.raw);
      this.addProdus();
      this.addProduct(fd)
        .then((res) => {
          if (res.data.succes) {
            console.log("success");
            this.$emit("added");
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
  display: flex;
  margin: 10px;
  list-style-type: none;
  flex-wrap: wrap;
  width: 100%;
}
h2 {
  display: flex;
  font-size: 20px;
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
  min-width: 17%;
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