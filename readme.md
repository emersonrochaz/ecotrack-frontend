# EcoTrack Pro - Dashboard Industrial (Front-End)

Este repositório contém a interface do sistema **EcoTrack Pro**, um MVP focado na gestão de ativos e monitoramento climático para ambientes industriais.

## 🏗️ Arquitetura do Sistema (Cenário 1.1)

O projeto segue a arquitetura de microsserviços modularizados via Docker, integrando uma API interna e serviços externos de clima.

```mermaid
graph TD
    subgraph "Client Side"
        A[Interface: EcoTrack Dashboard] -- "Requisicoes REST" --> B
        A -- "Consumo de API (fetch)" --> D
    end

    subgraph "Server Side (Docker)"
        B[API Back-End: Flask/Python] -- "Persistencia" --> C[(Banco de Dados: SQLite)]
    end

    subgraph "External Services"
        D[API Externa: OpenWeatherMap]
    end

    style A fill:#00ff88,stroke:#121212,color:#121212,stroke-width:2px
    style B fill:#1e1e1e,stroke:#00ff88,color:#fff
    style D fill:#252525,stroke:#00ff88,color:#fff


🚀 Funcionalidades
Monitoramento Climático: Integração em tempo real com a OpenWeatherMap para exibir as condições de Manaus.

Gestão de Ativos: Interface completa para cadastro, alteração de status e exclusão de máquinas.

Feedback Visual: Tags dinâmicas em verde neon e laranja para status operacional e manutenção.

🛠️ Tecnologias
HTML5, CSS3, JavaScript (ES6+).

Docker para containerização.

📦 Como Executar
Certifique-se de que a API Back-End está rodando na porta 5000.

Na raiz deste repositório, execute:

docker build -t ecotrack-front .
docker run -d -p 80:80 --name front-container ecotrack-front

Acesse em: http://localhost

### 2. README para o Repositório Back-End
Este repositório foca na lógica de negócio, persistência de dados e documentação Swagger.

```markdown
# EcoTrack Pro - API de Gestão de Ativos (Back-End)

API REST desenvolvida para o gerenciamento de ativos industriais, fornecendo os serviços necessários para o CRUD completo do sistema EcoTrack Pro.

## ⚙️ Tecnologias Utilizadas
* **Linguagem:** Python 3.x.
* **Framework:** Flask.
* **Documentação:** Swagger (Flasgger).
* **Banco de Dados:** SQLite (Persistência em arquivo).
* **Container:** Docker.

## 🛣️ Endpoints Principais
* `GET /ativos`: Lista todos os ativos registrados.
* `POST /ativo`: Registra um novo ativo no sistema.
* `PUT /ativo/<id>`: Alterna o status operacional da máquina.
* `DELETE /ativo/<id>`: Remove um ativo do banco de dados.

## 📦 Como Executar
1. Na raiz deste repositório, execute:
```bash
docker build -t ecotrack-api .
docker run -d -p 5000:5000 --name api-container ecotrack-api

O Gemini disse
Para garantir a nota máxima, você deve ter dois repositórios separados no GitHub. Como você é um Analista de Negócios com foco em resultados, a documentação deve ser clara, técnica e organizada.

Abaixo, apresento o conteúdo para os dois arquivos README.md.

1. README para o Repositório Front-End
Este é o repositório principal onde o avaliador verá o fluxograma e a integração com a API externa.

Markdown
# EcoTrack Pro - Dashboard Industrial (Front-End)

Este repositório contém a interface do sistema **EcoTrack Pro**, um MVP focado na gestão de ativos e monitoramento climático para ambientes industriais.

## 🏗️ Arquitetura do Sistema (Cenário 1.1)

O projeto segue a arquitetura de microsserviços modularizados via Docker, integrando uma API interna e serviços externos de clima.

```mermaid
graph TD
    subgraph "Client Side (Porta 80)"
        A[Interface: EcoTrack Dashboard] -- "Fetch REST" --> B
        A -- "Consumo API Externa" --> D
    end

    subgraph "Server Side (Porta 5000)"
        B[API Back-End: Flask/Python] -- "Persistencia" --> C[(Banco de Dados: SQLite)]
    end

    subgraph "External Services"
        D[API Externa: OpenWeatherMap]
    end

    style A fill:#00ff88,stroke:#121212,color:#121212,stroke-width:2px
    style B fill:#1e1e1e,stroke:#00ff88,color:#fff
    style D fill:#252525,stroke:#00ff88,color:#fff
🚀 Funcionalidades
Monitoramento Climático: Integração em tempo real com a OpenWeatherMap para exibir as condições de Manaus.

Gestão de Ativos: Interface completa para cadastro, alteração de status e exclusão de máquinas.

Feedback Visual: Tags dinâmicas em verde neon e laranja para status operacional e manutenção.

🛠️ Tecnologias
HTML5, CSS3, JavaScript (ES6+).

Docker para containerização.

📦 Como Executar
Certifique-se de que a API Back-End está rodando na porta 5000.

Na raiz deste repositório, execute:

Bash
docker build -t ecotrack-front .
docker run -d -p 80:80 --name front-container ecotrack-front
Acesse em: http://localhost


---

### 2. README para o Repositório Back-End
Este repositório foca na lógica de negócio, persistência de dados e documentação Swagger.

```markdown
# EcoTrack Pro - API de Gestão de Ativos (Back-End)

API REST desenvolvida para o gerenciamento de ativos industriais, fornecendo os serviços necessários para o CRUD completo do sistema EcoTrack Pro.

## ⚙️ Tecnologias Utilizadas
* **Linguagem:** Python 3.x.
* **Framework:** Flask.
* **Documentação:** Swagger (Flasgger).
* **Banco de Dados:** SQLite (Persistência em arquivo).
* **Container:** Docker.

## 🛣️ Endpoints Principais
* `GET /ativos`: Lista todos os ativos registrados.
* `POST /ativo`: Registra um novo ativo no sistema.
* `PUT /ativo/<id>`: Alterna o status operacional da máquina.
* `DELETE /ativo/<id>`: Remove um ativo do banco de dados.

## 📦 Como Executar
1. Na raiz deste repositório, execute:
```bash
docker build -t ecotrack-api .
docker run -d -p 5000:5000 --name api-container ecotrack-api

📖 Documentação Interativa
Com o container rodando, acesse a documentação oficial das rotas em:
http://localhost:5000/apidocs
