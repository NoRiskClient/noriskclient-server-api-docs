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
| **Paper** | `NoRiskClient-Server-API-Paper.jar` |
| **Spigot** | `NoRiskClient-Server-API-Spigot.jar` |
| **BungeeCord** | `NoRiskClient-Server-API-BungeeCord.jar` |
| **Velocity** | `NoRiskClient-Server-API-Velocity.jar` |
| **Fabric** | `NoRiskClient-Server-API-Fabric.jar` |

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
import gg.norisk.paper.api.ServerAPI;
import org.bukkit.plugin.java.JavaPlugin;

public class YourPlugin extends JavaPlugin {
    
    private NoRiskServerAPI api;
    
    @Override
    public void onEnable() {
        // Initialize the NoRisk API
        api = ServerAPI.create(this);
        
        if (api == null) {
            getLogger().severe("Failed to initialize NoRisk API. Disabling plugin.");
            getServer().getPluginManager().disablePlugin(this);
            return;
        }
        
        getLogger().info("NoRisk API initialized successfully!");
        
        // Example usage
        // api.sendPacket(playerUUID, new YourCustomPayload());
        // api.sendRequest(playerUUID, new YourRequestPayload(), response -> {
        //     getLogger().info("Received response: " + response);
        // });
    }
}</code></pre>
          </div>
          
          <div class="language-tab-panel" data-language="kotlin">
            <h4>Kotlin Implementation</h4>
            <pre><code class="language-kotlin">import gg.norisk.core.common.NoRiskServerAPI
import gg.norisk.paper.api.ServerAPI
import org.bukkit.plugin.java.JavaPlugin

class YourPlugin : JavaPlugin() {
    
    private var api: NoRiskServerAPI? = null
    
    override fun onEnable() {
        // Initialize the NoRisk API
        api = ServerAPI.create(this)
        
        if (api == null) {
            logger.severe("Failed to initialize NoRisk API. Disabling plugin.")
            server.pluginManager.disablePlugin(this)
            return
        }
        
        logger.info("NoRisk API initialized successfully!")
        
        // Example usage
        // api?.sendPacket(playerUUID, YourCustomPayload())
        // api?.sendRequest(playerUUID, YourRequestPayload()) { response ->
        //     logger.info("Received response: $response")
        // }
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
import gg.norisk.spigot.api.ServerAPI;
import org.bukkit.plugin.java.JavaPlugin;

public class YourPlugin extends JavaPlugin {
    
    private NoRiskServerAPI api;
    
    @Override
    public void onEnable() {
        // Initialize the NoRisk API
        api = ServerAPI.create(this);
        
        if (api == null) {
            getLogger().severe("Failed to initialize NoRisk API. Disabling plugin.");
            getServer().getPluginManager().disablePlugin(this);
            return;
        }
        
        getLogger().info("NoRisk API initialized successfully!");
        
        // Example usage
        // api.sendPacket(playerUUID, new YourCustomPayload());
        // api.sendRequest(playerUUID, new YourRequestPayload(), response -> {
        //     getLogger().info("Received response: " + response);
        // });
    }
}</code></pre>
          </div>
          
          <div class="language-tab-panel" data-language="kotlin">
            <h4>Kotlin Implementation</h4>
            <pre><code class="language-kotlin">import gg.norisk.core.common.NoRiskServerAPI
import gg.norisk.spigot.api.ServerAPI
import org.bukkit.plugin.java.JavaPlugin

class YourPlugin : JavaPlugin() {
    
    private var api: NoRiskServerAPI? = null
    
    override fun onEnable() {
        // Initialize the NoRisk API
        api = ServerAPI.create(this)
        
        if (api == null) {
            logger.severe("Failed to initialize NoRisk API. Disabling plugin.")
            server.pluginManager.disablePlugin(this)
            return
        }
        
        logger.info("NoRisk API initialized successfully!")
        
        // Example usage
        // api?.sendPacket(playerUUID, YourCustomPayload())
        // api?.sendRequest(playerUUID, YourRequestPayload()) { response ->
        //     logger.info("Received response: $response")
        // }
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
import gg.norisk.bungeecord.api.ServerAPI;
import net.md_5.bungee.api.plugin.Plugin;

public class YourPlugin extends Plugin {
    
    private NoRiskServerAPI api;
    
    @Override
    public void onEnable() {
        // Initialize the NoRisk API
        api = ServerAPI.create(this);
        
        if (api == null) {
            getLogger().severe("Failed to initialize NoRisk API. Disabling plugin.");
            getProxy().getPluginManager().unregisterListeners(this);
            return;
        }
        
        getLogger().info("NoRisk API initialized successfully!");
        
        // Example usage
        // api.sendPacket(playerUUID, new YourCustomPayload());
        // api.sendRequest(playerUUID, new YourRequestPayload(), response -> {
        //     getLogger().info("Received response: " + response);
        // });
    }
}</code></pre>
          </div>
          
          <div class="language-tab-panel" data-language="kotlin">
            <h4>Kotlin Implementation</h4>
            <pre><code class="language-kotlin">import gg.norisk.core.common.NoRiskServerAPI
import gg.norisk.bungeecord.api.ServerAPI
import net.md_5.bungee.api.plugin.Plugin

class YourPlugin : Plugin() {
    
    private var api: NoRiskServerAPI? = null
    
    override fun onEnable() {
        // Initialize the NoRisk API
        api = ServerAPI.create(this)
        
        if (api == null) {
            logger.severe("Failed to initialize NoRisk API. Disabling plugin.")
            proxy.pluginManager.unregisterListeners(this)
            return
        }
        
        logger.info("NoRisk API initialized successfully!")
        
        // Example usage
        // api?.sendPacket(playerUUID, YourCustomPayload())
        // api?.sendRequest(playerUUID, YourRequestPayload()) { response ->
        //     logger.info("Received response: $response")
        // }
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
import gg.norisk.velocity.api.ServerAPI;
import com.velocitypowered.api.event.Subscribe;
import com.velocitypowered.api.event.proxy.ProxyInitializeEvent;
import com.velocitypowered.api.plugin.Plugin;

@Plugin(
    id = "your-plugin",
    name = "Your Plugin",
    version = "1.0.0"
)
public class YourPlugin {
    
    private NoRiskServerAPI api;
    
    @Subscribe
    public void onProxyInitialization(ProxyInitializeEvent event) {
        // Initialize the NoRisk API
        api = ServerAPI.create(this);
        
        if (api == null) {
            System.err.println("Failed to initialize NoRisk API. Disabling plugin.");
            return;
        }
        
        System.out.println("NoRisk API initialized successfully!");
        
        // Example usage
        // api.sendPacket(playerUUID, new YourCustomPayload());
        // api.sendRequest(playerUUID, new YourRequestPayload(), response -> {
        //     System.out.println("Received response: " + response);
        // });
    }
}</code></pre>
          </div>
          
          <div class="language-tab-panel" data-language="kotlin">
            <h4>Kotlin Implementation</h4>
            <pre><code class="language-kotlin">import gg.norisk.core.common.NoRiskServerAPI
import gg.norisk.velocity.api.ServerAPI
import com.velocitypowered.api.event.Subscribe
import com.velocitypowered.api.event.proxy.ProxyInitializeEvent
import com.velocitypowered.api.plugin.Plugin

@Plugin(
    id = "your-plugin",
    name = "Your Plugin",
    version = "1.0.0"
)
class YourPlugin {
    
    private var api: NoRiskServerAPI? = null
    
    @Subscribe
    fun onProxyInitialization(event: ProxyInitializeEvent) {
        // Initialize the NoRisk API
        api = ServerAPI.create(this)
        
        if (api == null) {
            System.err.println("Failed to initialize NoRisk API. Disabling plugin.")
            return
        }
        
        System.out.println("NoRisk API initialized successfully!")
        
        // Example usage
        // api?.sendPacket(playerUUID, YourCustomPayload())
        // api?.sendRequest(playerUUID, YourRequestPayload()) { response ->
        //     println("Received response: $response")
        // }
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
import gg.norisk.fabric.api.ServerAPI;
import net.fabricmc.api.ModInitializer;

public class YourMod implements ModInitializer {
    
    private NoRiskServerAPI api;
    
    @Override
    public void onInitialize() {
        // Initialize the NoRisk API
        api = ServerAPI.create(this);
        
        if (api == null) {
            System.err.println("Failed to initialize NoRisk API. Disabling mod.");
            return;
        }
        
        System.out.println("NoRisk API initialized successfully!");
        
        // Example usage
        // api.sendPacket(playerUUID, new YourCustomPayload());
        // api.sendRequest(playerUUID, new YourRequestPayload(), response -> {
        //     System.out.println("Received response: " + response);
        // });
    }
}</code></pre>
          </div>
          
          <div class="language-tab-panel" data-language="kotlin">
            <h4>Kotlin Implementation</h4>
            <pre><code class="language-kotlin">import gg.norisk.core.common.NoRiskServerAPI
import gg.norisk.fabric.api.ServerAPI
import net.fabricmc.api.ModInitializer

class YourMod : ModInitializer {
    
    private var api: NoRiskServerAPI? = null
    
    override fun onInitialize() {
        // Initialize the NoRisk API
        api = ServerAPI.create(this)
        
        if (api == null) {
            System.err.println("Failed to initialize NoRisk API. Disabling mod.")
            return
        }
        
        System.out.println("NoRisk API initialized successfully!")
        
        // Example usage
        // api?.sendPacket(playerUUID, YourCustomPayload())
        // api?.sendRequest(playerUUID, YourRequestPayload()) { response ->
        //     println("Received response: $response")
        // }
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

Add the following to your `plugin.yml` (for Bukkit-based platforms) or `velocity-plugin.json` (for Velocity):

### Bukkit-based (Paper/Spigot)
```yaml
name: YourPlugin
version: 1.0.0
main: com.yourpackage.YourPlugin
depend: [NoRiskClient-Server-API]
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

---

## API Usage Examples

### Sending Packets
```java
// Send a packet to a player
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

### Registering Packet Listeners
```java
// Register a listener for incoming packets
api.registerListener(new PacketListener() {
    @Override
    public void onPacketReceived(UUID playerUUID, InPayload payload) {
        getLogger().info("Received packet from " + playerUUID + ": " + payload);
        // Handle the incoming packet
    }
});
```

### Using NrcPlayer Directly
```java
// Get the NrcPlayer instance for more direct control
NrcPlayer nrcPlayer = coreAPI.getPlayerManager().getNrcPlayer(playerUUID);
if (nrcPlayer != null) {
    // Send a toast notification
    nrcPlayer.sendToast(true, "Title", "Description", false, playerUUID, ToastType.SUCCESS);
    
    // Send an input prompt
    nrcPlayer.sendInputbar("Enter your name:", "Name", 20);
    
    // Send a wheel action
    nrcPlayer.sendWheel("Custom Action", "/customcommand");
}
```

---

## Error Handling

The initialization methods will return `null` if:
- The NoRiskClient-Server-API plugin is not loaded
- The API failed to initialize properly

Always check that the API is available before using it:

```java
if (api == null) {
    getLogger().severe("NoRisk API not available. Disabling plugin.");
    getServer().getPluginManager().disablePlugin(this);
    return;
}
```

---

## Player Management

The API automatically manages NoRisk players. Players are registered when they join and unregistered when they leave:

```java
// Check if a player is a NoRisk player
if (api.isNrcPlayer(playerUUID)) {
    // Player is using NoRisk Client
    api.sendPacket(playerUUID, new YourPayload());
} else {
    // Player is not using NoRisk Client
    getLogger().info("Player " + playerUUID + " is not using NoRisk Client");
}
```

---
