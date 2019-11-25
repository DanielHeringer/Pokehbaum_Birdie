<template>
  <div>
    <Top @search="updateSearch"/>
    <List :name_list="name_list" :url_list="url_list" :search="search" :page="page" /> 
    <Stats/> 
  </div>
</template>

<script>
import Top from './components/Top.vue'
import List from './components/List.vue'
import Stats from './components/Stats.vue'

export default {
  name: 'app',
  components: {
    Top,
    List,
    Stats
  },
  data(){
    return{
      pokemons: Object,
      page: 3,
      search: '',
      limit: 808,
      offset: (this.page*this.limit),
      url_list: [],
      name_list: []
    }
  },
  mounted: function(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit='+this.limit+'&offset='+this.offset, {
      method: 'get'
    })
    .then((response) =>{
      return response.json()
    })
    .then((response) =>{
      this.pokemons = response.results;
      this.generate_list();
      this.replace_underline();
    });
  },
  methods:{
    generate_list: function(){
      this.name_list = [];
      this.url_list = [];
        var i = 0;
        if(this.search === ''){
          for(i=this.page*151;i<(this.page+1)*151; i++){
            this.name_list.push(this.pokemons[i].name);
            this.url_list.push(this.pokemons[i].url);
          }   
        }
        else{
          for(i=0; i < Object.keys(this.pokemons).length; i++){
            if(this.pokemons[i].name.toUpperCase().includes(this.search.toUpperCase())){
              this.name_list.push(this.pokemons[i].name);
              this.url_list.push(this.pokemons[i].url);
            }
          }
        }
      },
    updateSearch(s){
      this.search = s;
      this.generate_list();
      this.replace_underline();
    },
    replace_underline: function(){
        for(var i=0; i< this.name_list.length; i++){
            this.name_list[i].replace("-", " ");
        }
    }
  }
}
</script>

<style>
@import "font.css"; 
body{
    overflow-x: auto;
    background-color: white;
}
*{
    margin: 0;
    font: 20px 'Product Sans thin Regular';
    border: 0px solid black;
    transition: 0.3s;
}
a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; 
    font: inherit;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #aaa;
    opacity: 1; /* Firefox */
}
</style>
