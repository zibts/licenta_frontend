<template>
  <div class="login">
    <div class="row">
      <div class="col left">
        <el-card class="card mx-auto">
          <h3>Intră în cont</h3>
          <el-form
            :model="dateLogin"
            status-icon
            :rules="rules"
            ref="dateLogin"
          >
            <el-form-item prop="numeUtilizator">
              Introduceți numele utilizatorului
              <el-input
                placeholder="Numele utilizatorului"
                v-model="dateLogin.numeUtilizator"
              ></el-input>
            </el-form-item>
            <el-form-item prop="parola">
              Introduceți parola
              <el-input
                type="password"
                placeholder="Introduceți parola"
                v-model="dateLogin.parola"
              ></el-input>
            </el-form-item>
            <div class="login-btn">
              <el-button>
                <router-link to="/register" class="card-link"
                  >Înregistrează-te aici</router-link
                ></el-button
              >
              <el-button type="primary" @click="loginUser">Intră</el-button>
            </div>
          </el-form>
        </el-card>
      </div>
      <div class="col right">
        <img src="../assets/logo.png" />
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
    // verify the password
    var valideazaParola = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("Vă rugăm să introduceți o parola"));
      } else {
        callback();
      }
    };
    return {
      dateLogin: {
        numeUtilizator: "",
        parola: "",
      },
      rules: {
        numeUtilizator: [
          //
          //trigger:'blur': when the focus is lost (when the cursor is not displayed), trigger this prompt
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
    ...mapActions(["login"]),
    loginUser() {
      let utilizator = {
        numeUtilizator: this.dateLogin.numeUtilizator,
        parola: this.dateLogin.parola,
      };
      this.login(utilizator)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("profile");
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
.left {
  margin-left: 40px;
  width: 60 vw;
}

@media (max-width: 1020px) {
  .right {
    display: none;
  }
  .left {
    width: 70vw;
    margin-left: 0px;
  }
  .card {
    width: 80vw;
  }
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

.btn {
  border-radius: 0;
}

.el-button {
  background-color: #27ae60;
  border-color: #27ae60;
}
.el-button.el-button--default {
  background-color: white;
}
.card-link {
  color: #27ae60 !important;
}
</style>
