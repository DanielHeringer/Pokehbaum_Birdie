<template>
    <div class="pokemons">
        <div style="display:inline-block;" v-for="(name, index) in name_list" :key="name">
            <div class="box" :id="getID(String(url_list[index]))">
                <img :src="img_url+getID(String(url_list[index]))+img_type" @error="imgerror(getID(String(url_list[index])))"  height="100%" width="100%">
                <div class="name">
                    {{name | capitalize }}
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'List',
  props: {
    name_list: Array,
    url_list: Array,
    search: String,
    page: Number
  },
  data(){
    return{
        img_url:"https://pokeres.bastionbot.org/images/pokemon/",
        img_type:".png"
    }
  },
  methods: {
      getID: function(url){
          return (url.match(/(\d+)/g) || [])[1];
      },
      imgerror: function(id){
          document.getElementById(id).src = "https://pokestop.io/img/pokemon/psyduck-256x256.png"
      }
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
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
    padding: 5px 0px; 
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    font: 20px 'Product Sans Regular';
}
</style>
