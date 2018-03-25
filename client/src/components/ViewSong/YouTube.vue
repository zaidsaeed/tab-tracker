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
export default {
  props: ["youtubeId"],
  components: {
    VueYouTubeEmbed
  }
};
</script>

<style scoped>

</style>
