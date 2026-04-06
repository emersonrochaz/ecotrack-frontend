const API_BACKEND = "http://localhost:5000";
const API_WEATHER_KEY = "b8fed7dd364a4ba5bc39456ccd444d87"; // Use uma chave gratuita da OpenWeather [cite: 63]

// Consumo de API Externa [cite: 13, 50, 63]
async function carregarClima() {
    const cidade = "Manaus"; 
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${API_WEATHER_KEY}`);
        const data = await response.json();
        document.getElementById('clima-container').innerText = `🌍 ${cidade}: ${data.main.temp}°C | Umidade: ${data.main.humidity}%`;
    } catch (e) {
        document.getElementById('clima-container').innerText = "Erro ao carregar clima externo.";
    }
}

async function listarAtivos() {
    const res = await fetch(`${API_BACKEND}/ativos`);
    const ativos = await res.json();
    const grid = document.getElementById('ativos-grid');
    grid.innerHTML = ativos.map(a => `
        <div class="card">
            <h4>${a.nome}</h4>
            <p>Setor: ${a.setor}</p>
            <span class="status ${a.status.toLowerCase()}">${a.status}</span>
            <button onclick="alternarStatus(${a.id})">Alternar Status</button>
            <button onclick="deletarAtivo(${a.id})" class="btn-del">Remover</button>
        </div>
    `).join('');
}

async function cadastrarAtivo() {
    const nome = document.getElementById('nome').value;
    const setor = document.getElementById('setor').value;
    await fetch(`${API_BACKEND}/ativo`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nome, setor})
    });
    listarAtivos();
}

async function alternarStatus(id) {
    await fetch(`${API_BACKEND}/ativo/${id}`, { method: 'PUT' });
    listarAtivos();
}

async function deletarAtivo(id) {
    await fetch(`${API_BACKEND}/ativo/${id}`, { method: 'DELETE' });
    listarAtivos();
}

carregarClima();
listarAtivos();