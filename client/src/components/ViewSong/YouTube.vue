<template>
    <div>
        <panel title="Youtube Video">
            <div>
                <youtube
                :video-id="youtubeId"
                :player-width="500"
                :player-height="200">
                </youtube>
            </div>
        </panel>
    </div>
</template>

<script>
import VueYouTubeEmbed from "vue-youtube-embed";
import Panel from "/Users/zaidsaeed/Desktop/tab-tracker/client/src/components/Panel.vue";
export default {
  props: ["youtubeId"],
  components: {
    Panel,
    VueYouTubeEmbed
  }
};
</script>

<style scoped>

</style>
