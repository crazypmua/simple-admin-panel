import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/AppLayout";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

const stats = [
  { label: "Мерчантов", value: 57 },
  { label: "Без реакции", value: 10 },
  { label: "Отправлено", value: 0 },
  { label: "Ошибки", value: 0 },
];

const updates = [
  { stream: "72h (failure)", file: "table.csv", time: "2026-05-07 10:38:43", ago: 0, rows: 415 },
  { stream: "14d (recovery)", file: "table.csv", time: "2026-05-07 10:38:43", ago: 0, rows: 630 },
];

const groups = [
  { id: 4, chat: "-1003910173529", name: "Dmytro та Дмитрий Лещенко", status: "active" },
  { id: 2, chat: "-1003764972685", name: "Listener25", status: "active" },
];

function Dashboard() {
  return (
    <AppLayout title="Дашборд">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
          </div>
        ))}
      </div>

      <section className="panel">
        <h2 className="panel-title">Последние обновления файлов</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Поток</th>
              <th>Последний файл</th>
              <th>Время</th>
              <th>Минут назад</th>
              <th>Строк</th>
            </tr>
          </thead>
          <tbody>
            {updates.map((u) => (
              <tr key={u.stream}>
                <td>{u.stream}</td>
                <td>{u.file}</td>
                <td>{u.time}</td>
                <td>{u.ago}</td>
                <td>{u.rows}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="panel">
        <h2 className="panel-title">Найденные группы ботом</h2>
        <button className="btn btn-primary mb">Показать все группы</button>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Chat ID</th>
              <th>Название</th>
              <th>Статус</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((g) => (
              <tr key={g.id}>
                <td>{g.id}</td>
                <td>{g.chat}</td>
                <td>{g.name}</td>
                <td><span className="badge badge-success">{g.status}</span></td>
                <td><button className="btn btn-danger">Отключить</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppLayout>
  );
}
