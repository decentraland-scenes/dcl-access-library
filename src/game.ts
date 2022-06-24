

import * as access from 'dcl-access-area'

//exported builder 3d files
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/Cracked.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const houseMYellow = new Entity('houseMYellow')
engine.addEntity(houseMYellow)
houseMYellow.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(12.5, 0, 9.5),
  rotation: new Quaternion(2.763665218983441e-15, -1.4901159772762185e-7, 1.5885987729273576e-14, -1),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269)
})
houseMYellow.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("models/House 6 M Yellow.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
houseMYellow.addComponentOrReplace(gltfShape2)

const deckL = new Entity('deckL')
engine.addEntity(deckL)
deckL.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(12.5, 0, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
deckL.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("models/Deck L.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
deckL.addComponentOrReplace(gltfShape3)

const awningM = new Entity('awningM')
engine.addEntity(awningM)
awningM.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(12, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
awningM.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("models/Awning 5M.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
awningM.addComponentOrReplace(gltfShape4)

const barrel = new Entity('barrel')
engine.addEntity(barrel)
barrel.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(13, 0, 5.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
barrel.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("models/Barrel 4.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
barrel.addComponentOrReplace(gltfShape5)

const bonfire = new Entity('bonfire')
engine.addEntity(bonfire)
bonfire.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(3, 0, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bonfire.addComponentOrReplace(transform7)
const gltfShape6 = new GLTFShape("models/Bonfire 1.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
bonfire.addComponentOrReplace(gltfShape6)

const bucket = new Entity('bucket')
engine.addEntity(bucket)
bucket.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(8, 0.5, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bucket.addComponentOrReplace(transform8)
const gltfShape7 = new GLTFShape("models/Bucket.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
bucket.addComponentOrReplace(gltfShape7)

const cartBigClosed = new Entity('cartBigClosed')
engine.addEntity(cartBigClosed)
cartBigClosed.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(3.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cartBigClosed.addComponentOrReplace(transform9)
const gltfShape8 = new GLTFShape("models/Cart Big Closed.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
cartBigClosed.addComponentOrReplace(gltfShape8)

const barM = new Entity('barM')
engine.addEntity(barM)
barM.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(6.5, 5, 4),
  rotation: new Quaternion(-1.9728792828333256e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
barM.addComponentOrReplace(transform10)
const gltfShape9 = new GLTFShape("models/Furnit Bar 2 3M.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
barM.addComponentOrReplace(gltfShape9)

const barM3 = new Entity('barM3')
engine.addEntity(barM3)
barM3.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(7.5, 3.5, 1),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000016689300537, 1, 1.0000016689300537)
})
barM3.addComponentOrReplace(transform11)
const gltfShape10 = new GLTFShape("models/Furnit Bar 1 2M.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
barM3.addComponentOrReplace(gltfShape10)
/////////



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