import { defineStore } from 'pinia'
import axios from 'axios'

export const loginStore = defineStore('main', {
    state: () => {
        return {
            usuario: {},
            estaLogeado : false
        }
    },
    getters: {
    },
    actions: {
        async login(usuario) {
            try {
                const data = await axios.post('http://localhost:3001/api/login',usuario);
                this.estaLogeado = true;
                localStorage.setItem('usuario',JSON.stringify(data));
            } catch (error) {
                console.log(error);
            }
        },
        logout() {
            console.log('log out en store');
            this.estaLogeado = false;
            location.reload();
            localStorage.removeItem('usuario');
        }
    }
})