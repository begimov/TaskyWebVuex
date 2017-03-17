<template>
<div class="sidebar">
  <!-- <div class="sidebar__content">
    No notes
  </div> -->
  <note></note>
  <note></note>
</div>
</template>

<script>
import Note from './Note'
export default {
  components: {
    Note
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
      color:inherit;
    }
  }
}
</style>
