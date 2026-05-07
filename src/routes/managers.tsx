import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";

export const Route = createFileRoute("/managers")({
  component: Managers,
});

const managers = [
  { id: 1, name: "Дмитрий Лещенко", tg: "@dmytro", role: "admin", status: "active" },
  { id: 2, name: "Listener25", tg: "@listener25", role: "manager", status: "active" },
  { id: 3, name: "Ivan", tg: "@ivan", role: "manager", status: "disabled" },
];

function Managers() {
  return (
    <AppLayout title="Менеджеры">
      <section className="panel">
        <div className="row between mb">
          <h2 className="panel-title nm">Список менеджеров</h2>
          <button className="btn btn-primary">Добавить менеджера</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Telegram</th>
              <th>Роль</th>
              <th>Статус</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((m) => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.tg}</td>
                <td>{m.role}</td>
                <td>
                  <span className={"badge " + (m.status === "active" ? "badge-success" : "badge-muted")}>
                    {m.status}
                  </span>
                </td>
                <td><button className="btn btn-outline">Изменить</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppLayout>
  );
}
