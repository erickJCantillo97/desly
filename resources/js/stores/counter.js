import { defineStore } from "pinia";
import { ref } from "vue";
export const useCounter = defineStore('counter', () => {

    const count = ref(0)
    const name = ref(0)
    const location = ref('es')
    //state
    function reverseName(locale) {
        this.location = locale
    }
    function increment() {
        this.count++
    }
    //getter
    //actiosn

    return { location, name, count, increment, reverseName }

}, {
    persist: {
        storage: sessionStorage,
        paths: ['location']
    }
})