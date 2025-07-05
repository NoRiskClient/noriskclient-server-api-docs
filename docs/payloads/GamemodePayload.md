# Gamemode Payload Documentation

## Overview
The Gamemode Payload overrides the gamemode display in the NoRisk Client. This allows displaying custom gamemode names that differ from standard Minecraft gamemodes.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `gamemode` | `String` | The custom gamemode name to display |

## Examples

### Custom Gamemode
```kotlin
val customGamemode = api.createGamemodePayload(
    gamemode = "Skyblock"
)

Payloads.send(player.uniqueId, customGamemode) { uuid, data ->
    player.sendPluginMessage(this, NRC_CHANNEL, data)
}
```

### Server-specific Gamemodes
```kotlin
val miniGameMode = api.createGamemodePayload(
    gamemode = "BedWars"
)

Payloads.send(player.uniqueId, miniGameMode) { uuid, data ->
    player.sendPluginMessage(this, NRC_CHANNEL, data)
}
```


### Event-based Gamemode Change
```kotlin
fun startEvent(players: List<Player>, eventName: String) {
    val eventGamemode = api.createGamemodePayload(gamemode = eventName)
    
    players.forEach { player ->
        Payloads.send(player.uniqueId, eventGamemode) { uuid, data ->
            player.sendPluginMessage(this, NRC_CHANNEL, data)
        }
    }
}
```

## Practical Applications

### Minigame Gamemode Updates
```kotlin
fun updateMinigameMode(players: List<Player>, gameType: String, gamePhase: String) {
    val gamemodeDisplay = api.createGamemodePayload(
        gamemode = "$gameType - $gamePhase"
    )
    
    players.forEach { player ->
        Payloads.send(player.uniqueId, gamemodeDisplay) { uuid, data ->
            player.sendPluginMessage(this, NRC_CHANNEL, data)
        }
    }
}
```

### Rank-based Gamemode Display
```kotlin
fun updateRankGamemode(player: Player, rank: String) {
    val rankGamemode = api.createGamemodePayload(
        gamemode = "VIP - $rank"
    )
    
    Payloads.send(player.uniqueId, rankGamemode) { uuid, data ->
        player.sendPluginMessage(this, NRC_CHANNEL, data)
    }
}
```

## Notes
- The gamemode display is only overridden in the NoRisk Client
- Standard Minecraft clients will still see normal gamemode names
- Empty strings are ignored
