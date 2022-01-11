<template>
  <div id="app">
    <Header />
    <CharactersMain />
    <CharacterModal />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CharactersMain from "@/components/CharactersMain.vue";
import CharacterModal from "@/components/CharacterModal.vue";

export default {
  name: "App",
  components: {
    Header,
    CharactersMain,
    CharacterModal,
  },
};
</script>
