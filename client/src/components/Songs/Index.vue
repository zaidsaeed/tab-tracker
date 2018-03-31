<template>
    <v-layout>
        <v-flex xs6>
            <songs-bookmarks />
            <recently-viewed-songs class="mt-2"/>
        </v-flex>
        <v-flex xs6 class="ml-2">
            <songs-search-panel class="mb-2"/>
            <songs-panel/>
        </v-flex>
    </v-layout>
</template>

<script>
import SongsPanel from "./SongsPanel";
import SongsService from "/Users/zaidsaeed/Desktop/tab-tracker/server/src/services/SongsService.js";
import SongsSearchPanel from "./SongsSearchPanel";
import SongsBookmarks from "./SongsBookmarks";
import RecentlyViewedSongs from "./RecentlyViewedSongs";
export default {
  components: {
    RecentlyViewedSongs,
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks
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
