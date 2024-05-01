## Run the app

1. Clone the repository.
2. Ensure Node.js is installed.

### Development Commands

Run the development server:

- `nvm use`
- `yarn && yarn dev` (for development)
- `yarn start` (for production)

## Tools and Technologies Used

- **Shadcn-UI:** My go-to for initializing UI components and defining the application layout.

- **TailwindCSS:** Employed for Atomic design, custom styling and responsive design.

- **Next.js SSR (Server-Side Rendering):** For efficient data fetching and improved performance through caching.

- **React Hooks and Custom Hooks:** For state management on the client side.

- **Wagmi and Web3-Modal:** For seamless wallet connection and smart contract calls from the client with React hooks .

- **Hardhat:** For smart contract development, testing blockchain interactions.

- **OpenZeppelin:** providing a secure and standardized framework for NFT development with reusable smart contracts for ERC-721 and ERC-1155 standards

- **Sepolia Testnet:** public Ethereum testnet for testing DApps. some Sepolia ETH is required to interact with the app. Grab some from this [Sepolia Faucet](https://sepoliafaucet.com/)

## Core Features and Enhancements

- **Enhanced Data Fetching:** and Caching with Next.js SSR: Using Next.js SSR, ensured the Pokémon data not only loads fast but is also cached efficiently. This means smoother browsing, enhancing the user experience significantly.

- **Pagination and Navigation:** Implemented a pagination system to manage content display, allowing users to navigate through Pokémon lists efficiently. Though I know infinite scroll is the hot thing now.

- **Advanced Search Functionality:** For the search functionality, I opted for the search button-click action instead of triggering search on user input. I tried to get confirmation on this, but I think this approach is best to reduce unnecessary renders and the need for debouncing. Regex validation was also used to ensure text input.

- **Input Search Suggestions:** Integrated a cool auto-complete input search suggestion feature, displaying Pokémon names in a dropdown menu and eliminating the need for guesswork. It suggests Pokémon to the user from the fetched Pokémon to streamline the user experience and minimize unnecessary queries.

- **Tooltip Information Preview:** A tooltip feature provides users with a quick overview of Pokémon details on hover. Here, I'm displaying another image of the Pokémon along with its stats. The details button leads to the wiki

- **Web3 Integration:** Leveraging Wagmi and Web3Modal, users can seamlessly link to a variety of wallets and access different networks within each. This approach is both smooth and versatile, significantly enhancing the user experience by facilitating easy interactions across the blockchain ecosystem.

- **Blockchain Development:** The project includes an ERC721 NFT contract representing the collected Pokémon, with a multi-call function to optimize blockchain queries and reduce RPC calls.

#### Pokémon Collection Flow: Here's how it goes:

• **Disconnected User:** Clicks `Collect`, and is prompted to connect their MetaMask wallet.
• **Connected User:** Clicks `Collect`, signs a transaction on MetaMask, and the CollectPokemon contract is called, minting a Pokémon NFT. The `Collect` button state changes and text changes to `Collected`

- **Notification System and Error Handling:** Toast notifications are used to inform users of success and error states. Reverts or fetch failures are also caught.

- **User Collection Page:** A dedicated page displays the user's collected Pokémon, enhancing the overall experience. This feature utilizes local storage for data persistence, so it's not very robust and doesn't persist outside of the browser.

### Areas for Growth

**Tooltip Feature with Web Scraping:** It's there but without the web scraping part. I've simulated parts of the functionality, like showing an enhanced image preview and some stat info on hover.

**Future Features?:** Displaying the ownerAddress of collected Pokémons will be cool to see.

## Deploy

Here's the link to the Deployed [CollectPokemon Contract](https://etherscan.io/address/0xDf2Ea913f3C361Fb79579dD9f910E08aa5F5873D)

App Currently Deployed to Vercel: [Pokèmon dApp](https://pokemon-dapp.vercel.app/)
