// When your Player (grey heart) overlaps with a Cupid (red heart), the Cupid disappears and your Player heart grows
sprites.onOverlap(SpriteKind.Player, SpriteKind.Valentine, function (sprite, otherSprite) {
    otherSprite.destroy()
    scaling.scaleByPixels(sprite, 5, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
// When your Player (grey heart) overlaps with an Arrow, the Arrow disappears and your Player heart shrinks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Arrow, function (sprite, otherSprite) {
    otherSprite.destroy()
    scaling.scaleByPixels(sprite, -7, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
// Every 1.8 seconds a red heart appears on the screen shooting this number of arrows
game.onUpdateInterval(1800, function () {
    valentine.send_valentine(assets.image`cupid hearts`, 5, assets.image`arrow`)
})
game.onUpdateInterval(100, function () {
    let mySprite: Sprite = null
    valentine.set_win_lose_size(120, 0)
    game.setGameOverMessage(false, "GAME OVER!")
    game.setGameOverMessage(true, "YOU WIN!")
    if (mySprite.width < 6) {
        game.gameOver(false)
    }
    if (mySprite.width > 120) {
        game.gameOver(true)
    }
})
