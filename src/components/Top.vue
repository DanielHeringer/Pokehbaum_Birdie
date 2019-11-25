<template>
    <div class="top">
        <div id="text" @click="empty_search">
            Pokedex
        </div>
        <div class="search">
            <div class="search-container">
                <input type="text" v-model="search" @keyup="sendBack" placeholder="Pikachu...">
                <div class="btn" @click="sendBack">Search</div>
            </div>
        </div>
    </div>     
</template>

<script>
export default {
  name: 'Top',
  props: {
  },
  data(){
    return{
        search:""
    }
  },
  methods: {
    sendBack: function() {
        this.$emit("search", this.search);
    },
    empty_search: function() {
        this.search = "";
        this.$emit("search", this.search);
    }
  }
    
}
</script>

<style>

.top{
    margin: 0;
    position: fixed;
    top:0;
    border: 0px solid black;
    width: 100%;
    height: 60px;
    background-color: #3dc4ac;
    color: white;
    z-index: 99999999;
}
#text{
    padding: 10px;
    padding-left:30px;
    font-size: 20px;
    /* border: 1px solid black; */
}
.top #text{    
    display: inline-block;
    width: 200px;
    cursor: pointer;
    font: 30px 'Product Sans Regular';
}
.search{
    float: right;
    text-align: center;
    /* border: 1px solid #eee; */
    height: 60px;
    margin-right: 10px;
    width: auto;
}
.search-container{
    display: inline-block;
    /* border: 1px solid #000; */
    height: 40px;
    padding: 10px 0;
    width: auto;
    margin-right: 30px;
}

.search input[type=text]{ 
    height: 40px;
    float: left;
    background-color: #eee;
    border: 1px solid #ccc;
    padding: 0 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.search input[type=search]:focus{ 
    outline: none;
    border: 1px solid #aaa;
}
.search .btn{
    float: left;
    border: none;
    color: white;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #319e8a;
    padding: 9px;
}


@media screen and (max-width: 600px) {
    .search{
        width: 100%;
        display: block;
        float: center;
        margin-right: 0px;
        /* border: 1px solid black; */
    }
    .search-container{
        padding: 10px;
        margin-right: 0px;
    }
    .top{
        text-align: center;
        display: block;
        height: 120px;
        float: center;
        padding:0px;
    }
    .top #text{
        padding: 10px 0;
    }
}
</style>