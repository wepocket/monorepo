import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DSTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dsTestAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'ERC721InvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  { type: 'error', inputs: [{ name: 'sender', internalType: 'address', type: 'address' }], name: 'ERC20InvalidSender' },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'ERC721InvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathAbi = [{ type: 'error', inputs: [], name: 'MathOverflowedMulDiv' }] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Message
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const messageAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'message',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_message', internalType: 'string', type: 'string' }],
    name: 'setMessage',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: false },
      { name: 'purpose', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'SetMessage',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const messageAddress = {
  11155111: '0xcc5A0D6268d70811eDad77799f2168aFe6382E89',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const messageConfig = { address: messageAddress, abi: messageAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NexthFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nexthFtAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'safeMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'ERC721InvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [{ name: 'excludedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [{ name: 'excludedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [{ name: 'excludedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [{ name: 'targetedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [{ name: 'targetedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [{ name: 'targetedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dsTestAbi}__
 */
export const readDsTest = /*#__PURE__*/ createReadContract({ abi: dsTestAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dsTestAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const readDsTestIsTest = /*#__PURE__*/ createReadContract({ abi: dsTestAbi, functionName: 'IS_TEST' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dsTestAbi}__
 */
export const writeDsTest = /*#__PURE__*/ createWriteContract({ abi: dsTestAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dsTestAbi}__ and `functionName` set to `"failed"`
 */
export const writeDsTestFailed = /*#__PURE__*/ createWriteContract({ abi: dsTestAbi, functionName: 'failed' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dsTestAbi}__
 */
export const simulateDsTest = /*#__PURE__*/ createSimulateContract({ abi: dsTestAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dsTestAbi}__ and `functionName` set to `"failed"`
 */
export const simulateDsTestFailed = /*#__PURE__*/ createSimulateContract({ abi: dsTestAbi, functionName: 'failed' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__
 */
export const watchDsTestEvent = /*#__PURE__*/ createWatchContractEvent({ abi: dsTestAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log"`
 */
export const watchDsTestLogEvent = /*#__PURE__*/ createWatchContractEvent({ abi: dsTestAbi, eventName: 'log' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_address"`
 */
export const watchDsTestLogAddressEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_address',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_bytes"`
 */
export const watchDsTestLogBytesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_bytes',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const watchDsTestLogBytes32Event = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_bytes32',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_int"`
 */
export const watchDsTestLogIntEvent = /*#__PURE__*/ createWatchContractEvent({ abi: dsTestAbi, eventName: 'log_int' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_address"`
 */
export const watchDsTestLogNamedAddressEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_address',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const watchDsTestLogNamedBytesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_bytes',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const watchDsTestLogNamedBytes32Event = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_bytes32',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const watchDsTestLogNamedDecimalIntEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_decimal_int',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const watchDsTestLogNamedDecimalUintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_decimal_uint',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_int"`
 */
export const watchDsTestLogNamedIntEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_int',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_string"`
 */
export const watchDsTestLogNamedStringEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_string',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const watchDsTestLogNamedUintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_named_uint',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_string"`
 */
export const watchDsTestLogStringEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dsTestAbi,
  eventName: 'log_string',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"log_uint"`
 */
export const watchDsTestLogUintEvent = /*#__PURE__*/ createWatchContractEvent({ abi: dsTestAbi, eventName: 'log_uint' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dsTestAbi}__ and `eventName` set to `"logs"`
 */
export const watchDsTestLogsEvent = /*#__PURE__*/ createWatchContractEvent({ abi: dsTestAbi, eventName: 'logs' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__
 */
export const readErc165 = /*#__PURE__*/ createReadContract({ abi: erc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const readErc721 = /*#__PURE__*/ createReadContract({ abi: erc721Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc721BalanceOf = /*#__PURE__*/ createReadContract({ abi: erc721Abi, functionName: 'balanceOf' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readErc721GetApproved = /*#__PURE__*/ createReadContract({ abi: erc721Abi, functionName: 'getApproved' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readErc721IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const readErc721Name = /*#__PURE__*/ createReadContract({ abi: erc721Abi, functionName: 'name' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readErc721OwnerOf = /*#__PURE__*/ createReadContract({ abi: erc721Abi, functionName: 'ownerOf' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc721SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc721Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc721Symbol = /*#__PURE__*/ createReadContract({ abi: erc721Abi, functionName: 'symbol' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const readErc721TokenUri = /*#__PURE__*/ createReadContract({ abi: erc721Abi, functionName: 'tokenURI' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const writeErc721 = /*#__PURE__*/ createWriteContract({ abi: erc721Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc721Approve = /*#__PURE__*/ createWriteContract({ abi: erc721Abi, functionName: 'approve' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeErc721SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeErc721SetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc721TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const simulateErc721 = /*#__PURE__*/ createSimulateContract({ abi: erc721Abi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc721Approve = /*#__PURE__*/ createSimulateContract({ abi: erc721Abi, functionName: 'approve' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateErc721SafeTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateErc721SetApprovalForAll = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc721TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const watchErc721Event = /*#__PURE__*/ createWatchContractEvent({ abi: erc721Abi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc721ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchErc721ApprovalForAllEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
  eventName: 'ApprovalForAll',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc721TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const readIerc721Metadata = /*#__PURE__*/ createReadContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721MetadataBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721MetadataGetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721MetadataIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const readIerc721MetadataName = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721MetadataOwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721MetadataSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const readIerc721MetadataSymbol = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readIerc721MetadataTokenUri = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const writeIerc721Metadata = /*#__PURE__*/ createWriteContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721MetadataApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721MetadataSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721MetadataSetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721MetadataTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const simulateIerc721Metadata = /*#__PURE__*/ createSimulateContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721MetadataApprove = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721MetadataSafeTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721MetadataSetApprovalForAll = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721MetadataTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const watchIerc721MetadataEvent = /*#__PURE__*/ createWatchContractEvent({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721MetadataApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721MetadataAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721MetadataApprovalForAllEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721MetadataAbi,
  eventName: 'ApprovalForAll',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721MetadataTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721MetadataAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const writeIerc721Receiver = /*#__PURE__*/ createWriteContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeIerc721ReceiverOnErc721Received = /*#__PURE__*/ createWriteContract({
  abi: ierc721ReceiverAbi,
  functionName: 'onERC721Received',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const simulateIerc721Receiver = /*#__PURE__*/ createSimulateContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateIerc721ReceiverOnErc721Received = /*#__PURE__*/ createSimulateContract({
  abi: ierc721ReceiverAbi,
  functionName: 'onERC721Received',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const readIMulticall3 = /*#__PURE__*/ createReadContract({ abi: iMulticall3Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const readIMulticall3GetBasefee = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getBasefee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const readIMulticall3GetBlockHash = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getBlockHash',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const readIMulticall3GetBlockNumber = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getBlockNumber',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const readIMulticall3GetChainId = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getChainId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const readIMulticall3GetCurrentBlockCoinbase = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getCurrentBlockCoinbase',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const readIMulticall3GetCurrentBlockDifficulty = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getCurrentBlockDifficulty',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const readIMulticall3GetCurrentBlockGasLimit = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getCurrentBlockGasLimit',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const readIMulticall3GetCurrentBlockTimestamp = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getCurrentBlockTimestamp',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const readIMulticall3GetEthBalance = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getEthBalance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const readIMulticall3GetLastBlockHash = /*#__PURE__*/ createReadContract({
  abi: iMulticall3Abi,
  functionName: 'getLastBlockHash',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const writeIMulticall3 = /*#__PURE__*/ createWriteContract({ abi: iMulticall3Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const writeIMulticall3Aggregate = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'aggregate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const writeIMulticall3Aggregate3 = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'aggregate3',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const writeIMulticall3Aggregate3Value = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'aggregate3Value',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const writeIMulticall3BlockAndAggregate = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'blockAndAggregate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const writeIMulticall3TryAggregate = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'tryAggregate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const writeIMulticall3TryBlockAndAggregate = /*#__PURE__*/ createWriteContract({
  abi: iMulticall3Abi,
  functionName: 'tryBlockAndAggregate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const simulateIMulticall3 = /*#__PURE__*/ createSimulateContract({ abi: iMulticall3Abi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const simulateIMulticall3Aggregate = /*#__PURE__*/ createSimulateContract({
  abi: iMulticall3Abi,
  functionName: 'aggregate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const simulateIMulticall3Aggregate3 = /*#__PURE__*/ createSimulateContract({
  abi: iMulticall3Abi,
  functionName: 'aggregate3',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const simulateIMulticall3Aggregate3Value = /*#__PURE__*/ createSimulateContract({
  abi: iMulticall3Abi,
  functionName: 'aggregate3Value',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const simulateIMulticall3BlockAndAggregate = /*#__PURE__*/ createSimulateContract({
  abi: iMulticall3Abi,
  functionName: 'blockAndAggregate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const simulateIMulticall3TryAggregate = /*#__PURE__*/ createSimulateContract({
  abi: iMulticall3Abi,
  functionName: 'tryAggregate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const simulateIMulticall3TryBlockAndAggregate = /*#__PURE__*/ createSimulateContract({
  abi: iMulticall3Abi,
  functionName: 'tryBlockAndAggregate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link messageAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const readMessage = /*#__PURE__*/ createReadContract({ abi: messageAbi, address: messageAddress })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link messageAbi}__ and `functionName` set to `"message"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const readMessageMessage = /*#__PURE__*/ createReadContract({
  abi: messageAbi,
  address: messageAddress,
  functionName: 'message',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link messageAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const writeMessage = /*#__PURE__*/ createWriteContract({ abi: messageAbi, address: messageAddress })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link messageAbi}__ and `functionName` set to `"setMessage"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const writeMessageSetMessage = /*#__PURE__*/ createWriteContract({
  abi: messageAbi,
  address: messageAddress,
  functionName: 'setMessage',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link messageAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const simulateMessage = /*#__PURE__*/ createSimulateContract({ abi: messageAbi, address: messageAddress })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link messageAbi}__ and `functionName` set to `"setMessage"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const simulateMessageSetMessage = /*#__PURE__*/ createSimulateContract({
  abi: messageAbi,
  address: messageAddress,
  functionName: 'setMessage',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link messageAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const watchMessageEvent = /*#__PURE__*/ createWatchContractEvent({ abi: messageAbi, address: messageAddress })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link messageAbi}__ and `eventName` set to `"SetMessage"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcc5a0d6268d70811edad77799f2168afe6382e89)
 */
export const watchMessageSetMessageEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: messageAbi,
  address: messageAddress,
  eventName: 'SetMessage',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nexthFtAbi}__
 */
export const readNexthFt = /*#__PURE__*/ createReadContract({ abi: nexthFtAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readNexthFtBalanceOf = /*#__PURE__*/ createReadContract({ abi: nexthFtAbi, functionName: 'balanceOf' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"getApproved"`
 */
export const readNexthFtGetApproved = /*#__PURE__*/ createReadContract({ abi: nexthFtAbi, functionName: 'getApproved' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readNexthFtIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: nexthFtAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"name"`
 */
export const readNexthFtName = /*#__PURE__*/ createReadContract({ abi: nexthFtAbi, functionName: 'name' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"owner"`
 */
export const readNexthFtOwner = /*#__PURE__*/ createReadContract({ abi: nexthFtAbi, functionName: 'owner' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readNexthFtOwnerOf = /*#__PURE__*/ createReadContract({ abi: nexthFtAbi, functionName: 'ownerOf' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readNexthFtSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: nexthFtAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"symbol"`
 */
export const readNexthFtSymbol = /*#__PURE__*/ createReadContract({ abi: nexthFtAbi, functionName: 'symbol' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readNexthFtTokenUri = /*#__PURE__*/ createReadContract({ abi: nexthFtAbi, functionName: 'tokenURI' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nexthFtAbi}__
 */
export const writeNexthFt = /*#__PURE__*/ createWriteContract({ abi: nexthFtAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"approve"`
 */
export const writeNexthFtApprove = /*#__PURE__*/ createWriteContract({ abi: nexthFtAbi, functionName: 'approve' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeNexthFtRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: nexthFtAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"safeMint"`
 */
export const writeNexthFtSafeMint = /*#__PURE__*/ createWriteContract({ abi: nexthFtAbi, functionName: 'safeMint' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeNexthFtSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: nexthFtAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeNexthFtSetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: nexthFtAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeNexthFtTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: nexthFtAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeNexthFtTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: nexthFtAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nexthFtAbi}__
 */
export const simulateNexthFt = /*#__PURE__*/ createSimulateContract({ abi: nexthFtAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"approve"`
 */
export const simulateNexthFtApprove = /*#__PURE__*/ createSimulateContract({ abi: nexthFtAbi, functionName: 'approve' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateNexthFtRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: nexthFtAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"safeMint"`
 */
export const simulateNexthFtSafeMint = /*#__PURE__*/ createSimulateContract({
  abi: nexthFtAbi,
  functionName: 'safeMint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateNexthFtSafeTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: nexthFtAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateNexthFtSetApprovalForAll = /*#__PURE__*/ createSimulateContract({
  abi: nexthFtAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateNexthFtTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: nexthFtAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link nexthFtAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateNexthFtTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: nexthFtAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nexthFtAbi}__
 */
export const watchNexthFtEvent = /*#__PURE__*/ createWatchContractEvent({ abi: nexthFtAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nexthFtAbi}__ and `eventName` set to `"Approval"`
 */
export const watchNexthFtApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nexthFtAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nexthFtAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchNexthFtApprovalForAllEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nexthFtAbi,
  eventName: 'ApprovalForAll',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nexthFtAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchNexthFtOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nexthFtAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link nexthFtAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchNexthFtTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: nexthFtAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const readOwnable = /*#__PURE__*/ createReadContract({ abi: ownableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnableOwner = /*#__PURE__*/ createReadContract({ abi: ownableAbi, functionName: 'owner' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const writeOwnable = /*#__PURE__*/ createWriteContract({ abi: ownableAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOwnableRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnableTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const simulateOwnable = /*#__PURE__*/ createSimulateContract({ abi: ownableAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOwnableRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: ownableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnableTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: ownableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const watchOwnableEvent = /*#__PURE__*/ createWatchContractEvent({ abi: ownableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnableOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testAbi}__
 */
export const readTest = /*#__PURE__*/ createReadContract({ abi: testAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"IS_TEST"`
 */
export const readTestIsTest = /*#__PURE__*/ createReadContract({ abi: testAbi, functionName: 'IS_TEST' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"excludeArtifacts"`
 */
export const readTestExcludeArtifacts = /*#__PURE__*/ createReadContract({
  abi: testAbi,
  functionName: 'excludeArtifacts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"excludeContracts"`
 */
export const readTestExcludeContracts = /*#__PURE__*/ createReadContract({
  abi: testAbi,
  functionName: 'excludeContracts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"excludeSenders"`
 */
export const readTestExcludeSenders = /*#__PURE__*/ createReadContract({ abi: testAbi, functionName: 'excludeSenders' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetArtifactSelectors"`
 */
export const readTestTargetArtifactSelectors = /*#__PURE__*/ createReadContract({
  abi: testAbi,
  functionName: 'targetArtifactSelectors',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetArtifacts"`
 */
export const readTestTargetArtifacts = /*#__PURE__*/ createReadContract({
  abi: testAbi,
  functionName: 'targetArtifacts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetContracts"`
 */
export const readTestTargetContracts = /*#__PURE__*/ createReadContract({
  abi: testAbi,
  functionName: 'targetContracts',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetInterfaces"`
 */
export const readTestTargetInterfaces = /*#__PURE__*/ createReadContract({
  abi: testAbi,
  functionName: 'targetInterfaces',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetSelectors"`
 */
export const readTestTargetSelectors = /*#__PURE__*/ createReadContract({
  abi: testAbi,
  functionName: 'targetSelectors',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"targetSenders"`
 */
export const readTestTargetSenders = /*#__PURE__*/ createReadContract({ abi: testAbi, functionName: 'targetSenders' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testAbi}__
 */
export const writeTest = /*#__PURE__*/ createWriteContract({ abi: testAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"failed"`
 */
export const writeTestFailed = /*#__PURE__*/ createWriteContract({ abi: testAbi, functionName: 'failed' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testAbi}__
 */
export const simulateTest = /*#__PURE__*/ createSimulateContract({ abi: testAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testAbi}__ and `functionName` set to `"failed"`
 */
export const simulateTestFailed = /*#__PURE__*/ createSimulateContract({ abi: testAbi, functionName: 'failed' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__
 */
export const watchTestEvent = /*#__PURE__*/ createWatchContractEvent({ abi: testAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log"`
 */
export const watchTestLogEvent = /*#__PURE__*/ createWatchContractEvent({ abi: testAbi, eventName: 'log' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_address"`
 */
export const watchTestLogAddressEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testAbi,
  eventName: 'log_address',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_array"`
 */
export const watchTestLogArrayEvent = /*#__PURE__*/ createWatchContractEvent({ abi: testAbi, eventName: 'log_array' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_bytes"`
 */
export const watchTestLogBytesEvent = /*#__PURE__*/ createWatchContractEvent({ abi: testAbi, eventName: 'log_bytes' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_bytes32"`
 */
export const watchTestLogBytes32Event = /*#__PURE__*/ createWatchContractEvent({
  abi: testAbi,
  eventName: 'log_bytes32',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_int"`
 */
export const watchTestLogIntEvent = /*#__PURE__*/ createWatchContractEvent({ abi: testAbi, eventName: 'log_int' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_address"`
 */
export const watchTestLogNamedAddressEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testAbi,
  eventName: 'log_named_address',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_array"`
 */
export const watchTestLogNamedArrayEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testAbi,
  eventName: 'log_named_array',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_bytes"`
 */
export const watchTestLogNamedBytesEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testAbi,
  eventName: 'log_named_bytes',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_bytes32"`
 */
export const watchTestLogNamedBytes32Event = /*#__PURE__*/ createWatchContractEvent({
  abi: testAbi,
  eventName: 'log_named_bytes32',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_decimal_int"`
 */
export const watchTestLogNamedDecimalIntEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testAbi,
  eventName: 'log_named_decimal_int',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_decimal_uint"`
 */
export const watchTestLogNamedDecimalUintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testAbi,
  eventName: 'log_named_decimal_uint',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_int"`
 */
export const watchTestLogNamedIntEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testAbi,
  eventName: 'log_named_int',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_string"`
 */
export const watchTestLogNamedStringEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testAbi,
  eventName: 'log_named_string',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_named_uint"`
 */
export const watchTestLogNamedUintEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testAbi,
  eventName: 'log_named_uint',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_string"`
 */
export const watchTestLogStringEvent = /*#__PURE__*/ createWatchContractEvent({ abi: testAbi, eventName: 'log_string' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"log_uint"`
 */
export const watchTestLogUintEvent = /*#__PURE__*/ createWatchContractEvent({ abi: testAbi, eventName: 'log_uint' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testAbi}__ and `eventName` set to `"logs"`
 */
export const watchTestLogsEvent = /*#__PURE__*/ createWatchContractEvent({ abi: testAbi, eventName: 'logs' })
