import { reactive } from "vue";
import { Note } from "../components/Notes/Note.vue";

export type NotesProvider = {
  state: { notes: Note[]; isLoading: boolean };
  getNotes: () => void;
  addNote: (title: string, body: string) => void;
  removeNote: (id: number) => void;
};

interface State {
  notes: Note[];
  isLoading: boolean;
}

const state = reactive<State>({
  notes: [],
  isLoading: false,
});

const getNotes = async () => {
  try {
    state.isLoading = true;

    const response: Note[] = await fetch(
      "https://www.jsondataai.com/api/i4X4WZZ"
    ).then((data) => data.json());

    state.notes = await response.map((item, index) => ({
      ...item,
      id: index,
    }));
  } catch (error) {
    alert("Ha ocurrido un error al fetchear Notes");
  } finally {
    state.isLoading = false;
  }
};

const addNote = (title: string, body: string) => {
  if (!body) return alert("Se ha descartado la nota");
  
  const id = state.notes.length + 1;
  const createdAt = new Date().toISOString();

  state.notes.push({ id: id, title: title, body: body, createdAt: createdAt });

  alert("La nota se ha añadido correctamente.");
};

const removeNote = (id: number) => {
  state.notes = state.notes.filter((item) => item.id !== id);

  alert("La nota se ha removido correctamente.");
};

export const useStore: () => NotesProvider = () => ({
  state,
  getNotes,
  addNote,
  removeNote,
});
