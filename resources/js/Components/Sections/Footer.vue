<template>
    <v-footer>
        <v-row justify="center" no-gutters>
            <v-btn v-for="link in links" :key="link" class="mx-2" color="primary" rounded="xl" variant="text">
                {{ link }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Desly</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup>
const links = ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"];
</script>
