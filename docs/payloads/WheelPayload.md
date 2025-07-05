# Wheel Payload Documentation

## Overview
The Wheel Payload adds custom entries to the NoRisk Client Action Wheel. The Action Wheel is a radial menu that players can use for quick actions.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `String` | Display name in the Action Wheel |
| `command` | `String` | Command to execute when selected |

## Examples

### Simple Wheel Entry
```kotlin
val wheelEntry = api.createWheelPayload(
    name = "Spawn",
    command = "/spawn"
)

Payloads.send(player.uniqueId, wheelEntry) { uuid, data ->
    player.sendPluginMessage(this, NRC_CHANNEL, data)
}
```

### Multiple Wheel Entries
```kotlin
val wheelEntries = listOf(
    api.createWheelPayload("Home", "/home"),
    api.createWheelPayload("Shop", "/warp shop"),
    api.createWheelPayload("PvP", "/warp pvp"),
    api.createWheelPayload("Bank", "/bank")
)

wheelEntries.forEach { entry ->
    Payloads.send(player.uniqueId, entry) { uuid, data ->
        player.sendPluginMessage(this, NRC_CHANNEL, data)
    }
}
```

## Practical Applications

### Admin Tools Wheel
```kotlin
fun setupAdminWheel(player: Player) {
    if (player.hasPermission("admin.tools")) {
        val adminEntries = listOf(
            api.createWheelPayload("Teleport", "/tp ${player.name}"),
            api.createWheelPayload("Godmode", "/god ${player.name}")
        )
        
        adminEntries.forEach { entry ->
            Payloads.send(player.uniqueId, entry) { uuid, data ->
                player.sendPluginMessage(this, NRC_CHANNEL, data)
            }
        }
    }
}
```

### Player Quick Actions
```kotlin
fun setupPlayerWheel(player: Player) {
    val playerEntries = listOf(
        api.createWheelPayload("Daily Reward", "/daily"),
        api.createWheelPayload("Player Stats", "/stats")
    )
    
    playerEntries.forEach { entry ->
        Payloads.send(player.uniqueId, entry) { uuid, data ->
            player.sendPluginMessage(this, NRC_CHANNEL, data)
        }
    }
}
```

## Notes
- Commands are sent as chat messages
- Supports both server commands (/) and normal chat messages
- The Action Wheel has limited slots, so only add important entries
