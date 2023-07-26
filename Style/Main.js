function DarkMode_() {
    var Icon = document.getElementById("_DarkModeICON").innerHTML;
    var Dark = document.getElementById("_darkMode");
    var Dark_Childs = document.getElementsByClassName("DarkMode");
    if (Icon == "sunny") {
        for (let index = 0; index < Dark_Childs.length; index++) {
            const element = Dark_Childs[index];
            element.style.backgroundColor = "rgba(40,40,40,1)";
            element.style.color = "#FFF";
        }
        document.getElementById("_DarkModeICON").innerHTML = "dark_mode";
        Dark.style.transform = "translate(-5px, 5px)";
        Dark.style.color = "#FFF";
        Dark.style.backgroundColor = "green";
        Dark.style.border = "None";
        Dark.style.boxShadow = "None";
        Dark.childNodes[0].nextSibling.style.backgroundColor = "green";
        var text = document.getElementById("_Dark_Text");
        text.innerText = "Dark Mode";
        text.style.backgroundColor = "green";
        text.style.color = "white";



    } else {
        for (let index = 0; index < Dark_Childs.length; index++) {
            const element = Dark_Childs[index];
            element.style.backgroundColor = "#FFF"
            element.style.color = "rgba(40,40,40,1)"
        }
        document.getElementById("_DarkModeICON").innerHTML = "sunny";
        Dark.style.transform = "translate(0px, 0px)";
        Dark.style.color = "black";
        Dark.style.backgroundColor = "white";
        Dark.style.border = "1px solid rgba(0, 0, 0, 0.2)";
        Dark.style.boxShadow = " -5px 5px rgba(0, 0, 0, 0.5)";
        Dark.childNodes[0].nextSibling.style.backgroundColor = "#FFF"
        var text = document.getElementById("_Dark_Text");
        text.innerText = "Light Mode";
        text.style.backgroundColor = "white";
        text.style.color = "#black";

    }


}