<script lang="ts" setup>
import { reactive } from "vue";

import { NotesProvider } from "../../store/notes.store";
import { inject } from "vue";

const note = reactive({
  title: "",
  body: "",
});

const { addNote } = inject("store-notes") as NotesProvider;
</script>

<template>
  <section
    class="mx-auto h-full py-4 mb-4 lg:max-w-[40rem] space-y-2 w-full px-4 dark:bg-white/5 bg-black/[0.025] rounded-md transition-all"
  >
    <textarea
      v-model.trim="note.title"
      class="w-full outline-none bg-transparent resize-y"
      placeholder="Título"
      maxlength="100"
      rows="1"
    />
    <textarea
      v-model.trim="note.body"
      class="w-full outline-none text-sm bg-transparent resize-y"
      placeholder="Escribe una nota aquí..."
      @blur="addNote(note.title, note.body)"
    />
  </section>
</template>
<style scoped></style>
