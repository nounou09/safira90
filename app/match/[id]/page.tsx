import React from 'react';

// أضفنا كلمة async لنتمكن من استخدام التأخير ومحاكاة جلب البيانات
export default async function MatchCenter({ params }: { params: { id: string } }) {
  
  // (السر هنا): محاكاة تأخير لمدة ثانيتين لكي تظهر شاشة التحميل (loading.tsx) بوضوح
  // مستقبلاً سنستبدل هذا السطر بكود جلب رابط البث الحقيقي
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  return (
    <main className="min-h-screen bg-[#121212] text-white p-4 md:p-8" dir="rtl">
      
      {/* شريط التنقل العلوي البسيط */}
      <nav className="mb-6 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-green-400 tracking-wider">صافرة 90 ⚽</h1>
        <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-1 rounded-full text-sm font-bold animate-pulse">
          🔴 بث مباشر
        </span>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* القسم الأيمن: مشغل الفيديو (يأخذ ثلثي الشاشة) */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* شاشة الفيديو */}
          <div className="w-full aspect-video bg-black rounded-2xl border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center relative overflow-hidden group">
            {/* أيقونة تشغيل وهمية */}
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30 cursor-pointer group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-green-400 border-b-[15px] border-b-transparent ml-2"></div>
            </div>
            <p className="mt-4 text-gray-500 text-sm">سيتم جلب رابط البث للمباراة رقم ({params.id})</p>
            
            {/* شريط التحكم الوهمي أسفل الفيديو */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
              <div className="h-full bg-green-500 w-1/3 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
              </div>
            </div>
          </div>

          {/* تفاصيل المباراة تحت الفيديو */}
          <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-800 flex justify-between items-center">
            <h2 className="text-xl font-bold">تفاصيل المباراة</h2>
            <div className="flex gap-2">
              <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition-colors">شارك البث</button>
              <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition-colors">إحصائيات</button>
            </div>
          </div>
        </div>

        {/* القسم الأيسر: صندوق الدردشة (Live Chat) */}
        <div className="bg-[#1e1e1e] rounded-2xl border border-gray-800 flex flex-col h-[600px]">
          {/* رأس الدردشة */}
          <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-800/30 rounded-t-2xl">
            <h3 className="font-bold">غرفة الدردشة 💬</h3>
            <span className="text-xs text-gray-400">1,240 متصل</span>
          </div>

          {/* مساحة الرسائل */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-400">أحمد (مدريدي)</span>
              <p className="bg-gray-800 text-sm p-3 rounded-xl rounded-tr-none w-fit">يا شباب متى يبدأ الشوط الثاني؟</p>
            </div>
            <div className="flex flex-col gap-1 items-end">
              <span className="text-xs text-green-400">أنت</span>
              <p className="bg-green-600 text-sm p-3 rounded-xl rounded-tl-none w-fit text-white">الآن بيبدأ ركز باللعب 🔥</p>
            </div>
          </div>

          {/* مربع كتابة الرسالة */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="اكتب رسالتك هنا..." 
                className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500 transition-colors"
                dir="rtl"
              />
              <button className="bg-green-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded-lg transition-colors">
                إرسال
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}