<template>
    <div class="pokemons">
        <div style="display:inline-block;" v-for="(name, index) in name_list" :key="name">
            <div class="box" @click="openStats(getID(String(url_list[index])))">
                <div class="imgbox">
                  <img :src="img_url+getID(String(url_list[index]))+img_type" :id="getID(String(url_list[index]))" @error="imgerror(getID(String(url_list[index])))"  height="100%" width="100%">
                </div>
                <div class="name">
                    {{name | capitalize }}
                </div>
            </div>
        </div>
        <div class="pagination" v-if="search===''">
              <div v-for="p in 14" :key="p" @click="sendPageBack(p-1)" style="display: inline-block;">
                <div id="selected" v-if="(p-1) === page_number" >
                  {{p}}
                </div> 
                <div class="item" v-else>
                  {{p}}
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
        img_type:".png",
        page_number: this.page
    }
  },
  methods: {
        getID: function(url){
            return (url.match(/(\d+)/g) || [])[1];
        },
        imgerror: function(id){
            document.getElementById(id).src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+id+this.img_type;
        },

        sendPageBack: function(p) {
            this.page_number = p;
            this.$emit("page", p);
        },
        openStats: function(id){
          this.$emit("statsID", id);
          setTimeout(function(){
                document.getElementById('stats').style.display="block";
            setTimeout(function(){
                document.getElementById('stats').style.transform="translateX(0%)";
                window.scrollTo(0, 0);
            }, 200);
          }, 100);
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
    display: inline-block;
    width: 95%;
    margin: auto;
    margin-top: 100px;
    text-align: center;
    transition: 2s;
    }
.pokemons .box{
    display: inline-block;
    border-radius: 5px;
    width: 150px;
    margin: 7px;
    cursor: pointer;
    background-color: #ddd;
}
.pokemons .box:hover{
    transform: scale(1.1);
    box-shadow: 0px 0px 4px #319e8a;
}
.pokemons .box img{
    width: 90%;
    margin: 10px;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
}
.pokemons .box .imgbox{
  height: 150px;
}
.pokemons .box .name{
    background: #003A70;
    width: 100%;
    padding: 5px 0px; 
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    font: 20px 'Product Sans Regular';
}

.pagination {
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
}
.pagination #top{
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
}

.pagination .item {
  background-color: #ddd;
  color: black;
  width: 16px;
  padding: 4px 12px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 5px;
}

.pagination #selected{
  width: 16px;
  padding: 4px 12px;
  margin-right: 5px;
  border-radius: 5px;
  background-color: #003A70;
  color: white;
}

.pagination .item:hover{
  background-color: #003A70;
  color: white;
}


@media screen and (max-width: 600px) {
.pokemons{
  margin-top: 0px;
}

}
</style>
