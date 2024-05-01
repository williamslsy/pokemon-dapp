# Obol dAPP Challenge Submission

Welcome to Obol's frontend and Web3 developer challenge, focusing on modern web technologies and blockchain interactions.

## Intro

Obol's mission expands to the world of Web3! Not only do we want to list and preview Pokemon, but we also want to allow users to interact with them using Ethereum blockchain technology.

## The Assignment

Enhance the Pokemon application to integrate Web3 functionalities. Users should be able to connect their MetaMask wallet and "Collect" a Pokemon by signing a simple Ethereum transaction.

## Key Features and Technical Requirements

- **MetaMask Wallet Connection:** Implement functionality to connect to a user's MetaMask wallet using libraries like ethers.js, web3-react, or useDapp.
- **Ethereum Transaction Signing:** Allow users to "Collect" a Pokemon by initiating and signing a simple Ethereum transaction.
- **Server-Side Rendering (SSR):** Continue using SSR for enhanced performance and SEO.
- **Tooltip Preview with Web Scraping:** Implement a tooltip with basic Pokemon info using server-side web scraping.
- **Tailwind CSS and Atomic Design:** Use Tailwind CSS for styling and follow the Atomic Design methodology for component development.
- **Use of React Hooks and Custom Hooks:** Emphasize the use of React Hooks for state and lifecycle management, particularly in managing Web3 interactions.
- **API Integration and Web3 Integration:** Use the provided Pokemon API and integrate Web3 functionalities for blockchain interactions.
- **Deployment:** Deploy the application ensuring that both SSR and Web3 functionalities work seamlessly in the production environment.

## API and Blockchain Endpoints

- Pokemon List: `https://pokeapi.co/api/v2/pokemon?limit=151`
- Individual Pokemon Data: `https://pokeapi.co/api/v2/pokemon/{id-or-name}/`
- Bulbapedia Link: `https://bulbapedia.bulbagarden.net/wiki/{name}`

## Evaluation Criteria

- Successful integration of Web3 functionalities.
- Clean and efficient implementation of SSR, data state, and web scraping.
- Quality and organization of code, following best practices.
- Effective use of React Hooks and custom hooks.
- Styling accuracy and adherence to design patterns.
- Documentation and ease of understanding.

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

Here's the link to the Deployed [CollectPokemon Contract](https://etherscan.io/address/0x5FdD5f2c795628BA28ec64DBf19c20DaE1911385)

App Currently Deployed to Vercel: [Obol Pokèmon dApp](https://williamslsy-obol-d-app-challenge.vercel.app/)
