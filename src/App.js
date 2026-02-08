import React from 'react';
import './App.css';
// استيراد كافة الأيقونات اللازمة من مكتبة Font Awesome
import { FaReact, FaCode, FaServer, FaDatabase, FaGithub, FaEnvelope, FaWhatsapp, FaDownload } from 'react-icons/fa';

function App() {
  // مصفوفة المشاريع - يمكنك تعديل النصوص هنا بسهولة
  const projects = [
    {
      title: "موقع ألحان الشينوبي",
      tech: "React & CSS",
      icon: <FaCode size={40} color="#61dafb" />, 
      description: "موقع متكامل لعرض أغاني ناروتو مع مشغل صوتي احترافي.",
      link: "#" 
    },
    {
      title: "نظام إدارة Back-end",
      tech: "C# & .NET Core",
      icon: <FaServer size={40} color="#512bd4" />, 
      description: "بناء واجهات برمجة تطبيقات (APIs) قوية وآمنة مع معالجة البيانات.",
      link: "#"
    },
    {
      title: "قاعدة بيانات متطورة",
      tech: "SQL Server",
      icon: <FaDatabase size={40} color="#007acc" />, 
      description: "تصميم وتنظيم قواعد البيانات لضمان سرعة استجابة النظام.",
      link: "#"
    }
  ];

  return (
    <div className="App">
      {/* قسم الرأس مع الشعار المتحرك وزر الـ CV */}
      <header className="header">
        <div className="logo-container">
          <FaReact className="react-logo-spinning" size={80} color="#61dafb" />
        </div>
        <h1>معرض أعمالي البرمجية</h1>
        <p>Full-Stack Developer | متخصص في <strong>C# & React</strong></p>
        
        <a href="components/mayar_Khaled kilani_Web design engineer _resume (2).pdf" download className="cv-button">
          <FaDownload /> تحميل السيرة الذاتية (CV)
        </a>
      </header>

      {/* قسم عرض المشاريع بشكل بطاقات */}
      <main className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">{project.icon}</div>
            <div className="card-badge">{project.tech}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="github-btn">
              عرض التفاصيل على GitHub
            </a>
          </div>
        ))}
      </main>

      {/* قسم التواصل في أسفل الصفحة */}
      <footer className="footer">
        <h2>تواصل معي</h2>
        <div className="contact-icons">
          <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub size={35} /></a>
          <a href="mailto:your-email@example.com"><FaEnvelope size={35} /></a>
          <a href="https://wa.me/your-number" target="_blank" rel="noreferrer"><FaWhatsapp size={35} color="#25D366" /></a>
        </div>
        <p>© 2026 جميع الحقوق محفوظة - مبرمج Full Stack</p>
      </footer>
    </div>
  );
}

export default App;