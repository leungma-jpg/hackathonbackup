let player_sprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level0`)
player_sprite = sprites.create(assets.image`mySpriteHeart`, SpriteKind.Player)
controller.moveSprite(player_sprite)
scene.cameraFollowSprite(player_sprite)