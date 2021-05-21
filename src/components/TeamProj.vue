<template>
  <div class="team">
    <v-container fluid>
       <v-container class="container text-center">
            <p class="font-title">{{$t('we_page.projects.title') }}</p>
      </v-container>
        <div id="carousel-home-resources" class="carousel-home-resources">
            <carousel-3d 
                :perspective="0"
                :border="0"
                :width="250"
                :controls-visible="true"
                :space="250"
                :scaling="0"
                :display="3"
                :disable3d="true"
                :clickable="true">
            <slide v-for="(proj,index) in projs " :key="index" :index="proj.index">
                <figcaption class="subtitle">{{$t(`${proj.department}`)}}</figcaption> 
                <v-img @click="filterMembersProj( $t(`${proj.department}`) )" :src='proj.url' />
            </slide>   
            </carousel-3d>  
        </div>      
    </v-container>
      <div class="text-center container">
        <!-- <v-img max-width="100" src="../assets/images/vector1.png"/> -->
        <p class=" text-center font-title">{{this.current_option}}</p>
      </div>
    
    <v-row>
      <v-col
        v-for="(item, i) in current_team"
        :key="item.key">
        <profile :person="item" :index="i" />
      </v-col>
    </v-row>

  </div>
</template>

<script>
import profile from "./CardProj";
import {Carousel3d, Slide} from 'vue-carousel-3d'
import { filterMembersProj } from "../functions/MembersProj.js";
export default {
  components: {
    Carousel3d,
    Slide,
    profile
  },
  data: () => ({
    current_team: [],
    left_team: [],
    current_option: "",
    projs: [
                { department:"we_page.projects.gloria.department", head: "we_page.projects.gloria.head", url:"https://loremflickr.com/250/370/paris/?random=7", index:0},
                { department:"we_page.projects.convida.department", head: "we_page.projects.convida.head", url:"https://loremflickr.com/250/370/paris/?random=5", index:1},
                { department:"we_page.projects.game.department", head: "we_page.projects.game.head", url:"https://loremflickr.com/250/370/paris/?random=9", index:2},
                { department:"we_page.projects.steam.department", head: "we_page.projects.steam.head", url:"https://loremflickr.com/250/370/paris/?random=10", index:3},
            ],
  }),
  filters: {
    teste(value) {
      let arr_ret = [];
      value.map(function(item) {
        arr_ret.push(new filterMembersProj().byKey(item));
      });
      return arr_ret.join(", ");
    }
  },
  computed: {
    convida() {
      return new filterMembersProj().byAreaCurrent("convida");
    },
    gloria() {
      return new filterMembersProj().byAreaCurrent("gloria");
    },
    steam() {
      return new filterMembersProj().byAreaCurrent("steam");
    },
    game() {
      return new filterMembersProj().byAreaCurrent("game");
    }
  },
  methods: {
    filterMembersProj(area) {
      this.current_option = area; 
      if (area == "convida") {
        this.current_team = this.convida;
      } else if (area == "gloria") {
        this.current_team = this.gloria;
      } else if (area == "steam") {
        this.current_team = this.steam;
      } else if (area == "game") {
        this.current_team = this.game;
      }
    }
  }
};
</script>

<style scoped>
.team {
  padding: 2% 2% 10% 2%;
}
.options {
  padding-left: 100px;
  padding-right: 100px;
  text-align: center;
}
.titulo {
  text-align: center;
  margin: 1em 0 1em 0;
}
.sub-titulo {
  text-align: center;
  margin: 1.5em 0 1em 0;
}
.template-col {
  align-items: center;
  text-align: center;
}
.btn-group {
  text-align: center;
  margin-top: 4em;
}
.btn-opt {
  margin: 0 6em 0 6em;
}
.btn {
  background-color: rgb(111, 113, 188) !important;
  color: azure;
}
.direction {
  text-align: center;
}
.main_title {
  font-family: "Titillium Web Bold", sans-serif;
  font-size: 30px;
}
img {
  width: 60%;
}
</style>