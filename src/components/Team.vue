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
            <slide v-for="(head,index) in heads " :key="index" :index="head.index">
                <figcaption class="subtitle">{{$t(`${head.department}`)}}</figcaption> 
                <v-img @click="filterMembers( $t(`${head.department}`) )" :src='head.url' />
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
import profile from "./Card";
import {Carousel3d, Slide} from 'vue-carousel-3d'
import { filterMembers } from "../functions/Members.js";
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
    heads: [
                { department:"we_page.organogram.ceo.department", head: "we_page.organogram.ceo.head", url:"https://loremflickr.com/250/370/paris/?random=1", index:0},
                { department:"we_page.organogram.business.department", head: "we_page.organogram.business.head", url:"https://loremflickr.com/250/370/paris/?random=8", index:1},
                { department:"we_page.organogram.legal.department", head: "we_page.organogram.legal.head", url:"https://loremflickr.com/250/370/paris/?random=2", index:2},
                { department:"we_page.organogram.tech.department", head: "we_page.organogram.tech.head", url:"https://loremflickr.com/250/370/paris/?random=3", index:3},
                { department:"we_page.organogram.fin.department", head: "we_page.organogram.fin.head", url:"https://loremflickr.com/250/370/paris/?random=4", index:4},
                { department:"we_page.organogram.gov.department", head: "we_page.organogram.gov.head", url:"https://loremflickr.com/250/370/paris/?random=5", index:5},
                { department:"we_page.organogram.proj.department", head: "we_page.organogram.proj.head", url:"https://loremflickr.com/250/370/paris/?random=6", index:6},
                { department:"we_page.organogram.com.department", head: "we_page.organogram.com.head", url:"https://loremflickr.com/250/370/paris/?random=7", index:7},
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
      return new filterMembers().byAreaCurrent("Ceo");
    },
    projects() {
      return new filterMembers().byAreaCurrent("Projects");
    },
    business() {
      return new filterMembers().byAreaCurrent("Business");
    },
    legal() {
      return new filterMembers().byAreaCurrent("Legal");
    },
    technology() {
      return new filterMembers().byAreaCurrent("Technology");
    },
    finances() {
      return new filterMembers().byAreaCurrent("Finances");
    },
    governances() {
      return new filterMembers().byAreaCurrent("Governances");
    }
  },
  methods: {
    filterMembers(area) {
      this.current_option = area; 
      if (area == "Communications") {
        this.current_team = this.communications;
      } else if (area == "Ceo") {
        this.current_team = this.ceo;
      } else if (area == "Projects") {
        this.current_team = this.projects;
      } else if (area == "Business") {
        this.current_team = this.business;
      } else if (area == "Legal") {
        this.current_team = this.legal;
      } else if (area == "Technology") {
        this.current_team = this.technology;
      } else if (area == "Finances") {
        this.current_team = this.finances;
      } else if (area == "Governances") {
        this.current_team = this.governances;
      }
    },
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