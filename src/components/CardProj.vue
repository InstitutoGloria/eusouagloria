<template>
  <div>
    <v-card >
      <div class="d-flex flex-no-wrap justify-space-between black--text">
        <div class="content-body">
          <v-card-title class="headline"> {{ person.name }} </v-card-title>
          <v-card-text>
            {{ person.job }} <br />
          </v-card-text>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["person", "index"],
  components: {
  },
  data() {
    return {
      colors: ["#91c7a0", "#ffa8a8", "#9199c7", "#e3b1b1", "#b1e3e2"],
      dialog: false,
      current: [],
      left: []
    };
  },
  methods: {
    getColor(index, active) {
      if (active) {
        return this.colors[index % 5];
      } else {
        return this.colors[index % 5] + "30";
      }
    }
  }
};
</script>

<style scoped>
.content-body {
  text-align: left;
}
.teste {
  size: 100px;
}
.image_config {
  background-color: blue;
  opacity: 0.2;
}
</style>