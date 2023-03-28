import { writable } from 'svelte/store'
import { createMachine, invoke, reduce, state, transition, immediate, guard } from "robot3";
import { useMachine } from 'svelte-robot-factory'
import { ArweaveWebWallet } from 'arweave-wallet-connector'
import { initContracts, getNotes } from './lib/notes'

const wallet = new ArweaveWebWallet({
  name: 'Social',
  logo: 'https://social.g8way.io/logo.svg'
})

const machine = createMachine({
  //idle: state(),
  loading: invoke(
    () => initContracts().then(getNotes).catch(e => (console.log(e), [])),
    transition('done', 'home', (ctx, ev) => ({ ...ctx, notes: ev.data })),
    transition('error', 'error')
  ),
  home: state(),
  error: state()
})

export const robot = useMachine(machine, {})
// init stamps contract

// add machine here for each view

// machine views 

// list last 100 notes

// create new note (text) with links parse each word and detect if @, #, or url, transform to hyperlinks

// stamp note

// show note via renderer




// ANS 110

// Title = Note by @author at MM:DD:YYYY HH:MM UTC, 
// Description = 140 Characters with line-clamp, 
// Topics: derived from hash tags
// type: social-post, 
// Render-With: social.g8way.io