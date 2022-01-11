<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a class="pagination-previous" @click="setPages(params[0].page - 1)"
      >Anterior</a
    >
    <ul class="pagination-list">
      <li>
        <a class="pagination-link is-current">{{ params[0].page }}</a>
      </li>
    </ul>
    <a class="pagination-next" @click="setPages(params[0].page + 1)"
      >Siguiente</a
    >
  </nav>
</template>

// <script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Navegation",
  methods: {
    ...mapActions("pages", ["setPages"]),
  },
  computed: {
    ...mapState("pages", ["params", "totalPages"]),
  },
};
</script>