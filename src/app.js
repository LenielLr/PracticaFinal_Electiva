const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.type("html").send(`
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hola Mundo - CI/CD</title>
  <style>
    :root{
      --bg1:#0b1020;
      --bg2:#121a33;
      --card:#0f1730cc;
      --text:#e8eeff;
      --muted:#a9b4d6;
      --accent:#6ee7ff;
      --accent2:#a78bfa;
      --ok:#22c55e;
      --border:#243058;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
      color:var(--text);
      min-height:100vh;
      display:grid;
      place-items:center;
      background:
        radial-gradient(1000px 600px at 20% 15%, rgba(110,231,255,.18), transparent 60%),
        radial-gradient(900px 500px at 85% 30%, rgba(167,139,250,.18), transparent 60%),
        linear-gradient(180deg, var(--bg1), var(--bg2));
      padding:24px;
    }
    .card{
      width:min(760px, 100%);
      border:1px solid var(--border);
      background:var(--card);
      backdrop-filter: blur(10px);
      border-radius:20px;
      padding:28px;
      box-shadow: 0 20px 60px rgba(0,0,0,.35);
    }
    .top{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      flex-wrap:wrap;
      margin-bottom:18px;
    }
    .badge{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:8px 12px;
      border:1px solid var(--border);
      border-radius:999px;
      color:var(--muted);
      font-size:13px;
      background: rgba(255,255,255,.03);
    }
    .dot{
      width:10px;height:10px;border-radius:50%;
      background: var(--ok);
      box-shadow: 0 0 0 4px rgba(34,197,94,.12);
    }
    h1{
      margin:0;
      font-size:28px;
      letter-spacing:.2px;
    }
    p{
      margin:10px 0 0;
      color:var(--muted);
      line-height:1.6;
    }
    .grid{
      display:grid;
      grid-template-columns: repeat(2, minmax(0,1fr));
      gap:12px;
      margin-top:18px;
    }
    .item{
      border:1px solid var(--border);
      border-radius:16px;
      padding:14px 14px;
      background: rgba(255,255,255,.03);
    }
    .item b{display:block; margin-bottom:6px}
    .cta{
      margin-top:18px;
      display:flex;
      gap:10px;
      flex-wrap:wrap;
    }
    a.btn{
      text-decoration:none;
      color:var(--text);
      padding:10px 14px;
      border-radius:14px;
      border:1px solid var(--border);
      background: rgba(255,255,255,.04);
      transition:.15s ease;
    }
    a.btn:hover{
      transform: translateY(-1px);
      border-color: rgba(110,231,255,.45);
      box-shadow: 0 10px 30px rgba(110,231,255,.10);
    }
    .footer{
      margin-top:14px;
      font-size:12px;
      color:var(--muted);
      opacity:.9;
    }
    @media (max-width:560px){
      .grid{grid-template-columns:1fr}
      h1{font-size:24px}
    }
  </style>
</head>
<body>
  <main class="card">
    <div class="top">
      <h1>Hola Mundo DevOps CI/CD 🚀</h1>
      <span class="badge"><span class="dot"></span> Servicio activo</span>
    </div>

    <p>
      Este proyecto está listo para un pipeline de <b>CI/CD con GitHub Actions</b>:
      ejecuta pruebas, construye Docker y despliega automáticamente en producción.
    </p>

    <section class="grid">
      <div class="item">
        <b>✅ Unit tests</b>
        Jest + Supertest validando el endpoint principal.
      </div>
      <div class="item">
        <b>🐳 Docker</b>
        Imagen lista para subir a Docker Hub.
      </div>
      <div class="item">
        <b>⚙️ CI/CD</b>
        Pipeline al hacer push en <code>main</code>.
      </div>
      <div class="item">
        <b>🌍 Producción</b>
        Deploy automático en Render (o similar).
      </div>
    </section>

    <div class="cta">
      <a class="btn" href="/health">Ver health check</a>
      <a class="btn" href="https://github.com" target="_blank" rel="noreferrer">Ver repositorio</a>
    </div>

    <div class="footer">
      Build: <code>${process.env.RENDER_GIT_COMMIT || process.env.GITHUB_SHA || "local"}</code>
    </div>
  </main>
</body>
</html>
  `);
});

// Endpoint simple para monitoreo/Render
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

module.exports = app;
