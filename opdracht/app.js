const input = document.getElementById('text');
const btn = document.getElementById('click');
let Repeat = "lorem"
const node = document.createElement("div");

btn.addEventListener('click', updateButton);

function updateButton () {
    text.value.toUpperCase()
    console.log(text.value.toUpperCase().split(" ").filter(word => word.length >= 4))
    
    console.log(text.value.repeat(5));
    console.log(Repeat.repeat(5));


}

function addDiv() {
    let objTo = document.getElementById('container');
    let divtest = document.createElement("div");
    divtest.innerHTML = "The feasting and revelry would last for weeks at a time. Great stone tables were set with such an abundance of rare delicacies that we would stuff ourselves until the exotic became mundane. When the lavish spread began to spoil, a ravenous gourmand gleefully proposed that we sample from the fetid pile of composting refuse ! The notion was dismissed as decidedly unhealthy. But days later, he was found cackling madly atop a heap of rancid comestibles, licking his fingers in delight.";
    objTo.appendChild(divtest);
}