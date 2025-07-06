# NRC Channel Import Documentation

## Overview
The `Constants` class provides the channel identifier needed for communication with NoRisk Client players. This is essential for sending payloads through plugin messaging.

## Class Structure
```kotlin
package gg.norisk.core.common

class Constants {
    companion object {
        const val NRC_CHANNEL = "norisk:main"
    }
}
```

## Import and Usage

### Import the Class
```kotlin
import gg.norisk.core.common.Constants.Companion.NRC_CHANNEL
```

### Using the Channel Constant
```kotlin
// Access the channel identifier
val channel = NRC_CHANNEL // "norisk:main"
```
You can use it in any way its just to show off how you could use it!