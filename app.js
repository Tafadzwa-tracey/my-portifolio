var myDate = new Date();
   var hrs = myDate.getHours();

   var greet;

   if (hrs < 12|| hrs==24)
       greet = 'Good Morning';
   else if (hrs >= 12 && hrs <= 17)
       greet = 'Good Afternoon';
   else if (hrs >= 17 && hrs < 24)
       greet = 'Good Evening';

   document.getElementById('Greetings').innerHTML =
       '<b>' + greet ;

       $(function() {
      $('.scroll-down').click (function() {
        $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
        return false;
      });
    });
