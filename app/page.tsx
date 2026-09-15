// لاحظ هنا استخدمنا نقطة واحدة (./) لأن المجلد بجانب هذا الملف مباشرة
import MatchCard from './components/MatchCard';

export default async function Home() {
  // جلب البيانات الحقيقية من API (الدوري الإنجليزي)
  const res = await fetch('https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id=4328', {
    next: { revalidate: 60 } 
  });
  
  const data = await res.json();
  const events = data.events || [];

  return (
    <main className="min-h-screen bg-[#121212] text-white p-8" dir="rtl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-green-400 mb-2 tracking-wider">
          صافرة 90 ⚽
        </h1>
        <p className="text-gray-400 text-sm">مباريات الدوري الإنجليزي القادمة</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {events.map((match: any) => (
          <MatchCard 
            key={match.idEvent}
            league={match.strLeague}
            team1={match.strHomeTeam}
            team1Logo={`https://ui-avatars.com/api/?name=${match.strHomeTeam.substring(0,2)}&background=ffffff&color=121212&bold=true`}
            team2={match.strAwayTeam}
            team2Logo={`https://ui-avatars.com/api/?name=${match.strAwayTeam.substring(0,2)}&background=ffffff&color=121212&bold=true`}
            time={match.strTime ? match.strTime.substring(0, 5) : 'غير محدد'}
            score="vs"
            isLive={false}
          />
        ))}
      </div>
    </main>
  );
}