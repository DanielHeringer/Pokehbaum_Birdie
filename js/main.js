var url = window.location.href;   
index = url.indexOf('?'); 
console.log(url.substring(index+1, index+3));

if(index > -1 && url.substring(index+1, index+3) == "id"){
    document.getElementById('stats').style.transform="translateX(0%)";
}

function transitionIn(id){
    document.getElementById('stats').style.transform="translateX(0%)";
    setTimeout(function(){
        var url = window.location.href;   
        index = url.indexOf('?'); 
        if (index > -1){
            var url = url.substring(0, index);
            url += '?id='+id;
        }else{
            url += '?id='+id;
        }
        window.location.href = url;
    }, 200);
}
function transitionOut(){
    document.getElementById('stats').style.transform="translateX(100%)";
    setTimeout(function(){
        var url = window.location.href;   
        index = url.indexOf('?'); 
        url = url.substring(0, index);
        window.location.href = url;
    }, 200);
}

function getPokemonList(s){
    
}
function getStatsPokemon(id){

}