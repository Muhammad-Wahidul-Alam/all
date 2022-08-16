$(function(){ 

          //   DARK MODE PLUGIN


          function addDarkmodeWidget() {
            new Darkmode({
              label: '🌓',


              
              
            }).showWidget();
          }
          window.addEventListener('load', addDarkmodeWidget);

        

              //  AUTO TYPE

  var typed = new Typed('#typingAnimation', {
    strings: [`Welcome to our Company`,`Welcome to our Company`,],
    typeSpeed: 300,
    smartBackspace: true // Default value
  });
  var typed = new Typed('#typedAnimation', {
    strings: [`Opening Hour: 08:00 a.m to 10:00 p.m`],
    typeSpeed: 300,
    startDelay: 7000,
    smartBackspace: true // Default value
  });


  


        //  COUNT DOWN

  const counterUp = window.counterUp.default

  const callback = entries => {
    entries.forEach( entry => {
      const el = entry.target
      if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
        counterUp( el, {
          duration: 2000,
          delay: 16,
        } )
        el.classList.add( 'is-visible' )
      }
    } )
  }
  
  const IO = new IntersectionObserver( callback, { threshold: 1 } )
  
  const el = document.querySelector( '.counter' )
  IO.observe( el )


 






             
    //  POP UP DELETE

   $(`.deleteMe`).click(function(){

    


    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,    
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })





      
    })



      //  POP UP BOX

     var mixer = mixitup('.filterableItems');


     // SCROLL BAR  (HOCCE -NA)
    
     $("body").niceScroll();

})