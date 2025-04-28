
// trocar background por video

$(document).ready(function() {
    
    setTimeout(function() {
      $('#video_destaque').css("display","block")
    }, 8000); // 10 segundos
  });


  //silide da vitrine


  $('.vitrine_flex').slick({
    dots:false,
    arrows:false,
    infinite:false,
    centerMode:false,
    speed:1000,
    slidesToShow:6,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    responsive:[
      {
        breakpoint:768,
        settings:{
          slidesToShow:3
        }
      }
    ]
  })

  //almentar z-index da vitrine

  $('.vitrine_wraper').hover(()=>{
    $(this).css('z-index','1000')
  })

  $('.vitrine_wraper').mouseout(()=>{
    $(this).css('z-index','0')
  })