# NoRisk Client Server API Documentation

---

##  Overview

The NoRisk Client Server API enables server developers to create rich, interactive experiences for players using the NoRisk Client and to have more control over the API.

---

##  Supported Platforms

| Platform | Version | Status |
|----------|---------|--------|
| **Paper** | 1.21+ | ✅ Supported |
| **Spigot** | 1.21+ | ✅ Supported |
| **Fabric** | 1.21+ | ✅ Supported |
| **Velocity** | 3.0+ | ✅ Supported |
| **BungeeCord** | Latest | ✅ Supported |

---

# Getting Started

To use the NoRiskClient API, you need to add it as a dependency to your project.

!!! warning "Do not shade the API"
    It is important that you do not shade the NoRiskClient API into your plugin JAR. Doing so can cause conflicts.

## Dependency Information

Add the following dependency to your project, replacing `VERSION` with the latest release (e.g., `0.1.0`).  
Choose the correct artifact for your platform: `core`, `paper`, `velocity`, `spigot`, `bungeecord`, or `fabric`.

<div class="code-tab-wrapper">
  <div class="code-tab-buttons">
    <button class="code-tab-button active" data-tab="maven">Maven</button>
    <button class="code-tab-button" data-tab="gradle-groovy">Gradle (Groovy)</button>
    <button class="code-tab-button" data-tab="gradle-kts">Gradle (KTS)</button>
  </div>
  <div class="code-tab-content">
    <div class="code-tab-panel active" data-tab="maven">
      <pre><code class="language-xml">
&lt;repository&gt;
    &lt;id&gt;norisk&lt;/id&gt;
    &lt;url&gt;https://maven.norisk.gg/repository/maven-releases/&lt;/url&gt;
&lt;/repository&gt;
&lt;!-- Core (platform-agnostic) --&gt;
&lt;dependency&gt;
  &lt;groupId&gt;gg.norisk&lt;/groupId&gt;
  &lt;artifactId&gt;nrc-server-api-core&lt;/artifactId&gt;
  &lt;version&gt;VERSION&lt;/version&gt;
&lt;/dependency&gt;
&lt;!-- Paper --&gt;
&lt;dependency&gt;
  &lt;groupId&gt;gg.norisk&lt;/groupId&gt;
  &lt;artifactId&gt;nrc-server-api-paper&lt;/artifactId&gt;
  &lt;version&gt;VERSION&lt;/version&gt;
&lt;/dependency&gt;
&lt;!-- Velocity --&gt;
&lt;dependency&gt;
  &lt;groupId&gt;gg.norisk&lt;/groupId&gt;
  &lt;artifactId&gt;nrc-server-api-velocity&lt;/artifactId&gt;
  &lt;version&gt;VERSION&lt;/version&gt;
&lt;/dependency&gt;
&lt;!-- Spigot --&gt;
&lt;dependency&gt;
  &lt;groupId&gt;gg.norisk&lt;/groupId&gt;
  &lt;artifactId&gt;nrc-server-api-spigot&lt;/artifactId&gt;
  &lt;version&gt;VERSION&lt;/version&gt;
&lt;/dependency&gt;
&lt;!-- BungeeCord --&gt;
&lt;dependency&gt;
  &lt;groupId&gt;gg.norisk&lt;/groupId&gt;
  &lt;artifactId&gt;nrc-server-api-bungeecord&lt;/artifactId&gt;
  &lt;version&gt;VERSION&lt;/version&gt;
&lt;/dependency&gt;
&lt;!-- Fabric --&gt;
&lt;dependency&gt;
  &lt;groupId&gt;gg.norisk&lt;/groupId&gt;
  &lt;artifactId&gt;nrc-server-api-fabric&lt;/artifactId&gt;
  &lt;version&gt;VERSION&lt;/version&gt;
&lt;/dependency&gt;
      </code></pre>
    </div>
    <div class="code-tab-panel" data-tab="gradle-groovy">
      <pre><code class="language-groovy">
repositories {
    maven {
        url = uri("https://maven.norisk.gg/repository/maven-releases/")
    }
}
dependencies {
    // Core (platform-agnostic)
    implementation "gg.norisk:nrc-server-api-core:VERSION"
    // Paper
    implementation "gg.norisk:nrc-server-api-paper:VERSION"
    // Velocity
    implementation "gg.norisk:nrc-server-api-velocity:VERSION"
    // Spigot
    implementation "gg.norisk:nrc-server-api-spigot:VERSION"
    // BungeeCord
    implementation "gg.norisk:nrc-server-api-bungeecord:VERSION"
    // Fabric
    implementation "gg.norisk:nrc-server-api-fabric:VERSION"
}
      </code></pre>
    </div>
    <div class="code-tab-panel" data-tab="gradle-kts">
      <pre><code class="language-kotlin">
repositories {
    maven("https://maven.norisk.gg/repository/maven-releases/")
}
dependencies {
    // Core (platform-agnostic)
    implementation("gg.norisk:nrc-server-api-core:VERSION")
    // Paper
    implementation("gg.norisk:nrc-server-api-paper:VERSION")
    // Velocity
    implementation("gg.norisk:nrc-server-api-velocity:VERSION")
    // Spigot
    implementation("gg.norisk:nrc-server-api-spigot:VERSION")
    // BungeeCord
    implementation("gg.norisk:nrc-server-api-bungeecord:VERSION")
    // Fabric
    implementation("gg.norisk:nrc-server-api-fabric:VERSION")
}
      </code></pre>
    </div>
  </div>
</div>

> **Note:** Replace `VERSION` with the latest release, e.g. `0.1.0`.

> **Find the latest version:**  
> Browse available versions of `nrc-server-api-core` here:  
> [https://maven.norisk.gg/service/rest/repository/browse/maven-releases/gg/norisk/nrc-server-api-core/](https://maven.norisk.gg/service/rest/repository/browse/maven-releases/gg/norisk/nrc-server-api-core/)

---


##  Available Payloads

### [Toast Notifications](payloads/toast-payload.md)
Display rich notifications with progress bars and player avatars.

### [Input Prompts](payloads/inputbar-payload.md)
Create interactive text input dialogs with validation.

### [Action Wheel](payloads/wheel-payload.md)
Add custom commands to the client's action wheel.

### [Module Disabling](payloads/moduledeactivate-payload.md)
Dynamically enable/disable client modules.

### [Beacon Beams](payloads/beaconbeam-payload.md)
Create colored beacon beams at specific coordinates.

### [Gamemode Override](payloads/gamemode-payload.md)
Customize gamemode display in the client.

---

##  Support

For questions or support, join our [Discord](https://discord.gg/noriskclient).