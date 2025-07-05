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

## Practical Applications

### NRC-Only Features Gate
```kotlin
fun giveSpecialReward(player: Player) {
    if (NRCPlayer.user(player.uniqueId)) {
        // Give enhanced reward for NRC users
        giveEnhancedReward(player)
        player.sendMessage("§aNRC user bonus applied!")
    } else {
        // Give standard reward
        giveStandardReward(player)
        player.sendMessage("§7Consider using NoRisk Client for bonuses!")
    }
}
```

### Server Statistics Display
```kotlin
fun displayServerStats(player: Player) {
    val totalPlayers = Bukkit.getOnlinePlayers().size
    val nrcUsers = NRCPlayer.listAll().size
    val percentage = if (totalPlayers > 0) (nrcUsers * 100) / totalPlayers else 0
    
    player.sendMessage("§6=== Server Statistics ===")
    player.sendMessage("§7Total Players: §f$totalPlayers")
    player.sendMessage("§7NRC Users: §a$nrcUsers §7(${percentage}%)")
    player.sendMessage("§7Vanilla Users: §c${totalPlayers - nrcUsers}")
}
```

## Notes
- Players need time to complete handshake after joining
- Only works with NoRisk Client users
- Useful for feature gating and analytics