import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";

export const Route = createFileRoute("/links")({
  component: Links,
});

const rows = [
  { id: 1, merchant: "1XCasino", linked: "Avadapay Dalapay", type: "primary" },
  { id: 2, merchant: "4rabet", linked: "BetFM Dalapay", type: "backup" },
  { id: 3, merchant: "Betpari", linked: "Avadapay Dalapay", type: "primary" },
];

function Links() {
  return (
    <AppLayout title="Связки мерчантов">
      <section className="panel">
        <div className="row between mb">
          <h2 className="panel-title nm">Активные связки</h2>
          <button className="btn btn-primary">Добавить связку</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Мерчант</th>
              <th>Связан с</th>
              <th>Тип</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.merchant}</td>
                <td>{r.linked}</td>
                <td><span className="badge">{r.type}</span></td>
                <td><button className="btn btn-danger">Удалить</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppLayout>
  );
}
