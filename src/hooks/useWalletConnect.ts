import { useAccount, useConnect } from 'wagmi';
export default function useWalletConnect() {
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();

  const connectWallet = async () => {
    if (!isConnected) {
      connect({ connector: connectors[0] });
    }
  };

  return { connectWallet, isConnected };
}
