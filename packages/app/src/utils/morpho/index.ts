export const MORPHO_TEST_VAULT = '0x23479229e52Ab6aaD312D0B03DF9F33B46753B5e'

fetch('https://api.morpho.org/graphql', {
  headers: {
    accept: '*/*',
    'accept-language': 'en-US,en;q=0.7',
    'content-type': 'application/json',
    priority: 'u=1, i',
    'sec-ch-ua': '"Brave";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': '1',
    Referer: 'https://api.morpho.org/graphql',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
  body: '{"query":"query ExampleQuery($where: VaultFilters) {\\n  vaults(where: $where) {\\n    items {\\n      address\\n      name\\n      state {\\n        fee\\n        apy\\n      }\\n    }\\n  }\\n}\\n","variables":{"where":{"chainId_in":8453,"symbol_in":"USDC"}},"operationName":"ExampleQuery"}',
  method: 'POST',
})

export const query = `
query ExampleQuery($where: VaultFilters) {
  vaults(where: $where) {
    items {
      address
      name
      state {
        fee
        apy
      }
    }
    pageInfo {
      count
      countTotal
    }
  }
}

`

export const variables = {
  where: {
    chainId_in: 8453,
    symbol_in: 'USDC',
  },
}
