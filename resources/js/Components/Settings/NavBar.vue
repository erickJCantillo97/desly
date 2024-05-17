<template>
  <v-toolbar density="compact" elevation="4" color="primary" class="px-12 top-0 position-fixed z-10">


    <v-toolbar-title>Desly</v-toolbar-title>

    <v-spacer></v-spacer>

    <LocaleSelect></LocaleSelect>
    <DarkToggle :themes></DarkToggle>

    <Link :href="route('login')">
    <v-btn variant="text">

      Entrar
    </v-btn>
    </Link>
  </v-toolbar>
</template>

<script setup>
import LocaleSelect from "@/Components/Settings/LocaleSelect.vue"
import DarkToggle from "@/Components/Settings/DarkToggle.vue"
import { Link } from '@inertiajs/vue3'

const themes = [
  {
    name: 'light',
    icon: 'pi pi-sun',
  },
  {
    name: 'dark',
    icon: 'pi pi-moon',
  },
]
</script>