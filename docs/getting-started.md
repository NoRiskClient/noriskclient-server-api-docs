# Getting Started

This guide will help you set up the NoRisk Client Server API in your plugin for different server platforms.

!!! warning "Important"
    Do not shade the NoRiskClient API into your plugin JAR. The API should be loaded as a separate plugin.

---

## Setup Instructions

### 1. Server Setup

First, download and install the appropriate NoRiskClient-Server-API plugin for your server platform:

| Platform | Plugin Name |
|----------|-------------|
| **Paper** | `nrc-server-api-Paper.jar` |
| **Spigot** | `nrc-server-api-Spigot.jar` |
| **BungeeCord** | `nrc-server-api-BungeeCord.jar` |
| **Velocity** | `nrc-server-api-Velocity.jar` |
| **Fabric** | `nrc-server-api-Fabric.jar` |

1. Place the plugin in your server's `plugins` folder (or `mods` for Fabric)
2. Start your server to ensure the API loads properly
3. The API will handle all plugin messaging and packet management automatically

### 2. Plugin Development

Choose your server platform and programming language:

<div class="endpoint-tab-wrapper">
  <div class="endpoint-tab-buttons">
    <button class="endpoint-tab-button active" data-endpoint="paper">Paper</button>
    <button class="endpoint-tab-button" data-endpoint="spigot">Spigot</button>
    <button class="endpoint-tab-button" data-endpoint="bungeecord">BungeeCord</button>
    <button class="endpoint-tab-button" data-endpoint="velocity">Velocity</button>
    <button class="endpoint-tab-button" data-endpoint="fabric">Fabric</button>
  </div>

  <div class="endpoint-tab-content">
    
    <!-- Paper -->
    <div class="endpoint-tab-panel active" data-endpoint="paper">
      <div class="language-tab-wrapper">
        <div class="language-tab-buttons">
          <button class="language-tab-button active" data-language="java">Java</button>
          <button class="language-tab-button" data-language="kotlin">Kotlin</button>
        </div>
        
        <div class="language-tab-content">
          <div class="language-tab-panel active" data-language="java">
            <h4>Java Implementation</h4>
            <pre><code class="language-java">import gg.norisk.core.common.NoRiskServerAPI;
import gg.norisk.core.common.CoreAPI;
import gg.norisk.paper.api.ServerAPI;
import gg.norisk.paper.Paper;
import org.bukkit.plugin.java.JavaPlugin;

public class YourPlugin extends JavaPlugin {
    
    private NoRiskServerAPI api;
    private CoreAPI coreAPI;
    
    @Override
    public void onEnable() {
        // Check if NoRisk API is available
        if (!ServerAPI.isAvailable()) {
            getLogger().severe("NoRiskClient-Server-API is not loaded! Make sure it's in your plugins folder.");
            getServer().getPluginManager().disablePlugin(this);
            return;
        }
        
        // Get the API instances
        coreAPI = Paper.getCoreApi();
        api = Paper.getApi();
        
        if (api == null || coreAPI == null) {
            getLogger().severe("Failed to initialize NoRisk API. Disabling plugin.");
            getServer().getPluginManager().disablePlugin(this);
            return;
        }
        
        getLogger().info("NoRisk API initialized successfully!");
        
        // Register packet listeners
        registerPacketListeners();
        
        // Example usage
        // api.sendPacket(playerUUID, new YourCustomPayload());
        // api.sendRequest(playerUUID, new YourRequestPayload(), response -> {
        //     getLogger().info("Received response: " + response);
        // });
    }
    
    private void registerPacketListeners() {
        api.registerListener(new YourPacketListener());
    }
}</code></pre>
          </div>
          
          <div class="language-tab-panel" data-language="kotlin">
            <h4>Kotlin Implementation</h4>
            <pre><code class="language-kotlin">import gg.norisk.core.common.NoRiskServerAPI
import gg.norisk.core.common.CoreAPI
import gg.norisk.paper.api.ServerAPI
import gg.norisk.paper.Paper
import org.bukkit.plugin.java.JavaPlugin

class YourPlugin : JavaPlugin() {
    
    private var api: NoRiskServerAPI? = null
    private var coreAPI: CoreAPI? = null
    
    override fun onEnable() {
        // Check if NoRisk API is available
        if (!ServerAPI.isAvailable()) {
            logger.severe("NoRiskClient-Server-API is not loaded! Make sure it's in your plugins folder.")
            server.pluginManager.disablePlugin(this)
            return
        }
        
        // Get the API instances
        coreAPI = Paper.getCoreApi()
        api = Paper.getApi()
        
        if (api == null || coreAPI == null) {
            logger.severe("Failed to initialize NoRisk API. Disabling plugin.")
            server.pluginManager.disablePlugin(this)
            return
        }
        
        logger.info("NoRisk API initialized successfully!")
        
        // Register packet listeners
        registerPacketListeners()
        
        // Example usage
        // api?.sendPacket(playerUUID, YourCustomPayload())
        // api?.sendRequest(playerUUID, YourRequestPayload()) { response ->
        //     logger.info("Received response: $response")
        // }
    }
    
    private fun registerPacketListeners() {
        api?.registerListener(YourPacketListener())
    }
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Spigot -->
    <div class="endpoint-tab-panel" data-endpoint="spigot">
      <div class="language-tab-wrapper">
        <div class="language-tab-buttons">
          <button class="language-tab-button active" data-language="java">Java</button>
          <button class="language-tab-button" data-language="kotlin">Kotlin</button>
        </div>
        
        <div class="language-tab-content">
          <div class="language-tab-panel active" data-language="java">
            <h4>Java Implementation</h4>
            <pre><code class="language-java">import gg.norisk.core.common.NoRiskServerAPI;
import gg.norisk.core.common.CoreAPI;
import gg.norisk.spigot.api.ServerAPI;
import gg.norisk.spigot.Spigot;
import org.bukkit.plugin.java.JavaPlugin;

public class YourPlugin extends JavaPlugin {
    
    private NoRiskServerAPI api;
    private CoreAPI coreAPI;
    
    @Override
    public void onEnable() {
        // Check if NoRisk API is available
        if (!ServerAPI.isAvailable()) {
            getLogger().severe("NoRiskClient-Server-API is not loaded! Make sure it's in your plugins folder.");
            getServer().getPluginManager().disablePlugin(this);
            return;
        }
        
        // Get the API instances
        coreAPI = Spigot.getCoreApi();
        api = Spigot.getApi();
        
        if (api == null || coreAPI == null) {
            getLogger().severe("Failed to initialize NoRisk API. Disabling plugin.");
            getServer().getPluginManager().disablePlugin(this);
            return;
        }
        
        getLogger().info("NoRisk API initialized successfully!");
        
        // Register packet listeners
        registerPacketListeners();
    }
    
    private void registerPacketListeners() {
        api.registerListener(new YourPacketListener());
    }
}</code></pre>
          </div>
          
          <div class="language-tab-panel" data-language="kotlin">
            <h4>Kotlin Implementation</h4>
            <pre><code class="language-kotlin">import gg.norisk.core.common.NoRiskServerAPI
import gg.norisk.core.common.CoreAPI
import gg.norisk.spigot.api.ServerAPI
import gg.norisk.spigot.Spigot
import org.bukkit.plugin.java.JavaPlugin

class YourPlugin : JavaPlugin() {
    
    private var api: NoRiskServerAPI? = null
    private var coreAPI: CoreAPI? = null
    
    override fun onEnable() {
        // Check if NoRisk API is available
        if (!ServerAPI.isAvailable()) {
            logger.severe("NoRiskClient-Server-API is not loaded! Make sure it's in your plugins folder.")
            server.pluginManager.disablePlugin(this)
            return
        }
        
        // Get the API instances
        coreAPI = Spigot.getCoreApi()
        api = Spigot.getApi()
        
        if (api == null || coreAPI == null) {
            logger.severe("Failed to initialize NoRisk API. Disabling plugin.")
            server.pluginManager.disablePlugin(this)
            return
        }
        
        logger.info("NoRisk API initialized successfully!")
        
        // Register packet listeners
        registerPacketListeners()
    }
    
    private fun registerPacketListeners() {
        api?.registerListener(YourPacketListener())
    }
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- BungeeCord -->
    <div class="endpoint-tab-panel" data-endpoint="bungeecord">
      <div class="language-tab-wrapper">
        <div class="language-tab-buttons">
          <button class="language-tab-button active" data-language="java">Java</button>
          <button class="language-tab-button" data-language="kotlin">Kotlin</button>
        </div>
        
        <div class="language-tab-content">
          <div class="language-tab-panel active" data-language="java">
            <h4>Java Implementation</h4>
            <pre><code class="language-java">import gg.norisk.core.common.NoRiskServerAPI;
import gg.norisk.core.common.CoreAPI;
import gg.norisk.bungeecord.api.ServerAPI;
import gg.norisk.bungeecord.BungeeCord;
import net.md_5.bungee.api.plugin.Plugin;

public class YourPlugin extends Plugin {
    
    private NoRiskServerAPI api;
    private CoreAPI coreAPI;
    
    @Override
    public void onEnable() {
        // Check if NoRisk API is available
        if (!ServerAPI.isAvailable()) {
            getLogger().severe("NoRiskClient-Server-API is not loaded! Make sure it's in your plugins folder.");
            return;
        }
        
        // Get the API instances
        coreAPI = BungeeCord.getCoreApi();
        api = BungeeCord.getApi();
        
        if (api == null || coreAPI == null) {
            getLogger().severe("Failed to initialize NoRisk API.");
            return;
        }
        
        getLogger().info("NoRisk API initialized successfully!");
        
        // Register packet listeners
        registerPacketListeners();
    }
    
    private void registerPacketListeners() {
        api.registerListener(new YourPacketListener());
    }
}</code></pre>
          </div>
          
          <div class="language-tab-panel" data-language="kotlin">
            <h4>Kotlin Implementation</h4>
            <pre><code class="language-kotlin">import gg.norisk.core.common.NoRiskServerAPI
import gg.norisk.core.common.CoreAPI
import gg.norisk.bungeecord.api.ServerAPI
import gg.norisk.bungeecord.BungeeCord
import net.md_5.bungee.api.plugin.Plugin

class YourPlugin : Plugin() {
    
    private var api: NoRiskServerAPI? = null
    private var coreAPI: CoreAPI? = null
    
    override fun onEnable() {
        // Check if NoRisk API is available
        if (!ServerAPI.isAvailable()) {
            logger.severe("NoRiskClient-Server-API is not loaded! Make sure it's in your plugins folder.")
            return
        }
        
        // Get the API instances
        coreAPI = BungeeCord.getCoreApi()
        api = BungeeCord.getApi()
        
        if (api == null || coreAPI == null) {
            logger.severe("Failed to initialize NoRisk API.")
            return
        }
        
        logger.info("NoRisk API initialized successfully!")
        
        // Register packet listeners
        registerPacketListeners()
    }
    
    private fun registerPacketListeners() {
        api?.registerListener(YourPacketListener())
    }
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Velocity -->
    <div class="endpoint-tab-panel" data-endpoint="velocity">
      <div class="language-tab-wrapper">
        <div class="language-tab-buttons">
          <button class="language-tab-button active" data-language="java">Java</button>
          <button class="language-tab-button" data-language="kotlin">Kotlin</button>
        </div>
        
        <div class="language-tab-content">
          <div class="language-tab-panel active" data-language="java">
            <h4>Java Implementation</h4>
            <pre><code class="language-java">import gg.norisk.core.common.NoRiskServerAPI;
import gg.norisk.core.common.CoreAPI;
import gg.norisk.velocity.api.ServerAPI;
import gg.norisk.velocity.Velocity;
import com.velocitypowered.api.event.Subscribe;
import com.velocitypowered.api.event.proxy.ProxyInitializeEvent;
import com.velocitypowered.api.plugin.Plugin;

@Plugin(
    id = "your-plugin",
    name = "Your Plugin",
    version = "1.0.0",
    dependencies = {
        @Dependency(id = "noriskclient-server-api")
    }
)
public class YourPlugin {
    
    private NoRiskServerAPI api;
    private CoreAPI coreAPI;
    
    @Subscribe
    public void onProxyInitialization(ProxyInitializeEvent event) {
        // Check if NoRisk API is available
        if (!ServerAPI.isAvailable()) {
            System.err.println("NoRiskClient-Server-API is not loaded!");
            return;
        }
        
        // Get the API instances
        coreAPI = Velocity.getCoreApi();
        api = Velocity.getApi();
        
        if (api == null || coreAPI == null) {
            System.err.println("Failed to initialize NoRisk API.");
            return;
        }
        
        System.out.println("NoRisk API initialized successfully!");
        
        // Register packet listeners
        registerPacketListeners();
    }
    
    private void registerPacketListeners() {
        api.registerListener(new YourPacketListener());
    }
}</code></pre>
          </div>
          
          <div class="language-tab-panel" data-language="kotlin">
            <h4>Kotlin Implementation</h4>
            <pre><code class="language-kotlin">import gg.norisk.core.common.NoRiskServerAPI
import gg.norisk.core.common.CoreAPI
import gg.norisk.velocity.api.ServerAPI
import gg.norisk.velocity.Velocity
import com.velocitypowered.api.event.Subscribe
import com.velocitypowered.api.event.proxy.ProxyInitializeEvent
import com.velocitypowered.api.plugin.Plugin
import com.velocitypowered.api.plugin.Dependency

@Plugin(
    id = "your-plugin",
    name = "Your Plugin",
    version = "1.0.0",
    dependencies = [
        Dependency(id = "noriskclient-server-api")
    ]
)
class YourPlugin {
    
    private var api: NoRiskServerAPI? = null
    private var coreAPI: CoreAPI? = null
    
    @Subscribe
    fun onProxyInitialization(event: ProxyInitializeEvent) {
        // Check if NoRisk API is available
        if (!ServerAPI.isAvailable()) {
            System.err.println("NoRiskClient-Server-API is not loaded!")
            return
        }
        
        // Get the API instances
        coreAPI = Velocity.getCoreApi()
        api = Velocity.getApi()
        
        if (api == null || coreAPI == null) {
            System.err.println("Failed to initialize NoRisk API.")
            return
        }
        
        println("NoRisk API initialized successfully!")
        
        // Register packet listeners
        registerPacketListeners()
    }
    
    private fun registerPacketListeners() {
        api?.registerListener(YourPacketListener())
    }
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Fabric -->
    <div class="endpoint-tab-panel" data-endpoint="fabric">
      <div class="language-tab-wrapper">
        <div class="language-tab-buttons">
          <button class="language-tab-button active" data-language="java">Java</button>
          <button class="language-tab-button" data-language="kotlin">Kotlin</button>
        </div>
        
        <div class="language-tab-content">
          <div class="language-tab-panel active" data-language="java">
            <h4>Java Implementation</h4>
            <pre><code class="language-java">import gg.norisk.core.common.NoRiskServerAPI;
import gg.norisk.core.common.CoreAPI;
import gg.norisk.fabric.api.ServerAPI;
import gg.norisk.fabric.Fabric;
import net.fabricmc.api.ModInitializer;

public class YourMod implements ModInitializer {
    
    private NoRiskServerAPI api;
    private CoreAPI coreAPI;
    
    @Override
    public void onInitialize() {
        // Check if NoRisk API is available
        if (!ServerAPI.isAvailable()) {
            System.err.println("NoRiskClient-Server-API is not loaded!");
            return;
        }
        
        // Get the API instances
        coreAPI = Fabric.getCoreApi();
        api = Fabric.getApi();
        
        if (api == null || coreAPI == null) {
            System.err.println("Failed to initialize NoRisk API.");
            return;
        }
        
        System.out.println("NoRisk API initialized successfully!");
        
        // Register packet listeners
        registerPacketListeners();
    }
    
    private void registerPacketListeners() {
        api.registerListener(new YourPacketListener());
    }
}</code></pre>
          </div>
          
          <div class="language-tab-panel" data-language="kotlin">
            <h4>Kotlin Implementation</h4>
            <pre><code class="language-kotlin">import gg.norisk.core.common.NoRiskServerAPI
import gg.norisk.core.common.CoreAPI
import gg.norisk.fabric.api.ServerAPI
import gg.norisk.fabric.Fabric
import net.fabricmc.api.ModInitializer

class YourMod : ModInitializer {
    
    private var api: NoRiskServerAPI? = null
    private var coreAPI: CoreAPI? = null
    
    override fun onInitialize() {
        // Check if NoRisk API is available
        if (!ServerAPI.isAvailable()) {
            System.err.println("NoRiskClient-Server-API is not loaded!")
            return
        }
        
        // Get the API instances
        coreAPI = Fabric.getCoreApi()
        api = Fabric.getApi()
        
        if (api == null || coreAPI == null) {
            System.err.println("Failed to initialize NoRisk API.")
            return
        }
        
        println("NoRisk API initialized successfully!")
        
        // Register packet listeners
        registerPacketListeners()
    }
    
    private fun registerPacketListeners() {
        api?.registerListener(YourPacketListener())
    }
}</code></pre>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

---

## Plugin Dependencies

Add the following to your plugin configuration file:

<div class="language-tab-wrapper">
  <div class="language-tab-buttons">
    <button class="language-tab-button active" data-language="yaml-json">YAML/JSON</button>
    <button class="language-tab-button" data-language="kotlin">Kotlin (build.gradle.kts)</button>
  </div>
  <div class="language-tab-content">
    <div class="language-tab-panel active" data-language="yaml-json">

### Bukkit-based (Paper/Spigot)
```yaml
name: YourPlugin
version: 1.0.0
main: com.yourpackage.YourPlugin
depend: [NoRiskClient-Server-API]
api-version: 1.20
```

### BungeeCord
```yaml
name: YourPlugin
version: 1.0.0
main: com.yourpackage.YourPlugin
depend: [NoRiskClient-Server-API]
```

### Velocity
```json
{
  "id": "your-plugin",
  "name": "Your Plugin",
  "version": "1.0.0",
  "dependencies": [
    {
      "id": "noriskclient-server-api",
      "optional": false
    }
  ]
}
```
    </div>
    <div class="language-tab-panel" data-language="kotlin">

### Bukkit-based (Paper/Spigot)
```kotlin
repositories {
    mavenCentral()
    maven("https://papermc.io/repo/repository/maven-public/")
}

dependencies {
    compileOnly("io.papermc.paper:paper-api:1.20.1-R0.1-SNAPSHOT")
    compileOnly("gg.norisk:noriskclient-server-api-paper:1.0.0")
}
```

### BungeeCord
```kotlin
repositories {
    mavenCentral()
    maven("https://oss.sonatype.org/content/repositories/snapshots")
}

dependencies {
    compileOnly("net.md-5:bungeecord-api:1.20-R0.1-SNAPSHOT")
    compileOnly("gg.norisk:noriskclient-server-api-bungeecord:1.0.0")
}
```

### Velocity
```kotlin
repositories {
    mavenCentral()
    maven("https.papermc.io/repo/repository/maven-public/")
}

dependencies {
    compileOnly("com.velocitypowered:velocity-api:3.2.0-SNAPSHOT")
    compileOnly("gg.norisk:noriskclient-server-api-velocity:1.0.0")
}
```

### Fabric
```kotlin
repositories {
    mavenCentral()
    maven("https://maven.fabricmc.net/")
}

dependencies {
    modImplementation("net.fabricmc.fabric-api:fabric-api:0.83.1+1.20.1")
    modImplementation("gg.norisk:noriskclient-server-api-fabric:1.0.0")
}
```
    </div>
  </div>
</div>

---

## Packet Listener Implementation

Create a packet listener to handle incoming packets from NoRisk clients:

<div class="language-tab-wrapper">
  <div class="language-tab-buttons">
    <button class="language-tab-button active" data-language="java">Java</button>
    <button class="language-tab-button" data-language="kotlin">Kotlin</button>
  </div>
  <div class="language-tab-content">
    <div class="language-tab-panel active" data-language="java">

```java
import gg.norisk.core.common.PacketHandler;
import gg.norisk.core.common.PacketListener;
import gg.norisk.core.payloads.in.HandshakePayload;
import gg.norisk.core.payloads.in.InputbarPayload;

import java.util.UUID;

public class YourPacketListener implements PacketListener {
    
    @PacketHandler
    public void onHandshake(UUID uuid, HandshakePayload payload) {
        // Handle handshake from NoRisk client
        System.out.println("Player " + uuid + " connected with NoRisk Client v" + payload.getClientVersion());
    }
    
    @PacketHandler
    public void onInputbar(UUID uuid, InputbarPayload payload) {
        // Handle input from NoRisk client
        System.out.println("Player " + uuid + " sent input: " + payload.getInput());
    }
}
```
    </div>
    <div class="language-tab-panel" data-language="kotlin">

```kotlin
import gg.norisk.core.common.PacketHandler
import gg.norisk.core.common.PacketListener
import gg.norisk.core.payloads.in.HandshakePayload
import gg.norisk.core.payloads.in.InputbarPayload
import java.util.UUID

class YourPacketListener : PacketListener {
    @PacketHandler
    fun onHandshake(uuid: UUID, payload: HandshakePayload) {
        // Handle handshake from NoRisk client
        println("Player $uuid connected with NoRisk Client v${payload.clientVersion}")
    }

    @PacketHandler
    fun onInputbar(uuid: UUID, payload: InputbarPayload) {
        // Handle input from NoRisk client
        println("Player $uuid sent input: ${payload.input}")
    }
}
```
    </div>
  </div>
</div>

---

## API Usage Examples

<div class="language-tab-wrapper">
  <div class="language-tab-buttons">
    <button class="language-tab-button active" data-language="java">Java</button>
    <button class="language-tab-button" data-language="kotlin">Kotlin</button>
  </div>
  <div class="language-tab-content">
    <div class="language-tab-panel active" data-language="java">

### Checking if Player Uses NoRisk Client
```java
// Check if a player is using NoRisk Client
if (coreAPI.isNrcPlayer(playerUUID)) {
    // Player is using NoRisk Client
    api.sendPacket(playerUUID, new YourPayload());
} else {
    // Player is not using NoRisk Client
    getLogger().info("Player " + playerUUID + " is not using NoRisk Client");
}
```

### Sending Packets
```java
// Send a packet to a player (only works for NoRisk clients)
api.sendPacket(playerUUID, new YourCustomPayload());
```

### Sending Requests with Callbacks
```java
// Send a request and handle the response
api.sendRequest(playerUUID, new YourRequestPayload(), response -> {
    getLogger().info("Received response: " + response);
    // Handle the response here
});
```

### Using NrcPlayer for Direct Access
```java
// Get the NrcPlayer instance for more direct control
import gg.norisk.core.models.NrcPlayer;

NrcPlayer nrcPlayer = coreAPI.getPlayerManager().getNrcPlayer(playerUUID);
if (nrcPlayer != null) {
    // Player is using NoRisk Client
    // You can now access NoRisk-specific features through nrcPlayer
    
    // Example: Check if player has specific capabilities
    // nrcPlayer.sendToast(...);
    // nrcPlayer.sendInputbar(...);
}
```
    </div>
    <div class="language-tab-panel" data-language="kotlin">

### Checking if Player Uses NoRisk Client
```kotlin
// Check if a player is using NoRisk Client
if (coreAPI.isNrcPlayer(playerUUID)) {
    // Player is using NoRisk Client
    api.sendPacket(playerUUID, YourPayload())
} else {
    // Player is not using NoRisk Client
    logger.info("Player $playerUUID is not using NoRisk Client")
}
```

### Sending Packets
```kotlin
// Send a packet to a player (only works for NoRisk clients)
api.sendPacket(playerUUID, YourCustomPayload())
```

### Sending Requests with Callbacks
```kotlin
// Send a request and handle the response
api.sendRequest(playerUUID, YourRequestPayload()) { response ->
    logger.info("Received response: $response")
    // Handle the response here
}
```

### Using NrcPlayer for Direct Access
```kotlin
// Get the NrcPlayer instance for more direct control
import gg.norisk.core.models.NrcPlayer

val nrcPlayer = coreAPI.playerManager.getNrcPlayer(playerUUID)
if (nrcPlayer != null) {
    // Player is using NoRisk Client
    // You can now access NoRisk-specific features through nrcPlayer
    
    // Example: Check if player has specific capabilities
    // nrcPlayer.sendToast(...)
    // nrcPlayer.sendInputbar(...)
}
```
    </div>
  </div>
</div>

---

## Error Handling

The API methods will return `null` or fail silently if:
- The NoRiskClient-Server-API plugin is not loaded
- The player is not using NoRisk Client
- The API failed to initialize properly

Always check that the API is available before using it:

<div class="language-tab-wrapper">
  <div class="language-tab-buttons">
    <button class="language-tab-button active" data-language="java">Java</button>
    <button class="language-tab-button" data-language="kotlin">Kotlin</button>
  </div>
  <div class="language-tab-content">
    <div class="language-tab-panel active" data-language="java">

```java
// Check if API is available
if (!ServerAPI.isAvailable()) {
    getLogger().severe("NoRisk API not available. Disabling plugin.");
    getServer().getPluginManager().disablePlugin(this);
    return;
}

// Check if player is NoRisk client before sending packets
if (coreAPI.isNrcPlayer(playerUUID)) {
    api.sendPacket(playerUUID, new YourPayload());
} else {
    getLogger().info("Cannot send NoRisk packet to non-NoRisk player: " + playerUUID);
}
```
    </div>
    <div class="language-tab-panel" data-language="kotlin">

```kotlin
// Check if API is available
if (!ServerAPI.isAvailable()) {
    logger.severe("NoRisk API not available. Disabling plugin.")
    server.pluginManager.disablePlugin(this)
    return
}

// Check if player is NoRisk client before sending packets
if (coreAPI.isNrcPlayer(playerUUID)) {
    api.sendPacket(playerUUID, YourPayload())
} else {
    logger.info("Cannot send NoRisk packet to non-NoRisk player: $playerUUID")
}
```
    </div>
  </div>
</div>

---

## Player Management

The API automatically manages NoRisk players through the Paper plugin. Players are registered when they send a handshake and unregistered when they leave:

<div class="language-tab-wrapper">
  <div class="language-tab-buttons">
    <button class="language-tab-button active" data-language="java">Java</button>
    <button class="language-tab-button" data-language="kotlin">Kotlin</button>
  </div>
  <div class="language-tab-content">
    <div class="language-tab-panel active" data-language="java">

```java
// Players are automatically registered/unregistered by the API
// You just need to check if they're NoRisk clients:

@EventHandler
public void onPlayerJoin(PlayerJoinEvent event) {
    Player player = event.getPlayer();
    UUID uuid = player.getUniqueId();
    
    // Note: Player might not be registered as NRC player immediately
    // Wait for handshake or check in a delayed task
    
    Bukkit.getScheduler().runTaskLater(plugin, () -> {
        if (coreAPI.isNrcPlayer(uuid)) {
            player.sendMessage("§aWelcome NoRisk Client user!");
            // Send NoRisk-specific packets
        }
    }, 20L); // Wait 1 second for potential handshake
}
```
    </div>
    <div class="language-tab-panel" data-language="kotlin">

```kotlin
// Players are automatically registered/unregistered by the API
// You just need to check if they're NoRisk clients:

@EventHandler
fun onPlayerJoin(event: PlayerJoinEvent) {
    val player = event.player
    val uuid = player.uniqueId
    
    // Note: Player might not be registered as NRC player immediately
    // Wait for handshake or check in a delayed task
    
    Bukkit.getScheduler().runTaskLater(plugin, Runnable {
        if (coreAPI.isNrcPlayer(uuid)) {
            player.sendMessage("§aWelcome NoRisk Client user!")
            // Send NoRisk-specific packets
        }
    }, 20L) // Wait 1 second for potential handshake
}
```
    </div>
  </div>
</div>
