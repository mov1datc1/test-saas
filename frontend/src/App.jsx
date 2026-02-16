import { Routes, Route } from "react-router-dom";

const plans = ["Basic", "Pro", "Enterprise"];

function LandingPage() {
  return (
    <main className="container">
      <h1>Test SaaS Platform</h1>
      <section className="pricing-grid">
        {plans.map((plan) => (
          <article className="pricing-card" key={plan}>
            <h2>{plan}</h2>
            <button type="button" onClick={() => console.log(plan)}>
              Subscribe
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
