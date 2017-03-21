<template>
  <div class="note">
    <a href="#" class="note__delete" v-on:click.prevent="deleteNote(note.id)">
      <span class="note__delete-icon">&times;</span>
    </a>
    <div class="note__content">
      <a href="#" class="note__title" v-on:click.prevent="openNote(note)">
        <span v-if="note.title">
          {{ note.title }}
        </span>
        <span v-else>Untitled</span>
      </a>
      <p class="note__body">
        <span v-if="note.body">
          {{ note.body }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: [
      'note'
    ],
    methods: {
      ...mapActions([
        'openNote',
        'deleteNote'
      ])
    }
  }
</script>

<style lang="scss" scoped>
.note {
  display: flex;
  color:inherit;
  text-decoration: none;
  border-bottom: 1px solid #ddd;
  opacity: .5;
  flex-direction: row;
  max-width: 100%;

  &:hover {
    opacity: 1;
    .note__delete {
      margin-left: 0;
    }
  }

  &__content {
    padding: 30px;
    flex: 2;
    overflow: hidden;
  }

  &__title {
    display: block;
    font: {
      size: 1em;
      weight: 500;
    }
    margin: 0;
    color:inherit;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      text-decoration: none;
    }
  }

  &__body {
    margin-bottom: 0;
    font: {
      size: .9em;
    }
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__delete {
    position: relative;
    margin-left: -20px;
    width: 25px;
    display: block;
    background: #ff1744;
    min-height: 100%;
    color: #fff;
    text-decoration: none;
    transition: margin-left 200ms ease-in-out;

    &-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font:{
        size: 1.5em;
        weight: 500;
      }
    }
  }
}
</style>
