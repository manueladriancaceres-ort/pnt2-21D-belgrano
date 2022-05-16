import { defineStore } from 'pinia'


export const useStore = defineStore('main', {
    state: () => {
        return {
            lista: [],
            contador : 12
        }
    },
    getters: {
        pordiez: (state) => state.contador * 10,
    },
    actions: {
        aumentar(num) {
            this.contador += num;
        },
        agregarCompra(obj) {
            this.lista.push(obj)
        }
    }
})