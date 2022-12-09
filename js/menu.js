function menuFunction() {
  if (document.getElementById("index_dropDownList") != null) {
    console.log("index")
    document.getElementById("index_dropDownList").classList.toggle("show");
  } else if (document.getElementById("meny_dropDownList") != null) {
    console.log("meny")
    document.getElementById("meny_dropDownList").classList.toggle("show");
  } else {
    console.log("om oss")
    document.getElementById("omOss_dropDownList").classList.toggle("show");
  }

}
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.menu')) {
      var dropdowns = document.getElementsByClassName("dropDownList");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }