<template>
  <v-toolbar density="compact" elevation="4" color="primary" class="px-12 top-0 position-fixed z-10">


    <v-toolbar-title>
      <Link :href="$page.props.auth.user ? route('dashboard') : '/'">
      Desly
      </Link>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <div v-if="!$page.props.auth.user">
      <a href="#features" v-smooth-scroll="{ duration: 100, container: '.main' }">Caracteristicas</a>
    </div>
    <v-spacer></v-spacer>
    <LocaleSelect></LocaleSelect>
    <DarkToggle :themes></DarkToggle>
    <Link :href="route('login')" v-if="!$page.props.auth.user">
    <v-btn variant="text">
      Entrar
    </v-btn>
    </Link>
    <CustomMenuUser v-else class="mx-2 py-8"></CustomMenuUser>
  </v-toolbar>
</template>

<script setup>
import LocaleSelect from "@/Components/Settings/LocaleSelect.vue"
import DarkToggle from "@/Components/Settings/DarkToggle.vue"
import { Link } from '@inertiajs/vue3'
import CustomMenuUser from "@/Components/CustomMenuUser.vue"
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