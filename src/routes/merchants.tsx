import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";

export const Route = createFileRoute("/merchants")({
  component: Merchants,
});

const list = [
  "1XCasino", "4rabet", "888starz", "AVAbet", "AfroPari",
  "Avadapay Dalapay", "BetFM Dalapay", "Betandyou", "Betpari",
  "Betum", "Betwinner (Kenya)", "Bitstarz", "Cbet", "Casino-X",
];

function Merchants() {
  const [selected, setSelected] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [history, setHistory] = useState<Record<string, string[]>>({});

  const addComment = () => {
    if (!selected || !comment.trim()) return;
    setHistory((h) => ({ ...h, [selected]: [...(h[selected] ?? []), comment.trim()] }));
    setComment("");
  };

  return (
    <AppLayout title="Мерчантс">
      <div className="two-col">
        <section className="panel">
          <h2 className="panel-title">Список мерчантов</h2>
          <div className="merchant-list">
            {list.map((m) => (
              <button
                key={m}
                className={"merchant-item" + (selected === m ? " selected" : "")}
                onClick={() => setSelected(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2 className="panel-title">История мерчанта {selected ? `— ${selected}` : ""}</h2>
          <input
            className="input"
            placeholder="Комментарий..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="btn btn-primary mt mb" onClick={addComment}>
            Добавить комментарий
          </button>
          <ul className="history">
            {(selected ? history[selected] ?? [] : []).map((c, i) => (
              <li key={i}>[client] {c}</li>
            ))}
          </ul>
        </section>
      </div>
    </AppLayout>
  );
}
