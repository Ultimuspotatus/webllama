#!/bin/bash

podman run -d -v docker.io/ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
podman start ollama
podman exec -it ollama ollama run llama3.1