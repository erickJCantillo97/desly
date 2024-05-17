<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import { Link } from '@inertiajs/vue3'
import NavBar from "@/Components/Settings/NavBar.vue" 
import Footer from '@/Components/Sections/Footer.vue';
</script>

<template>
  <v-app class="bg-grey-lighten-4">
    <v-main>
        <v-parallax src="/src/img/bg/bg-home.jpg" >
            <NavBar class=""></NavBar>
            <v-container fluid class="!p-0">
                <v-row>
                  <v-col >
                    <div class="d-flex">
                      <Link href="/" as="div">
                        <!-- <ApplicationLogo style="height: 75" /> -->
                      </Link>
                    </div>
                    <v-card class="rounded-lg" elevation="2">
                        <slot />
                        
                    </v-card>
                  </v-col>
                </v-row>
            </v-container>
            
        </v-parallax>
        <Footer></Footer>
    </v-main>
  </v-app>
</template>