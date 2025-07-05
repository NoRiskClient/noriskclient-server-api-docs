# Module Deactivate Payload Documentation

## Overview
The Module Deactivate Payload disables specific NoRisk Client modules for individual players. This is useful for servers that want to restrict certain client features.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `modules` | `List<Modules>` | List of modules to deactivate |

## Available Modules
```kotlin
enum class Modules {
    FovChanger,         
    FullBrightModule,   
    ZoomModule,         
    FreeLookModule,     
    NoFogModule,        
    ArrowTrail,         
    PackTweaks,         
    ItemModel,          
    AutoText,           
    ItemHighlighter,    
    TntTimer,           
    WeatherChanger,     
    TimeChanger         
}
```

## Examples

### Disable Single Module
```kotlin
val moduleDeactivate = api.createModuleDeactivatePayload(
    modules = listOf(Modules.ZoomModule)
)

Payloads.send(player.uniqueId, moduleDeactivate) { uuid, data ->
    player.sendPluginMessage(this, NRC_CHANNEL, data)
}
```

### Disable Multiple Modules
```kotlin
val pvpModules = api.createModuleDeactivatePayload(
    modules = listOf(
        Modules.ZoomModule,
        Modules.FreeLookModule,
        Modules.FullBrightModule
    )
)

Payloads.send(player.uniqueId, pvpModules) { uuid, data ->
    player.sendPluginMessage(this, NRC_CHANNEL, data)
}
```


## Practical Applications

### PvP Arena Module Restrictions
```kotlin
fun enterPvpArena(player: Player) {
    val pvpRestrictions = api.createModuleDeactivatePayload(
        modules = listOf(
            Modules.ZoomModule,
            Modules.FreeLookModule
        )
    )
    
    Payloads.send(player.uniqueId, pvpRestrictions) { uuid, data ->
        player.sendPluginMessage(this, NRC_CHANNEL, data)
    }
    
    player.sendMessage("§ePvP restrictions applied!")
}
```

### Build Competition Restrictions
```kotlin
fun joinBuildCompetition(player: Player) {
    val buildRestrictions = api.createModuleDeactivatePayload(
        modules = listOf(
            Modules.FullBrightModule,
            Modules.NoFogModule
        )
    )
    
    Payloads.send(player.uniqueId, buildRestrictions) { uuid, data ->
        player.sendPluginMessage(this, NRC_CHANNEL, data)
    }
    
    player.sendMessage("§aBuild competition mode enabled!")
}
```

## Notes
- Modules are only deactivated for the duration of the session
- Players can reactivate modules after a restart
- Deactivation only affects NoRisk Client users
