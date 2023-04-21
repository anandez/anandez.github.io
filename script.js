// Smooth scrolling navigation
$('nav a, #hero a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

// Navbar active link
$(window).scroll(function () {
  const scrollbarLocation = $(this).scrollTop();
  $('nav ul li a').each(function () {
    const sectionOffset = $($(this).attr('href')).offset().top - 100;

    if (sectionOffset <= scrollbarLocation) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });
});

// Form submission
$('#contact form').on('submit', function (e) {
  e.preventDefault();
  const name = $('#name').val();
  const email = $('#email').val();
  const message = $('#message').val();

  // TODO: Implement form submission logic here, e.g., using AJAX

  // Clear form fields after submission
  $('#name').val('');
  $('#email').val('');
  $('#message').val('');

  // Show success message
  $('#contact .success-msg').fadeIn().delay(3000).fadeOut();
});
