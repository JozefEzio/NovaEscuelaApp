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
    {
      title: "Teacher Note System",
      description: "Teachers can easily log notes, achievements, and issues for each student during the week.",
      icon: "📝"
    },
    {
      title: "Weekly AI Insights",
      description: "Our AI analyzes teacher notes and generates weekly summaries to highlight strengths and concerns.",
      icon: "🤖"
    },
    {
      title: "Student Profiles",
      description: "Each student has a profile showing progress, past achievements, and areas needing support.",
      icon: "👤"
    },
    {
      title: "Simple Interface",
      description: "Designed for speed and simplicity — teachers can update notes in seconds.",
      icon: "⚡"
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