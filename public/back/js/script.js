

jQuery(document).ready(function(){
            
            jQuery(function () {
                jQuery('[data-toggle="tooltip"]').tooltip()
              })
              
              jQuery("#feature_btn01").hover(function(){
                    jQuery("#feature_info01").addClass("feature_highlight")
                    }, function(){
                    jQuery("#feature_info01").removeClass("feature_highlight");
                }); 
              jQuery("#feature_btn02").hover(function(){
                    jQuery("#feature_info02").addClass("feature_highlight")
                    }, function(){
                    jQuery("#feature_info02").removeClass("feature_highlight");
                }); 
              jQuery("#feature_btn03").hover(function(){
                    jQuery("#feature_info03").addClass("feature_highlight")
                    }, function(){
                    jQuery("#feature_info03").removeClass("feature_highlight");
                }); 
              jQuery("#feature_btn04").hover(function(){
                    jQuery("#feature_info04").addClass("feature_highlight")
                    }, function(){
                    jQuery("#feature_info04").removeClass("feature_highlight");
                });
//              jQuery("#feature_btn04").hover(function(){
//                    jQuery("#feature_info04").addClass("desaturate ")
//                    }, function(){
//                    jQuery("#feature_info04").removeClass("feature_highlight");
//                });
                
              
              jQuery(".tst_imglink").hover(function(){
                    jQuery(this).find("img").removeClass("desaturate");
                   var comment = jQuery(this).find(".comment").text();
                   jQuery(".testimonials_top_row .comment").text(comment);
                   var name = jQuery(this).find(".name").text();
                   jQuery(".testimonials_top_row .name").text(name);
                    
                    }, function(){
                    jQuery(this).find("img").addClass("desaturate");
                });
                
                
              
            });