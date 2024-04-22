namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Health = SpriteKind.create()
    export const Reward = SpriteKind.create()
    export const Resource = SpriteKind.create()
    export const SpectatorSprite = SpriteKind.create()
    export const EnemyProjectile = SpriteKind.create()
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile0
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    Damage()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap(sprite8: Sprite, otherSprite2: Sprite) {
    otherSprite2.destroy(effects.ashes, 100)
    Damage()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
    if (Spectate == 1) {
        Spectate += -1
        ExitSpectate()
    } else if (ShieldStatus == 1) {
        BKeyPressed(true)
    } else {
        BKeyPressed(false)
    }
    
})
function Level_Spawn_Points() {
    
    sprites.destroyAllSpritesOfKind(SpriteKind.Resource)
    sprites.destroyAllSpritesOfKind(SpriteKind.Reward)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    //  This is a spawn point on the tilemap for the hero. This tile will be replaced by the hero sprite
    for (let value of tiles.getTilesByType(assets.tile`
        Hero Spawn Point
    `)) {
        tiles.placeOnTile(Hero, value)
        tiles.setTileAt(value, assets.tile`
            transparency16
        `)
    }
    //  This is a spawn point for rewards. This tile will be replaced by your reward sprite. The art should be replaced with yours.
    for (let value2 of tiles.getTilesByType(assets.tile`
        Reward Spawn
    `)) {
        Reward2 = sprites.create(img`
                ffffffffffffffffffffffffffffffff
                            f336666636666633666663666663333f
                            f336333636333633633363633363333f
                            f336666636666633666663666663333f
                            f333333333333333333333333333333f
                            f333333333333333333333333333333f
                            f333333333333333333333333333333f
                            f333373333333333333333333333333f
                            f337777737733777377737773733733f
                            f337373333733737373737373737333f
                            f337777733733737373737373773333f
                            f333373733733737373737373737333f
                            f337777737773777377737773733733f
                            f333373333333333333333333333333f
                            f333333333333333333333333333333f
                            ffffffffffffffffffffffffffffffff
            `, SpriteKind.Reward)
        tiles.placeOnTile(Reward2, value2)
        tiles.setTileAt(value2, assets.tile`
            transparency16
        `)
    }
    //  This is a spawn point for rewards. This tile will be replaced by your reward sprite. The art should be replaced with yours.
    for (let value22 of tiles.getTilesByType(assets.tile`
        myTile8
    `)) {
        Resource2 = sprites.create(assets.image`
            myImage
        `, SpriteKind.Resource)
        tiles.placeOnTile(Resource2, value22)
        tiles.setTileAt(value22, assets.tile`
            transparency16
        `)
    }
    //  This is a spawn point for rewards. This tile will be replaced by your reward sprite. The art should be replaced with yours.
    for (let value222 of tiles.getTilesByType(assets.tile`
        Enemy Spawn Points
    `)) {
        myEnemy = sprites.create(assets.image`
            Enemy1
        `, SpriteKind.Enemy)
        tiles.placeOnTile(myEnemy, value222)
        tiles.setTileAt(value222, assets.tile`
            transparency16
        `)
        myEnemy.follow(Hero, 50)
        myEnemy.ay = 500
    }
}

function Starting_Game_Mechanics() {
    
    scene.setBackgroundImage(img`
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333666633333333333333333333333333333333333333333333333333333333333333333333333333333366663333333333333333333333333333333333333333333333333333
                3333333333333333333336666663333333333333333333333333333333333333333333333333333333333333333333333333333666666333333333333333333333333333333333333333333333333333
                3333333333333333333336666663366333333333333333333333333333333333333333333333333333333333333333333333333666666336633333333333333333333333333333333333333333333333
                3333333333333333336666666663666663333333333333333333333333333333333333333333333333333333333333333333666666666366666333333333333333333333333333333333333333333333
                3333333333333333366666666666666663333333333333333333333333333333333333333333333333333333333333333336666666666666666333333333333333333333333333333333333333333333
                3333333333333333666666666666666666633333333333333333333333333333333333333333333333333333333333333366666666666666666663333333333333333333333333333333333333333333
                3333333333333333666666666666666666663333333333333333333333333333333333333333333333333333333333333366666666666666666666333333333333333333333333333333333333333333
                3333333333333333366666666666666666663336633333333333333333333333333333333333333333333333333333333336666666666666666666333663333333333333333333333333333333333333
                3333333333333666636666666666666666663366666333333333333333333333333333333333333333333333333333366663666666666666666666336666633333333333333333333333333333333333
                3333333333336666663666666666666666633366666333333333333333333333333333333333333333333333333333666663366666666666666663336666633333333333333333333333333333333333
                3333333333336666663666666666666666366666666633333333333333333333333333333333333333333333333333666666666666666666666636666666663333333333333333333333333333333333
                3333333333336666666666666666666666666666666633333333333333333333333333333333333333333333333333666666666666666666666666666666663333333333333333333333333333333333
                3333333333333666666666666666666666666666666633333333333333333333333333333333333333333333333333366666666666666666666666666666663333333333333333333333333333333333
                3366633336666366666666666666666666666666666336633333333333336666333333333333333333336663333666636666666666666666666666666666633663333333333333666633333333333333
                3666663366666666666666666666666666666666666366663333333333366666633333333333333333366666336666636666666666666666666666666666636666333333333336666663333333333333
                3666663666666666666666666666666666666666666366663333333333366666636663333333333333366666366666666666666666666666666666666666636666333333333336666663666333333333
                3366666666666666666666666666666666666666666666663333333333333666666666333333333333336666666666666666666666666666666666666666666666333333333333366666666633333333
                3666666666666666666666666666666666666666666666633333333366663666666666333333333333366666666666666666666666666666666666666666666663333333336666366666666633333333
                6666666666666666666666666666666666666666666666663333333666666666666663333333333133666666666aa6666666666666666666666666666666666666333333366666666666666333333333
                6666666666666666666666666666666666666666666666666366633666666666666666666333333aaa666666666aaa666666666666666666666666666666666666636663366666666666666666633333
                6666666666666666666666666666666666666666666666666666666666666666666666666633331aaa666666666aaa666666666666666666666666666666666666666666666666666666666666663333
                66666666666666666666666666666666666666666666666666666666666666666666666666333aaaaaaa666666aaaaa66666666666666666666666666666666666666666666666666666666666663333
                66666666666666666666666666666666666666666aaaaaaaaa666666666666666666666666666aaaaaaa666666aaaaa666666666666666666666666666666666666666666aaaaaaaaaa6666666666666
                66666666666666666666666666666666666666666aaaaaaaaa666666666666666666666666666aaaaaaa666666aaaaa666666666666666666666666666666666666666666aaaaaaaaaa6666666666666
                6666666666666666666aaa6666666666666666666a11aaaaaa666666666666666666666666666a11aaaa66666aaaaaaa66666666666666666666aa6666666666666666666aa1a1aaaaa6666666666666
                666666666666666666aaaaa666666666666666666aaaaaaa1a666666666666666666666666666aaaaaaa66666aaaaaaa6666666666666666666aaaa666666666666666666aaaaaa11aa6666666666666
                66666666666666666aaaaaa666666666666666666aaaaaaaaa6666666666a66666666aaaaa666a1aaaaa66666aaaaaaa66666666666666666aaaaaa666666666666666666aaaaaaaaaa6666666666666
                66666666666666666aaa1a666666a666666666666aaaaaaaaa666666666aa66666666aaaaa666aaaaaaa66666aaaaaaa66666666666666666aaa1a666666aa66666666666aaaa1aaaaa66666666aa666
                66666666666666666aaaaaa66666a666666666666aaaaaaa1a666666666aa66666666aaaaa666aaaaaaa66666aaaaaaa66666666666666666aaaaaa66666aa66666666666aaaaaaa1aa66666666aa666
                66666666aaa666666aa11a66666aaa66666666666aaaaaaaaa66aaaaaa6aa63666666aaaaa666aaaaaaa66666aaaaaaa666666666aa666666aaa1a66666aaa66666666666aaaaaaaaaa6aaaaaaaaa666
                a6aa6666aaaaaaaaaaa1aaa666aaaaa6666666666aaaaaaa1a66a11aaa6aa666666666aa1aa66aaaaaaa666aaaaaaaaaa6aa6666aaaaaaaaaaaaa1a6666aaaa6666666666aaaaaa11aa6a11aaaaaa666
                aaaa66666a1aa1aaaaaaaaa666aaaaa6666666666aaaaaaaaa66aaaa1a6aa66666666aaaaaa66aa1aaaa666aaaaaaaaaaaaa6666aa1aaa1aaaaaaaa6666aaaa6666666666aaaaaaaaaa6aaaa1aaaa666
                aa1a66666aaa1111aaaaaaa666aaaaa6666666666aaaaaaaaa66aaaa1aaaa66666666aaaaaa66aaaaaaa666aaaaaaaaaaa1a6666aaaa1a11aaaaaaa6666aaaa6666666666aaaaaaaaaa6aaaa1aaaa666
                aaaa6666aaaaaaaaaaaaaaaa66aaaaaa66aa6aa6aaaaaaaaaaa6a11aaaaaa66666666aaaaaa66aaaaaaa666aaaaaaaaaaaaa6666aaaaaaaaaaaaaaaa66aaaaaa666a66aaaaaaaaaaaaa6a11aaaaaa666
                aa1a6666aaaaaaaaaaaaaaaa66aaaaaa66aaaaaaaaaaaaaaaaa6aaaaaaaaa66a66a66aaaaaa66aaaaaaa666aaaaaaaaaaa1a6666aaaaaaaaaaaaaaaa66aaaaaa666aaaaaaaaaaaaaaaa6aaaaaaaaa666
                aaaaa6aa1a1aaaaaaaaaaaaa66aaaaaaa6aaaa11aaaaaaaaaaaaa11ccaaaaaaa6aaa66aa1aa66aaaaaaa666aaaaaaaaaaaaaaa6aaa1aaaaaaaaaaaaa66aaaaaaa666a11aaaaaacaaaaaaa11cccaaa6aa
                aaaaa6aaaaaaaaaaaaaaaaaaaa1aaaaaa6aaaaaaaaacccaaaaaaaaacccaaaaaa6aaa6aaaaaa66aaaaaaa666aaaaaaaaaaaaaaa6aaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaccaaaaaaaaacccaaa6aa
                aaaaa6aaaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaacccaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaa666aaaaaaaaaaaaaaa6aaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaccaaaaaaaaacccaaaaaa
                aaaaa6aaaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaacccccccaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaaaaaa6aaaaaaaaaaaaaaaaaaaaaaaaaa6a1aaaaaacccccccaaaaacccccaaaaa
                aaaaacccccccccaaaaaaaaaaaaaaaaaaa6aaaaaaacccccccaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaa6aaaaaaaacccccccaaaaacccccaaaaa
                aaaaacccccccccaaaaaaaaaaaaaaaaaaa6aaaaaaacccccccaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaa6aaaaaaaacccccccaaaaacccccaaaaa
                aaaaacddccccccaaaaaaaaaaaaaaaaaaa6aaaaaaacddccccaaaaacccccccaa111aaaaaaaaaaaaaaaccaaaa6aaaaaaaaaaaaaaccdcdcccccaaaaaaaaaaaaaaaaaa6aaaaaaaacccccccaaaacccccccc11a
                aaaaacccccccdcaaaaaaaaaaaaaaaaaaa6aaaaaaacccccccaaaaacccccccaaa11aaaaaaaaaaaaaaccccaaa6aaaaaaaaaaaaaaccccccddccaaaaaaaaaaaaaaaaaa6aaaaaaaacccccccaaaaccccccccaaa
                aaaaacccccccccaaaaaaaaaacaaaaaaaacccccaaacdcccccaaaaacccccccaaaaaaaaaaa1aaaaaccccccaaa6aaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaaaccccaaaacccdcccaaaaccccccccaaa
                aaaaacccccccccaaaaaaaaaccaaaaaaaacccccaaacccccccaaaaacccccccaa1aaaaaaaaaaaaaacccdcaaaaaaccaaaaaaaaaaaccccdcccccaaaaaaaaccaaaaaaaaaccccaaaacccdcccaaaacccccccca1a
                aaaaacccccccdcaaaaaaaaaccaaaaaaaacccccaaacccccccaaaaacccccccaa111aaaaaaaaaaaaccccccaaaaaccaaaaaaaaaaacccccccdccaaaaaaaaccaaaaaaaaccccccaaacccccccaaaacccccccc11a
                aaaaacccccccccaaccccccaccaaaaaaaacccccaaacccccccaaaaacccccccaaaaaaaaacc1aaaaacccdcaaaaacccaaaaaaaaaaaccccccccccacccccccccaaaaaaaaccccccaaacccdcccaaaaccccccccaaa
                aaaaacccccccdcaacddcccaccaaaaaaaaaccdccaacccccccaaaccccccccccaccaaaacccccccccccccdcaaaaccccaaaaaaaaaaccccccddccacddccccccaaaaaaaacccccccaacccccccaaccccccccccccc
                aaaaacccccccccaaccccdcaccaaaaaaaaccccccaaccdccccaaacccccccccccccaaaaccdcccdccccccccaaaaccccaaaaaaaaaaccccccccccaccccdccccaaaaaaaacccccccaaccccdccaaccccccccccccc
                aaaaacccccccccaaccccdccccaaaaaaaaccccccaacccccccaaacccccccccccdcaaaaccccdcddcccccccaaaaccccaaaaaaaaaaccccccccccaccccdccccaaaaaaaacccccccaacccccccaaccccccccccccc
                accacccccccccccacddccccccaaaaaaaaccccccaacccccccaaacccccccccccccaaaaccccccccccccccccaaccccccaaacaacccccccccccccacddccccccaaaaaaaacccccccaacccccccaaccccccccccccc
                cccccccccccccccacccccccccaacaacaaccccccaacccccccaaacccccccccccdcaaaaccccccccccccccccaaccccccaaaccccccccccccccccacccccccccaaaaacaacccccccaacccccccaaccccccccccccc
                ccddcccccccccccccddddcccccccacccaaccdccaacccccccaaacccccccccccccccacccdcccccccccccccaacccccccaaacddccccccccccccccddcdccccaccacccacccccccaacccccccaaccccccccccccc
                ccccccccccccccccccccccccccccacccaccccccaacccccccaaacccccccccccccccaccccccccccccccccccccccccccacccccccccccccccccccccccccccaccacccccccccccaaccccdccaaccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccaaacccccccccccccccaccccccccccccccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccccccccaaccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccccccaccccccccccccccccccccccccccacdccccccccccccccccccccccccccccccccccccccccccccccccccaccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccccccaccccccccccccccccccccccccccaccccccccccccccccccccccccccccccccdcccccccccccccccccccaccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccccccaccccccccccccccccccccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccccaccccccccccccc
                ccccccccccccccccccccccccccdddcccccccccccccccccccccacccccccccccccccaccccccccccccccccccccccccccacccccccccccccccccccccccccccddcdcdccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccddcccccccccccccccccccccacccccccccccccccaccccccccccccccccccccccccccaccccccccccccccccccccccccccccccdcdccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccdccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccdcccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcdccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccdccccccccccccccccdccccccccccccccccccccccdccccccccccccccccdccccccccccccccccccccccdccccccccccccccccdccccccccccccccccccccccdccccccccccccccccdccccc
                ccccccdcccddcccccddccccdcccdccccdcddcccdccccccdcccddcccccddccccdcccdccccdcddcccdccccccdcccddcccccddccccdcccdccccdcddcccdccccccdcccddcccccddccccdcccdccccdcddcccd
                ccdcccddcddccdcccddcccddcccddcccdccddcddccdcccddcddccdcccddcccddcccddcccdccddcddccdcccddcddccdcccddcccddcccddcccdccddcddccdcccddcddccdcccddcccddcccddcccdccddcdd
                ccddccddcddccddcccddcddccccddcdcddcddddcccddccddcddccddcccddcddccccddcdcddcddddcccddccddcddccddcccddcddccccddcdcddcddddcccddccddcddccddcccddcddccccddcdcddcddddb
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
    ResourceAmount = 0
    Hero = sprites.create(assets.image`
        myImage0
    `, SpriteKind.Player)
    scene.cameraFollowSprite(Hero)
    controller.moveSprite(Hero, 100, 0)
    canDoubleJump = true
    Hero.ay = 200
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    if (i < 4) {
        i += 1
    } else {
        i = 0
    }
    
    if (ShieldStatus == 1) {
        if (Hero.vy == 0) {
            Hero.vy = -80
        }
        
        if (Hero.isHittingTile(CollisionDirection.Bottom)) {
            Hero.vy = -80
        } else if (canDoubleJump) {
            Hero.vy = -40
            canDoubleJump = false
        }
        
    } else if (Hero.vy == 0) {
        Hero.vy = -80
    }
    
    if (Hero.isHittingTile(CollisionDirection.Bottom)) {
        Hero.vy = -120
    } else if (canDoubleJump) {
        Hero.vy = -100
        canDoubleJump = false
    }
    
})
function RefreshStatus() {
    
    if (controller.right.isPressed()) {
        AngleShield = 10
        if (ShieldStatus == 1) {
            Hero.setImage(assets.image`
                myImage2
            `)
        } else {
            Hero.setImage(assets.image`
                myImage3
            `)
        }
        
    } else if (controller.left.isPressed()) {
        AngleShield = 170
        if (ShieldStatus == 1) {
            Hero.setImage(assets.image`
                myImage8
            `)
        } else {
            Hero.setImage(assets.image`
                myImage0
            `)
        }
        
    }
    
}

function ExitSpectate() {
    story.startCutscene(function on_start_cutscene() {
        story.printDialog("Exiting Spectate", 80, 90, 50, 150)
        story.cancelCurrentCutscene()
    })
    sprites.destroyAllSpritesOfKind(SpriteKind.SpectatorSprite)
    Starting_Game_Mechanics()
    start_level()
    Level_Spawn_Points()
    scene.setBackgroundImage(img`
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                3333333333333333333333666633333333333333333333333333333333333333333333333333333333333333333333333333333366663333333333333333333333333333333333333333333333333333
                3333333333333333333336666663333333333333333333333333333333333333333333333333333333333333333333333333333666666333333333333333333333333333333333333333333333333333
                3333333333333333333336666663366333333333333333333333333333333333333333333333333333333333333333333333333666666336633333333333333333333333333333333333333333333333
                3333333333333333336666666663666663333333333333333333333333333333333333333333333333333333333333333333666666666366666333333333333333333333333333333333333333333333
                3333333333333333366666666666666663333333333333333333333333333333333333333333333333333333333333333336666666666666666333333333333333333333333333333333333333333333
                3333333333333333666666666666666666633333333333333333333333333333333333333333333333333333333333333366666666666666666663333333333333333333333333333333333333333333
                3333333333333333666666666666666666663333333333333333333333333333333333333333333333333333333333333366666666666666666666333333333333333333333333333333333333333333
                3333333333333333366666666666666666663336633333333333333333333333333333333333333333333333333333333336666666666666666666333663333333333333333333333333333333333333
                3333333333333666636666666666666666663366666333333333333333333333333333333333333333333333333333366663666666666666666666336666633333333333333333333333333333333333
                3333333333336666663666666666666666633366666333333333333333333333333333333333333333333333333333666663366666666666666663336666633333333333333333333333333333333333
                3333333333336666663666666666666666366666666633333333333333333333333333333333333333333333333333666666666666666666666636666666663333333333333333333333333333333333
                3333333333336666666666666666666666666666666633333333333333333333333333333333333333333333333333666666666666666666666666666666663333333333333333333333333333333333
                3333333333333666666666666666666666666666666633333333333333333333333333333333333333333333333333366666666666666666666666666666663333333333333333333333333333333333
                3366633336666366666666666666666666666666666336633333333333336666333333333333333333336663333666636666666666666666666666666666633663333333333333666633333333333333
                3666663366666666666666666666666666666666666366663333333333366666633333333333333333366666336666636666666666666666666666666666636666333333333336666663333333333333
                3666663666666666666666666666666666666666666366663333333333366666636663333333333333366666366666666666666666666666666666666666636666333333333336666663666333333333
                3366666666666666666666666666666666666666666666663333333333333666666666333333333333336666666666666666666666666666666666666666666666333333333333366666666633333333
                3666666666666666666666666666666666666666666666633333333366663666666666333333333333366666666666666666666666666666666666666666666663333333336666366666666633333333
                6666666666666666666666666666666666666666666666663333333666666666666663333333333133666666666aa6666666666666666666666666666666666666333333366666666666666333333333
                6666666666666666666666666666666666666666666666666366633666666666666666666333333aaa666666666aaa666666666666666666666666666666666666636663366666666666666666633333
                6666666666666666666666666666666666666666666666666666666666666666666666666633331aaa666666666aaa666666666666666666666666666666666666666666666666666666666666663333
                66666666666666666666666666666666666666666666666666666666666666666666666666333aaaaaaa666666aaaaa66666666666666666666666666666666666666666666666666666666666663333
                66666666666666666666666666666666666666666aaaaaaaaa666666666666666666666666666aaaaaaa666666aaaaa666666666666666666666666666666666666666666aaaaaaaaaa6666666666666
                66666666666666666666666666666666666666666aaaaaaaaa666666666666666666666666666aaaaaaa666666aaaaa666666666666666666666666666666666666666666aaaaaaaaaa6666666666666
                6666666666666666666aaa6666666666666666666a11aaaaaa666666666666666666666666666a11aaaa66666aaaaaaa66666666666666666666aa6666666666666666666aa1a1aaaaa6666666666666
                666666666666666666aaaaa666666666666666666aaaaaaa1a666666666666666666666666666aaaaaaa66666aaaaaaa6666666666666666666aaaa666666666666666666aaaaaa11aa6666666666666
                66666666666666666aaaaaa666666666666666666aaaaaaaaa6666666666a66666666aaaaa666a1aaaaa66666aaaaaaa66666666666666666aaaaaa666666666666666666aaaaaaaaaa6666666666666
                66666666666666666aaa1a666666a666666666666aaaaaaaaa666666666aa66666666aaaaa666aaaaaaa66666aaaaaaa66666666666666666aaa1a666666aa66666666666aaaa1aaaaa66666666aa666
                66666666666666666aaaaaa66666a666666666666aaaaaaa1a666666666aa66666666aaaaa666aaaaaaa66666aaaaaaa66666666666666666aaaaaa66666aa66666666666aaaaaaa1aa66666666aa666
                66666666aaa666666aa11a66666aaa66666666666aaaaaaaaa66aaaaaa6aa63666666aaaaa666aaaaaaa66666aaaaaaa666666666aa666666aaa1a66666aaa66666666666aaaaaaaaaa6aaaaaaaaa666
                a6aa6666aaaaaaaaaaa1aaa666aaaaa6666666666aaaaaaa1a66a11aaa6aa666666666aa1aa66aaaaaaa666aaaaaaaaaa6aa6666aaaaaaaaaaaaa1a6666aaaa6666666666aaaaaa11aa6a11aaaaaa666
                aaaa66666a1aa1aaaaaaaaa666aaaaa6666666666aaaaaaaaa66aaaa1a6aa66666666aaaaaa66aa1aaaa666aaaaaaaaaaaaa6666aa1aaa1aaaaaaaa6666aaaa6666666666aaaaaaaaaa6aaaa1aaaa666
                aa1a66666aaa1111aaaaaaa666aaaaa6666666666aaaaaaaaa66aaaa1aaaa66666666aaaaaa66aaaaaaa666aaaaaaaaaaa1a6666aaaa1a11aaaaaaa6666aaaa6666666666aaaaaaaaaa6aaaa1aaaa666
                aaaa6666aaaaaaaaaaaaaaaa66aaaaaa66aa6aa6aaaaaaaaaaa6a11aaaaaa66666666aaaaaa66aaaaaaa666aaaaaaaaaaaaa6666aaaaaaaaaaaaaaaa66aaaaaa666a66aaaaaaaaaaaaa6a11aaaaaa666
                aa1a6666aaaaaaaaaaaaaaaa66aaaaaa66aaaaaaaaaaaaaaaaa6aaaaaaaaa66a66a66aaaaaa66aaaaaaa666aaaaaaaaaaa1a6666aaaaaaaaaaaaaaaa66aaaaaa666aaaaaaaaaaaaaaaa6aaaaaaaaa666
                aaaaa6aa1a1aaaaaaaaaaaaa66aaaaaaa6aaaa11aaaaaaaaaaaaa11ccaaaaaaa6aaa66aa1aa66aaaaaaa666aaaaaaaaaaaaaaa6aaa1aaaaaaaaaaaaa66aaaaaaa666a11aaaaaacaaaaaaa11cccaaa6aa
                aaaaa6aaaaaaaaaaaaaaaaaaaa1aaaaaa6aaaaaaaaacccaaaaaaaaacccaaaaaa6aaa6aaaaaa66aaaaaaa666aaaaaaaaaaaaaaa6aaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaccaaaaaaaaacccaaa6aa
                aaaaa6aaaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaacccaaaaaaaaacccaaaaaaaaaaaaaaaaaaaaaaaaaa666aaaaaaaaaaaaaaa6aaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaccaaaaaaaaacccaaaaaa
                aaaaa6aaaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaacccccccaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaaaaaa6aaaaaaaaaaaaaaaaaaaaaaaaaa6a1aaaaaacccccccaaaaacccccaaaaa
                aaaaacccccccccaaaaaaaaaaaaaaaaaaa6aaaaaaacccccccaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaa6aaaaaaaacccccccaaaaacccccaaaaa
                aaaaacccccccccaaaaaaaaaaaaaaaaaaa6aaaaaaacccccccaaaaaacccccaaaaaaaaaaaaaaaaaaaaaaaaaaa6aaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaa6aaaaaaaacccccccaaaaacccccaaaaa
                aaaaacddccccccaaaaaaaaaaaaaaaaaaa6aaaaaaacddccccaaaaacccccccaa111aaaaaaaaaaaaaaaccaaaa6aaaaaaaaaaaaaaccdcdcccccaaaaaaaaaaaaaaaaaa6aaaaaaaacccccccaaaacccccccc11a
                aaaaacccccccdcaaaaaaaaaaaaaaaaaaa6aaaaaaacccccccaaaaacccccccaaa11aaaaaaaaaaaaaaccccaaa6aaaaaaaaaaaaaaccccccddccaaaaaaaaaaaaaaaaaa6aaaaaaaacccccccaaaaccccccccaaa
                aaaaacccccccccaaaaaaaaaacaaaaaaaacccccaaacdcccccaaaaacccccccaaaaaaaaaaa1aaaaaccccccaaa6aaaaaaaaaaaaaaccccccccccaaaaaaaaaaaaaaaaaaaccccaaaacccdcccaaaaccccccccaaa
                aaaaacccccccccaaaaaaaaaccaaaaaaaacccccaaacccccccaaaaacccccccaa1aaaaaaaaaaaaaacccdcaaaaaaccaaaaaaaaaaaccccdcccccaaaaaaaaccaaaaaaaaaccccaaaacccdcccaaaacccccccca1a
                aaaaacccccccdcaaaaaaaaaccaaaaaaaacccccaaacccccccaaaaacccccccaa111aaaaaaaaaaaaccccccaaaaaccaaaaaaaaaaacccccccdccaaaaaaaaccaaaaaaaaccccccaaacccccccaaaacccccccc11a
                aaaaacccccccccaaccccccaccaaaaaaaacccccaaacccccccaaaaacccccccaaaaaaaaacc1aaaaacccdcaaaaacccaaaaaaaaaaaccccccccccacccccccccaaaaaaaaccccccaaacccdcccaaaaccccccccaaa
                aaaaacccccccdcaacddcccaccaaaaaaaaaccdccaacccccccaaaccccccccccaccaaaacccccccccccccdcaaaaccccaaaaaaaaaaccccccddccacddccccccaaaaaaaacccccccaacccccccaaccccccccccccc
                aaaaacccccccccaaccccdcaccaaaaaaaaccccccaaccdccccaaacccccccccccccaaaaccdcccdccccccccaaaaccccaaaaaaaaaaccccccccccaccccdccccaaaaaaaacccccccaaccccdccaaccccccccccccc
                aaaaacccccccccaaccccdccccaaaaaaaaccccccaacccccccaaacccccccccccdcaaaaccccdcddcccccccaaaaccccaaaaaaaaaaccccccccccaccccdccccaaaaaaaacccccccaacccccccaaccccccccccccc
                accacccccccccccacddccccccaaaaaaaaccccccaacccccccaaacccccccccccccaaaaccccccccccccccccaaccccccaaacaacccccccccccccacddccccccaaaaaaaacccccccaacccccccaaccccccccccccc
                cccccccccccccccacccccccccaacaacaaccccccaacccccccaaacccccccccccdcaaaaccccccccccccccccaaccccccaaaccccccccccccccccacccccccccaaaaacaacccccccaacccccccaaccccccccccccc
                ccddcccccccccccccddddcccccccacccaaccdccaacccccccaaacccccccccccccccacccdcccccccccccccaacccccccaaacddccccccccccccccddcdccccaccacccacccccccaacccccccaaccccccccccccc
                ccccccccccccccccccccccccccccacccaccccccaacccccccaaacccccccccccccccaccccccccccccccccccccccccccacccccccccccccccccccccccccccaccacccccccccccaaccccdccaaccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccaaacccccccccccccccaccccccccccccccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccccccccaaccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccccccaccccccccccccccccccccccccccacdccccccccccccccccccccccccccccccccccccccccccccccccccaccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccccccaccccccccccccccccccccccccccaccccccccccccccccccccccccccccccccdcccccccccccccccccccaccccccccccccc
                ccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccccccaccccccccccccccccccccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccccaccccccccccccc
                ccccccccccccccccccccccccccdddcccccccccccccccccccccacccccccccccccccaccccccccccccccccccccccccccacccccccccccccccccccccccccccddcdcdccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccddcccccccccccccccccccccacccccccccccccccaccccccccccccccccccccccccccaccccccccccccccccccccccccccccccdcdccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccdccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccdcccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdccccccccccccccccccccccccccccccccccccc
                ccccccccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcdccccccccccccccccccccccccccccccccccc
                cccccccccccccccccccccccccccccccccccdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
                cccccccccccccccccdccccccccccccccccdccccccccccccccccccccccdccccccccccccccccdccccccccccccccccccccccdccccccccccccccccdccccccccccccccccccccccdccccccccccccccccdccccc
                ccccccdcccddcccccddccccdcccdccccdcddcccdccccccdcccddcccccddccccdcccdccccdcddcccdccccccdcccddcccccddccccdcccdccccdcddcccdccccccdcccddcccccddccccdcccdccccdcddcccd
                ccdcccddcddccdcccddcccddcccddcccdccddcddccdcccddcddccdcccddcccddcccddcccdccddcddccdcccddcddccdcccddcccddcccddcccdccddcddccdcccddcddccdcccddcccddcccddcccdccddcdd
                ccddccddcddccddcccddcddccccddcdcddcddddcccddccddcddccddcccddcddccccddcdcddcddddcccddccddcddccddcccddcddccccddcdcddcddddcccddccddcddccddcccddcddccccddcdcddcddddb
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
    StatusBarFunc()
    info.setScore(ScorePre)
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Reward, function on_on_overlap2(sprite3: Sprite, otherSprite: Sprite) {
    otherSprite.destroy(effects.confetti, 500)
    music.baDing.play()
    info.changeScoreBy(20)
    scene.cameraShake(2, 100)
})
function StatusBarFunc() {
    
    statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
    statusbar.value = 0
    statusbar.setColor(8, 1)
    statusbar.max = 30
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.attachToSprite(Hero)
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Resource, function on_on_overlap3(sprite32: Sprite, otherSprite3: Sprite) {
    
    otherSprite3.destroy(effects.confetti, 500)
    ResourceAmount += 1
    music.baDing.play()
    info.changeScoreBy(10)
    scene.cameraShake(2, 100)
    statusbar.value = ResourceAmount
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile2
    `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    
    ScorePre = info.score()
    Spectate += 1
    Spectator = sprites.create(assets.image`
            myImage7
        `, SpriteKind.SpectatorSprite)
    Spectator.setFlag(SpriteFlag.GhostThroughWalls, true)
    Spectator.setFlag(SpriteFlag.GhostThroughTiles, true)
    Spectator.setFlag(SpriteFlag.ShowPhysics, false)
    Spectator.setFlag(SpriteFlag.StayInScreen, true)
    Spectator.setPosition(Hero.x, Hero.y)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Reward)
    scene.setBackgroundImage(img`
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
                5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    `)
    scene.cameraFollowSprite(Spectator)
    controller.moveSprite(Spectator, 100, 100)
    story.startCutscene(function on_start_cutscene2() {
        story.printDialog("Spectating. Press B to exit.", 80, 90, 50, 150)
        story.cancelCurrentCutscene()
    })
})
function start_level() {
    if (current_level == 0) {
        tiles.setCurrentTilemap(tilemap`
            level1
        `)
    } else if (current_level == 1) {
        effects.blizzard.startScreenEffect()
        tiles.setCurrentTilemap(tilemap`
            level5
        `)
    } else if (current_level == 2) {
        tiles.setCurrentTilemap(tilemap`
            level18
        `)
    } else if (current_level == 3) {
        tiles.setCurrentTilemap(tilemap`
            level
        `)
    } else {
        game.gameOver(true)
    }
    
}

info.onLifeZero(function on_life_zero() {
    game.over(false, effects.melt)
})
function BKeyPressed(OnShield: boolean) {
    
    if (OnShield) {
        Hero.setImage(assets.image`
            myImage3
        `)
        ShieldStatus += -1
        myDart = darts.create(assets.image`
            myImage5
        `, SpriteKind.Projectile)
        myDart.setPosition(Hero.x, Hero.y)
        myDart.pow = 80
        myDart.angle = AngleShield
        myDart.angleRate = 1
        myDart.setFlag(SpriteFlag.DestroyOnWall, true)
        myDart.throwDart()
    } else if (ResourceAmount < 1) {
        game.splash("Get More Resources")
    } else {
        if (AngleShield == 10) {
            Hero.setImage(assets.image`
                myImage2
            `)
        } else {
            Hero.setImage(assets.image`
                myImage8
            `)
        }
        
        ShieldStatus += 1
        ResourceAmount += -1
        statusbar.value = ResourceAmount
    }
    
    RefreshStatus()
}

function Init() {
    
    info.setLife(3)
    info.setScore(0)
    game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), false)
    game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
    ShieldStatus = 0
    ResourceAmount = 0
    i = 0
}

function Damage() {
    
    Hero.setVelocity(0, -100)
    if (ShieldStatus == 1) {
        Hero.setImage(assets.image`
            myImage0
        `)
        ShieldStatus += -1
    } else {
        info.changeLifeBy(-1)
    }
    
    scene.cameraShake(2, 200)
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile
    `, function on_overlap_tile3(sprite22: Sprite, location22: tiles.Location) {
    
    current_level += 1
    start_level()
    Level_Spawn_Points()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile9
    `, function on_overlap_tile4(sprite6: Sprite, location5: tiles.Location) {
    game.over(false, effects.dissolve)
})
let myDart : Dart = null
let Spectator : Sprite = null
let statusbar : StatusBarSprite = null
let ScorePre = 0
let AngleShield = 0
let i = 0
let canDoubleJump = false
let ResourceAmount = 0
let myEnemy : Sprite = null
let Resource2 : Sprite = null
let Reward2 : Sprite = null
let Hero : Sprite = null
let ShieldStatus = 0
let Spectate = 0
let current_level = 0
Starting_Game_Mechanics()
current_level = 3
start_level()
Level_Spawn_Points()
Init()
StatusBarFunc()
game.onUpdateInterval(100, function on_update_interval() {
    
    if (Hero.isHittingTile(CollisionDirection.Bottom)) {
        canDoubleJump = true
    }
    
    RefreshStatus()
})
