<!-- <script setup lang="ts">
import { provide } from "vue";

import Notes from "./components/Notes/Notes.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Editor from "./components/Editor/Editor.vue";

import { useStore } from "./store/notes.store";

const store = useStore();

provide("store-notes", store);
</script>

<template>
  <section class="min-h-dvh flex flex-col px-8">
    <Navbar />
    <Editor />
    <Notes />
  </section>
</template>

<style scoped></style> -->

<script lant="ts" setup>
import { useSession } from "./store/session.store.ts";
import { onMounted, ref, provide } from "vue";

provide("store-session", useSession());

import Auth from "./components/Auth/Auth.vue";
</script>

<template>
  <Auth />
</template>
