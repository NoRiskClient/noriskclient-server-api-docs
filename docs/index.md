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

##  Installation

Add the dependency to your build configuration:

=== "Gradle (Kotlin DSL)"
    ```kotlin
    dependencies {
        implementation("gg.norisk:noriskclient-server-api-[server-software]:0.1.0")
    }
    ```

=== "Gradle (Groovy)"
    ```groovy
    dependencies {
        implementation 'gg.norisk:noriskclient-server-api-[server-software]:0.1.0'
    }
    ```

=== "Maven"
    ```xml
    <dependency>
        <groupId>gg.norisk</groupId>
        <artifactId>noriskclient-server-api-[server-software]</artifactId>
        <version>0.1.0</version>
        <scope>provided</scope>
    </dependency>
    ```

---

## Setup

You need to make a instance of the API:

```kt
val api = NoRiskServerApi()
```

after that you can use it with api.PayloadName


##  Available Payloads

### [Toast Notifications](payloads/ToastPayload.md)
Display rich notifications with progress bars and player avatars.

### [Input Prompts](payloads/InputbarPayload.md)
Create interactive text input dialogs with validation.

### [Action Wheel](payloads/WheelPayload.md)
Add custom commands to the client's action wheel.

### [Module Disabling](payloads/ModuleDeactivatePayload.md)
Dynamically enable/disable client modules.

### [Beacon Beams](payloads/BeaconBeamPayload.md)
Create colored beacon beams at specific coordinates.

### [Gamemode Override](payloads/GamemodePayload.md)
Customize gamemode display in the client.

## Utils

### [Check if player is NRC player](utils/NRCPlayer.md)
Check if a player uses the NRC