<script setup>
import {ref} from 'vue'
import Dropdown from 'primevue/dropdown';
import { Head, Link } from '@inertiajs/vue3';
import { useCounter } from "@/stores/counter"
import { storeToRefs } from 'pinia'
import { useI18n } from "vue-i18n";

const { t } = useI18n()
const store  = useCounter();
const {name, count, location} = storeToRefs(store);
const {increment,reverseName} = store;

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

const selectedCountry = ref(location);
const selectLocale = () => {
    reverseName(selectedCountry.value)
}
const countries = ref([
    
    { name: t('language.spanish'), code: 'es' },
    { name: t('language.english'), code: 'en' }
]);
</script>

<template>
    <Head title="Welcome" />
    <div class="hidden">
        {{ $i18n.locale = location }}
    </div>

    <hr />
    <!-- <button @click="reverseName">{{location}}</button> -->
    <!-- {{ counter.name }} : {{ counter.count }} -->
    <div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
    <div class="card flex justify-content-center">
            <Dropdown v-model="selectedCountry" @change="selectLocale" :options="countries" filter optionLabel="name" optionValue="code" placeholder="Select a Country" class="w-full md:w-14rem">
            </Dropdown>
        </div>
        <div v-if="canLogin" class="sm:fixed sm:top-0 sm:end-0 p-6 text-end z-10">
        
            <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dashboard</Link>

            <template v-else>
                <Link :href="route('login')" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">{{$t("auth.login")}}</Link>

                <Link v-if="canRegister" :href="route('register')" class="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</Link>
            </template>
        </div>

      
    </div>
</template>

