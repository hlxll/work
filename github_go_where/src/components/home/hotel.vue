<template>
	<div>
    <video-player :options="playerOptions">

    </video-player>
  </div>
</template>

<script>
  import 'video.js/dist/video-js.css'
  import { videoPlayer } from 'vue-video-player'
  export default {
    data(){
      return{
        playerOptions: {
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "/static/video/one.mp4"
          }],
          // poster: "/static/video/",
        }
      }
    },
    components: {
      videoPlayer
    }
  }
</script>

<style>
</style>
