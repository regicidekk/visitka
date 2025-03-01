let themevar = false

function themewhite() {
  if (themevar === false) {
    document.getElementById('body').style.backgroundImage = "url(https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg)"
    document.getElementById('body').style.backgroundRepeat = "no-repeat"
    document.getElementById('body').style.backgroundSize = "cover"
    document.getElementById('alogo').src = "whitelogo.png"
    document.getElementById('tt').style.color="black"
    themevar = true
  }
  else {
    document.getElementById('body').style.backgroundImage = "url(bg.jpg)"
    document.getElementById('body').style.backgroundSize = "auto"
    document.getElementById('alogo').src = "148468076.png"
    document.getElementById('tt').style.color="white"
    themevar = false
  }
}
