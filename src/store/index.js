import Vuex from "vuex";
import Vue from 'vue';
import todos from './modules/todos'

//Loads Vuex
Vue.use(Vuex);

//Creates Store
export default new Vuex.Store({
    modules: {
        todos 
    }
})