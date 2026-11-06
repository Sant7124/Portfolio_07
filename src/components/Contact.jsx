import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { Mail, Phone, MapPin, Copy, Check, Send, CheckCircle2, X } from "lucide-react";

export function Contact({ onShowToast }) {
  const { contact } = siteConfig;
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    if (onShowToast) onShowToast(`Copied ${text} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Provide immediate polished feedback & generate mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      // Attempt opening user's native email client with pre-filled content
      const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
        formData.subject || "Project Collaboration Inquiry"
      )}&body=${encodeURIComponent(
        `Hi Santosh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-tag">05 // Direct Channel</div>
        <h2 className="section-title">LET'S BUILD SOMETHING EXTRAORDINARY</h2>
        <p className="section-subtitle">
          Whether you have an ambitious AI project, are recruiting for engineering roles, or want to explore
          cutting-edge RAG & agentic software, let's connect.
        </p>

        <div className="contact-grid">
          {/* Left Column: Direct Info Pills */}
          <div className="contact-info-block">
            {/* Email Pill */}
            <div className="contact-pill-item">
              <div className="contact-pill-left">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-pill-label">Direct Email</span>
                  <a href={`mailto:${contact.email}`} className="contact-pill-value" style={{ display: "block" }}>
                    {contact.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(contact.email, "email")}
                className="copy-btn"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedField === "email" ? <Check size={14} style={{ color: "#10b981" }} /> : <Copy size={14} />}
              </button>
            </div>

            {/* Phone Pill */}
            <div className="contact-pill-item">
              <div className="contact-pill-left">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact-pill-label">Telephone</span>
                  <a href={`tel:${contact.phone}`} className="contact-pill-value" style={{ display: "block" }}>
                    {contact.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(contact.phone, "phone")}
                className="copy-btn"
                title="Copy phone to clipboard"
                aria-label="Copy phone number"
              >
                {copiedField === "phone" ? <Check size={14} style={{ color: "#10b981" }} /> : <Copy size={14} />}
              </button>
            </div>

            {/* Location Pill */}
            <div className="contact-pill-item">
              <div className="contact-pill-left">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-pill-label">Base Location</span>
                  <p className="contact-pill-value">{contact.location}</p>
                </div>
              </div>
              <span style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 700 }}>IST (UTC+5:30)</span>
            </div>

            {/* Quick Resume Download Card */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "var(--radius-md)",
                background: "var(--surface-card)",
                border: "1px dashed var(--border-light)"
              }}
            >
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", marginBottom: "0.4rem" }}>
                Need a printable CV?
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                Download the official one-page resume detailing academic scores, projects, and certifications.
              </p>
              <a
                href={siteConfig.identity.resumeUrl}
                download="Santosh_Yadav_Resume.pdf"
                className="btn-outline"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3 className="form-title">Send a Message</h3>
            <p className="form-subtitle">Fill in the brief details and I will reply within 24 hours.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Internship opportunity / AI SaaS collaboration"
                  className="form-control"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  placeholder="Hello Santosh, I came across your ExplainO & MetricMind projects and would love to connect..."
                  className="form-control"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Preparing Dispatch...</span>
                ) : (
                  <>
                    <span>Dispatch Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Submission Confirmation Modal */}
      {showSuccessModal && (
        <div
          className="modal-overlay open"
          onClick={() => setShowSuccessModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-dialog"
            style={{ maxWidth: "460px", padding: "2.5rem 2rem", textAlign: "center" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                color: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem"
              }}
            >
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", marginBottom: "0.5rem" }}>
              MESSAGE DISPATCHED! 🎉
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              Thank you, <strong>{formData.name || "friend"}</strong>. Your message is prepared for{" "}
              <strong>{contact.email}</strong>. Santosh will get back to you shortly.
            </p>

            <button
              onClick={() => {
                setShowSuccessModal(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Great, thank you!
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

