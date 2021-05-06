/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {Signer, BigNumberish} from "ethers";
import type {Provider, TransactionRequest} from "@ethersproject/providers";
import {Contract, ContractFactory, Overrides} from "@ethersproject/contracts";

import type {CustomERC20} from "./CustomERC20";

export class CustomERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _totalSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<CustomERC20> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _totalSupply,
      overrides || {}
    ) as Promise<CustomERC20>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _totalSupply: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _totalSupply,
      overrides || {}
    );
  }
  attach(address: string): CustomERC20 {
    return super.attach(address) as CustomERC20;
  }
  connect(signer: Signer): CustomERC20__factory {
    return super.connect(signer) as CustomERC20__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CustomERC20 {
    return new Contract(address, _abi, signerOrProvider) as CustomERC20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000fa338038062000fa3833981810160405260808110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b506040908152602082810151929091015186519294509250620001c19160059187019062000431565b508251620001d790600690602086019062000431565b506007805460ff191660ff84161790556005805460408051602060026101006001861615026000190190941693909304601f810184900484028201840190925281815262000285939092909190830182828015620002795780601f106200024d5761010080835404028352916020019162000279565b820191906000526020600020905b8154815290600101906020018083116200025b57829003601f168201915b50506200029b92505050565b62000291338262000338565b50505050620004dd565b805160209182012060408051808201825260018152603160f81b9084015280517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81850152808201929092527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608301524660808301523060a0808401919091528151808403909101815260c090920190528051910120600355565b6200035481600054620003e060201b620008521790919060201c565b60009081556001600160a01b0383168152600160209081526040909120546200038891839062000852620003e0821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b808201828110156200042b576040805162461bcd60e51b815260206004820152600f60248201526e534d5f4144445f4f564552464c4f5760881b604482015290519081900360640190fd5b92915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620004695760008555620004b4565b82601f106200048457805160ff1916838001178555620004b4565b82800160010185558215620004b4579182015b82811115620004b457825182559160200191906001019062000497565b50620004c2929150620004c6565b5090565b5b80821115620004c25760008155600101620004c7565b610ab680620004ed6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80633950935111610097578063a457c2d711610066578063a457c2d7146102b5578063a9059cbb146102e1578063d505accf1461030d578063dd62ed3e14610360576100f5565b8063395093511461023557806370a08231146102615780637ecebe001461028757806395d89b41146102ad576100f5565b806323b872dd116100d357806323b872dd146101d157806330adf81f14610207578063313ce5671461020f5780633644e5151461022d576100f5565b806306fdde03146100fa578063095ea7b31461017757806318160ddd146101b7575b600080fd5b61010261038e565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561013c578181015183820152602001610124565b50505050905090810190601f1680156101695780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a36004803603604081101561018d57600080fd5b506001600160a01b03813516906020013561041c565b604080519115158252519081900360200190f35b6101bf610433565b60408051918252519081900360200190f35b6101a3600480360360608110156101e757600080fd5b506001600160a01b03813581169160208101359091169060400135610439565b6101bf6104cd565b6102176104f1565b6040805160ff9092168252519081900360200190f35b6101bf6104fa565b6101a36004803603604081101561024b57600080fd5b506001600160a01b038135169060200135610500565b6101bf6004803603602081101561027757600080fd5b50356001600160a01b031661053b565b6101bf6004803603602081101561029d57600080fd5b50356001600160a01b031661054d565b61010261055f565b6101a3600480360360408110156102cb57600080fd5b506001600160a01b0381351690602001356105ba565b6101a3600480360360408110156102f757600080fd5b506001600160a01b038135169060200135610637565b61035e600480360360e081101561032357600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610644565b005b6101bf6004803603604081101561037657600080fd5b506001600160a01b0381358116916020013516610835565b6005805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104145780601f106103e957610100808354040283529160200191610414565b820191906000526020600020905b8154815290600101906020018083116103f757829003601f168201915b505050505081565b600061042933848461089c565b5060015b92915050565b60005481565b6001600160a01b0383166000908152600260209081526040808320338452909152812054600019146104b8576001600160a01b038416600090815260026020908152604080832033845290915290205461049390836108fe565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b6104c384848461093a565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60075460ff1681565b60035481565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916104299185906105369086610852565b61089c565b60016020526000908152604090205481565b60046020526000908152604090205481565b6006805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104145780601f106103e957610100808354040283529160200191610414565b3360009081526002602090815260408083206001600160a01b038616845290915281205482811015610628576040805162461bcd60e51b815260206004820152601260248201527149415f43414e4e4f545f444543524541534560701b604482015290519081900360640190fd5b6104c3338561053684876108fe565b600061042933848461093a565b42841015610686576040805162461bcd60e51b815260206004820152600a602482015269125057d156141254915160b21b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa1580156107a1573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906107d75750886001600160a01b0316816001600160a01b0316145b61081f576040805162461bcd60e51b815260206004820152601460248201527349415f494e56414c49445f5349474e415455524560601b604482015290519081900360640190fd5b61082a89898961089c565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b8082018281101561042d576040805162461bcd60e51b815260206004820152600f60248201526e534d5f4144445f4f564552464c4f5760881b604482015290519081900360640190fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b600061093383836040518060400160405280601081526020016f534d5f5355425f554e444552464c4f5760801b8152506109e8565b9392505050565b6001600160a01b03831660009081526001602052604090205461095d90826108fe565b6001600160a01b03808516600090815260016020526040808220939093559084168152205461098c9082610852565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b8183038184821115610a785760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610a3d578181015183820152602001610a25565b50505050905090810190601f168015610a6a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50939250505056fea264697066735822122025d7cfdf5a8b0dc63fe4d65ccd0d24df97d9144d27218e307eba8810ba5a0ece64736f6c63430007050033";
