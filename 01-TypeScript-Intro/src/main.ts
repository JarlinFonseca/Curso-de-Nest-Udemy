import { age, name, sum } from './bases/01-types'
import { pokemonIds, bulbasaur, pokemons } from './bases/02-objects.ts'
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import { charmander, mewtwo } from './bases/03-classes.ts'
// import { charmander } from './bases/04-injection.ts'
// import { charmander } from './bases/05-decorators.ts'
import { charmander } from './bases/06-decorators2.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript + Hello ${name} + Age: ${age} + Year: ${sum(2000,24)}<h1>
    <h2>Pokemon IDs: ${pokemonIds.join(',')}</h2>
    <h2>Pokemon: ${JSON.stringify(bulbasaur)}</h2>
    <h2>Pokemons: ${JSON.stringify(pokemons)}</h2>
    <h3>${JSON.stringify(charmander)}</h3>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
