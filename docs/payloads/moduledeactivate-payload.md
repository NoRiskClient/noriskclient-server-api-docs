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
    FOV_CHANGER("FovChanger"),
    FULL_BRIGHT_MODULE("FullBrightModule"),
    ZOOM_MODULE("ZoomModule"),
    FREE_LOOK_MODULE("FreeLookModule"),
    NO_FOG_MODULE("NoFogModule"),
    ARROW_TRAIL("ArrowTrail"),
    PACK_TWEAKS("PackTweaks"),
    ITEM_MODEL("ItemModel"),
    AUTO_TEXT("AutoText"),
    ITEM_HIGHLIGHTER("ItemHighlighter"),
    TNT_TIMER("TntTimer"),
    WEATHER_CHANGER("WeatherChanger"),
    TIME_CHANGER("TimeChanger");
}
```

## Examples

<div class="code-tab-wrapper">
  <div class="code-tab-buttons">
    <button class="code-tab-button active" data-tab="java">Java</button>
    <button class="code-tab-button" data-tab="kotlin">Kotlin</button>
  </div>

  <div class="code-tab-content">
    <div class="code-tab-panel active" data-tab="java">
      <pre><code class="language-java">nrcPlayer.sendModuleDeactivate(Collections.singletonList(Modules.ZoomModule));</code></pre>
      <pre><code class="language-java">nrcPlayer.sendModuleDeactivate(Arrays.asList(Modules.ZoomModule, Modules.FreeLookModule, Modules.FullBrightModule));</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin">nrcPlayer.sendModuleDeactivate(listOf(Modules.ZoomModule))</code></pre>
      <pre><code class="language-kotlin">nrcPlayer.sendModuleDeactivate(listOf(Modules.ZoomModule, Modules.FreeLookModule, Modules.FullBrightModule))</code></pre>
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
      <pre><code class="language-java">public void enterPvpArena(NrcPlayer nrcPlayer) {
    nrcPlayer.sendModuleDeactivate(Arrays.asList(Modules.ZoomModule, Modules.FreeLookModule));
    nrcPlayer.getPlayer().sendMessage("§ePvP restrictions applied!");
}</code></pre>
      <pre><code class="language-java">public void joinBuildCompetition(NrcPlayer nrcPlayer) {
    nrcPlayer.sendModuleDeactivate(Arrays.asList(Modules.FullBrightModule, Modules.NoFogModule));
    nrcPlayer.getPlayer().sendMessage("§aBuild competition mode enabled!");
}</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin">fun enterPvpArena(nrcPlayer: NrcPlayer) {
    nrcPlayer.sendModuleDeactivate(listOf(Modules.ZoomModule, Modules.FreeLookModule))
    nrcPlayer.player.sendMessage("§ePvP restrictions applied!")
}
</code></pre>
      <pre><code class="language-kotlin">fun joinBuildCompetition(nrcPlayer: NrcPlayer) {
    nrcPlayer.sendModuleDeactivate(listOf(Modules.FullBrightModule, Modules.NoFogModule))
    nrcPlayer.player.sendMessage("§aBuild competition mode enabled!")
}
</code></pre>
    </div>
  </div>
</div>

## Notes
- Modules are only deactivated for the duration of the session
- Players can reactivate modules after a restart
- Deactivation only affects NoRisk Client users