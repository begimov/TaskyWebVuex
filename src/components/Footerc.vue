<template>
<footer class="footer">
  <ul class="footer-items">
    <li class="footer-item">Words: {{ countWords }}</li>
    <li class="footer-item footer-item--center">Chars: {{ countChars }}</li>
    <li class="footer-item footer-item--right">Last saved: {{ lastSaved }}</li>
  </ul>
</footer>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'lastSaved',
      'countWords',
      'countChars'
    ])
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/placeholders';

.footer {
    padding: 30px;

    &-items {
        @extend %inline-list;
    }

    &-item {
        flex: 1;
        font-size: 0.8em;

        &--center {
            margin-left: auto;
            text-align: center;
        }

        &--right {
            margin-left: auto;
            text-align: right;
        }
    }
}
</style>
