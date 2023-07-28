{
    /* <button class="AnimeItem Button_Rounded DarkMode">
    <div class="Holder DarkMode">
        <div class="AnimeImg DarkMode">
            <img src="https://gogocdn.net/cover/spy-x-family.png" alt="">
        </div>
        <div class="Title DarkMode">
            <h1 class="DarkMode">Name</h1>
        </div>
        <div class="Infos DarkMode">
            <p class="DarkMode">type : TV</p>
            <p class="DarkMode">sub</p>
        </div>
    </div>
    </button> */
}

function RecentEpisoded_() {
    const url = "https://api.consumet.org/anime/gogoanime/recent-episodes";
    fetch(url)
        .then(x => x.text())
        .then(y => JSON.parse(y))
        .then(z => GETInfo(z));
}

function GETInfo(Data) {
    for (let index = 0; index < Data["results"].length; index++) {
        const element = Data["results"][index];
        SetInfo(element)
    }
}

function SetInfo(Data) {
    var Content = document.getElementById("Main_Contant");
    var Button = document.createElement("button");
    Button.classList.add("AnimeItem");
    Button.classList.add("Button_Rounded");
    Button.classList.add("DarkMode");

    var Holder_ = document.createElement("div");
    Holder_.classList.add("Holder");
    Holder_.classList.add("DarkMode");
    Button.appendChild(Holder_);

    var AnimeIMG_ = document.createElement("div");
    AnimeIMG_.classList.add("AnimeImg");
    AnimeIMG_.classList.add("DarkMode");
    var IMG = document.createElement("img");
    IMG.src = Data["image"];
    AnimeIMG_.appendChild(IMG);


    var Title_ = document.createElement("div");
    Title_.classList.add("Title");
    Title_.classList.add("DarkMode");
    var Title_Name = document.createElement("h1");
    Title_Name.classList.add("DarkMode");
    Title_Name.innerHTML = Data["title"];
    Title_.appendChild(Title_Name);



    var Infos_ = document.createElement("div");
    Infos_.classList.add("DarkMode");
    Infos_.classList.add("Infos");
    var type = document.createElement('p');
    type.innerHTML = Data["type"];
    type.classList.add("DarkMode");
    var Sub = document.createElement("p");
    Sub.classList.add("DarkMode");
    Sub.innerHTML = Data["subOrDub"]

    Infos_.appendChild(type);
    Infos_.appendChild(Sub);

    Holder_.appendChild(AnimeIMG_);
    Holder_.appendChild(Title_);
    Holder_.appendChild(Infos_);

    Content.appendChild(Button);
}
RecentEpisoded_();