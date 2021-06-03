<template>
  <div class="body">
    <div class="container">
      <div class="main-body">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column">
                  <img
                    src="../assets/company_logo.png"
                    alt="Admin"
                    class="rounded-circle align-self-center"
                    width="150"
                  />
                  <h4>{{ user.firma.nume }}</h4>
                  <div class="mt-3 buttons">
                    <button class="btn">Schimbă poza</button>
                    <button class="btn">Produse</button>
                    <button class="btn">Rezervări</button>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                    >
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
                          class="feather feather-globe mr-2 icon-inline"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path
                            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                          ></path></svg
                        >Website
                      </h6>
                      <span class="text-secondary">https://kaufland.com</span>
                    </li>

                    <li
                      class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                    >
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
                          class="feather feather-instagram mr-2 icon-inline text-danger"
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
                      <span class="text-secondary">kaufland</span>
                    </li>
                    <li
                      class="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                    >
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
                          class="feather feather-facebook mr-2 icon-inline text-primary"
                        >
                          <path
                            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          ></path></svg
                        >Facebook
                      </h6>
                      <span class="text-secondary">kaufland</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <h3>Informații utilizator</h3>
              <div class="dropdown-divider"></div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Denumirea firmei</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ user.firma.nume }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{{ user.email }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">CUI</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ user.firma.cui }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telefon</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">to be added</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Adresa</h6>
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