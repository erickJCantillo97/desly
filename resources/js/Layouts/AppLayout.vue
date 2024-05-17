<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
// import Dropdown from 'primevue/dropdown';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { useCounter } from "@/stores/counter"
import { storeToRefs } from 'pinia'
import { useI18n } from "vue-i18n";
import DarkToggle from "@/Components/Settings/DarkToggle.vue"
import Footer from '@/Components/Sections/Footer.vue';
import NavBar from '@/Components/Settings/NavBar.vue';


const { t } = useI18n()
const store = useCounter();
const { name, count, location } = storeToRefs(store);
const { increment, reverseName } = store;


defineProps({
    title: String,
});

const selectedCountry = ref(location);
const selectLocale = () => {
    reverseName(selectedCountry.value)
}
const countries = ref([

    { name: t('language.spanish'), code: 'es' },
    { name: t('language.english'), code: 'en' }
]);

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};


</script>

<template>
    <v-app class="">
        <v-main>
            <NavBar class=""></NavBar>
            <v-container fluid>
                <v-row>
                    <v-col>
                        <v-card elevation="2">
                            <slot />
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <Footer></Footer>
        </v-main>
    </v-app>
</template>
