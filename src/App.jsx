const stats = [
  { label: 'Total Projects', value: '12', trend: '+2 this month' },
  { label: 'Open Tasks', value: '37', trend: '5 overdue' },
  { label: 'Team Members', value: '18', trend: '3 online now' },
  { label: 'Budget Used', value: 'Rp 2.1B', trend: '68% of target' },
];

const recentActivity = [
  'Ruang ICU expansion plan uploaded',
  'AHSP pricing data refreshed for Bali',
  'Electrical layout review completed',
  'Material procurement checklist updated',
];

const quickActions = [
  'Create New Project',
  'Upload Technical Drawing',
  'Generate Cost Estimate',
  'Export Weekly Report',
];

export default function App() {
  return (
    <div className="dashboard-page">
      <header className="topbar">
        <div>
          <p className="kicker">RS Engineering Agent</p>
          <h1>Dashboard</h1>
        </div>
        <button className="primary-btn" type="button">
          + New Task
        </button>
      </header>

      <section className="stats-grid" aria-label="Overview statistics">
        {stats.map((item) => (
          <article className="stat-card" key={item.label}>
            <p className="stat-label">{item.label}</p>
            <p className="stat-value">{item.value}</p>
            <p className="stat-trend">{item.trend}</p>
          </article>
        ))}
      </section>

      <section className="panel-grid">
        <article className="panel">
          <h2>Recent Activity</h2>
          <ul>
            {recentActivity.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <h2>Quick Actions</h2>
          <div className="action-list">
            {quickActions.map((action) => (
              <button key={action} className="ghost-btn" type="button">
                {action}
              </button>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
