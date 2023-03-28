export default {
  init: ({ gql, dispatch }) => {
    return Object.freeze({
      posts: () => Promise.resolve([]),
      create: () => Promise.resolve({ ok: true })
    })
  }
}