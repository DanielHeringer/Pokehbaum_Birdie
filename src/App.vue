<template>
  <div>
    <Top />
    <List :pokemons="pokemons"/> 
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
      pokemons: [],
      pokemons_evolution: [],
      page: 0
    }
  },
  mounted: function(){
    var url = '';
    var i=0;
    
    for (i=(((this.page)*151)+1); i <= (151*(this.page+1)); i++) {
      url = 'https://pokeapi.co/api/v2/pokemon/' + i + '/';
      
      fetch(url, {
        method: 'get'
      })
      .then((response) =>{
        return response.json()
      })
      .then((response) =>{
        this.pokemons.push(response);
      });
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
