<template>
  <div class="hero is-white is-gradient is-bold">
    <div class="hero-body">
      <h1 class="title">
        <span class="has-text-success is-size-1">R&M</span>
        <span class="subtitle">Personajes</span>
      </h1>
      <div class="field has-addons is-pulled-right">
        <div class="control">
          <input
            v-model="search"
            type="text"
            class="input is-rounded"
            @keyup.enter="searchData(search)"
          />
        </div>
        <div class="control">
          <button class="button is-success is-rounded" @click="searchData">
            Buscar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions("pages", ["searchData"]),
  },
  computed: {
    ...mapState("pages", ["params"]),
    search: {
      get() {
        return this.params[0].name;
      },
      set(value) {
        this.searchData({ name: value });
      },
    },
  },
};
</script>