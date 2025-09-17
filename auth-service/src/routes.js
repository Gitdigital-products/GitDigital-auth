export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "auth-service" });
  });

  // Authentication-specific endpoints
  app.post("/auth/login", (req, res) => {
    const { username, password } = req.body;
    res.json({ message: `User ${username} logged in (sample)`, token: "jwt-sample-token" });
  });

  app.post("/auth/register", (req, res) => {
    const { username, email } = req.body;
    res.json({ message: `User ${username} registered (sample)`, email });
  });

  app.post("/auth/logout", (req, res) => {
    const { token } = req.body;
    res.json({ message: `Token ${token} invalidated (sample)` });
  });
}
