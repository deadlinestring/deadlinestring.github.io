import '../scss/style.scss'

/*плавный скролл*/
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const topOffset = targetElement.getBoundingClientRect().top;
          const scrollOptions = {
            top: window.pageYOffset + topOffset,
            behavior: "smooth"
          };
          window.scrollTo(scrollOptions);
        }
      });
    });
  });
  

/*Square */

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.random-squares-container');
  const squareSize = 12; // Размер квадрата (можно менять для разных устройств в медиа-запросах)
  const spacing = 15; // Расстояние между квадратами
  const positions = new Set(); // Хранит координаты созданных квадратов

  function createSquare(x, y) {
    const posKey = `${Math.floor(x / (squareSize + spacing))},${Math.floor(y / (squareSize + spacing))}`;
    if (positions.has(posKey)) return; // Проверяем, есть ли квадрат на этих координатах

    positions.add(posKey);
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.left = `${x}px`;
    square.style.top = `${y}px`;
    square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // Случайный цвет
    container.appendChild(square);

    setTimeout(() => {
      positions.delete(posKey);
      square.remove();
    }, 3000); // Удаляем квадрат через 3 секунды
  }

  // Автоматическое создание квадратов в случайных местах
  setInterval(() => {
    const x = Math.random() * container.clientWidth;
    const y = Math.random() * container.clientHeight;
    createSquare(x, y);
  }, 200); // Интервал увеличен до 500 мс

  // Создание квадратов при движении курсора
  container.addEventListener('mousemove', (event) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    createSquare(x, y);
  });
});



// Анимация букаф

document.addEventListener("DOMContentLoaded", function () {
  const typewriterElements = document.querySelectorAll(".typewriter");
  typewriterElements.forEach((element) => {
    const text = element.innerHTML;
    element.innerHTML = "";
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Adjust typing speed here
      }
    }
    typeWriter();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const typewriterElements = document.querySelectorAll('.typewriter');

  typewriterElements.forEach(element => {
    element.addEventListener('animationend', function (event) {
      if (event.animationName === 'typing') {
        element.classList.add('typewriter-finished');
      }
    });
  });
});


//Карта

document.addEventListener("DOMContentLoaded", function () {
  // Координаты вашего местоположения
  const myCoordinates = [51.5147, 81.2061]; // Пример: Рубцовск, Россия

  // Инициализация карты
  const map = L.map('map').setView(myCoordinates, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);


  // Добавление метки местоположения
  L.marker(myCoordinates).addTo(map)
      .bindPopup('My location')
      .openPopup();
});




