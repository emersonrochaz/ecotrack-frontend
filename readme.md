
<pre>
graph TD
    subgraph &quot;Client Side&quot;
        A[Interface: EcoTrack Dashboard] -- &quot;Requisicoes REST&quot; --&gt; B
        A -- &quot;Consumo de API (fetch)&quot; --&gt; D
    end

    subgraph &quot;Server Side (Docker)&quot;
        B[API Back-End: Flask/Python] -- &quot;Persistencia&quot; --&gt; C[(Banco de Dados: SQLite)]
    end

    subgraph &quot;External Services&quot;
        D[API Externa: OpenWeatherMap]
    end

    style A fill:#00ff88,stroke:#121212,color:#121212,stroke-width:2px
    style B fill:#1e1e1e,stroke:#00ff88,color:#fff
    style D fill:#252525,stroke:#00ff88,color:#fff

    </pre>
