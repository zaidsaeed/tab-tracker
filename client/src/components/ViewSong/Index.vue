<template>
    <div>
        <v-layout>
            <v-flex xs6>
            <song-metadata :song="song"/>
            </v-flex>

            <v-flex xs6 class="ml-2">
            <you-tube :youtubeId="song.youtubeId"/>
            </v-flex>
        </v-layout>

        <v-layout class="mt-2">
            <v-flex xs6>
                <lyrics :song="song"/>
            </v-flex>

            <v-flex xs6 class="ml-2">
                <tab :song="song"/>
            </v-flex>
        
        </v-layout>
    </div>
</template>

<script>
import { mapState } from "vuex";
import SongHistoryService from "/Users/zaidsaeed/Desktop/tab-tracker/server/src/services/SongHistoryService.js";
import SongsService from "/Users/zaidsaeed/Desktop/tab-tracker/server/src/services/SongsService.js";
import SongMetadata from "./SongMetadata.vue";
import YouTube from "./YouTube.vue";
import Lyrics from "./Lyrics.vue";
import Tab from "./Tab.vue";
export default {
  data() {
    return {
      song: {}
    };
  },
  computed: {
    ...mapState(["user"])
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsService.show(songId)).data;
    SongHistoryService.post({ userId: this.user.id, songId: this.song.id });
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
};
</script>

<style scoped>

</style>
