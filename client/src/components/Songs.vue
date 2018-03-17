<template>
    <v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="Songs">
                <div v-for="song in songs" :key="song.title">
                    {{song.title}} -
                    {{song.artist}} -
                    {{song.album}}
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import SongsService from "/Users/zaidsaeed/Desktop/tab-tracker/server/src/services/SongsService.js";
import Panel from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/Panel.vue";
export default {
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    };
  },
  async mounted() {
    this.songs = await SongsService.index();
  }
};
</script>

<style scoped>

</style>
