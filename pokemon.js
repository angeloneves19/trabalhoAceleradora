const printPokemon = pkm => {
  console.log(`  Nome: ${pkm.name} - Tipo: ${pkm.types}
  Habilidade: ${pkm.ability}

  Linha de evolução:
    ${pkm.preEvolution}  >> ${pkm.name}  >> ${pkm.evolution} 

  Atributos:

    HP: ${pkm.attributes.hp}
    ATK:${pkm.attributes.attack} SpATK: ${pkm.attributes.specialAttack}
    DEF: ${pkm.attributes.defense} SpDEF: ${pkm.attributes.specialDefense}
    SPEED: ${pkm.attributes.speed}

   
    Lv 5 - ${pkm.moves[0].name}
    Lv 9 - ${pkm.moves[1].name}
    Lv 20 - ${pkm.moves[2].name}
    Lv 50 - ${pkm.moves[3].name}`)
}

module.exports = { printPokemon }