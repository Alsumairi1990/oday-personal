
import React from 'react';

const WrittenSec = () => {
  const authors = [
    {
      name: "ممدوح الولي",
      title: "رغم المساندة للعدوان.. ارتفاع التجارة الإسلامية الأمريكية",
      image: "author1.jpg",
      timestamp: "16-Feb-25 06:54 PM",
    },
    {
      name: "حسن أبو هنية",
      title: "خيال ترامب الإبراهيمي حول غزة",
      image: "author2.jpg",
      timestamp: "16-Feb-25 02:25 PM",
    },
    {
      name: "السنوسي بسيكري",
      title: "ليبيا.. مبادرة الميزانية الموحدة بين السلب والإيجاب",
      image: "author3.jpg",
      timestamp: "15-Feb-25 12:16 PM",
    },
    {
      name: "سمية الغنوشي",
      title: "من فلسطين إلى جنوب أفريقيا: حرب ترامب دفاعا عن الأبارتيد",
      image: "author4.jpg",
      timestamp: "15-Feb-25 05:23 AM",
    },
    {
      name: "نور الدين العلوي",
      title: "على كل مترين من الأرض خمسة شهداء",
      image: "author5.jpg",
      timestamp: "14-Feb-25 12:58 PM",
    },
    {
      name: "علي باكير",
      title: "سوريا.. هل سيستغل الغرب من الدروس المستفادة هذه المرة؟",
      image: "author6.jpg",
      timestamp: "15-Feb-25 11:01 AM",
    },
  ];

  const opinions = [
    {
      name: "هشام الحمامي",
      title: "بالإقدام نرفع الأقلام..",
      timestamp: "16-Feb-25 05:10 PM",
    },
    {
      name: "علي القره داغي",
      title: "رسالة إلى قادة الأمة الإسلامية وعلمائها ومفكريها ومكوناتها: نداء قبل الاندثار",
      timestamp: "16-Feb-25 01:11 PM",
    },
    {
      name: "هاني بشر",
      title: "العالم العربي متوحد رغم أنفه",
      timestamp: "16-Feb-25 12:07 PM",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-900 to-pink-800 py-12 text-white">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-8 text-center border-b-2 border-white pb-2">كتاب عربي 21</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author, index) => (
              <div
                key={index}
                className="bg-white text-black p-3 rounded-lg shadow-lg flex items-center space-x-4 transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-16 h-16 rounded-full border border-purple-700 object-cover"
                />
                <div className="ltr:pl-2 rtl:pr-2">
                  <h3 className="text-base font-semibold text-gray-900">{author.name}</h3>
                  <p className="text-sm text-gray-700 mt-1">{author.title}</p>
                  <span className="text-xs text-gray-500 block mt-2">{author.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center border-b-2 border-white pb-2">قضايا وآراء</h2>
          <div className="space-y-6">
            {opinions.map((opinion, index) => (
              <div
                key={index}
                className="bg-white text-black p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <h3 className="text-base font-semibold text-gray-900">{opinion.name}</h3>
                <p className="text-sm text-gray-700 mt-1">{opinion.title}</p>
                {/*<span className="text-xs text-gray-500 block mt-2">{opinion.timestamp}</span>*/}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrittenSec;
