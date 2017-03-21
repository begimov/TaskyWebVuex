<template>
<div class="pad">
  <input type="text" class="pad__title" placeholder="Title" v-model="note.title" v-on:keydown="save">
  <textarea class="pad__content" placeholder="Note" v-model="note.body" v-on:keydown="save"></textarea>
  <footerc></footerc>
</div>
</template>

<script>
import Footerc from './Footerc'
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  components: {
    Footerc
  },
  computed: {
    ...mapGetters([
      'note'
    ])
  },
  methods: {
    ...mapActions([
      'saveNote',
      'startSaveTimeout'
    ]),
    save () {
      if (!this.note.id) {
        this.saveNote()
        return
      }
      this.startSaveTimeout()
    }
  }
}
</script>

<style lang="scss" scoped>
.pad {
    flex: 4;
    display: flex;
    flex-direction: column;

    &__title {
        max-width: 100%;
        border: 0;
        font:inherit {
            size: 1.6em;
        }
        outline: none;
        padding: 30px;
    }

    &__content {
        flex: 1;
        max-width: 100%;
        margin: 0;
        border: 0;
        font: inherit;
        outline: none;
        resize: none;
        padding: 30px;
        line-height: 2em;
        -webkit-mask-image: linear-gradient( to bottom, transparent 0%, #fff 10%, #fff 90%, transparent 100% );
    }
}
</style>
