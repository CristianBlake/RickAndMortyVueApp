<template>
  <div class="modal" :class="{ 'is-active': modal }" v-if="modal">
    <div class="modal-background" @click="setModalFalse"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <strong class="modal-card-title">{{ currentCharacter.name }}</strong>
        <button
          class="delete"
          aria-label="close"
          @click="setModalFalse"
        ></button>
      </header>
      <section class="modal-card-body columns">
        <div class="column">
          <img
            :src="currentCharacter.image"
            class="image column"
            :alt="currentCharacter.name"
          />
        </div>
        <div class="column">
          <strong class="is-size-4">Genero:</strong>
          <p class="is-size-4">{{ currentCharacter.gender }}</p>
          <strong class="is-size-4">Estatus:</strong>
          <p class="is-size-4">{{ currentCharacter.status }}</p>
          <strong class="is-size-4">Raza:</strong>
          <p class="is-size-4">{{ currentCharacter.species }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CharacterModal",
  computed: {
    ...mapState("characters", ["modal", "currentCharacter"]),
  },
  methods: {
    ...mapMutations("characters", ["setModalFalse"]),
  },
};
</script>