<template>
  <div class="team">
    <v-container fluid>
        <div id="carousel-home-resources" class="carousel-home-resources">
            <carousel-3d 
                :perspective="0"
                :border="0"
                :width="300"
                :height="400"
                :controls-visible="true"
                :space="300"
                :scaling="0"
                :display="3"
                :disable3d="true"
                :clickable="true">
            <slide v-for="(head,index) in heads " :key="index" :index="head.index">
                <figcaption class="subtitle">{{$t(`${head.department}`)}}</figcaption> 
                <v-img 
                  @click=" filterMembersLocal( $t(`${head.department}`) )" 
                  :src="require(`../assets/organogram/${head.src}`)" 
                  aspect-ratio="1" 
                />  
            </slide>   
            </carousel-3d>  
        </div>      
    </v-container>
      <div class="text-center container">
        <p class=" text-center font-title">{{this.current_option}}</p>
      </div>
    {{local}}
    <v-row>
      <v-col
        align-self="center"
        v-for="(item, i) in current_team"
        :key="item.key">
        <profile :person="item" :index="i" />
      </v-col>
    </v-row>

  </div>
</template>

<script>
import i18n from '@/plugins/i18n'
import profile from "./Card";
import {Carousel3d, Slide} from 'vue-carousel-3d'
import { filterMembers } from "../functions/Members.js";
import { filterMembersEN} from '../functions/MembersEN.js';

export default {
  components: {
    Carousel3d,
    Slide,
    profile,
  },
  data: () => ({
    current_team: [],
    left_team: [],
    local:"",
    current_option: "",
    heads: [
                { department:"we_page.organogram.ceo.department", head: "we_page.organogram.ceo.head", src:"cristina-removebg-preview.png", index:0},
                // { department:"we_page.organogram.business.department", head: "we_page.organogram.business.head", src:"https://loremflickr.com/250/370/paris/?random=8", index:1},
                { department:"we_page.organogram.legal.department", head: "we_page.organogram.legal.head", src:"cristina_neves-removebg-preview.png", index:1},
                { department:"we_page.organogram.tech.department", head: "we_page.organogram.tech.head", src:"gustavo-removebg-preview.png", index:2},
                // { department:"we_page.organogram.fin.department", head: "we_page.organogram.fin.head", src:"https://loremflickr.com/250/370/paris/?random=4", index:4},
                { department:"we_page.organogram.gov.department", head: "we_page.organogram.gov.head", src:"isabela-removebg-preview.png", index:3},
                // { department:"we_page.organogram.proj.department", head: "we_page.organogram.proj.head", src:"https://loremflickr.com/250/370/paris/?random=6", index:6},
                // { department:"we_page.organogram.com.department", head: "we_page.organogram.com.head", src:"https://loremflickr.com/250/370/paris/?random=7", index:7},
            ],
  }),
  filters: {
    teste(value) {
      let arr_ret = [];
      value.map(function(item) {
        arr_ret.push(new filterMembers().byKey(item));
      });
      return arr_ret.join(", ");
    }
  },
  computed: {
    communications() {
      return new filterMembers().byAreaCurrent("Communications");
    },
    ceo() {
      return new filterMembers().byAreaCurrent("CEO");
    },
    ceoEN() {
      return new filterMembersEN().byAreaCurrent("CEO")
    },
    projects() {
      return new filterMembers().byAreaCurrent("Projetos");
    },
    business() {
      return new filterMembers().byAreaCurrent("Business");
    },
    legal() {
      return new filterMembers().byAreaCurrent("Jurídico");
    },
    legalEN() {
      return new filterMembersEN().byAreaCurrent("Legal");
    },
    technology() {
      return new filterMembers().byAreaCurrent("Tecnologia");
    },
    technologyEN() {
      return new filterMembersEN().byAreaCurrent("Technology");
    },
    finances() {
      return new filterMembers().byAreaCurrent("Finances");
    },
    governances() {
      return new filterMembers().byAreaCurrent("Governança");
    },
    governancesEN() {
      return new filterMembersEN().byAreaCurrent("Governances");
    },
  },
  methods: {
    filterMembersLocal(area){
      if( i18n.locale == 'en'){
        this.filterMembersEN(area)
      } else if( i18n.locale =='pt-br'){
        this.filterMembers(area)
      }
    },

    filterMembers(area) {
      this.current_option = area; 
      if (area == "Communicações") {
        this.current_team = this.communications;
      } else if (area == "CEO") {
        this.current_team = this.ceo;
      } else if (area == "Projetos") {
        this.current_team = this.projects;
      } else if (area == "Negócios") {
        this.current_team = this.business;
      } else if (area == "Jurídico") {
        this.current_team = this.legal;
      } else if (area == "Tecnologia") {
        this.current_team = this.technology;
      } else if (area == "Finanças") {
        this.current_team = this.finances;
      } else if (area == "Governança") {
        this.current_team = this.governances;
      }
    },
    filterMembersEN(area) {
      this.current_option = area; 
      if (area == "Communications") {
        this.current_team = this.communications;
      } else if (area == "CEO") {
        this.current_team = this.ceoEN;
      } else if (area == "Projects") {
        this.current_team = this.projects;
      } else if (area == "Business") {
        this.current_team = this.business;
      } else if (area == "Legal") {
        this.current_team = this.legalEN;
      } else if (area == "Technology") {
        this.current_team = this.technologyEN;
      } else if (area == "Finances") {
        this.current_team = this.finances;
      } else if (area == "Governances") {
        this.current_team = this.governancesEN;
      }
    },
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
  font-size: 18pt;
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