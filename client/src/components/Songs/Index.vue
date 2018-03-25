<template>
    <v-layout wrap align-center>
        <v-flex xs6 offset-xs3>
            <songs-search-panel class="mb-2"/>
            <songs-panel/>
        </v-flex>
    </v-layout>
</template>

<script>
import SongsPanel from "./SongsPanel";
import SongsService from "/Users/zaidsaeed/Desktop/tab-tracker/server/src/services/SongsService.js";
import SongsSearchPanel from "./SongsSearchPanel";
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  data() {
    return {
      songs: null
    };
  },
  async mounted() {
    this.songs = (await SongsService.index()).data;
  }
};
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
