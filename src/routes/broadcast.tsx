import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppLayout } from "@/components/AppLayout";

export const Route = createFileRoute("/broadcast")({
  component: Broadcast,
});

const merchants = ["1XCasino", "4rabet", "888starz", "AVAbet", "AfroPari", "Betpari", "Betum"];
const types = ["IN", "Disruption", "Restoration"] as const;
const filters = ["Gate", "Geo", "Method", "Balance", "Custom"] as const;

function Broadcast() {
  const [type, setType] = useState<(typeof types)[number]>("IN");
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Gate");
  const [message, setMessage] = useState("");
  const [direct, setDirect] = useState(false);
  const [routing, setRouting] = useState(false);

  return (
    <AppLayout title="Рассылка">
      <section className="panel">
        <div className="row between">
          <h2 className="panel-title nm">Создать рассылку</h2>
          <button className="btn btn-outline">Notify</button>
        </div>

        <div className="row gap mt">
          {types.map((t) => (
            <button
              key={t}
              className={
                "tab " +
                (type === t
                  ? t === "IN" ? "tab-info" : t === "Disruption" ? "tab-danger" : "tab-success"
                  : "")
              }
              onClick={() => setType(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="row gap mt">
          {filters.map((f) => (
            <button
              key={f}
              className={"tab " + (activeFilter === f ? "tab-active" : "")}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid-5 mt">
          <input className="input" placeholder="Gate" />
          <input className="input" placeholder="GEO" />
          <input className="input" placeholder="Method" />
          <input className="input" placeholder="Balance" />
          <input className="input" placeholder="Custom search merchant" />
        </div>

        <div className="two-col mt">
          <div>
            <h3 className="panel-title">Мерчанты</h3>
            <div className="merchant-list">
              {merchants.map((m) => (
                <div key={m} className="merchant-row">
                  <span>{m}</span>
                  <div className="row gap">
                    <input type="checkbox" />
                    <input type="checkbox" />
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-primary block mt">Add merchant</button>
          </div>

          <div>
            <h3 className="panel-title">Custom message</h3>
            <textarea
              className="input textarea"
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="row gap mt">
              <button className="btn btn-primary grow">Edit</button>
              <button className="btn btn-primary grow">Templates</button>
            </div>
            <label className="check mt">
              <input type="checkbox" checked={direct} onChange={(e) => setDirect(e.target.checked)} />
              <span>Direct</span>
            </label>
            <label className="check">
              <input type="checkbox" checked={routing} onChange={(e) => setRouting(e.target.checked)} />
              <span>Routing</span>
            </label>
            <p className="muted">Если ничего не выбрано, мерчант игнорируется</p>
          </div>
        </div>

        <div className="row gap mt">
          <button className="btn btn-primary">Отправить</button>
          <button className="btn btn-outline">Закрыть</button>
        </div>
      </section>
    </AppLayout>
  );
}
