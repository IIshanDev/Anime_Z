function DarkMode_() {
    var Icon = document.getElementById("_DarkModeICON").innerHTML;
    var Dark = document.getElementById("_darkMode");
    var Dark_Childs = document.getElementsByClassName("DarkMode");
    if (Icon == "dark_mode") {

        for (let index = 0; index < Dark_Childs.length; index++) {
            const element = Dark_Childs[index];
            element.style.backgroundColor = "rgba(40,40,40,1)";
            element.style.color = "#FFF";
        }
        document.getElementById("_DarkModeICON").innerHTML = "sunny";
        Dark.style.transform = "translate(-5px, 5px)";
        Dark.style.color = "#FFF";
        Dark.style.backgroundColor = "green";
        Dark.style.border = "None";
        Dark.style.boxShadow = "None";
        Dark.childNodes[0].nextSibling.style.backgroundColor = "green";
        var text = document.getElementById("_Dark_Text");
        text.innerText = "Light Mode";
        text.style.backgroundColor = "green";
        text.style.color = "white";


    } else {


        for (let index = 0; index < Dark_Childs.length; index++) {
            const element = Dark_Childs[index];
            element.style.backgroundColor = "#FFF"
            element.style.color = "rgba(40,40,40,1)"
        }
        document.getElementById("_DarkModeICON").innerHTML = "dark_mode";
        Dark.style.transform = "translate(0px, 0px)";
        Dark.style.color = "black";
        Dark.style.backgroundColor = "white";
        Dark.style.border = "1px solid rgba(0, 0, 0, 0.2)";
        Dark.style.boxShadow = " -5px 5px rgba(0, 0, 0, 0.5)";
        Dark.childNodes[0].nextSibling.style.backgroundColor = "#FFF"
        var text = document.getElementById("_Dark_Text");
        text.innerText = "Dark Mode";
        text.style.backgroundColor = "white";
        text.style.color = "#black";






    }

}


function Profile_DummySetUp() {
    var UsernamesArry = "angel bubbles shimmer angelic bubbly glimmer baby pink little butterfly sparkly doll sweet sparkles dolly sweetie sprinkles lolly princess fairy honey snowflake pretty sugar cherub lovely blossom";
    var UserName = document.getElementById("UserName");
    var UserNameEmail = document.getElementById("UserNameEmail");
    var profileWindowHolder = document.getElementById("profileWindowHolder");
    var profile_icon_ = document.getElementById("profile_icon_");
    if (profile_icon_.innerHTML == "account_circle") {
        profile_icon_.innerHTML = "close";
        profileWindowHolder.style.transform = "translateX(0%)"
    } else {
        profile_icon_.innerHTML = "account_circle";
        profileWindowHolder.style.transform = "translateX(200%)"
    }
    let Arrays_ofName = UsernamesArry.split(" ");
    var Ran_username = Arrays_ofName[randomIntFromInterval(0, Arrays_ofName.length)] + " " + Arrays_ofName[randomIntFromInterval(0, Arrays_ofName.length)];
    UserName.innerHTML = Ran_username;
    var joined = Ran_username.split(" ");
    UserNameEmail.innerHTML = joined.join("_") + "@sus.com";
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function SideBarMenu() {
    var SideBarMenuICON = document.getElementById("SideBarMenuICON");
    var SideBarmenu_ = document.getElementById("SideBarmenu_");
    if (SideBarMenuICON.innerHTML == "menu") {
        SideBarMenuICON.innerHTML = "close";
        SideBarmenu_.style.transform = "translateX(0%)";
    } else {
        SideBarMenuICON.innerHTML = "menu";
        SideBarmenu_.style.transform = "translateX(-100%)";
    }
}