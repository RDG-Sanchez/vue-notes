<script lang="ts" setup>
import { NotesProvider } from "../../store/notes.store";
import { inject } from "vue";

import Note from "./Note.vue";
import Loader from "../Loader/Loader.vue";

const { state, getNotes } = inject("store-notes") as NotesProvider

getNotes();
</script>

<template>
  <section class="mb-4 space-y-4">
    <div class="flex items-center gap-x-4">
      <h1 class="ml-2 font-medium text-left">MIS NOTAS</h1>
      <Loader v-if="state.isLoading" size="w-4 h-4" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-6 gap-4">
      <Note v-for="item in state.notes" :note="item" />
    </div>
  </section>
</template>
