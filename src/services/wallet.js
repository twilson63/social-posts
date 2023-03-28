import { ArweaveWebWallet } from 'arweave-wallet-connector'

const wallet = new ArweaveWebWallet({ name: 'ANTMan' }, { state: { url: 'arweave.app' } })

export const getActiveAddress = async () => {
  if (window.arweaveWallet) {
    await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION', 'ACCESS_PUBLIC_KEY', 'SIGNATURE'])
  } else {
    await wallet.connect()
  }
  return window.arweaveWallet.getActiveAddress()
}