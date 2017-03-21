<template>
<div class="sidebar">
  <div class="sidebar__content">
    <a href="#" v-on:click.prevent="newNote">New note</a>
  </div>
  <div v-if="notes.length">
    <note v-for="(note, key, index) in notes" :note="note" :key="index"></note>
  </div>
  <!-- <div v-else class="sidebar__content">
    No notes
  </div> -->
</div>
</template>

<script>
import Note from './Note'
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  components: {
    Note
  },
  computed: {
    ...mapGetters([
      'notes'
    ])
  },
  methods: {
    ...mapActions([
      'newNote'
    ])
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
    background-color: #eee;
    flex: 1;
    height: 100%;
    min-width: 30%;
    overflow-y: auto;

    &__content {
        padding: 30px;

        a {
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>
