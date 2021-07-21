<template>
  <div class="inout">
    <v-container fluid>
        <input type="file" @change="onChange" />
      <xlsx-read :file="file">
        <xlsx-json :sheet="selectedSheet">
          <template #default="{collection}">
            <div>
              {{ collection }}
            </div>
          </template>
        </xlsx-json>
      </xlsx-read>
    </v-container>
 

  </div>
</template>

<script>
export default {
  components: {
      XlsxRead
  },
  data(){
    return {
        file:null, 
    }
  },
  filters: {
    
  },
  computed: {
    
  },
  methods: {
    onChange(event){
        this.file = event.target.files ? event.target.files[0] : null 
    }
  }
};
</script>

<style scoped>
.inout{
    padding: 2% 2% 10% 2%;
}
</style>