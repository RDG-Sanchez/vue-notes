<script lang="ts" setup>
import { SessionProvider } from "../../store/session.store";
import { inject, onMounted } from "vue";

const { session, getSession } = inject("store-session") as SessionProvider;

import AuthButton from "../AuthButton/AuthButton.vue";

onMounted(() => {
  getSession()
})
</script>

<template>
  <div class="h-dvh flex flex-col justify-center items-center gap-y-4">
    <template v-if="session === null">
      <h1 class="font-bold text-2xl">Inicia sesión en Vue Notes</h1>
      <AuthButton />
    </template>
    <template v-else>
      <h1 class="font-bold text-2xl">Cerrar sesión en Vue Notes</h1>
      <AuthButton />
    </template>
  </div>
</template>
