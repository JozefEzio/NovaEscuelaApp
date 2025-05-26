import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        organization: '',
        message: ''
    });
    const [isSubmited, SetIsSubmited] = useState(false)
    const roles = ['teacher', 'Administrator', 'Parent', 'Student', 'Other'];
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://formspree.io/f/mqaqvjrr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                SetIsSubmited(true);
                setTimeout(() => SetIsSubmited(false), 3000);
                setFormData({
                    name: '',
                    email: '',
                    role: '',
                    organization: '',
                    message: ''
                });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            alert("Network error. Please try again later.");
        }
    };

    return (
        <>
            <section className="section-contact" id="contact">
                <div className="container">
                    <div className="contact-centent">
                        <div className="content-top">
                            <h1>Get In touch</h1>
                            <p>Ready to transform your educational experience? Let's discuss how Nova Escuela can help your institution.</p>
                        </div>
                        <div className="content-buttom">
                            <div className="info email">
                                <div className="icon">
                                    <a href=""><i class="fa-solid fa-envelope"></i></a>
                                </div>
                                <div className="info-contact">
                                    <h4>Email Us</h4>
                                    <p>novaescuela@gmail.com</p>
                                </div>
                            </div>
                            <div className="info phone">
                                <div className="icon">
                                    <a href=""><i class="fa-solid fa-phone"></i></a>
                                </div>
                                <div className="info-contact">
                                    <h4>Call Us</h4>
                                    <p>+212 611 111 111</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form action="https://formspree.io/f/mqaqvjrr" method='POST' onSubmit={handleSubmit}>
                            <div className="input">
                                <input type="text" placeholder='Full Name' required name="name" value={formData.name} onChange={handleInput} />
                            </div>
                            <div className="input">
                                <input type="email" placeholder='Email Address' name="email" value={formData.email} onChange={handleInput} />
                            </div>
                            <div className="input">
                                <select name="role" id="" value={formData.role} onChange={handleInput} required>
                                    <option value="" selected>Select Your Role</option>
                                    {roles.map((r, i) => (
                                        <option value={r} key={i}>{r}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input">
                                <input type="text" placeholder='School/Organization' value={formData.organization} onChange={handleInput} name='organization' required />
                            </div>
                            <div className="input">
                                <textarea name="message" value={formData.message} onChange={handleInput} placeholder='Tell us about your needs...'></textarea>
                            </div>
                            <input type="submit" value="Submit" className={`btn primary form-submit ${isSubmited ? 'submitted' : ''}`}
                                disabled={isSubmited} />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact