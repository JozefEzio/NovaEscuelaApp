import React from 'react';

function Features() {
  return (
    <section className="features-section" data-aos="fade-up">
      <h2 className="section-title">Key Features</h2>
      <div className="features-container">
        <div className="feature-card">
          <h3>Teacher Note System</h3>
          <p>Teachers can easily log notes, achievements, and issues for each student during the week.</p>
        </div>
        <div className="feature-card">
          <h3>Weekly AI Insights</h3>
          <p>Our AI analyzes teacher notes and generates weekly summaries to highlight strengths and concerns.</p>
        </div>
        <div className="feature-card">
          <h3>Student Profiles</h3>
          <p>Each student has a profile showing progress, past achievements, and areas needing support.</p>
        </div>
        <div className="feature-card">
          <h3>Simple Interface</h3>
          <p>Designed for speed and simplicity — teachers can update notes in seconds.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
