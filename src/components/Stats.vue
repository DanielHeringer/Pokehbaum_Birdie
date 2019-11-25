<template>
<div id="stats"> 
<div class="back" @click="closeStats">
    back
</div>

    <div class="box">
        {{pokemon}}
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
            pokemon: Object
        }
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
            });
        },
        closeStats: function(){
            document.getElementById('stats').style.transform="translateX(-100%)";
        }
  }

}
</script>

<style>

#stats{
    position: fixed;
    top:60px;
    transform: translateX(-100%);
    background-color: #fff;
    width: 100%;
    height: auto;
    min-height: 100%;
    z-index: 9999;
}

#stats .box{
    width: 80%;
    margin: auto;
    border-radius: 5px;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #eee;
    padding: 30px;
}

.back{
    display: inline-block;
    margin-top: 20px;
    margin-left: 30px;
    cursor: pointer;
    color: black;
    font-weight: bold;
}


@media screen and (max-width: 600px) {
    .back{
        display: none
    }
    #stats .box{
        width: 90%;
        margin: auto;
        margin-top: 120px;
        padding: 10px;
    }
  }
</style>