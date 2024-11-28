<script lang="ts" setup>
import Pin from "../icons/Pin.vue";
import Delete from "../icons/Delete.vue";
import Archive from "../icons/Archive.vue";

import { NotesProvider } from "../../store/notes.store";
import { inject } from "vue";

const { removeNote } = inject("store-notes") as NotesProvider

export type Note = {
  id: number;
  title?: string;
  body: string;
  createdAt: string;
};

interface Props {
  note: Note;
}

const { note } = defineProps<Props>();
</script>

<template data>
  <article
    class="relative min-w-64 flex flex-col border hover:bg-black/[0.025] dark:hover:bg-white/[0.025] border-black/15 dark:border-white/15 rounded-lg p-4 cursor-pointer overflow-hidden transition-all group"
  >
    <div class="flex flex-col flex-1">
      <h1
        class="line-clamp-2 text-lg mb-2 font-semibold dark:text-white/90 text-black/90"
      >
        {{ note?.title }}
      </h1>
      <p class="text-sm line-clamp-[10] whitespace-pre-line">
        {{ note?.body }}
      </p>
    </div>
    <div class="flex items-center justify-between mt-4">
      <p class="text-xs opacity-50">
        {{ note?.createdAt }}
      </p>
      <div
        class="group-hover:opacity-100 opacity-0 flex justify-center items-center gap-x-2 transition-all"
      >
        <button
          class="w-8 h-8 flex justify-center hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
        >
          <Pin tw="text-black/75 dark:text-white/50 p-1.5" />
        </button>
        <button
          @click="removeNote(note.id)"
          class="w-8 h-8 flex justify-center hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
        >
          <Delete tw="text-black/75 dark:text-white/50 p-1.5" />
        </button>
        <button
          class="w-8 h-8 flex justify-center hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
        >
          <Archive tw="text-black/75 dark:text-white/50 p-1.5" />
        </button>
      </div>
    </div>
  </article>
</template>
