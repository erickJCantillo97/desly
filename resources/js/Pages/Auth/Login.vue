<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useCounter } from "@/stores/counter"
import { storeToRefs } from 'pinia'
const store = useCounter();

const { name, count, location } = storeToRefs(store);

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});


const rules = {
    required: value => !!value || 'Este campo es Requerido',
}

const isPasswordVisible = ref(false)

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>

    <Head title="Log in" />
    <div class="flex justify-center py-12">
        <VCard class="auth-card pa-4 pt-7">
            <VCardItem class="justify-center">
                <template #prepend>
                    <div class="d-flex">
                        <!-- <div class="d-flex text-primary" v-html="logo" /> -->
                        logo
                    </div>
                </template>
                <VCardTitle class="text-2xl font-weight-bold">
                    Desly
                </VCardTitle>
            </VCardItem>

            <VCardText class="pt-2 text-center">
                <h5 class="text-h5 mb-1">
                    Binevenido de nuveo! 👋🏻
                </h5>
                <p class="mb-0">
                    Por favor ingresa tus credenciales
                </p>
            </VCardText>

            <VCardText>
                <VForm @submit.prevent="submit">
                    <VRow>
                        <!-- email -->
                        <VCol cols="12">
                            <VTextField :rules="[rules.required]" v-model="form.email" autofocus
                                placeholder="johndoe@email.com" label="Email" type="email" />
                        </VCol>

                        <!-- password -->
                        <VCol cols="12">

                            <v-text-field v-model="form.password" label="Password" class="!focus:ring-0"
                                variant="underlined" :type="isPasswordVisible ? 'text' : 'password'"
                                :append-inner-icon="!isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append-inner="isPasswordVisible = !isPasswordVisible" />

                            <!-- remember me checkbox -->
                            <div class="flex justify-between items-center">
                                <VCheckbox v-model="form.remember" label="Remember me" />
                                <Link class="-mt-12 text-primary" to="javascript:void(0)">
                                Olvide mi contraseña
                                </Link>
                            </div>

                            <!-- login button -->
                            <VBtn color="primary" block type="submit">
                                Login
                            </VBtn>
                        </VCol>

                    </VRow>
                </VForm>
            </VCardText>
        </VCard>
    </div>
    <!-- <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" :value="$t('labels.email')" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    autocomplete="username"
                />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <TextInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="current-password"
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.remember" name="remember" />
                    <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                    Forgot your password?
                </Link>

                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard> -->
</template>
