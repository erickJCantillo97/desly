import { defineStore } from "pinia";
import { ref } from "vue";
import { useTheme } from 'vuetify'
export const useThemeStore = defineStore('themeStore', () => {


    const name = ref('ligth')


    function changeTheme(theme) {

        this.name = theme
    }

    //getter
    //actiosn

    return { name, changeTheme }

}, {
    persist: {
        storage: sessionStorage,
        paths: ['name']
    }
})