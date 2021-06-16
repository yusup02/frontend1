$('.search__trigger').on('click', function(e){
    e.preventDefault();
    
    var
      $this = $(this),
       ico  = $this.find('.fa'),
       form = $this.closest('.search__form');
    
    if(!form.hasClass('open')){
      form.addClass('open');
      ico.toggleClass('fa-search fa-close');
    }else {
      form.removeClass('open');
      ico.toggleClass('fa-close fa-search');
    }
  });


  