import axios from "axios";
import router from "../router";

const state = {
  token: localStorage.getItem("token") || "",
  user: {},
  status: "",
  esteFirma: localStorage.getItem("esteFirma") == "true" ,
  rolUtilizator : localStorage.getItem("rolUtilizator") || "",
};

const getters = {
  esteLogat: (state) => !!state.token,
  user: (state) => state.user,
  rolUtilizator:(state) => state.rolUtilizator,
  esteFirma:(state) => !!state.esteFirma,
  authState: (state) => state.status,
  
  
};

const actions = {
  //Actiunea de logare in profil
  async login({ commit }, user) {
    commit("auth_request");
    let res = await axios.post("http://localhost:8081/api/login", user);
    console.log(res)
    if (res.data.success) {
      const token = res.data.token;
      const utilizator = res.data.utilizator;
      //Pastrarea token-ului in localstorage
      localStorage.setItem("token", token);
      localStorage.setItem("esteFirma", (!!res.data.utilizator.firma).toString() )
      localStorage.setItem("rolUtilizator", res.data.utilizator.role.toString() )
      // Setam tokenul in headerul axios
      axios.defaults.headers.common["Authorization"] = token;
      commit("auth_success", {token, utilizator});
    }
    return res;
  },

  //Preluarea profilului
  async getProfile({ commit }) {
    commit("profile_request");
    let res = await axios.get("http://localhost:8081/api/utilizatori/profile");
    commit("profil_utilizator", res.data);
    return res;
  },

  //Registrarea utilizatorului

  async register({ commit }, userData) {
    commit("register_request");
    let res = await axios.post(
      "http://localhost:8081/api/utilizatori/registrare",
      userData
    );
    if (res.data.success !== undefined) {
      commit("register_success");
    }
    return res;
  },
  async registerFirma({ commit }, userData) {
    commit("register_request");
    let res = await axios.post(
      "http://localhost:8081/api/firma/registrare",
      userData
    );
    if (res.data.success !== undefined) {
      commit("register_success");
    }
    return res;
  },

  //Adaugare produs

  async addProduct({commit}, productData) {
    let res = await axios.post(
      "http://localhost:8081/api/firma/produs",
      productData
    );
    if (res.data.success !== undefined) {
      console.log('success')
    }
    return res;
  },

  //obtinerea produsului

  async getProductFirma() {
    let res = await axios.get("http://localhost:8081/api/firma/produse");
    return res.data;
  },
  //Obtinerea tuturor produselor
  async getAllProduse() {
    let res = await axios.get("http://localhost:8081/api/produse");
    return res.data;
  },
  //Obtinerea unui produs
  async getOneProdus({commit},produs) {
    let res = await axios.get("http://localhost:8081/api/produse/"+ produs);
    return res.data;
  },
  //Adaugarea unei rezervari
  async addRezervare({commit},rezervareData) {
    let res = await axios.post(
      "http://localhost:8081/api/utilizatori/rezervari",
      rezervareData
    );
    if (res.data.success !== undefined) {
      console.log('success')
    }
    return res;
  },


  async getProdusFirma({commit},produs) {
    let res = await axios.get("http://localhost:8081/api/produse/"+ produs + "/firma");
    return res.data;
  },
  async getProdusFirmaId({commit},produs) {
    let res = await axios.get("http://localhost:8081/api/produse/"+ produs + "/firma/id");
    return res.data;
  },
  //Delogarea utilizatorului

  async logout({ commit }) {
    await localStorage.clear()
    commit("logout");
    delete axios.defaults.headers.common["Authorization"];
    router.push("/login");
    return;
  },
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
  },
  auth_success(state, {token, utilizator}) {
    state.token = token;
    state.user = utilizator;
    state.esteFirma = !!utilizator.firma;
    state.rolUtilizator = utilizator.role;
    state.status = "success";
  },
  register_request(state) {
    state.status = "loading";
  },
  register_success(state) {
    state.status = "success";
  },
  logout(state) {
    state.status = "";
    state.token = "";
    state.user = "";
    state.rolUtilizator = "";
    state.esteFirma = "";
  },
  profile_request(state) {
    state.status = "loading";
  },
  profil_utilizator(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
