function openPopup(productName) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');

    popupContent.innerHTML =
      '<h3>Вы хотите купить ' + productName + '?</h3>' +
      '<p>Выберите вариант:</p>' +
      '<button class="delivery-button" data-delivery="Быстрая доставка">Быстрая доставка</button>' +
      '<button class="delivery-button" data-delivery="Обычная доставка">Обычная доставка</button>' +
      '<button class="close-button">Закрыть</button>';

    popup.style.display = 'flex';


    const deliveryButtons = document.querySelectorAll('.delivery-button');
    deliveryButtons.forEach(button => {
      button.addEventListener('click', () => {
        const deliveryOption = button.getAttribute('data-delivery');
        buyNow(productName, deliveryOption);
      });
    });

  
    const closeButton = popupContent.querySelector('.close-button');
    closeButton.addEventListener('click', closePopup);
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  function buyNow(productName, deliveryOption) {
    alert('Вы выбрали ' + productName + ' с ' + deliveryOption);
    closePopup();
  }
   


  
  