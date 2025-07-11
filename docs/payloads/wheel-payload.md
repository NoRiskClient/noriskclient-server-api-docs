# Wheel Payload Documentation

## Overview
The Wheel Payload adds custom entries to the NoRisk Client Action Wheel. The Action Wheel is a radial menu that players can use for quick actions.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `name` | `String` | Display name in the Action Wheel |
| `command` | `String` | Command to execute when selected |

## Examples

<div class="code-tab-wrapper">
  <div class="code-tab-buttons">
    <button class="code-tab-button active" data-tab="java">Java</button>
    <button class="code-tab-button" data-tab="kotlin">Kotlin</button>
  </div>

  <div class="code-tab-content">
    <div class="code-tab-panel active" data-tab="java">
      <pre><code class="language-java">nrcPlayer.sendWheel("Spawn", "/spawn");</code></pre>
      <pre><code class="language-java">nrcPlayer.sendWheel("Home", "/home");
nrcPlayer.sendWheel("Shop", "/warp shop");
nrcPlayer.sendWheel("PvP", "/warp pvp");
nrcPlayer.sendWheel("Bank", "/bank");</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin">
nrcPlayer.sendWheel("Spawn", "/spawn")</code></pre>
      <pre><code class="language-kotlin">nrcPlayer.sendWheel("Home", "/home")
nrcPlayer.sendWheel("Shop", "/warp shop")
nrcPlayer.sendWheel("PvP", "/warp pvp")
nrcPlayer.sendWheel("Bank", "/bank")
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
      <pre><code class="language-java">public void setupAdminWheel(NrcPlayer nrcPlayer) {
    if (nrcPlayer.getPlayer().hasPermission("admin.tools")) {
        nrcPlayer.sendWheel("Teleport", "/tp " + nrcPlayer.getPlayer().getName());
        nrcPlayer.sendWheel("Godmode", "/god " + nrcPlayer.getPlayer().getName());
    }
}</code></pre>
      <pre><code class="language-java">public void setupPlayerWheel(NrcPlayer nrcPlayer) {
    nrcPlayer.sendWheel("Daily Reward", "/daily");
    nrcPlayer.sendWheel("Player Stats", "/stats");
}
</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin">fun setupAdminWheel(nrcPlayer: NrcPlayer) {
    if (nrcPlayer.player.hasPermission("admin.tools")) {
        nrcPlayer.sendWheel("Teleport", "/tp ${nrcPlayer.player.name}")
        nrcPlayer.sendWheel("Godmode", "/god ${nrcPlayer.player.name}")
    }
}
</code></pre>
      <pre><code class="language-kotlin">fun setupPlayerWheel(nrcPlayer: NrcPlayer) {
    nrcPlayer.sendWheel("Daily Reward", "/daily")
    nrcPlayer.sendWheel("Player Stats", "/stats")
}
</code></pre>
    </div>
  </div>
</div>

## Notes
- Commands are sent as chat messages
- Supports both server commands (/) and normal chat messages
- The Action Wheel has limited slots, so only add important entries