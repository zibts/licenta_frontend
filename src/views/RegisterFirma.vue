<template>
  <div class="register">
    <div class="row">
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
                Nume
                <el-input
                  placeholder="Numele dvs."
                  v-model="dateInregistrare.nume"
                ></el-input>
              </el-form-item>
              <el-form-item prop="adresa">
                Adresa
                <el-input
                  placeholder="Adresa dvs."
                  v-model="dateInregistrare.adresa"
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
              <el-button type="primary" @click="inregistrareUtilizator"
                >Înregistrare</el-button
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
      dateInregistrare: {
        numeUtilizator: "",
        email: "",
        parola: "",
        parolaConfirm: "",
        nume: "",
        cui: "",
        adresa: "",
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
    inregistrareUtilizator() {
      let utilizator = {
        numeUtilizator: this.dateInregistrare.numeUtilizator,
        email: this.dateInregistrare.email,
        parola: this.dateInregistrare.parola,
        parola_confirmare: this.dateInregistrare.parolaConfirm,
        firma: {
          nume: this.dateInregistrare.nume,
          cui: this.dateInregistrare.cui,
          adresa: this.dateInregistrare.adresa,
        },
      };
      this.registerFirma(utilizator).then((res) => {
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
.registerForm {
  width: 53vw;
}

@media (max-width: 1020px) {
  .right {
    display: none;
  }
  .registerForm {
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
h3 {
  font-family: "Raleway", sans-serif;
}
</style>
