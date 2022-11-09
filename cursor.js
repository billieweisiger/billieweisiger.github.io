const cursor = document.querySelector("div.cursor")

const moveCursor = function (x, y) {
  cursor.style.left = x + "px"
  cursor.style.top = y + "px"
}

document.addEventListener("mousemove", function(event) {
  moveCursor(event.pageX, event.pageY)
})

function hovering () {
  cursor.classList.add("isHovering")
}

function notHovering () {
  cursor.classList.remove("isHovering")
}


const hideArrow = function(){
  const topViewport = window.pageYOffset
  const arrow = document.querySelector("#arrow")
  console.log(topViewport)

  if (topViewport > 100) {
    arrow.style.opacity = 0;
  } else {
    arrow.style.opacity = 1;
  }
}


document.addEventListener("scroll", function(){
  hideArrow()
})
