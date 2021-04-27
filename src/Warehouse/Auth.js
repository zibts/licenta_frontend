import axios from "axios";
import router from "../router";

const state = {
    token:localStorage.getItem('token') ||'',
    user:{},
    status:''
}

const getters = {
    esteLogat : state=>!!state.token,
    authState:state=> state.status,
    user: state=>state.user
}

const actions = {
    //Actiunea de logare in profil
    async login({commit},user) {
        commit('auth_request');
        let res = await axios.post('http://localhost:8081/api/utilizatori/login', user)
        if(res.data.success) {
            const token = res.data.token;
            const user = res.data.utilizator;
            //Pastrarea token-ului in localstorage
            localStorage.setItem('token', token);
            // Setam tokenul in headerul axios
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token, user);
        }
        return res;
    },

    //Preluarea profilului
    async getProfile({commit}) {
        commit('profile_request');
        let res = await axios.get('http://localhost:8081/api/utilizatori/profile')
        commit('profil_utilizator', res.data)
        return res;
    },

    //Registrarea utilizatorului

    async register({
        commit
    }, userData) {
        commit('register_request');
        let res = await axios.post('http://localhost:8081/api/utilizatori/registrare', userData)
        if(res.data.success!==undefined) {
            commit('register_success')
        }
        return res;
    },

    //Delogarea utilizatorului

    async logout ({commit}){
        await localStorage.removeItem('token')
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login')
        return
    }
}

const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token=token
        state.user=user
        state.status='success'
    },
    register_request(state) {
        state.status = 'loading'
    },
    register_success(state) {
        state.status='success'
    },
    logout(state) {
        state.status = ''
        state.token=''
        state.user=''
    },
    profile_request(state) {
        state.status='loading'
    },
    profil_utilizator(state, user) {
        state.user = user
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
