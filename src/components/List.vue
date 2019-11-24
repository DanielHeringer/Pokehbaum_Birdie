<template>
    <div class="pokemons">
        <div class="box" v-for="pokemon in pokemons" :key="pokemon.id">
            <img :src="img_url+pokemon.id+img_type" height="100%" width="100%">
            <div class="name">
                {{pokemon.name}}
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'List',
  props: {
    pokemons: Array
  },
  data(){
    return{
        img_url:"https://pokeres.bastionbot.org/images/pokemon/",
        img_type:".png"
    }
  }
}
</script>


<style>

.pokemons{
    width: 95%;
    margin: auto;
    margin-top: 150px;
    text-align: center;
}
.pokemons .box{
    display: inline-block;
    border-radius: 5px;
    width: 150px;
    margin: 7px;
    cursor: pointer;
    background-color: #F7B44D;
}
.pokemons .box:hover{
    transform: scale(1.1);
    box-shadow: 0px 0px 4px #319e8a;
}
.pokemons .box img{
    width: 90%;
    margin: 10px;
}
.pokemons .box .name{
    background: #319e8a;
    width: 100%;
    color: white;
    font: 20px 'Product Sans Regular';
}
</style>
