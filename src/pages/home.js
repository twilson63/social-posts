import { createMachine, state, transition, invoke, reduce } from 'robot3';
import { set, lensProp } from 'ramda';
import { useMachine } from 'svelte-robot-factory';
import API from '../lib'
import services from '../services'

const api = API.init(services)

const machine = createMachine({
  loading: invoke(
    async () => ({
      // get public square posts using graphql
      return api.posts()
    }),
    // @ts-ignore
    transition('done', 'ready', reduce((ctx, ev) => ({ ...ctx, ...ev.data })))
  ),
  ready: state(
    // @ts-ignore
    transition('search', 'searching', reduce((ctx, ev) => ({ ...ctx, q: ev.q })))
  ),
  exit: state()
});

const service = useMachine(machine, () => null);
export default service;