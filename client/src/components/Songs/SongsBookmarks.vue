<template>
    <panel title="Bookamrks">
        <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="bookmarks">
            <template slot="items" scope="props">
                <td class="text-xs-right">
                    {{props.item.title}}
                </td>
                <td class="text-xs-right">
                    {{props.item.artist}}
                </td>
            </template>
        </v-data-table>
    </panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "/Users/zaidsaeed/Desktop/tab-tracker/server/src/services/BookmarksService.js";
export default {
  data() {
    return {
      headers: [
        { text: "Title", value: "title" },
        { text: "Artist", value: "artist" }
      ],
      pagination: { sortBy: "date", descending: true },
      bookmarks: []
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index()).data;
    }
  }
};
</script>

<style>

</style>
