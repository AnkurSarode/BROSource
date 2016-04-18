$(document).ready(function()
{
      /* Setting the Animation Of the home Page*/
      var Wht=$(window).height();
      var Wwt=$(window).width();
      $(".cards").css("top",Wht/2);
      if(Wht<Wwt)
      {
        $(".hello-image-center").css("height",Wht*1.1/3);
        $(".hello-image-out").css("height",Wht*1/3);
        $(".hello-image-outermost").css("height",Wht*0.9/3);
      }
      else
      {
        $(".hello-image-center").css("height",Wht*0.9/3);
        $(".hello-image-out").css("height",Wht*0.8/3);
        $(".hello-image-outermost").css("height",Wht*0.6/3);

      }
      $(".hello-image-left").addClass("animated fadeInRight");
      $(".hello-image-right").addClass("animated fadeInLeft");
      $('.carousel').each(function()
      {
        $(this).carousel(
        {
          interval: false
        });
      });
    $(".homepage-carousel").css("top",Wht/4.5);

         /*Seting the grid-card size */
    if(Wwt>Wht)
    {

      if(Wht>1000)
      {
        var card_height=Wht/6;
        $(".customcard").css("height",card_height);
        if(Wwt<1430 && Wwt>1000)
        {
          var card_height=Wht/5;
          $(".customcard").css("height",card_height);
        }
        else if(Wwt<1700 && Wwt>1400)
        {
          var card_height=Wht/5.5;
          $(".customcard").css("height",card_height);
        }
      }
      else
      {
        var card_height=Wht/3.3;
        $(".customcard").css("height",card_height);
        if(Wwt<1340 && Wwt>1000)
        {
          var card_height=Wht/5;
          $(".customcard").css("height",card_height);
        }
      }
      if(Wwt>2000)
      {
        var card_height=Wht/5;
        $(".customcard").css("height",card_height);
      }

    }
      else
      {
        if(Wwt>700)
        {
          var card_height=Wht/6;
          $(".customcard").css("height",card_height);
        }
        else if(Wwt>413)
        {
          var card_height=Wht/4;
          $(".customcard").css("height",card_height);
        }
        else if(Wwt<330)
        {
          var card_height=Wht/2;
          $(".customcard").css("height",card_height);
        }
        else
        {
          var card_height=Wht/3.6;
          $(".customcard").css("height",card_height);
        }
      }

      /*Modal JS, The Signup/Login Toggle Effect*/
      $(".Signup").hide();
      $(".modal-header-button").on("click",function()
      {
        $(".modal-header-button").toggleClass("selected");
        $(".modal-header-button").toggleClass("deselected");
        $(".modal-footer").toggleClass("borderless");
        $(".modal-footer").toggleClass("bordered");
      });
      $("#modal-login-holder").on("click",function()
      {
        $(".Login").show();
        $(".Signup").hide();
      });
      $("#modal-signup-holder").on("click",function()
      {
        $(".Signup").show('fast');
        $(".Login").hide();
      });
      $(".modal-body").bind("scroll", function()
      {
        var modal_Body_Height = $(".modal-body").height();
         if ($(".modal-body").scrollTop()>modal_Body_Height/5)
         {
           $("#modal-scroll-icon").removeClass("glyphicon-menu-down");
           $("#modal-scroll-icon").addClass("glyphicon-menu-up");
         }
         else
         {
           $("#modal-scroll-icon").removeClass("glyphicon-menu-up");
           $("#modal-scroll-icon").addClass("glyphicon-menu-down");     }
      });

    /*Profile Page-Self Begins*/
    /**/
    /**/
    /**/
    /**/

    $(".profile-self-info-footer-tab").on("click",function()
    {

        $(".profile-self-info-footer-tab").addClass("topborder-invisible");
        $(".profile-self-info-footer-tab").removeClass("topborder-visible");
        $(this).toggleClass("topborder-invisible");
        $(this).toggleClass("topborder-visible");
    });
    var NavHt=$("#onboarding-nav").height();
      $("#onboarding-carousel-indicators div").css("height",NavHt/2);
      $("#onboarding-carousel-indicators div").css("width",NavHt/2);
      $("#onboarding-carousel-indicators span").css("font-size",NavHt/4);

      var NavHt=$("#onboarding-nav").height();
      $("#onboarding-carousel-indicators div").css("height",NavHt/2);
      $("#onboarding-carousel-indicators div").css("width",NavHt/2);
      $("#onboarding-carousel-indicators span").css("font-size",NavHt/4);

});

$(window).resize(function()
{
    var Wht=$(window).height();
    var Wwt=$(window).width();
    var NavHt=$("#onboarding-nav").height();
    $("#onboarding-carousel-indicators div").css("height",NavHt/2);
    $("#onboarding-carousel-indicators div").css("width",NavHt/2);
    $("#onboarding-carousel-indicators span").css("font-size",NavHt/4);

    if(Wht<Wwt)
    {
      $(".hello-image-center").css("height",Wht*1.1/3);
      $(".hello-image-out").css("height",Wht*1/3);
      $(".hello-image-outermost").css("height",Wht*0.9/3);
    }
    else
    {
      $(".hello-image-center").css("height",Wht*0.9/3);
      $(".hello-image-out").css("height",Wht*0.8/3);
      $(".hello-image-outermost").css("height",Wht*0.6/3);

    }
    $(".homepage-carousel").css("top",Wht/4.5);

    if(Wwt>Wht)
    {

      if(Wht>1000)
      {
        var card_height=Wht/6;
        $(".customcard").css("height",card_height);
        if(Wwt<1430 && Wwt>1000)
        {
          var card_height=Wht/5;
          $(".customcard").css("height",card_height);
        }
        else if(Wwt<1700 && Wwt>1400)
        {
          var card_height=Wht/5.5;
          $(".customcard").css("height",card_height);
        }
      }
      else
      {
        var card_height=Wht/3.3;
        $(".customcard").css("height",card_height);
        if(Wwt<1340 && Wwt>1000)
        {
          var card_height=Wht/5;
          $(".customcard").css("height",card_height);
        }
      }
      if(Wwt>2000)
      {
        var card_height=Wht/5;
        $(".customcard").css("height",card_height);
      }

    }
      else
      {
        if(Wwt>700)
        {
          var card_height=Wht/6;
          $(".customcard").css("height",card_height);
        }
        else if(Wwt>413)
        {
          var card_height=Wht/4;
          $(".customcard").css("height",card_height);
        }
        else if(Wwt<330)
        {
          var card_height=Wht/2;
          $(".customcard").css("height",card_height);
        }
        else
        {
          var card_height=Wht/3.6;
          $(".customcard").css("height",card_height);
        }
      }

});
