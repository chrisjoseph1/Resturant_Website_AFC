document.addEventListener('DOMContentLoaded', function() {
    const addItemForm = document.getElementById('addItemForm');
    const menuContent = document.getElementById('menuContent');

    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(addItemForm);
        const itemName = formData.get('itemName');
        const itemDetails = formData.get('itemDetails');
        const calories = formData.get('calories');
        const protein = formData.get('protein');
        const serving = formData.get('serving');
        const image = formData.get('image');

        const newItem = document.createElement('div');
        newItem.classList.add('menu__content');

        const imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(image);
        imgElement.alt = itemName;
        imgElement.classList.add('menu__img');
        newItem.appendChild(imgElement);

        const nameElement = document.createElement('h3');
        nameElement.classList.add('menu__name');
        nameElement.textContent = itemName;
        newItem.appendChild(nameElement);

        const detailsElement = document.createElement('span');
        detailsElement.classList.add('menu__detail');
        detailsElement.textContent = itemDetails;
        newItem.appendChild(detailsElement);

        const priceElement = document.createElement('span');
        priceElement.classList.add('menu__preci');
        priceElement.innerHTML = `Calories: ${calories} <br> Protein: ${protein}g <br> Serving: ${serving}`;
        newItem.appendChild(priceElement);

        const cartButton = document.createElement('a');
        cartButton.href = '#';
        cartButton.classList.add('button', 'menu__button');
        cartButton.innerHTML = '<i class="bx bx-cart-alt"></i>';
        newItem.appendChild(cartButton);

        menuContent.appendChild(newItem);

        // Clear the form
        addItemForm.reset();
    });
});
