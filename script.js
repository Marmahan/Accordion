$(document).ready(function(){
    
$('body').removeClass('jsoff').addClass('jsOn');
var accordion= $('.accordion');
accordion.find('dd').hide();

accordion.find('dt').on('click',function(){
$(this).toggleClass('open').next('dd').slideToggle().siblings('dd').slideUp().prev('dt').removeClass('open');
});

});
