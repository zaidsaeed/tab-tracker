<template>
    <panel title="Song MetaData">
        <v-layout>
            <v-flex xs6>
                <div class="song-title">
                    {{song.title}}
                </div>
                                        
                <div class="song-artist">
                    {{song.artist}}
                </div>

                <div class="song-genre">
                    {{song.album}}
                </div>

                <v-btn dark class="cyan" @click="navigateTo({name:'song-edit', params:{songId:song.id}})"> Edit</v-btn>
            </v-flex>

            <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl"/>
                <br>
                {{song.album}}
            </v-flex> 
        </v-layout>
    </panel>
</template>

<script>
import Panel from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/Panel.vue";
export default {
  props: ["song"],
  components: {
    Panel
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
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
