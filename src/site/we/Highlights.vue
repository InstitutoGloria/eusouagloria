<template>
    <div class="we">
        <v-container class="container text-center">
        <v-container class="cont-img">
          <v-img alt="Gloria Montagem" contain src="../../assets/images/QuemsomosG.png"/>
        </v-container>
            <md-card-media>
                    <div class="item">
                    <div class="player">
                        <video-player  class="vjs-custom-skin"
                         ref="videoPlayer"
                         :options="playerOptions"
                         :playsinline="true"
                         @play="onPlayerPlay($event)"
                         @pause="onPlayerPause($event)"
                         @ended="onPlayerEnded($event)"
                         @loadeddata="onPlayerLoadeddata($event)"
                         @waiting="onPlayerWaiting($event)"
                         @playing="onPlayerPlaying($event)"
                         @timeupdate="onPlayerTimeupdate($event)"
                         @canplay="onPlayerCanplay($event)"
                         @canplaythrough="onPlayerCanplaythrough($event)"
                         @ready="playerReadied"
                         @statechanged="playerStateChanged($event)"/>
                    </div>
                    </div>
            </md-card-media>
        </v-container>   
    </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from "vue-video-player";
import '../../assets/custom-theme.css';

export default {
    components: {
       videoPlayer
  },
    data(){
       return{
           playerOptions: {
          // videojs options
          height: '700',
          // width:'700',
          autoplay: true,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: require("../../assets/videos/gloria_video.mp4")
          }],
        }
       }
    },
    mounted() {
      setTimeout(() => {
        console.log('dynamic change options', this.player)
        this.player.muted(false)
      }, 5000)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      }
    }
    
}
</script>
<style scoped>
.we{
    background-color: #FFFFFF;
    padding-left: 10%;
    padding-right: 10%;
    font-family: 'Poppins', sans-serif;
}
.container{
    display: flex;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: space-between;
    flex-direction: row;
    
}
.cont-img{
  width: 50%;
  margin: 0;
}
.item{
  padding-top: 16%;
}
.title{
    color: #000000;
    font-weight: 600;
    padding-bottom: 10px;
}
.content{
    font-weight: 500;
    font-family: 'Montserrat',sans-serif;
    
    margin: auto;
    max-width: 60%;
    height: fit-content;

    text-align: justify;
    text-justify: inter-cluster;
}

.content-small{
    font-weight: 500;
    font-family: 'Montserrat',sans-serif;
    
    margin: auto;
    max-width: 80%;
    height: fit-content;

    text-align: justify;
    text-justify: inter-cluster;
}
.button{
    color: #853A94;
    font-weight: 700;
    font-family: 'Montserrat',sans-serif;
    background-color: white;
    border-radius: 30px;
}
 

</style>