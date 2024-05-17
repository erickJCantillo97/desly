<script setup>
import {useDark, useToggle} from '@vueuse/core';
import { ref } from 'vue';


const isDark = useDark();
const colorDark = useToggle(isDark)
const checked = ref(isDark.value);

const toggleDark = () => {
    // alert('color')
    console.log(isDark)
    let currentTheme = 'aura-light-indigo'
    let nextTheme = 'aura-dark-indigo'
    colorDark()
    //  [this.currentTheme, this.nextTheme] = [this.nextTheme, this.currentTheme]
    // primeVue.changeTheme(currentTheme.value, nextTheme, '../../../css/aura-light-indigo', () => {});
}
</script>

<template>
        <!-- <Button @click="toggleDark()"  label="Dark"></Button> -->
    <!-- <ToggleButton v-model="checked" @change="toggleDark()"  onIcon="pi pi-moon" 
    offIcon="pi pi-sun" class="w-9rem" aria-label="Do you confirm" :pt="{
        label: '!hidden',
        root: '!w-12',
        box: '!w-12 dark:bg-gray-700',
        input: 'bg-white dark:bg-gray-700',
        icon: 'text-yellow-500 dark:text-gray-700 ',
        }" /> -->
</template>