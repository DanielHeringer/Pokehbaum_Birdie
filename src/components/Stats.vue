<template>
<div id="stats"> 
    <div class="back" @click="closeStats">
        back
    </div>
    <div class="name">
        {{pokemon.name | capitalize}}
    </div>
    <div class="box">
        <img id="main_img" :src="img_url+id+img_type">
        <div class="statsBarBox">
            HP:
            <div class="statsBar" >
                <div class="statsBarIn" id="hp">
                    <p>{{pokemon.stats[5].base_stat}}</p>
                </div>
            </div>
            Attack:
            <div class="statsBar" >
                <div class="statsBarIn" id="attack">
                    <p>{{pokemon.stats[4].base_stat}}</p>
                </div>
            </div>
            Defense:
            <div class="statsBar" >
                <div class="statsBarIn" id="defense">
                    <p>{{pokemon.stats[3].base_stat}}</p>
                </div>
            </div>
        </div>
        <div class="statsBarBox">
            Speed:
            <div class="statsBar" >
                <div class="statsBarIn" id="speed">
                    <p>{{pokemon.stats[0].base_stat}}</p>
                </div>
            </div>
            Special Attack:
            <div class="statsBar" >
                <div class="statsBarIn" id="spatk">
                    <p>{{pokemon.stats[2].base_stat}}</p>
                </div>
            </div>
            Special Def:
            <div class="statsBar" >
                <div class="statsBarIn" id="spdef">
                    <p>{{pokemon.stats[1].base_stat}}</p>
                </div>
            </div>
        </div>
        <div class="info">
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'Stats',
    props: {
        id: Number
    },
    data(){
        return{
            img_url:"https://pokeres.bastionbot.org/images/pokemon/",
            img_type:".png",
            pokemon: Object
        }
    },
    mounted: function () {
        this.updateStats();
    },
    watch: {
        id: function(){
            this.updateStats();
        }
    },
    methods: {
        updateStats: function () {
            var url = 'https://pokeapi.co/api/v2/pokemon/'+ this.id;
            console.log(url);
            fetch(url,{
                method: 'get'
            })
            .then((response) =>{
                return response.json();
            })
            .then((response) =>{
                this.pokemon = response;
                var speed = this.pokemon.stats[0].base_stat;
                var spdef = this.pokemon.stats[1].base_stat;
                var spatk = this.pokemon.stats[2].base_stat;
                var atk = this.pokemon.stats[4].base_stat;
                var def = this.pokemon.stats[3].base_stat;
                var hp = this.pokemon.stats[5].base_stat;
                document.getElementById('speed').style.width=String(speed)+"%";
                document.getElementById('spdef').style.width=String(spdef)+"%";
                document.getElementById('spatk').style.width=String(spatk)+"%";
                document.getElementById('attack').style.width=String(atk)+"%";
                document.getElementById('defense').style.width=String(def)+"%";
                document.getElementById('hp').style.width=String(hp)+"%";
            });
        },
        closeStats: function(){
            document.getElementById('stats').style.transform="translateX(-100%)";
            setTimeout(function(){
                document.getElementById('stats').style.display="none";
            }, 200);
        },
        imgerror: function(id){
            document.getElementById('main_img').src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"+id+this.img_type;
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

@import "../assets/stats.css"; 
</style>