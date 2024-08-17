
$(document).ready(function() {
    $.get('https://fakestoreapi.com/products', function(data) {
        data.forEach(product => {
            const productHTML = `
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div class="card h-100">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description.substring(0, 100)}...</p>
                            <p class="card-text"><strong>$${product.price}</strong></p>
                        </div>
                    </div>
                </div>
            `;
            $('#product-list').append(productHTML);
        });
    });
});