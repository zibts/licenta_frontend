<template>
  <div class="home">
    <div class="row title">
      <h1 style="font-weight: bold; color: #1b8448">Bine ați venit pe</h1>

      <img class="logo" src="../assets/logo.png" s alt="Savipt" />
    </div>
    <div class="row buttons">
      <el-button
        v-on:click="setType('user')"
        :class="[activeType == 'user' ? 'active' : 'notActive']"
      >
        Doresc să cumpăr produse</el-button
      >

      <el-button
        v-on:click="setType('furnizor')"
        :class="[activeType == 'furnizor' ? 'active' : 'notActive']"
      >
        Doresc să vând produse</el-button
      >
    </div>
    <div class="user" v-if="activeType == 'user'">
      <div class="row" id="firsttab">
        <div class="col-lg-6" style="color: white">
          <h1
            style="
              margin-top: 40px;
              padding: 40px;
              font-size: 48px;
              font-weight: bold;
            "
          >
            Reduceți cheltuielile și contribuiți la combaterea risipei
            alimentare!
          </h1>
          <p style="margin-top: -20px">
            Folosiți acum platforma Savipt pentru a obține cele mai bune prețuri
            la produsele care în curând expiră, dar care încă sunt bune. Astfel,
            împreună reducem risipa alimentară în România și Republica Moldova
            și tot odată obțineți cele mai bune oferte!
          </p>
          <button type="button" class="btn btn-secondary">
            Vizualizează produse
          </button>
          <button type="button" class="btn btn-secondary">
            Înregistrează utilizator
          </button>
        </div>
        <div class="col-lg-4">
          <img src="../assets/panel1.png" id="phoneTap" alt="" />
        </div>
      </div>
      <div class="row" id="secondtab">
        <div class="col-lg-5 categoryPic">
          <img src="../assets/panel2.png" id="phoneTap2" alt="" />
        </div>
        <div class="col-lg-6">
          <h1
            style="
              margin-top: 40px;
              padding: 40px;
              font-size: 48px;
              font-weight: bold;
            "
          >
            Este foarte simplu!
          </h1>
          <ul style="margin: 20px; text-align: left; font-size: 18px">
            <li style="margin: 10px">
              Căutați produsele dorite pe care le puteți găsi în unul din
              orașele disponibile.
            </li>
            <li style="margin: 10px">
              Plasați rezervarea pentru produsul dorit
            </li>
            <li style="margin: 10px">
              Vă duceți la adresa furnizorului la care ați plasat rezervarea și
              plătiți pentru a lua produsele!
            </li>
          </ul>
        </div>
      </div>
      <div class="row" id="thirdtab">
        <div class="col-lg-6" style="color: white">
          <h1
            style="
              margin-top: 40px;
              padding: 40px;
              font-size: 48px;
              font-weight: bold;
            "
          >
            Ridicați produsele din magazin!
          </h1>
          <p style="margin-top: -20px">
            În cazul în care ați făcut rezervare, aveți posibilitatea de a lua
            produsele în baza unui cod, pe care îl generează platforma!
          </p>
          <p style="margin-top: 20px">
            Însă dacă nu doriți să vă faceți un cont, aveți posibilitatea de a
            vizualiza produsele pe platforma iar ulterior să vă duceți la
            furnizor pentru a le procura.
          </p>
        </div>
        <div class="col-lg-4">
          <img src="../assets/panel3.png" id="phoneTap3" alt="" />
        </div>
      </div>
    </div>

    <div class="furnizor" v-if="activeType == 'furnizor'">
      <div class="row" id="firsttab">
        <div class="col-lg-8" style="color: white">
          <h1
            style="
              margin-top: 40px;
              padding: 40px;
              font-size: 48px;
              font-weight: bold;
            "
          >
            Măriți profitul și contribuiți la combaterea risipei alimentare!
          </h1>
          <p style="margin-top: -20px">
            Folosiți acum platforma Savipt pentru a vinde produsele care în
            curând expiră, dar care încă sunt bune. Astfel, împreună reducem
            risipa alimentară în România și Republica Moldova și tot odată
            oferiți cele mai bune oferte consumatorilor!
          </p>

          <button type="button" class="btn btn-secondary">
            Înregistrează furnizor
          </button>
        </div>
        <div class="col-lg-4">
          <img src="../assets/furnizor1.png" id="phoneTapf" alt="" />
        </div>
      </div>
      <div class="row" id="secondtab">
        <div class="col-lg-5 categoryPic">
          <img src="../assets/furnizor2.png" id="phoneTap2" alt="" />
        </div>
        <div class="col-lg-6">
          <h1
            style="
              margin-top: 40px;
              padding: 40px;
              font-size: 48px;
              font-weight: bold;
            "
          >
            Este foarte simplu!
          </h1>
          <ul style="margin: 20px; text-align: left; font-size: 18px">
            <li style="margin: 10px">Adăugați produsele pe platforma Savipt</li>
            <li style="margin: 10px">Așteptați rezervări de la utilizatori.</li>
            <li style="margin: 10px">
              Atunci când consumatorul vine să ridice platforma, introduceți
              codul rezervării și îi oferiți utilizatorului produsul.
            </li>
          </ul>
        </div>
      </div>
      <div class="row" id="thirdtab">
        <div class="col-lg-12" style="color: white">
          <h1
            style="
              margin-top: 40px;
              padding: 40px;
              font-size: 48px;
              font-weight: bold;
            "
          >
            Oferiți produsele consumatorilor
          </h1>
          <p style="margin-top: -20px">
            Utilizatorii platformei Savipt vor veni după produsele dvs. până la
            termenul expirării pentru a ridica produsele cu ajutorul codului
            generat de platforma noastră.
          </p>
        </div>
        <div class="col-lg-12">
          <img src="../assets/furnizor3.png" id="phoneTapf3" alt="" />
        </div>
      </div>
    </div>

    <footer id="footer" class="footer-1">
      <div class="main-footer widgets-dark typo-light">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="widget subscribe no-box">
                <h5 class="widget-title">Savipt<span></span></h5>
                <p>Salvăm planeta și banii voștri!</p>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="widget no-box">
                <h5 class="widget-title">Navigare pe aplicație<span></span></h5>
                <ul class="thumbnail-widget">
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Pagina principală</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Produse</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Înregistrare utilizator</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Înregistrare firmă</a>
                    </div>
                  </li>
                  <li>
                    <div class="thumb-content">
                      <a href="#.">Intră în cont</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="widget no-box">
                <h5 class="widget-title">Contactează-ne</h5>

                <p>
                  <a
                    href="mailto:serghei.cunev@gmail.com"
                    title="Aplicația web savipt"
                    class="adrmail"
                    >serghei.cunev@gmail.com</a
                  >
                </p>
                <ul class="social-footer2">
                  <li>
                    <a
                      href="https://www.facebook.com/scunev/"
                      target="_blank"
                      title="Facebook"
                      ><img
                        alt="Facebook"
                        width="30"
                        height="30"
                        src="data:image/png;base64,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"
                    /></a>
                  </li>
                  <li>
                    <a
                      title="instagram"
                      target="_blank"
                      href="https://www.instagram.com/cunev.serghei/"
                      ><img
                        alt="instagram"
                        width="30"
                        height="30"
                        src="data:image/png;base64,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"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>Copyright Cunev Serghei © 2021.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      activeType: "user",
    };
  },
  methods: {
    setType: function (type) {
      this.activeType = type;
    },
  },
};
</script>

<style scoped>
.user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.furnizor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  display: flex;
  justify-content: center;
}
.title img {
  width: 300px;
  margin-top: -20px;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px;
  margin-top: -50px;
  margin-bottom: 10px;
}
.el-button {
  margin: 10px;
  background-color: #27ae60 !important;
  width: 42%;
  border-color: #27ae60;
  color: white !important;
}
.active {
  background-color: #1b8448 !important;
}

.el-button.el-button--default {
  background-color: white;
}
#phoneTapf {
  width: 100%;
  margin: 30px;
}
#phoneTapf3 {
  width: 70%;
  margin-top: -40px;
}
#phoneTap {
}

#phoneTap2 {
  width: 100%;
  border-radius: 50px;
  margin: 30px;
  box-shadow: 14px 10px 20px #c9c9c9;
}
#phoneTap3 {
  width: 100%;
  border-radius: 50px;
  margin: 30px;
}

* {
  font-family: "Raleway", sans-serif;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
}
#firsttab {
  display: flex !important;
  align-items: center;
  width: 85%;
  border-radius: 20px;
  background-color: #1b8448;
}

#secondtab {
  margin-top: 40px;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  display: flex !important;

  width: 85%;
  border-radius: 20px;
  color: #1b8448;
  background-color: #ffffff;
  font-weight: bold;
}
#secondtab h1 {
  margin-top: 0px !important;
}

#thirdtab {
  margin-top: 40px;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  display: flex !important;
  width: 85%;
  border-radius: 20px;
  background-color: #1b8448;
}
@media (max-width: 990px) {
  .secondtab h1 {
    margin-top: -20px !important;
  }
  .buttons {
    margin-top: -30px;
  }
  .el-button {
    width: 70%;
  }
  .title img {
    width: 230px;
    margin-right: -20px;
  }
  h1 {
    font-size: 30px !important;
  }
  #phoneTap {
    width: 100%;
  }
  #phoneTapf {
    width: 200px;
  }
  #phoneTap2 {
    width: 200px;
  }
  #phoneTap3 {
    width: 200px;
  }
}

.btn {
  color: #1b8448;
  font-weight: bold;
  margin: 10px;
  border-radius: 30px;
  background-color: white;
}
.btn:focus,
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary:active:focus:not(:disabled):not(.disabled),
.btn:focus,
.btn:active,
.btn:hover {
  color: white;
  background-color: #27ae60;
  border-color: #27ae60;
  box-shadow: none !important;
  outline: 0;
}
footer .main-footer {
  padding: 20px 0;
  margin-top: 50px;
  background: #1b8448;
}
footer ul {
  padding-left: 0;
  list-style: none;
}

.footer-copyright {
  background: rgb(0, 82, 44);
  padding: 5px 0;
}
.footer-copyright .logo {
  display: inherit;
}
.footer-copyright nav {
  float: right;
  margin-top: 5px;
}
.footer-copyright nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.footer-copyright nav ul li {
  border-left: 1px solid #00421e;
  display: inline-block;
  line-height: 12px;
  margin: 0;
  padding: 0 8px;
}
.footer-copyright nav ul li a {
  color: #969696;
}
.footer-copyright nav ul li:first-child {
  border: medium none;
  padding-left: 0;
}
.footer-copyright p {
  color: #969696;
  margin: 2px 0 0;
}

/* Footer Top */
.footer-top {
  background: #252525;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 3px solid rgb(0, 97, 44);
}

/* Footer transparent */
footer.transparent .footer-top,
footer.transparent .main-footer {
  background: transparent;
}
footer.transparent .footer-copyright {
  background: none repeat scroll 0 0 rgba(0, 121, 46, 0.3);
}

.footer- .logo {
  display: inline-block;
}

.widget {
  padding: 20px;
  margin-bottom: 40px;
}
.widget.widget-last {
  margin-bottom: 0px;
}
.widget.no-box {
  padding: 0;
  background-color: transparent;
  margin-bottom: 40px;
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
  -o-box-shadow: none;
}
.widget.subscribe p {
  margin-bottom: 18px;
}
.widget li a {
  color: #ffffff;
}
.widget li a:hover {
  font-weight: bold;
  text-decoration: none;
}
.widget-title {
  margin-bottom: 20px;
}

.widget .badge {
  float: right;
  background: #7f7f7f;
}
.widget a {
  color: white !important;
  text-decoration: none;
}

.typo-light h1,
.typo-light h2,
.typo-light h3,
.typo-light h4,
.typo-light h5,
.typo-light h6,
.typo-light p,
.typo-light div,
.typo-light span,
.typo-light small {
  color: #fff;
}

ul.social-footer2 {
  margin: 0;
  padding: 0;
  width: auto;
}
ul.social-footer2 li {
  display: inline-block;
  padding: 0;
}

ul.social-footer2 li a {
  display: block;
  height: 30px;
  width: 30px;
  text-align: center;
}
</style>