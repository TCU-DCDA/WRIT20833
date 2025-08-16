# Setting Up Ollama with VS Code Chat

This guide will help you configure Ollama models to work with VS Code's chat interface using the Continue extension.

## Prerequisites

- Ollama installed on your machine
- VS Code installed
- At least one Ollama model downloaded

## Step 1: Verify Ollama Installation

First, check that Ollama is working and list your available models:

```bash
ollama list
```

Make sure Ollama service is running:

```bash
ollama serve
```

If you get an "address already in use" error, that's good - it means Ollama is already running.

## Step 2: Install Continue Extension

Install the Continue extension from the VS Code marketplace:

1. Open VS Code
2. Go to Extensions (Cmd+Shift+X)
3. Search for "Continue"
4. Install "Continue - open-source AI code assistant"

## Step 3: Configure Continue for Ollama

Create or update the Continue configuration file at `~/.continue/config.yaml`:

```yaml
name: Local Assistant
version: 1.0.0
schema: v1
models:
  - provider: ollama
    model: deepseek-coder:6.7b
    title: DeepSeek Coder 6.7B
    apiBase: http://localhost:11434
  - provider: ollama
    model: mistral:latest
    title: Mistral Latest
    apiBase: http://localhost:11434
  - provider: ollama
    model: llama3.2:latest
    title: Llama 3.2
    apiBase: http://localhost:11434
  - provider: ollama
    model: llama2:13b
    title: Llama 2 13B
    apiBase: http://localhost:11434
context:
  - provider: code
  - provider: docs
  - provider: diff
  - provider: terminal
  - provider: problems
  - provider: folder
  - provider: codebase
```

### Terminal Command to Update Config

You can also update the configuration using this terminal command:

```bash
cat > ~/.continue/config.yaml << 'EOF'
name: Local Assistant
version: 1.0.0
schema: v1
models:
  - provider: ollama
    model: deepseek-coder:6.7b
    title: DeepSeek Coder 6.7B
    apiBase: http://localhost:11434
  - provider: ollama
    model: mistral:latest
    title: Mistral Latest
    apiBase: http://localhost:11434
  - provider: ollama
    model: llama3.2:latest
    title: Llama 3.2
    apiBase: http://localhost:11434
  - provider: ollama
    model: llama2:13b
    title: Llama 2 13B
    apiBase: http://localhost:11434
context:
  - provider: code
  - provider: docs
  - provider: diff
  - provider: terminal
  - provider: problems
  - provider: folder
  - provider: codebase
EOF
```

## Step 4: Restart VS Code

After updating the configuration, restart VS Code completely for the changes to take effect.

## Step 5: Access Continue Chat

Once VS Code restarts, you can access the Continue chat interface:

1. **Sidebar**: Look for the Continue icon in the sidebar
2. **Command Palette**: Use `Cmd+Shift+P` and search for "Continue: Open Chat"
3. **Keyboard Shortcut**: The default shortcut is usually `Cmd+Shift+L`

## Step 6: Select Your Model

In the Continue chat interface, you should see a dropdown or selection option with your configured Ollama models:

- DeepSeek Coder 6.7B
- Mistral Latest
- Llama 3.2
- Llama 2 13B

## Step 7: Test the Setup

Try asking a simple coding question to verify everything is working:

```
"Hello! Can you help me write a Python function to calculate fibonacci numbers?"
```

## Troubleshooting

### Models Not Appearing

If you don't see the model selection options:

1. **Check Ollama Service**: Ensure Ollama is running
   ```bash
   ollama serve
   ```

2. **Verify Models**: Check that models are accessible
   ```bash
   ollama list
   ```

3. **Restart VS Code**: Close and reopen VS Code completely

4. **Check Configuration**: Verify the config file was updated correctly
   ```bash
   cat ~/.continue/config.yaml
   ```

### Connection Issues

If you get connection errors:

1. **Check Port**: Ensure Ollama is running on port 11434 (default)
2. **Firewall**: Make sure localhost connections are allowed
3. **Model Availability**: Try pulling a model if it's not working
   ```bash
   ollama pull llama3.2
   ```

### Performance Tips

- **Model Selection**: Smaller models (like llama3.2) will respond faster
- **System Resources**: Larger models (like llama2:13b) require more RAM
- **Context Window**: Consider the context size when asking complex questions

## Alternative Extensions

If Continue doesn't work for you, here are other popular alternatives:

- **Cody AI** (`sourcegraph.cody-ai`)
- **Twinny** (`rjmacarthy.twinny`)
- **Ollama Autocoder** (`10nates.ollama-autocoder`)

## Additional Configuration Options

### Custom Model Names

You can customize the display names in the configuration:

```yaml
models:
  - provider: ollama
    model: deepseek-coder:6.7b
    title: "My Custom DeepSeek"
    apiBase: http://localhost:11434
```

### Multiple Ollama Instances

If you're running Ollama on different ports or hosts:

```yaml
models:
  - provider: ollama
    model: llama3.2:latest
    title: Llama 3.2 (Local)
    apiBase: http://localhost:11434
  - provider: ollama
    model: mistral:latest
    title: Mistral (Remote)
    apiBase: http://192.168.1.100:11434
```

## Summary

With this setup, you'll have access to your local Ollama models directly within VS Code's chat interface through the Continue extension. This provides privacy, offline capabilities, and the ability to use specialized coding models like DeepSeek Coder.
