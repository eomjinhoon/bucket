$(document).ready(function(){

    fms();     

    function fms(){

        $("#f0").delay(15000).animate({top:'-100px'});

        $("#f1").delay(15000).css({"display":"block","top":"200px"}).animate({top:'-100px'},function(){

            $("#f1").delay(15000).animate({top:'-100px'});

            $("#f2").delay(15000).css({"display":"block","top":"200px"}).animate({top:'-100px'},function(){

                $("#f2").delay(15000).animate({top:'-100px'});

                $("#f3").delay(15000).css({"display":"block","top":"200px"}).animate({top:'-100px'},function(){

                    $("#f3").delay(15000).animate({top:'-100px'});

                    $("#f4").delay(15000).css({"display":"block","top":"200px"}).animate({top:'-100px'},function(){

                        $("#f4").delay(15000).animate({top:'-100px'});
            
                        $("#f5").delay(15000).css({"display":"block","top":"200px"}).animate({top:'-100px'},function(){
            
                            $("#f5").delay(15000).animate({top:'-100px'});
            
                            $("#f6").delay(15000).css({"display":"block","top":"200px"}).animate({top:'-100px'},function(){
            
                                $("#f6").delay(15000).animate({top:'-100px'});

                                $("#f7").delay(15000).css({"display":"block","top":"200px"}).animate({top:'-100px'},function(){

                                    $("#f7").delay(15000).animate({top:'-100px'});
                        
                                    $("#f8").delay(15000).css({"display":"block","top":"200px"}).animate({top:'-100px'},function(){
                        
                                        $("#f8").delay(15000).animate({top:'-50px'});
                        
                                        $("#f9").delay(15000).css({"display":"block","top":"200px"}).animate({top:'-100px'},function(){
                        
                                            $("#f9").delay(15000).animate({top:'-50px'});

                $("#f0").delay(15000).css({"display":"block","top":"200px"}).animate({top:'-100px'},fms);

                                        });

                                    });

                                });

                            });

                        });

                    });

                });

            });

        });

    }

});