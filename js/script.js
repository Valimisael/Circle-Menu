$('#menuButton').on('click', toggleMenu);

function toggleMenu() {
    this.classList.toggle('hidden');
    var counter = 0;
    if ($(this).hasClass('hidden')){
        $(this).css({'border':'2px solid #ffffff', 'color': '#ffffff', 'background-color':'#673AB7'});
        $(this).html('<i class="fas fa-ellipsis-h"></i>');
        setInterval(() => $($('.sector')[counter++]).fadeOut(), 150);
    } else {
        $(this).css({'border':'2px solid #673AB7', 'color': '#673AB7', 'background-color':'#ffffff'});
        $(this).html('<i class="fas fa-times"></i>');
        setInterval(() => $($('.sector')[counter++]).fadeIn(), 150);
    }
}