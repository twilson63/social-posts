import { path } from 'ramda'

const { WarpFactory, LoggerFactory } = window.warp
const arweave = import.meta.env.MODE === 'development' ? Arweave.init({ host: 'arweave.net', port: 443, protocol: 'https' }) : Arweave.init({})
LoggerFactory.INST.logLevel('fatal')
const warp = WarpFactory.forMainnet()
const CACHE = 'https://cache-2.permaweb.tools/contract'
const BAR = 'VFr3Bk-uM-motpNNkkFg4lNW1BMmSfzqsVO551Ho4hA'
const STAMP = '61vg8n54MGSC9ZHfSVAtQp4WjNb20TaThu6bkQ86pPI'
const options = { allowBigInt: true, internalWrites: true, unsafeClient: 'allow' }

export const initContracts = async () => {
  await warp.contract(BAR).syncState(CACHE, { validity: true })
    .then(c => c.setEvaluationOptions(options).readState())
  await warp.contract(STAMP).syncState(CACHE, { validity: true })
    .then(c => c.setEvaluationOptions(options).readState())
  return Promise.resolve(true)
}

export const getNotes = () => {
  return arweave.api.post('graphql', {
    query: `query {
      transactions(first: 100, tags: {name:"App-Name", values: ["PublicSquare"]}) {
        edges {
          node {
            id
            owner { address } 
            tags {
              name
              value
            }
          }
        }
      }
    }`
  })
    .then(path(['data', 'data', 'transactions', 'edges']))
    .then(result => (console.log(result), result))

  // return Promise.resolve([
  //   {
  //     id: '',
  //     title: 'Social: Rakis (@rakis) status on 3/20/2023 at 24:00 UTC',
  //     description: 'Working on social.g8way.io'
  //     owner: 'vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI'
  //   }
  // ])
}

