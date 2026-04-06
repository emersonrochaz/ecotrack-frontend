graph TD
    subgraph "Client Side"
        A[Interface: EcoTrack Dashboard] -- "Requisições REST" --> B
        A -- "Consumo de API (fetch)" --> D
    end

    subgraph "Server Side (Docker)"
        B[API Back-End: Flask/Python] -- "Persistência" --> C[(Banco de Dados: SQLite)]
    end

    subgraph "External Services"
        D[API Externa: OpenWeatherMap]
    end

    style A fill:#00ff88,stroke:#121212,color:#121212,stroke-width:2px
    style B fill:#1e1e1e,stroke:#00ff88,color:#fff
    style D fill:#252525,stroke:#00ff88,color:#fff