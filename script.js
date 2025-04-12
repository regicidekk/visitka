let themevar = false

function themewhite() {
  if (themevar === false) {
    document.getElementById('body').style.backgroundImage = "url(https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg)"
    document.getElementById('body').style.backgroundRepeat = "no-repeat"
    document.getElementById('body').style.backgroundSize = "cover"
    document.getElementById('alogo').src = "whitelogo.png"
    document.getElementById('tt').style.color="black"
    //projects
    document.getElementById('tt').style.color="black"
    document.getElementById('prjcts').style.backgroundColor="#c9c9c9"
    document.getElementById('prjcts').style.color="#363636";
    document.querySelectorAll('.headprj a').forEach(element => {
      element.style.color = "#363636";
    document.querySelectorAll('.imgmath').forEach(img => {
      img.style.borderColor = "#363636";
    });
    });
    //about
    document.getElementById('about').style.color="#212121"
    document.getElementById('about').style.backgroundColor="aliceblue"
    document.querySelectorAll('.abh').forEach(element => {
        element.style.color = "#212121";
    });
    themevar = true
  }
  else {
    document.getElementById('body').style.backgroundImage = "url(bg.jpg)"
    document.getElementById('body').style.backgroundSize = "auto"
    document.getElementById('alogo').src = "148468076.png"
    document.getElementById('tt').style.color="white"
    //projects
    document.getElementById('prjcts').style.backgroundColor="#363636"
    document.getElementById('prjcts').style.color="#c9c9c9"
    document.querySelectorAll('.headprj a').forEach(element => {
      element.style.color = "#c9c9c9";
    document.querySelectorAll('.imgmath').forEach(img => {
      img.style.borderColor = "#c9c9c9";
    });
    });
    //about
    document.getElementById('about').style.color="aliceblue"
    document.getElementById('about').style.backgroundColor="#212121"
    document.querySelectorAll('.abh').forEach(element => {
        element.style.color = "aliceblue";
    });
    themevar = false
  }
}
