var url = window.location.href;   
index = url.indexOf('?'); 
if(index > -1){
    document.getElementById('transition-background').style.transform="translateX(0%)";
}

function transitionIn(id){
    document.getElementById('transition-background').style.transform="translateX(0%)";
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
    document.getElementById('transition-background').style.transform="translateX(100%)";
    setTimeout(function(){
        var url = window.location.href;   
        index = url.indexOf('?'); 
        url = url.substring(0, index);
        window.location.href = url;
    }, 200);
}