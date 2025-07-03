# Toast Payload Documentation

## Overview
The Toast Payload displays notifications in the NoRisk Client. These appear as small pop-up windows with various styles.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `progressBar` | `Boolean` | Whether to show a progress bar in the toast |
| `header` | `String` | Header text of the notification |
| `content` | `String` | Main content text of the notification |
| `playerHead` | `Boolean` | Whether to show the player's avatar in the toast |
| `playerUUID` | `UUID?` | UUID of the player for the avatar (optional) |
| `toastType` | `ToastType` | Type of notification (INFO, SUCCESS, ERROR) |

## Examples

### Simple Notification
```kotlin
val toast = api.createToastPayload(
    progressBar = false,
    header = "Welcome!",
    content = "You are on our server!",
    playerHead = false,
    toastType = ToastType.INFO
)

Payloads.send(player.uniqueId, toast) { uuid, data ->
    player.sendPluginMessage(this, NRC_CHANNEL, data)
}
```

### Success Notification with Player Avatar
```kotlin
val successToast = api.createToastPayload(
    progressBar = false,
    header = "Mission Complete!",
    content = "You received 100 coins!",
    playerHead = true,
    playerUUID = player.uniqueId,
    toastType = ToastType.SUCCESS
)

Payloads.send(player.uniqueId, successToast) { uuid, data ->
    player.sendPluginMessage(this, NRC_CHANNEL, data)
}
```

### Error Notification with Progress Bar
```kotlin
val errorToast = api.createToastPayload(
    progressBar = true,
    header = "Error!",
    content = "Insufficient permissions!",
    playerHead = false,
    toastType = ToastType.ERROR
)

Payloads.send(player.uniqueId, errorToast) { uuid, data ->
    player.sendPluginMessage(this, NRC_CHANNEL, data)
}
```

## ToastType Enum

- `INFO` - Normal information notification (blue)
- `SUCCESS` - Success notification (green)
- `ERROR` - Error notification (red)


## Notes
- Toast notifications automatically disappear after a few seconds
- Progress bars can be used to indicate ongoing processes
- Player avatars add a personal touch to notifications
- Different toast types use different color schemes for visual distinction
