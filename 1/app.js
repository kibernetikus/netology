'use strict';
class Pokemon {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    show() {
        console.log(`Name: ${this.name}`);
        console.log(`Level: ${this.level}`);
    }
    valueOf() {
        return this.level;
    }
}

class PokemonList extends Array{
    constructor(...pokemons) {
        super(...pokemons);
    }

    add(name, level) {
        let pokemon = new Pokemon(name, level);

       this.push(pokemon);
    }
    show() {
        //let listing = this.list;
        console.log(`Всего покемонов: ${this.length}`);

        for (let poke of this) {
            console.log(`Имя: ${poke.name}`);
            console.log(`уровень: ${poke.level}`);
        }
    }
    max() {
        let pokeLevels = [];
        for (let poke of this) {
            pokeLevels.push(poke.valueOf());
        }
        let maxPoke = this[pokeLevels.indexOf(Math.max.apply(null, pokeLevels))]
        console.log(`Покемон максимального уровня: ${maxPoke.name} Уровень: ${maxPoke.level}`);
        return maxPoke;
    }
}



let found = new PokemonList();
found.add('Пинсир', 10);
found.add('Рапидаш', 11);
found.add('Голем', 12);



let lost = new PokemonList();


lost.add('Райдон', 18);
lost.add('Нидокинг', 11);
lost.add('Джолтеон', 14);




function pokemonRoulette() {
    let rand = 0 - 0.5 + Math.random() * (2 - 0 + 1)
    rand = Math.floor(rand);
    let num = Math.abs(rand);
    console.log(num);
    let founded = lost[num];
    lost.splice(num, 1);
    found.add(founded.name, founded.level);

    console.log(`Вы нашли покемона: ${founded.name} Уровень: ${founded.level}`);

}


pokemonRoulette();