const menuItems = document.querySelector('.menu-items')
const menuIcon = document.querySelector('.menu-icon')
const productImage = document.getElementById('product-img')
const smallImage = document.getElementsByClassName('small-img')

menuItems.style.maxHeight = "0px"

function menuToggle() {
  if(menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px"
  } else {
    menuItems.style.maxHeight = "0px"
  }
}

menuIcon.addEventListener('click', menuToggle)



smallImage[0].onclick= function() {
  productImage.src = smallImage[0].src
}

smallImage[1].onclick= function() {
  productImage.src = smallImage[1].src
}

smallImage[2].onclick= function() {
  productImage.src = smallImage[2].src
}

smallImage[3].onclick= function() {
  productImage.src = smallImage[3].src
}


