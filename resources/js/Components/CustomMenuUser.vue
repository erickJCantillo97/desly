<template>

    <VBadge dot location="bottom right" offset-x="3" offset-y="3" color="success" bordered>
        <VAvatar class="cursor-pointer" color="primary" variant="tonal">
            <VImg :src="$page.props.auth.user.profile_photo_url" />

            <!-- SECTION Menu -->
            <VMenu activator="parent" width="230" location="bottom end" offset="14px">
                <VList>
                    <!-- 👉 User Avatar & Name -->
                    <VListItem>
                        <template #prepend>

                            <VListItemAction start>
                                <VBadge dot location="bottom right" offset-x="3" offset-y="3" color="success">
                                    <VAvatar color="primary" variant="tonal">

                                        <VImg :src="$page.props.auth.user.profile_photo_url" />
                                    </VAvatar>
                                </VBadge>
                            </VListItemAction>
                        </template>

                        <VListItemTitle class="font-weight-semibold">
                            {{ $page.props.auth.user.name }}
                        </VListItemTitle>
                        <VListItemSubtitle>Unidad 909A</VListItemSubtitle>
                    </VListItem>
                    <VDivider class="my-2" />

                    <!-- 👉 Profile -->
                    <Link :href="route('profile.show')">
                    <VListItem link>
                        <template #prepend>
                            <VIcon icon="mdi-account" size="22" />
                        </template>

                        <VListItemTitle>Profile</VListItemTitle>
                    </VListItem>
                    </Link>


                    <!-- 👉 Settings -->
                    <!-- <VListItem link>
                        <template #prepend>
                            <VIcon class="me-2" icon="bx-cog" size="22" />
                        </template>

                        <VListItemTitle>Settings</VListItemTitle>
                    </VListItem> -->

                    <!-- 👉 Pricing -->
                    <VListItem link>
                        <template #prepend>
                            <VIcon class="me-2" icon="bx-dollar" size="22" />
                        </template>

                        <VListItemTitle>Pricing</VListItemTitle>
                    </VListItem>

                    <!-- 👉 FAQ -->
                    <VListItem link>
                        <template #prepend>
                            <VIcon class="me-2" icon="bx-help-circle" size="22" />
                        </template>

                        <VListItemTitle>FAQ</VListItemTitle>
                    </VListItem>

                    <!-- Divider -->
                    <VDivider class="my-2" />

                    <!-- 👉 Logout -->

                    <VListItem @click="logout">
                        <template #prepend>
                            <VIcon class="me-2" icon="mdi-logout" size="22" />
                        </template>

                        <VListItemTitle>Logout</VListItemTitle>
                    </VListItem>
                </VList>
            </VMenu>
            <!-- !SECTION -->
        </VAvatar>
    </VBadge>
</template>

<script setup>
import { ref } from 'vue';
import LocaleSelect from './Settings/LocaleSelect.vue';
import DarkToggle from './Settings/DarkToggle.vue';
import { Link, router } from '@inertiajs/vue3';

const fav = false
const menu = ref(false)
const message = false
const hints = false
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

const logout = () => {
    router.post(route('logout'));
};
</script>