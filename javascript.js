//Animes... this might not be used actually
var fantasy
var sliceOfLife
var comedy
var shonin
var shojo
var scifi
// arrays
var action = ["attack on titan, demon slayer, hunter x hunter, naruto, naruto shippuden, blue exorcist, dragonball, Familiar of zero, sao, yea im a spider so what"];
var romance = ["horimiya, fruits basket, love is war, maid-sama, toradora, kimi ni todoke, orange, your name, a silent voice, my teen romantic comedy SNAFU"];
var shoujoAi = ["high rise , image: ".jpg"invasion,angel beats, citrus"];
var Shounen = ["naruto, naruto shippuden, hunter x hunter, code geass, bleach, black clover, jojos bizarre adventure, kill la kill,, image: soul eater, fairy tale"];
var pyschological = ["psycho pas, image:".jpg"s, classroom of the elite, danganronpa, tower of god, wonder egg priority"];
var adventure = [" gintama, , image:hunter x hunter, fairy tale, my hero academia, naruto, naruto shippuden, bungo stray dogs"];
var horror = ["promised neverland, blood-c, erased, death note"];
var sports = ["haikyuu, yuri on ice, sk8 the infinity, number 24, free, stars align, re-main"];

var animes = [
    {title: "Attack on Titan", category: "action", review: null, image: "attackOnTitan.jpg" },
    {title: "Demon Slayer", category: "action", review: null, image: "demonSlayer.jpg" },
    {title: "Hunter x Hunter", category: "action, Shounen, adventure", review: null, image:, image: "hunterXhunter.jpg" },
    {title: "Naruto", category: "action, shounen, adventure", review: null, image:, image: "naruto.jpg" },
    {title: "Nartuo Shippuden", category: "action, shounen, adventure", review: null, image:, image: "narutoShippuden" },
    {title: "Blue Exorcist", category: "action", review: null, image: "blueExorcist.jpg" },
    {title: "Dragonball", category: "action", review: null, image: "dragonBall.jpg" },
    {title: "Familiar of Zero", category: "action", review: null, image: "familiarOfZero.jpg" },
    {title: "Sword Art Online", category: "action", review: null, image: "sao.jpg" },
    {title: "Yea I'm a Spider so What", category: "action", review: null },

    {title: "Horimiya", category: "romance", review: null},
    {title: "Fruits Basket", category: "romance", review: null },
    {title: "Love is War", category: "romance", review: null },
    {title: "Maid-sama", category: "romance", review: null },
    {title: "Toradora", category: "romance", review: null },
    {title: "Kimi Ni Todoke", category: "romance", review: null },
    {title: "Orange", category: "romance", review: null },
    {title: "Your Name", category: "romance", review: null },
    {title: "A Silent Voice", category: "romance", review: null },
    {title: "My Teen Romance Comedy SNAFU",category: "romance", review: null },

    {title: "Horimiya", category: "romance", review: null, image: "horimiya.png" },
    {title: "Fruits Basket", category: "romance", review: null, image: "fruitsBasket.jpg" },
    {title: "Love is War", category: "romance", review: null, image: "loveIsWar.jpg" },
    {title: "Maid-sama", category: "romance", review: null, image: "maidSama.jpg" },
    {title: "Toradora", category: "romance", review: null, image: "toradora.jpg" },
    {title: "Kimi Ni Todoke", category: "romance", review: null, image: "kimiNiTodoke.jpg" },
    {title: "Orange", category: "romance", review: null, image: "orange.jpg" },
    {title: "Your Name", category: "romance", review: null, image: "yourName.jpg" },
    {title: "A Silent Voice", category: "romance", review: null, image: "aSilentVoice.jpg" },
    {title: "My Teen Romance Comedy SNAFU", category: "romance", review: null, image: "myTeenromanticComedySNAFU.jpg" },
    
    {title: "High Rise Invasion", category: "shoujoAi", review: null, image: "highRiseinvasion.jpg" },
    {title: "Angel Beats", category: "shoujoAi", review: null, image: "angelBeats.jpg" },
    {title: "Citrus", category: "shoujoAi", review: null, image: "citrus.jpg" },

    {title: "Psycho Pass", category: "pyschological", review: null, image:"pyschopass.jpg" },
    {title: "Classroom of the Elite", category: "pyschological", review: null, image:"Classroomoftheelite.jpg" },
    {title: "Danganronpa", category: "pyschological", review: null, image:"Dangaronpa.jpg" },
    {title: "Tower of God", category: "pyschological", review: null, image:"towerofgod.jpg" },
    {title: "Wonder Egg Priority", category: "pyschological", review: null, image:"wondereggpriority.jpg" },

    {title: "Gintama", category: "adventure", review: null, image: "gintama.jpg"},
    {title: "Fairy Tale", category: "adventure", review: null, image: "fairyTale.jpg"},
    {title: "My Hero Academia", category: "adventure", review: null, image: "myHeroAcademia.jpg"},
    {title: "Bungo Stray Dogs", category: "adventure", review: null, image: "bungoStrayDog.jpg"},

    {title: "Hunter x Hunter", category:"shounen", review: null },
    {title: "COde Geass", category:"shounen", review: null },
    {title: "Code Geass", category:"shounen", review: null },
    {title: "Bleach", category:"shounen", review: null },
    {title: "Black Clover", category:"shounen", review: null },
    {title: "JoJo's Bizarre Adventure", category:"shounen", review: null },
    {title: "Kill la Kill", category:"shounen", review: null },
    {title: "Soul Eater", category:"shounen", review: null },
    {title: "Fairy Tail", category:"shounen", review: null },

    {title: "Haikyuu", category: "sports", review: null },
    {title: "Yuri On Ice", category: "sports", review: null },
    {title: "Sk8 the Infinity", category: "sports", review: null },
    {title: "Number 24", category: "sports", review: null },
    {title: "Free", category: "sports", review: null },
    {title: "Stars align", category: "sports", review: null },
    {title: "Re-Main", category: "sports", review: null },
    {title: "Promised Neverland", category: "Horror", review: null },
    {title: "Blood-C", category: "Horror", review: null },
    {title: "Erased", category: "Horror", review: null },
    {title: "Death Note", category: "Horror", review: null },
]

