

import * as access from 'dcl-access-area'
import { buildScene } from './builder-content'

buildScene()

/// access area checking for NFT-721 ownership on ETH chain
let wall = access.createArea({
  transform: {position: new Vector3(12,1,4), scale: new Vector3(3,8,5)},
  debug: false, //toggle this true/false to see the access area and position within your scene
  type: access.Type.NFT,
  nftType: access.NFTType.ERC721,
  chain: access.ChainType.ETH,
  contract: "0xf23e1aa97de9ca4fb76d2fa3fafcf4414b2afed0",
  name: "wall1",
  deniedMessage: "You do not have bar access"
})

/// access area checking for user wearing wearables
// let wall = access.createArea({
//   transform: {position: new Vector3(12,1,4), scale: new Vector3(3,8,5)},
//   debug: false, //toggle this true/false to see the access area and position within your scene
//   type: access.Type.WEARABLESON,
//   wearables:["urn:decentraland:matic:collections-v2:0xf87a8372437c40ef9176c1b224cbe9307a617a25:1"],
//   name: "wall1",
//   deniedMessage: "You do not have bar access"
// })

/// access area checking for user owning wearables
// let wall = access.createArea({
//   transform: {position: new Vector3(12,1,4), scale: new Vector3(3,8,5)},
//   debug: false, //toggle this true/false to see the access area and position within your scene
//   type: access.Type.HASWEARABLES,
//   wearables:["urn:decentraland:matic:collections-v2:0xf87a8372437c40ef9176c1b224cbe9307a617a25:0", "urn:decentraland:matic:collections-v2:0xf87a8372437c40ef9176c1b224cbe9307a617a25:1"],
//   wearablesMatch: access.Match.ALL,
//   name: "wall1",
//   deniedMessage: "You do not have bar access"
// })