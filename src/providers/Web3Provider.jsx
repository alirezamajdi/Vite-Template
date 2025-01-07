import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PropTypes from 'prop-types'
import { APPKIT_PROJECT_ID } from 'src/constants'

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(),
      // `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`
    },

    // Required API Keys
    walletConnectProjectId: APPKIT_PROJECT_ID,

    // Required App Info
    appName: "Your App Name",

    // Optional App Info
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  })
);

const queryClient = new QueryClient()

export default function Web3Provider({ children }) {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<ConnectKitProvider>{children}</ConnectKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	)
}

Web3Provider.propTypes = {
	children: PropTypes.node.isRequired,
}
