$(document).ready(function(){

    $("#banner h1").on("mouseover" ,function(){
        $("#banner h1").addClass("efeito");
    }).on("mouseout", function(){
        $("#banner h1").removeClass("efeito")

    });

    $("#input-search").on("focus",function(){
        $("li.search").addClass("ativo");
    }).on("blur",function(){
        $("li.search").removeClass("ativo")
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:3,
                nav:false
            },
            768:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
    
}); 
