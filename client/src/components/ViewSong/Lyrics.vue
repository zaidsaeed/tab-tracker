<template>
    <div>
        <panel title="Lyrics">
            <textarea
                readonly
                v-model="song.lyrics"
            ></textarea>
        </panel>
    </div>
</template>

<script>
import Panel from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/Panel.vue";
export default {
  props: ["song"],
  components: {
    Panel
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
