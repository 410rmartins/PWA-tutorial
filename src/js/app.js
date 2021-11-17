if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function() {
      console.log('SW registered');
    });
}

var elements = document.getElementsByClassName("card");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function (event) {
    var attribute = this.getAttribute("id");
    var id = "#"+attribute;
    var pwaCard = document.querySelector(id);
    var pwaCardContent = pwaCard.querySelector('.card__content');
    var pwaCardDetails = pwaCard.querySelector('.card__details');

    if (pwaCard.className.indexOf( "hidden" ) != -1) {
      pwaCardContent.style.opacity = 0;
      pwaCardDetails.style.display = 'block';
      pwaCardContent.style.display = 'none';
      setTimeout(function () {
        pwaCardDetails.style.opacity = 1;
      }, 300);

      pwaCard.className = pwaCard.className.replace( "hidden", "open" );
    } else {
      pwaCardDetails.style.opacity = 0;
      pwaCardContent.style.display = 'block';
      pwaCardDetails.style.display = 'none';
      setTimeout(function () {
        pwaCardContent.style.opacity = 1;
      }, 300);

      pwaCard.className = pwaCard.className.replace( "open", "hidden" );
    }
  });
}
