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

                <v-btn dark class="cyan" :to="{name:'song-edit', params:{songId:song.id}}">Edit</v-btn>

                <v-btn v-if="isUserLoggedIn && !this.bookmark" dark class="cyan" @click="setAsBookmark">Set As Bookmark</v-btn>

                <v-btn v-if="isUserLoggedIn && this.bookmark" dark class="cyan" @click="unsetAsBookmark">Unset As Bookmark</v-btn>
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
import { mapState } from "vuex";
import BookmarksServices from "/Users/zaidsaeed/Desktop/tab-tracker/server/src/services/BookmarksService.js";
export default {
  props: ["song"],
  data() {
    return {
      bookmark: null
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  watch: {
    async song() {
      if (!this.isUserLoggedIn) {
        return;
      }
      try {
        const bookmarks = (await BookmarksServices.index({
          songId: this.song.id,
          userId: this.user.id
        })).data;
        if (bookmarks.length) {
          this.bookmark = bookmarks[0];
        } else {
          this.bookmark = null;
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  methods: {
    async setAsBookmark() {
      try {
        this.bookmark = (await BookmarksServices.post({
          songId: this.song.id,
          userId: this.user.id
        })).data;
      } catch (err) {
        console.log(err);
      }
    },
    async unsetAsBookmark() {
      try {
        await BookmarksServices.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (err) {
        console.log(err);
      }
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
