const pokemon = {
  name: "pikachu",
  types: ["eletric", "normal"],
  moves: [
    {
      name: "tackle",
      lv: 5
    }, {
      name: "thunderbolt",
      lv: 20
    }, {
      name: "thunder",
      lv: 50
    }, {
      name: "thunder wave",
      lv: 9
    }],
  ability: "static",
  preEvolution: "pichu",
  evolution: "richu",
  attributes: {
    hp: 100,
    attack: 55,
    defense: 34,
    specialAttack: 100,
    specialDefense: 30,
    speed: 150
  }
}

module.exports = pokemon