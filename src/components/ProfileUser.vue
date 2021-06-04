<template>
  <div class="body">
    <div class="container">
      <div class="main-body">
        <div class="row gutters-sm">
          <div class="col">
            <div class="card mb-3">
              <div
                class="d-flex flex-row flex-wrap justify-content-center"
                style="margin-top: 20px; margin-bottom: 20px"
              >
                <img
                  src="../assets/company_logo.png"
                  alt="Admin"
                  class="rounded-circle align-self-center"
                  width="150"
                />
                <div class="d-flex flex-column">
                  <h4>
                    {{ user.utilizator.nume }}, {{ user.utilizator.prenume[0] }}
                  </h4>
                  <div class="mt-3 buttons">
                    <button class="btn">Schimbă poza</button>

                    <button class="btn">Rezervări</button>
                  </div>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Nume, Prenume</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ user.utilizator.nume }}, {{ user.utilizator.prenume }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{{ user.email }}</div>
                </div>
                <div class="row"></div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telefon</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">to be added</div>
                </div>
                <hr />

                <div class="row">
                  <div class="col-sm-12">
                    <a
                      class="btn btn-info"
                      target="__blank"
                      href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      >Modifică</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style scoped>
h4 {
  font-family: "Raleway", sans-serif;
  font-size: 36px;
  padding: 10px;
}
.rounded-circle {
  border: 2px solid #1b8448;
}
.buttons .btn {
  font-size: 10px !important;
}
.btn {
  margin: 5px;
  background-color: #1b8448;
  color: white;
  border: 1px solid #1b8448;
}
.card {
  height: 70vh;
  overflow: auto;
}
h3 {
  color: #1b8448;
  padding: 20px;
  font-size: 36px;
}
</style>