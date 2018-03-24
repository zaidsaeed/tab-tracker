<template>
    <v-layout>
        <v-flex xs4>
            <panel title="Song Metadata">
                <v-text-field
                    label="Title"
                    v-model="song.title"
                    required
                    :rules="[required]"
                ></v-text-field>

                <v-text-field
                    label="Artist"
                    v-model="song.artist"
                    required
                    :rules="[required]"
                ></v-text-field>

                <v-text-field
                    label="Genre"
                    v-model="song.genre"
                    required
                    :rules="[required]"
                ></v-text-field>

                <v-text-field
                    label="Album"
                    v-model="song.album"
                    required
                    :rules="[required]"
                ></v-text-field>

                <v-text-field
                    label="Album Image Url"
                    v-model="song.albumImageUrl"
                    required
                    :rules="[required]"
                ></v-text-field>

                <v-text-field
                    label="Youtube Id"
                    v-model="song.youtubeId"
                    required
                    :rules="[required]"
                ></v-text-field>

            </panel>
        </v-flex>

        <v-flex xs8>
            <panel title="Song Structure" class="ml-4">
            <v-text-field
                label="Tab"
                v-model="song.tab"
                multi-line
                required
                :rules="[required]"
            ></v-text-field>

            <v-text-field
                label="Lyrics"
                v-model="song.lyrics"
                multi-line
                required
                :rules="[required]"
            ></v-text-field>
            </panel>
            <div class="danger-alert mt-2" v-if="error">
                {{error}}
            </div>
            <v-btn dark class="cyan" @click="save">Save</v-btn>
        </v-flex>
    
    </v-layout>

</template>

<script>
import Panel from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/Panel.vue";
import SongService from "/Users/zaidsaeed/Desktop/tab-tracker/server/src/services/SongsService.js";

export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: value => !!value || "Required."
    };
  },
  methods: {
    async save() {
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        key => !!this.song[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields";
        return;
      }
      const songId = this.$store.state.route.params.songId;
      try {
        await SongService.put(this.song);
        this.$router.push({ name: "song", params: { songId: songId } });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async mounted() {
    try {
      const songId = this.$store.state.route.params.songId;
      this.song = (await SongService.show(songId)).data;
    } catch (err) {
      console.log(err);
    }
  },
  components: {
    Panel
  }
};
</script>

<style scoped>

</style>
