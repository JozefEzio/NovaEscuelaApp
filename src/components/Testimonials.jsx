import { useEffect, useState } from "react";

function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            text: "Nova Escuela transformed how I track student progress. The weekly insights are incredibly valuable.",
            author: "Mr. Reyes",
            role: "High School Teacher"
        },
        {
            text: "It's easy to use and gives me clear feedback every week. I can see my improvement clearly.",
            author: "Maria Santos",
            role: "Student"
        },
        {
            text: "The AI insights help me understand my child's learning patterns better than ever before.",
            author: "Dr. Lopez",
            role: "Parent"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="testimonials-section" id="testimonials" data-aos="fade-up">
            <div className="container">
                <h2 className="section-title">What People Are Saying</h2>
                <div className="testimonials-carousel" data-aos-delay="100">
                    <div className="testimonial active">
                        <div className="quote-icon"><i class="fa-solid fa-quote-right"></i></div>
                        <p>{testimonials[currentTestimonial].text}</p>
                        <div className="testimonial-author">
                            <strong>{testimonials[currentTestimonial].author}</strong>
                            <span>{testimonials[currentTestimonial].role}</span>
                        </div>
                    </div>
                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                                onClick={() => setCurrentTestimonial(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Testimonials