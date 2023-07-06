const url = "https://pokeapi.co/api/v2/pokemon/";

let getPokeData = () => {
  // task: 随机生成一个1-150的数字，获取对应宝可梦的信息，并 console.log

  let id = Math.floor(Math.random() * 150)

  fetch(url + id).then(r => r.json()).then(r => generateCard(r));
  console.log(Math.floor(Math.random() * 150))

};

let generateCard = (pokemon) => {
  // pokemon --> id , name , attack 
  // <p> <img src="dsdasdsa"></p>
  // let id= pokemon.id
  // pokemon["id"]

  console.log(pokemon);

  let id = pokemon.id;
  let name = pokemon.name;
  let photo = pokemon.sprites.front_default;

  let hp = pokemon.stats[0].base_stat;

  let attack = pokemon.stats[1].base_stat;
  let defense = pokemon.stats[2].base_stat;
  let speed = pokemon.stats[5].base_stat;

  let types = pokemon.types.map(t => t.type.name);

  console.log({
    hp, attack, defense, speed
  })

  // HTML 结构组织 （完成基本的骨架），**取一个好的类名**

  console.log(types)

  // for type in type:
  // 

  const typeTpl = types.map(t => `<span> ${t} </span>`);
  console.log(typeTpl)

  const template = `
  <p class="hp">
  <span>HP</span>
  ${hp}
</p>
<img src='${photo}' />
<h2 class="poke-name">${name}</h2>
<div class="types">
  ${typeTpl.join(" ")}
</div>
<div class="stats">
  <div>
      <h3>${attack}</h3>
      <p>Attack</p>
  </div>
  <div>
      <h3>${defense}</h3>
      <p>Defense</p>
  </div>
  <div>
      <h3>${speed}</h3>
      <p>Speed</p>
  </div>
</div>
`
  document.getElementById("card").innerHTML = template

}

getPokeData();


//  task 2: 将获取到的宝可梦信息的

// 1. id
// 2. name
// 3. 图片
// 4. defense / attack

// 显示在页面上

let addButton = (id, event) => {

  const template = document.createElement('button');
  template.innerHTML = id;

  document.getElementById("addButton").appendChild(template);

  template.onclick = event

}
addButton("Generate", getPokeData);
addButton("Export Png", () => {
  var node = document.getElementById('card');
  console.log(node)
  htmlToImage.toPng(node)
    .then(function (dataUrl) {
      const link = document.createElement('a');
    link.download = 'my-image-name.png';
    link.href = dataUrl;
    link.click();
      // var img = new Image();
      // img.src = dataUrl;
      // document.body.appendChild(img);
      // console.log(dataUrl)
      // console.log(img)
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
});

