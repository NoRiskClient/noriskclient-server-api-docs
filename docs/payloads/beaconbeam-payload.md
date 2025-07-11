# Beacon Beam Payload Documentation

## Overview
The Beacon Beam Payload displays colored light beams at specific coordinates in the NoRisk Client. These are visible to all players and can be used to mark important locations.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `xyz` | `XYZ` | Coordinates (x, y, z) of the beacon beam |
| `dimension` | `Dimension` | Dimension (OVERWORLD, NETHER, END) |
| `color` | `RGBColor` | RGB color of the beam |

## Data Types
```kotlin
data class XYZ(val x: Double, val y: Double, val z: Double)
data class RGBColor(val r: Int, val g: Int, val b: Int)

enum class Dimension {
    OVERWORLD,
    NETHER,
    END
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
      <pre><code class="language-java">
nrcPlayer.sendBeaconBeam(new XYZ(100.0, 64.0, 200.0), Dimension.OVERWORLD, new RGBColor(255, 0, 0));</code></pre>
      <pre><code class="language-java">
nrcPlayer.sendBeaconBeam(new XYZ(-50.0, 100.0, 75.0), Dimension.NETHER, new RGBColor(0, 255, 0));</code></pre>
      <pre><code class="language-java">
nrcPlayer.sendBeaconBeam(new XYZ(0.0, 60.0, 0.0), Dimension.END, new RGBColor(0, 100, 255));</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin"> 
nrcPlayer.sendBeaconBeam(XYZ(100.0, 64.0, 200.0), Dimension.OVERWORLD, RGBColor(255, 0, 0))</code></pre>
      <pre><code class="language-kotlin"> 
nrcPlayer.sendBeaconBeam(XYZ(-50.0, 100.0, 75.0), Dimension.NETHER, RGBColor(0, 255, 0))</code></pre>
      <pre><code class="language-kotlin"> 
nrcPlayer.sendBeaconBeam(XYZ(0.0, 60.0, 0.0), Dimension.END, RGBColor(0, 100, 255))</code></pre>
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
      <pre><code class="language-java">public void markShop(NrcPlayer nrcPlayer, Location shopLocation) {
    nrcPlayer.sendBeaconBeam(new XYZ(shopLocation.getX(), shopLocation.getY(), shopLocation.getZ()), Dimension.OVERWORLD, new RGBColor(255, 215, 0));
}</code></pre>
      <pre><code class="language-java">public void markEventArea(NrcPlayer nrcPlayer, Location center) {
    nrcPlayer.sendBeaconBeam(new XYZ(center.getX(), center.getY(), center.getZ()), Dimension.OVERWORLD, new RGBColor(255, 0, 255));
}</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin">fun markShop(nrcPlayer: NrcPlayer, shopLocation: Location) {
    nrcPlayer.sendBeaconBeam(XYZ(shopLocation.x, shopLocation.y, shopLocation.z), Dimension.OVERWORLD, RGBColor(255, 215, 0))
}</code></pre>
      <pre><code class="language-kotlin">fun markEventArea(nrcPlayer: NrcPlayer, center: Location) {
    nrcPlayer.sendBeaconBeam(XYZ(center.x, center.y, center.z), Dimension.OVERWORLD, RGBColor(255, 0, 255))
}
</code></pre>
    </div>
  </div>
</div>

## Notes
- Beacon beams are visible to all players with NoRisk Client
- Beams automatically disappear when the player leaves the game
- RGB values should be between 0 and 255