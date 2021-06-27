<template>
  <div class="register">
    <div class="row">
      <div class="col left">
        <el-card class="card mx-auto registerForm">
          <h3>Înregistrare utilizator 🌿</h3>
          <el-form
            :model="dateInregistrare"
            status-icon
            :rules="rules"
            ref="dateInregistrare"
          >
            <el-form :inline="true">
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
            </el-form>
            <el-form :inline="true">
              <el-form-item prop="nume">
                Nume
                <el-input
                  placeholder="Numele dvs."
                  v-model="dateInregistrare.nume"
                ></el-input>
              </el-form-item>
              <el-form-item prop="prenume">
                Prenume
                <el-input
                  placeholder="Prenumele dvs."
                  v-model="dateInregistrare.prenume"
                ></el-input>
              </el-form-item>
              <el-form-item prop="telefon">
                Nr. de telefon
                <el-input
                  placeholder="Nr. de telefon al dvs."
                  v-model="dateInregistrare.telefon"
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
            <el-form-item>
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
              </div></el-form-item
            >
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
        <img src="../assets/register_user_photo.png" />
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
        prenume: "",
        telefon: "",
      },
      img: [],
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
    ...mapActions(["register"]),
    handleUploadChange(file) {
      this.img = file;
    },
    inregistrareUtilizator() {
      let utilizator = {
        nume: this.dateInregistrare.nume,
        prenume: this.dateInregistrare.prenume,
        telefon: this.dateInregistrare.telefon,
      };
      let fr = new FormData();
      fr.append("numeUtilizator", this.dateInregistrare.numeUtilizator);
      fr.append("email", this.dateInregistrare.email);
      fr.append("parola", this.dateInregistrare.parola);
      fr.append("parola_confirmare", this.dateInregistrare.parolaConfirm);
      fr.append("utilizator", JSON.stringify(utilizator));
      fr.append("image", this.img.raw);

      this.register(fr)
        .then((res) => {
          if (res.data.succes) {
            this.$router.push("login");
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
.registerForm {
  width: 48vw;
}
.left {
  margin-left: 40px;
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
  width: 28vw;
}
h3 {
  font-family: "Raleway", sans-serif;
}
</style>
