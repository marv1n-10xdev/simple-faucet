import { JsonRpcProvider, Wallet, parseEther } from 'ethers'

const RPC_URL = 'https://polygon.llamarpc.com'
const PRIVATE_KEY = '0x0000000000000000000000000000000000000000000000000000000000000000'

const provider = new JsonRpcProvider(RPC_URL)
const wallet = new Wallet(PRIVATE_KEY, provider)

async function transfer(to, value) {

	const balance = await provider.getBalance(to)
	if (balance > 0) return false

	value = parseEther(value)
	const tx = { to, value }

	return wallet.sendTransaction(tx)

}

// HOW TO USE:
// const tx = await transfer('<TARGET_WALLET_ADDR>', '0.1')