<script setup>
import { useTheme } from 'vuetify'
import { useThemeStore } from "@/stores/ThemeStore"
import { storeToRefs } from 'pinia'


const store = useThemeStore();
const { name } = storeToRefs(store);
const { changeTheme } = store;

const props = defineProps({
    themes: {
        type: Array,
        required: true,
    },
})

const {
    name: themeName,
    global: globalTheme,
} = useTheme()


globalTheme.name.value = name.value
// console.log(globalTheme.name.value)
// alert(name.value)
const {
    state: currentThemeName,
    next: getNextThemeName,
    index: currentThemeIndex,
} = useCycleList(props.themes.map(t => t.name), { initialValue: themeName })

const change = () => {
    globalTheme.name.value = getNextThemeName()
    console.log(getNextThemeName())
    changeTheme(getNextThemeName())
}

// Update icon if theme is changed from other sources
watch(() => globalTheme.name.value, val => {
    currentThemeName.value = val
})
</script>

<template>
    <v-btn @click="change">

        <i :class="props.themes[currentThemeIndex].icon" />
        <VTooltip activator="parent" scroll-strategy="close" location="bottom">
            <span class="text-capitalize">{{ currentThemeName }}</span>
        </VTooltip>
    </v-btn>
</template>
