```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa: {"content": "new entry", "date": "2025-4-10"}
    activate server
    server-->>browser: HTTP Response with 201 status code
    deactivate server
```