<template>
  <div class="register">
    <div class="row" id="firstStep" v-if="this.step == 1">
      <div class="col left">
        <el-card class="card mx-auto registerForm">
          <h3>Înregistrare firmă nouă 🛒</h3>
          <el-form
            :model="dateInregistrare"
            status-icon
            :rules="rules"
            ref="dateInregistrare"
          >
            <el-form-item prop="numeUtilizator">
              Introduceți numele utilizatorului
              <el-input
                placeholder="Numele utilizatorului"
                v-model="dateInregistrare.numeUtilizator"
              ></el-input>
            </el-form-item>
            <el-form-item prop="email">
              E-mail
              <el-input
                placeholder="Email-ul"
                v-model="dateInregistrare.email"
              ></el-input>
            </el-form-item>
            <el-form :inline="true">
              <el-form-item prop="nume">
                Denumire firmă
                <el-input
                  placeholder="Denumirea firmei dvs."
                  v-model="dateInregistrare.nume"
                ></el-input>
              </el-form-item>
              <el-form-item prop="cui">
                CUI
                <el-input
                  placeholder="CUI"
                  v-model="dateInregistrare.cui"
                ></el-input>
              </el-form-item>
            </el-form>
            <el-form :inline="true">
              <el-form-item prop="parola">
                Introduceți parola
                <el-input
                  type="password"
                  placeholder="Introduceți parola"
                  v-model="dateInregistrare.parola"
                ></el-input>
              </el-form-item>
              <el-form-item prop="parola">
                Confirmați parola
                <el-input
                  type="password"
                  placeholder="Confirmați parola"
                  v-model="dateInregistrare.parolaConfirm"
                ></el-input>
              </el-form-item>
            </el-form>
            <div class="login-btn">
              <el-button>
                <router-link to="/login" class="card-link"
                  >Deja am cont</router-link
                ></el-button
              >
              <el-button
                type="primary"
                @click="
                  inregistrareUtilizator;
                  setStep(2);
                "
                >Pasul următor</el-button
              >
            </div>
          </el-form>
        </el-card>
      </div>
      <div class="col right">
        <p>Ne bucurăm că doriți să vă alăturați 🌿</p>
        <img src="../assets/register_photo.png" />
      </div>
    </div>
    <div
      v-if="this.step == 2"
      class="row"
      id="secondStep"
      style="display: flex; flex-wrap: wrap; justify-content: center"
    >
      <div
        class="col-lg-7 left"
        style="display: flex; flex-wrap: wrap; justify-content: center"
      >
        <div class="row">
          <el-card
            class="card mx-auto registerForm2"
            :body-style="{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }"
          >
            <div class="col-lg-7">
              <h3>Detalii firmă 🛒</h3>
              <el-form
                :model="dateInregistrare"
                status-icon
                :rules="rules"
                ref="dateInregistrare"
              >
                <el-form :inline="true">
                  <el-form-item prop="adresa">
                    Adresă firma
                    <el-input
                      placeholder="Adresa firmei"
                      v-model="dateInregistrare.adresa"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="locatie">
                    <div
                      class="div"
                      style="
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                      "
                    >
                      Locația dvs.
                      <el-dropdown>
                        <el-button type="primary" style="width: 150px">
                          {{ dateInregistrare.locatie
                          }}<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                          <div class="setLocation" @click="setLocation('Iași')">
                            <el-dropdown-item>Iași</el-dropdown-item>
                          </div>
                          <div
                            class="setLocation"
                            @click="setLocation('Chișinău')"
                          >
                            <el-dropdown-item>Chișinău</el-dropdown-item>
                          </div>
                          <div
                            class="setLocation"
                            @click="setLocation('București')"
                          >
                            <el-dropdown-item>București</el-dropdown-item>
                          </div>

                          <div class="setLocation" @click="setLocation('Cluj')">
                            <el-dropdown-item>Cluj</el-dropdown-item>
                          </div>
                          <div
                            class="setLocation"
                            @click="setLocation('Timișoara')"
                          >
                            <el-dropdown-item>Timișoara</el-dropdown-item>
                          </div>
                          <div
                            class="setLocation"
                            @click="setLocation('Miercurea-Ciuc')"
                          >
                            <el-dropdown-item>Miercurea-Ciuc</el-dropdown-item>
                          </div>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>
                  </el-form-item>
                </el-form>
                <el-form :inline="true">
                  <el-form-item prop="telefon">
                    Telefon contact
                    <el-input
                      placeholder="Telefonul furnizorului."
                      v-model="dateInregistrare.telefon"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="website">
                    Website
                    <el-input
                      placeholder="Website-ul companiei."
                      v-model="dateInregistrare.website"
                    ></el-input>
                  </el-form-item>
                </el-form>
                <el-form :inline="true">
                  <el-form-item prop="facebook">
                    <h6 class="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="
                          feather feather-facebook
                          mr-2
                          icon-inline
                          text-primary
                        "
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                        ></path></svg
                      >Facebook
                    </h6>
                    <el-input
                      placeholder="Introduceți link-ul către pagina de facebook"
                      v-model="dateInregistrare.facebook"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="instagram">
                    <h6 class="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="
                          feather feather-instagram
                          mr-2
                          icon-inline
                          text-danger
                        "
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path
                          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                        ></path>
                        <line
                          x1="17.5"
                          y1="6.5"
                          x2="17.51"
                          y2="6.5"
                        ></line></svg
                      >Instagram
                    </h6>
                    <el-input
                      placeholder="Introduceți link-ul la instagram"
                      v-model="dateInregistrare.instagram"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </el-form>
            </div>
            <div class="col-lg-4">
              <div class="upload">
                <h4>Avatar firmă</h4>
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
                <div class="login-btn">
                  <el-button type="primary" @click="setStep(1)">
                    Înapoi
                  </el-button>
                  <el-button type="primary" @click="inregistrareUtilizator"
                    >Înregistrare</el-button
                  >
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <div
        class="col-lg-4 rightPanel"
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        "
      >
        <p>Încă un pic 🌿</p>
        <img class="right2" src="../assets/furnizor1.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    var valideazaNume = (rule, value, callback) => {
      if (!value) {
        return callback(
          new Error("Vă rugăm să introduceți numele utilizatorului")
        );
      } else {
        callback();
      }
    };
    var valideazaParola = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("Vă rugăm să introduceți o parola"));
      } else {
        callback();
      }
    };
    return {
      img: [],
      step: 1,
      dateInregistrare: {
        numeUtilizator: "",
        email: "",
        parola: "",
        parolaConfirm: "",
        nume: "",
        cui: "",
        telefon: "",
        website: "",
        facebook: "",
        instagram: "",
        adresa: "",
        locatie: "Alegeti o locatie",
      },
      rules: {
        numeUtilizator: [
          {
            validator: valideazaNume,
            trigger: "blur",
          },
        ],
        parola: [
          {
            validator: valideazaParola,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions(["registerFirma"]),
    setStep(step) {
      this.step = step;
    },
    setLocation(locatie) {
      this.dateInregistrare.locatie = locatie;
      console.log(this.dateInregistrare.locatie);
    },
    handleUploadChange(file) {
      this.img = file;
    },
    inregistrareUtilizator() {
      let firma = {
        nume: this.dateInregistrare.nume,
        cui: this.dateInregistrare.cui,
        adresa: this.dateInregistrare.adresa,
        locatie: this.dateInregistrare.locatie,
        telefon: this.dateInregistrare.telefon,
        website: this.dateInregistrare.website,
        instagram: this.dateInregistrare.instagram,
        facebook: this.dateInregistrare.facebook,
      };
      let fr = new FormData();
      fr.append("numeUtilizator", this.dateInregistrare.numeUtilizator);
      fr.append("email", this.dateInregistrare.email);
      fr.append("parola", this.dateInregistrare.parola);
      fr.append("parola_confirmare", this.dateInregistrare.parolaConfirm);
      fr.append("firma", JSON.stringify(firma));
      fr.append("image", this.img.raw);
      console.log(fr);
      this.registerFirma(fr).then((res) => {
        if (res.data.succes) {
          this.$router.push("login");
        }
      });
    },
  },
};
</script>

<style scoped>
.left {
  margin-left: 40px;
}
.right2 {
  width: 100px;
}
.registerForm {
  width: 53vw;
}
.registerForm2 {
  width: 100%;
  display: flex !important;
}

@media (max-width: 1020px) {
  .right {
    display: none;
  }
  .rightPanel {
    display: none !important;
  }
  .registerForm {
    width: 80vw;
  }
  .registerForm2 {
    width: 80vw;
  }
  .left {
    margin-left: 0px;
  }
}
.right {
  width: 30vw;
  margin-right: 40px;
}
.el-button {
  background-color: #27ae60;
  border-color: #27ae60;
}
.card-link {
  color: white;
}
p {
  font-family: "Raleway", sans-serif;
  color: #27ae60;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  font-size: 48px;
  font-weight: bold;
}
img {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  width: 32vw;
}
.right2 {
  width: 300px !important;
}

h3 {
  font-family: "Raleway", sans-serif;
}
</style>
