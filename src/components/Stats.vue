<template>
<div id="stats"> 
<div class="back" onclick="transitionOut();">
    back
</div>

    <div class="box">
        Lorem ipsum fjauifjasiofjoasi
    </div>
</div>
    
</template>

<style>

#stats{
    position: absolute;
    top:60px;
    transform: translateX(-100%);
    background-color: #F7B44D;
    width: 100%;
    height: auto;
    min-height: 100%;
    z-index: 9999;
}

#stats .box{
    width: 40%;
    margin: auto;
    border-radius: 5px;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: white;
    height: 0%;
    padding: 30px;
}

.back{
    margin-top: 20px;
    margin-left: 30px;
    cursor: pointer;
    color: white;
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