# Gamemode Payload Documentation

## Overview
The Gamemode Payload overrides the gamemode display in the NoRisk Client. This allows displaying custom gamemode names that differ from standard Minecraft gamemodes.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `gamemode` | `String` | The custom gamemode name to display |

## Examples

<div class="code-tab-wrapper">
  <div class="code-tab-buttons">
    <button class="code-tab-button active" data-tab="java">Java</button>
    <button class="code-tab-button" data-tab="kotlin">Kotlin</button>
  </div>

  <div class="code-tab-content">
    <div class="code-tab-panel active" data-tab="java">
      <pre><code class="language-java">nrcPlayer.sendGamemode("Skyblock");</code></pre>
      <pre><code class="language-java">nrcPlayer.sendGamemode("BedWars");</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin"> 
nrcPlayer.sendGamemode("Skyblock")</code></pre>
      <pre><code class="language-kotlin"> 
nrcPlayer.sendGamemode("BedWars")</code></pre>
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
      <pre><code class="language-java">public void updateMinigameMode(List&lt;NrcPlayer&gt; players, String gameType, String gamePhase) {
    for (NrcPlayer nrcPlayer : players) {
        nrcPlayer.sendGamemode(gameType + " - " + gamePhase);
    }
}</code></pre>
      <pre><code class="language-java">public void updateRankGamemode(NrcPlayer nrcPlayer, String rank) {
    nrcPlayer.sendGamemode("VIP - " + rank);
}
</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin">fun updateMinigameMode(players: List&lt;NrcPlayer&gt;, gameType: String, gamePhase: String) {
    players.forEach { it.sendGamemode("$gameType - $gamePhase") }
}</code></pre>
      <pre><code class="language-kotlin">fun updateRankGamemode(nrcPlayer: NrcPlayer, rank: String) {
    nrcPlayer.sendGamemode("VIP - $rank")
}
</code></pre>
    </div>
  </div>
</div>

## Notes
- The gamemode display is only overridden in the NoRisk Client
- Standard Minecraft clients will still see normal gamemode names
- Empty strings are ignored