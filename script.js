//addListItem("product-list", {name: "cool product"})

onNewListItem("product-list", function(product) {
  console.log(product)
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image'>").attr("src", product.picture)
  var price = $("<div id='price'>").html(product.price)

  $(".product-list-container").append(nameHeader, image)
})

