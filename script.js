document.addEventListener('DOMContentLoaded', () => {
    const coffeeList = document.getElementById('coffee-list');
    
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => {
        data.forEach(coffee => {
          const coffeeItem = document.createElement('div');
          coffeeItem.classList.add('coffee-item');
          coffeeItem.innerHTML = `
            <h3>${coffee.title}</h3>
            <img src="${coffee.image}" alt="${coffee.title}" class="coffee-image" />
            <p><strong>Description:</strong> ${coffee.description}</p>
            <p><strong>Ingredients:</strong> ${coffee.ingredients.join(', ')}</p>
          `;
          coffeeList.appendChild(coffeeItem);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });