<script setup>
import {ref} from 'vue'
import { useCounter } from "@/stores/counter"
import { storeToRefs } from 'pinia'
import { useI18n } from "vue-i18n";
import DarkToggle from "@/Components/Settings/DarkToggle.vue"


const { t } = useI18n()
const store  = useCounter();
const {name, count, location} = storeToRefs(store);
const {increment,reverseName} = store;

const selectlocation = ref(location);
const selectLocale = () => {
    selectlocation.value = selectlocation.value == 'us' ? 'es':'us'

    console.log(selectlocation.value)
    reverseName(selectlocation.value)
}

</script>

<template>
 <div class="hidden">
        {{ $i18n.locale = location }}

    </div>
    <div>
        <v-btn
        @click="selectLocale"
        :prepend-icon="'fi fi-' +selectlocation"
        variant="text"
    >
    </v-btn>
        <!-- <Dropdown v-model="selectedCountry" @change="selectLocale" :options="countries" optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem"  :pt="{
        root: '!border-0 !ring-0',
        trigger: '!hidden',
        labelContainer: '!p-0 ',
        label: '!p-0 text-center',
        token: '!p-0',
        item: ' !p-2',
        header: '!p-2'
    }
        "
        >
        <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
            <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 fi fi-${slotProps.value}`" style="width: 18px" />
        </div>
    </template>
             <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="'l'" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 fi fi-${slotProps.option.flag}`" style="width: 18px" />
                </div>
            </template>
        </Dropdown> -->
    </div>
</template>