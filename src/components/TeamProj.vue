<template>
  <div class="team">
    <v-container fluid>
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
                <v-img 
                  @click="filterMembersLocal( $t(`${proj.department}`))"
                  :src="require(`../assets/images/projetos/${proj.src}`)"  
                  aspect-ratio="1"
                />
            </slide>   
            </carousel-3d>  
        </div>      
    </v-container>
      <div class="text-center container">
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
import i18n from '@/plugins/i18n'

import profile from "./CardProj";
import {Carousel3d, Slide} from 'vue-carousel-3d'
import { filterMembersProj} from "../functions/MembersProj.js";
import { filterMembersProjEN} from "../functions/MembersProjEN.js";

export default {
  components: {
    Carousel3d,
    Slide,
    profile,
  },
  data: () => ({
    current_team: [],
    left_team: [],
    current_option: "",
    projs: [
                { department:"we_page.projects.gloria.department", head: "we_page.projects.gloria.head", src:"gloria.png", index:0},
                { department:"we_page.projects.convida.department", head: "we_page.projects.convida.head", src:"Convida.png", index:1},
                { department:"we_page.projects.game.department", head: "we_page.projects.game.head", src:"O_mundo_de_gloria.png", index:2},
                { department:"we_page.projects.steam.department", head: "we_page.projects.steam.head", src:"Steam_power.png", index:3},
                { department:"we_page.projects.unops.department", head: "we_page.projects.unops.head", src:"UNOPS.png", index:4},
                // { department:"we_page.projects.ambassador.department", head: "we_page.projects.ambassador.head", url:"https://loremflickr.com/250/370/paris/?random=3", index:5},
                // { department:"we_page.projects.map.department", head: "we_page.projects.map.head", url:"https://loremflickr.com/250/370/paris/?random=12", index:6},
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
      return new filterMembersProj().byAreaCurrent("Convida");
    },
    convidaEN() {
      return new filterMembersProjEN().byAreaCurrent("Convida");
    },
    gloria() {
      return new filterMembersProj().byAreaCurrent("Glória");
    },
    gloriaEN() {
      return new filterMembersProjEN().byAreaCurrent("Glória");
    },
    steam() {
      return new filterMembersProj().byAreaCurrent("STEAM Girls");
    },
    steamEN() {
      return new filterMembersProjEN().byAreaCurrent("STEAM Girls");
    },
    game() {
      return new filterMembersProj().byAreaCurrent("Jogo-Mundo de Glória");
    },
    gameEN() {
      return new filterMembersProjEN().byAreaCurrent("Game-Glória's World");
    },
    ambassador() {
      return new filterMembersProj().byAreaCurrent("Jovens Embaixadoras Glória");
    },
    ambEN() {
      return new filterMembersProEN().byAreaCurrent("Glória's Young Ambassadors");
    },
    map() {
      return new filterMembersProj().byAreaCurrent("Mapa da Violência");
    },
    mapEN() {
      return new filterMembersProjEN().byAreaCurrent("Violence Map");
    },
    unop() {
      return new filterMembersProj().byAreaCurrent("UNOPs");
    },
    unopEN() {
      return new filterMembersProjEN().byAreaCurrent("UNOPs");
    }
  },
  methods: {
    filterMembersLocal(area){
      if( i18n.locale == 'en'){
        this.filterMembersProjEN(area)
      } else if( i18n.locale =='pt-br'){
        this.filterMembersProj(area)
      }
    },
    filterMembersProj(area) {
      this.current_option = area; 
      if (area == "Convida") {
        this.current_team = this.convida;
      } else if (area == "Glória") {
        this.current_team = this.gloria;
      } else if (area == "STEAM Girls") {
        this.current_team = this.steam;
      } else if (area == "Jogo-Mundo de Glória" ) {
        this.current_team = this.game;
      } else if (area == "Jovens Embaixadoras Glória") {
        this.current_team = this.ambassador;
      } else if (area == "Mapa da Violência") {
        this.current_team = this.map;
      } else if (area == "UNOPs") {
        this.current_team = this.unop;
      }
    },
    filterMembersProjEN(area) {
      this.current_option = area; 
      if (area == "Convida") {
        this.current_team = this.convidaEN;
      } else if (area == "Glória") {
        this.current_team = this.gloriaEN;
      } else if (area == "STEAM Girls") {
        this.current_team = this.steamEN;
      } else if (area == "Game-Glória's World" ) {
        this.current_team = this.gameEN;
      } else if (area == "Violence Map" ) {
        this.current_team = this.mapEN;
      } else if (area == "Glória's Young Ambassadors" ) {
        this.current_team = this.ambEN;
      } else if (area == "UNOPs") {
        this.current_team = this.unopEN;
      }
    }
  }
};
</script>

<style scoped>
.carousel-3d-slide{
  background-color: transparent;
}
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
.subtitle{
  background-color: transparent;
  font-size: 16pt;
  font-weight: 900;
  color: rgb(111, 113, 188);
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