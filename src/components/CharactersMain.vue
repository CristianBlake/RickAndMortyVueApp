<template>
  <div class="container mt-5">
    <Navegation />
    <div
      class="columns is-desktop is-mobile is-tablet is-multiline is-centered"
    >
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>
    <Navegation />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import CharacterCard from "./CharacterCard.vue";
import Navegation from "./Navegation.vue";

export default {
  name: "CharactersMain",
  components: {
    CharacterCard,
    Navegation,
  },
  async created() {
    try {
      await this.getCharacters();
    } catch (error) {
      console.error;
    }
  },
  methods: {
    ...mapActions("characters", ["getCharacters"]),
  },
  computed: {
    ...mapState("characters", ["characters"]),
  },
};
</script>