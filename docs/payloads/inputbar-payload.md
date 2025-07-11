# Inputbar Payload Documentation

## Overview
The Inputbar Payload displays input prompts in the NoRisk Client. Players can enter text which is then sent back to the server.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `header` | `String` | Header text for the input prompt |
| `placeholder` | `String?` | Placeholder text shown in the input field (optional) |
| `maxLength` | `Int` | Maximum number of characters allowed in the input |

## Examples

<div class="code-tab-wrapper">
  <div class="code-tab-buttons">
    <button class="code-tab-button active" data-tab="java">Java</button>
    <button class="code-tab-button" data-tab="kotlin">Kotlin</button>
  </div>

  <div class="code-tab-content">
    <div class="code-tab-panel active" data-tab="java">
      <pre><code class="language-java">nrcPlayer.sendInputbar("Enter Name", "Your name...", 50);</code></pre>
      <pre><code class="language-java">nrcPlayer.sendInputbar("Enter Amount", "Number of coins...", 10);</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin">
nrcPlayer.sendInputbar("Enter Name", "Your name...", 50)</code></pre>
      <pre><code class="language-kotlin">
nrcPlayer.sendInputbar("Enter Amount", "Number of coins...", 10)</code></pre>
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
      <pre><code class="language-java">public void requestBankTransaction(NrcPlayer nrcPlayer) {
    nrcPlayer.sendInputbar("Bank Transfer", "Enter amount to transfer...", 15);
}</code></pre>
      <pre><code class="language-java">public void createClanName(NrcPlayer nrcPlayer) {
    nrcPlayer.sendInputbar("Create Clan", "Enter clan name...", 20);
}</code></pre>
    </div>
    <div class="code-tab-panel" data-tab="kotlin">
      <pre><code class="language-kotlin">fun requestBankTransaction(nrcPlayer: NrcPlayer) {
    nrcPlayer.sendInputbar("Bank Transfer", "Enter amount to transfer...", 15)
}
</code></pre>
      <pre><code class="language-kotlin">fun createClanName(nrcPlayer: NrcPlayer) {
    nrcPlayer.sendInputbar("Create Clan", "Enter clan name...", 20)
}
</code></pre>
    </div>
  </div>
</div>

## Notes
- Input is automatically canceled after a certain time
- Players can cancel input with ESC
- Empty inputs are treated as cancellation