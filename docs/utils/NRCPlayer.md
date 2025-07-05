# NRCPlayer Utility Documentation

## Overview
The NRCPlayer utility provides methods to check if players are using the NoRisk Client. This is useful for server features that should only be available to NoRisk Client users.

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `user(uuid)` | `Boolean` | Check if a specific player is using NoRisk Client |
| `listAll()` | `Set<UUID>` | Get all players using NoRisk Client |
| `listAllNoNRC()` | `Set<UUID>` | Get all players NOT using NoRisk Client |

## Examples

### Check Individual Player
```kotlin
import gg.norisk.core.common.NRCPlayer

if (NRCPlayer.user(player.uniqueId)) {
    player.sendMessage("§aNoRisk Client detected!")
} else {
    player.sendMessage("§7Consider using NoRisk Client!")
}
```

### Get All NRC Players
```kotlin
val nrcPlayers = NRCPlayer.listAll()
println("NoRisk Client users: ${nrcPlayers.size}")
```

### Player Statistics
```kotlin
val totalPlayers = Bukkit.getOnlinePlayers().size
val nrcUsers = NRCPlayer.listAll().size
val vanillaUsers = NRCPlayer.listAllNoNRC().size

println("NRC Users: $nrcUsers / $totalPlayers")
```

## Notes
- Players need time to complete handshake after joining
- Only works with NoRisk Client users
- Useful for feature gating and analytics