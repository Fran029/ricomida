const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$( "#enviarCorreo" ).on( "click", function() {
    alert( "El correo fue enviado correctamente" );
    
} );

$( "h4" ).on( "click", function() {
    $(this).css("color", "brown"); 
    
}) ;

$('.card-title').click(function(){
    $(this).siblings(".card-text").toggle();
    });

