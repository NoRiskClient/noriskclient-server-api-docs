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

<div class="code-tab-wrapper">
  <div class="code-tab-buttons">
    <button class="code-tab-button active" data-tab="java">Java</button>
    <button class="code-tab-button" data-tab="kotlin">Kotlin</button>
  </div>

  <div class="code-tab-content">
    <div class="code-tab-panel active" data-tab="java">
      <pre><code class="language-java">nrcPlayer.sendToast(
            false,
            "Welcome!",
            "You are on our server!",
            false,
            null,
            ToastType.INFO
);
</code></pre>
      <pre><code class="language-java">nrcPlayer.sendToast(
            false,
            "Mission Complete!",
            "You received 100 coins!",
            true,
            player.getUniqueId(),
            ToastType.SUCCESS
);
</code></pre>
      <pre><code class="language-java">nrcPlayer.sendToast(
            true,
            "Error!",
            "Insufficient permissions!",
            false,
            null,
            ToastType.ERROR
);
</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin">
nrcPlayer.sendToast(
        progressBar = false,
        header = "Welcome!",
        content = "You are on our server!",
        playerHead = false,
        toastType = ToastType.INFO
)
</code></pre>
      <pre><code class="language-kotlin">
nrcPlayer.sendToast(
        progressBar = false,
        header = "Mission Complete!",
        content = "You received 100 coins!",
        playerHead = true,
        playerUUID = player.uniqueId,
        toastType = ToastType.SUCCESS
)
</code></pre>
      <pre><code class="language-kotlin"> 
nrcPlayer.sendToast(
        progressBar = true,
        header = "Error!",
        content = "Insufficient permissions!",
        playerHead = false,
        toastType = ToastType.ERROR
)
</code></pre>
    </div>
  </div>
</div>

## Practical Applications

<div class="code-tab-wrapper">
  <div class="code-tab-buttons">
    <button class="code-tab-button active" data-tab="java">Java</button>
    <button class="code-tab-button" data-tab="kotlin">Kotlin</button>
  </div>

  <div class="code-tab-content">
    <div class="code-tab-panel active" data-tab="java">
      <pre><code class="language-java">public void notifyPurchase(NrcPlayer nrcPlayer, String itemName, int price) {
        nrcPlayer.sendToast(
            false,
            "Purchase Successful!",
            itemName + " bought for " + price + " coins",
            true,
            nrcPlayer.getUuid(),
            ToastType.SUCCESS
        );
}
</code></pre>
      <pre><code class="language-java">public void notifyLevelUp(NrcPlayer nrcPlayer, int newLevel, int experienceGained) {
        nrcPlayer.sendToast(
            true,
            "Level Up!",
            "You reached level " + newLevel + " (+" + experienceGained + " XP)",
            true,
            nrcPlayer.getUuid(),
            ToastType.SUCCESS
        );
}
</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin">fun notifyPurchase(nrcPlayer: NrcPlayer, itemName: String, price: Int) {
        nrcPlayer.sendToast(
            progressBar = false,
            header = "Purchase Successful!",
            content = "$itemName bought for $price coins",
            playerHead = true,
            playerUUID = nrcPlayer.uuid,
            toastType = ToastType.SUCCESS
        )
}
</code></pre>
      <pre><code class="language-kotlin">fun notifyLevelUp(nrcPlayer: NrcPlayer, newLevel: Int, experienceGained: Int) {
        nrcPlayer.sendToast(
            progressBar = true,
            header = "Level Up!",
            content = "You reached level $newLevel (+$experienceGained XP)",
            playerHead = true,
            playerUUID = nrcPlayer.uuid,
            toastType = ToastType.SUCCESS
        )
}
</code></pre>
    </div>
  </div>
</div>

## ToastType Enum

- `INFO` - Normal information notification (blue)
- `SUCCESS` - Success notification (green)
- `ERROR` - Error notification (red)


## Notes
- Toast notifications automatically disappear after a few seconds
- Progress bars can be used to indicate ongoing processes
- Player avatars add a personal touch to notifications
- Different toast types use different color schemes for visual distinction
