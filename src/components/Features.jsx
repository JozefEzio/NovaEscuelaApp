import { useEffect, useState } from "react";

function Features() {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    // {
    //   title: "Teacher Note System",
    //   description: "Teachers can easily log notes, achievements, and issues for each student during the week.",
    // },
    // {
    //   title: "Weekly AI Insights",
    //   description: "Our AI analyzes teacher notes and generates weekly summaries to highlight strengths and concerns.",
    // },
    // {
    //   title: "Student Profiles",
    //   description: "Each student has a profile showing progress, past achievements, and areas needing support.",
    // },
    // {
    //   title: "Simple Interface",
    //   description: "Designed for speed and simplicity — teachers can update notes in seconds.",
    // }
    {
      iconClass: "fa-solid fa-qrcode",
      title: "Smart Attendance",
      description: "Students scan QR codes to mark attendance automatically; teachers generate and track easily."
    },
    {
      iconClass: "fa-solid fa-road",
      title: "Curriculum Roadmap",
      description: "Teachers create and manage yearly course plans; students track progress and completed topics."
    },
    {
      iconClass: "fa-solid fa-file-lines",
      title: "AI-Powered Reports",
      description: "Weekly personalized reports highlight attendance, weak areas, and study recommendations."
    },
    {
      iconClass: "fa-solid fa-graduation-cap",
      title: "Learning Resources",
      description: "AI suggests tailored videos and tutorials to help students improve."
    },
    {
      iconClass: "fa-solid fa-chalkboard-teacher",
      title: "Session Evaluations",
      description: "Teachers rate participation and engagement, contributing to student performance reports."
    },
    {
      iconClass: "fa-solid fa-briefcase",
      title: "Career Guidance (Future)",
      description: "AI recommends career paths based on student strengths and habits."
    }
  ];

  return (
    <section className="features-section" id="features" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${visibleCards.has(index.toString()) ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              data-aos-delay="100">
              <i className={`${feature.iconClass} feature-icon`} aria-hidden="true" style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#007BFF' }}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features