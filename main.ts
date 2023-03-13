namespace SpriteKind {
    export const Trash = SpriteKind.create()
    export const Teleporter = SpriteKind.create()
    export const Bush = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`doorClosedEast`, function (sprite, location) {
    game.splash("Level Completed")
    tiles.setTilemap(lvl2)
})
sprites.onCreated(SpriteKind.Bush, function (sprite) {
    dedBush = sprites.create(img`
        ................................
        ............f...................
        ............8f..8..f.......ff...
        ......f......8..f..f....fff.....
        .....8......f8..f.f....ff.......
        fff..8f.....f8..f.f...ff..ff....
        ...f8f8f....f8f..8....88...f....
        .....ff8f....ff..88..f8....8f...
        .......f88...fff.f8f.8f....ff...
        .......fffff..ff..ff.8f...88fff.
        .........ff8f.fff.ff88f..f8ff...
        ...........fffffff.f8f..ffff....
        ....88888f..ffffffffff.f8f......
        ...f....f8ff88fffff8fffff.......
        ...f......8fff88fffff88f........
        ..............f88fffffff........
        ...............88ffffff.........
        ...............f88ffff..........
        ................88ffff..........
        ................88fff...........
        ................88fff...........
        ................88fff...........
        ................88fff...........
        ................88fff...........
        ................88fff...........
        ...............f8ffff...........
        ...............88ffff...........
        ..............888fffff..........
        .............f8fffffff..........
        .........f88f88f.fffffff........
        ......8ff8f.fff..f8f.ff.ff......
        ....f8f....f......f...fff.ffff..
        `, SpriteKind.Bush)
    dedBush.setPosition(randint(0, 190), randint(0, 190))
})
sprites.onCreated(SpriteKind.Trash, function (sprite) {
    trash = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .........bb.........
        ........cccc........
        ........cccc........
        .........ff.........
        .........cf.........
        .........cc.........
        ........cccc........
        .......cbbccc.......
        .......cbcccc.......
        .......cccccc.......
        .......cccccf.......
        ........cfff........
        ....................
        ....................
        `, SpriteKind.Projectile)
    trash.setPosition(randint(0, 190), randint(0, 190))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`dedTree`, function (sprite, location) {
    if (controller.A.isPressed()) {
        info.changeScoreBy(1)
        game.splash("Tree Restored Successfully!")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (mainPlayer, trash) {
    if (controller.A.isPressed()) {
        info.changeScoreBy(1)
        sprites.destroy(trash)
    }
})
let dedBush: Sprite = null
let trash: Sprite = null
let lvl0 = null
let lvl1 = tilemap`level4`
let lvl2 = tilemap`level0`
info.setScore(0)
let mainPlayer = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let teleporter = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 . . . . . . . . . 
    . . . . 3 3 . 3 3 . . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 . . . . . 
    . . 3 . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Teleporter)
mainPlayer.setPosition(20, 280)
teleporter.setPosition(3969, 324)
console.log(mainPlayer)
for (let i = 0; i <= 30; i++) {
	
}
let trash1 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Trash)
trash = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Trash)
let trash2 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Trash)
let trash3 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Trash)
let trash4 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Trash)
let trash5 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Trash)
let trash6 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Trash)
let trash7 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Trash)
let trash8 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Trash)
let trash9 = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    `, SpriteKind.Trash)
controller.moveSprite(mainPlayer)
tiles.setCurrentTilemap(tilemap`level4`)
scene.cameraFollowSprite(mainPlayer)
