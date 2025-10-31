export default function TransactionItem({ t }) {
    const date = new Date(t.date);
    return (
      <div className="py-3 flex justify-between items-start">
        <div>
          <div className="font-semibold">${Number(t.amount).toLocaleString()}</div>
          <div className="text-sm text-gray-500">{t.narration} • {date.toLocaleDateString()}</div>
          <div className="text-xs text-gray-400">From: {t.from}</div>
        </div>
        <div className="text-sm text-green-600 font-semibold">+${Number(t.amount).toLocaleString()}</div>
      </div>
    );
  }
  