export const Providers = {
  ENS: 'ENS',
  UnstoppableDomains: 'UnstoppableDomains',
  Near: 'Near',
  Web2: 'Web2',
};

export const ProviderTLDMapping = {
  ENS: ['eth'],
  UnstoppableDomains: [
    'crypto',
    'coin',
    'wallet',
    'bitcoin',
    'x',
    'nft',
    'dao',
    'blockchain',
    'zil',
    '888',
  ],
  Near: ['near'],
  Web2: ['com', 'xyz', 'io', 'twitter'],
};

// Needed because numbers cannot be field names in GraphQL (.888)
export const TLDResponseMapping = {
  eth: 'eth',
  crypto: 'crypto',
  zil: 'zil',
  coin: 'coin',
  wallet: 'wallet',
  bitcoin: 'bitcoin',
  x: 'x',
  888: '_888',
  nft: 'nft',
  dao: 'dao',
  blockchain: 'blockchain',
  near: 'near',
  com: 'com',
  xyz: 'xyz',
  io: 'io',
  twitter: 'twitter',
};

export const NFTContractAddresses = {
  [Providers.ENS]: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
  [Providers.UnstoppableDomains]: '0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe',
};
