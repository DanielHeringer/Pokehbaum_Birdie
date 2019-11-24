<template>
    <div class="top">
        <div id="text" onclick="transitionOut();">
            Pokedex
        </div>
        <div class="search">
            <form class="search-container" method="GET">
                <input type="search" name="s" placeholder="Pikachu...">
                <button type="submit">Search</button>
            </form>
        </div>
    </div>     
</template>

<script>
export default {
    
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

.search input[type=search]{ 
    height: 40px;
    float: left;
    background-color: #eee;
    border: 1px solid #ccc;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0 10px;

}

.search input[type=search]:focus{ 
    outline: none;
    border: 1px solid #aaa;
}
.search button{
    float: left;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    background: #319e8a;
    cursor: pointer;
    height: 40px;
}
.search button:hover{
    background: #21695c;
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