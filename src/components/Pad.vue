<template>
  <div class="pad">
    <input type="text" class="pad__title" placeholder="Title" v-model="note.title">
    <textarea class="pad__content" placeholder="Note" v-model="note.body"></textarea>
    <footer class="pad__footer">
      <ul class="pad__footer-items">
        <li class="pad__footer-item">Words: 100</li>
        <li class="pad__footer-item pad__footer-item--right">Last saved: 20:31:12</li>
      </ul>
    </footer>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'note'
      ])
    }
  }
</script>

<style lang="scss" scoped>

@import '../assets/scss/placeholders';

.pad {
  flex: 4;
  display: flex;
  flex-direction: column;

  &__title {
    width: 100%;
    border: 0;
    font: inherit {
      size: 1.6em;
    }
    outline: none;
    padding: 30px;
  }

  &__content {
    flex: 1;
    width: 100%;
    margin: 0;
    border: 0;
    font: inherit;
    outline: none;
    resize: none;
    padding: 30px;
    line-height: 2em;
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      #fff 10%,
      #fff 90%,
      transparent 100%
    );
  }

  &__footer {
    padding: 30px;
  }

  .pad__footer-items {
    @extend %inline-list;
  }

  .pad__footer-item {
    flex: 1;
    font-size: .8em;

    &--right {
      margin-left: auto;
      text-align: right;
    }
  }
}
</style>
