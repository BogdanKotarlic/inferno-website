import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const ApplicationCTA: React.FC = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    followers: "",
    experience: "",
    goals: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const nextStep = () => setFormStep((prev) => prev + 1);
  const prevStep = () => setFormStep((prev) => prev - 1);

  return (
    <section
      id="apply"
      className="section relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(135deg, rgba(13,13,13,1) 0%, rgba(26,26,26,1) 100%)",
      }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-accent-purple/40 to-transparent"></div>
        <div className="absolute right-0 bottom-0 w-full h-full bg-gradient-to-tl from-accent-magenta/30 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-background-light rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
              Ready to <span className="gradient-text">Level Up</span> Your
              Creator Career?
            </h2>

            <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
              Apply to join Inferno Agency and unlock your full potential as a
              content creator. Our selective application process ensures we can
              provide the best service to our creators.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStep === 0 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-text-primary mb-1"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-text-primary mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="platform"
                          className="block text-sm font-medium text-text-primary mb-1"
                        >
                          Current Platform
                        </label>
                        <select
                          id="platform"
                          name="platform"
                          value={formData.platform}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple"
                        >
                          <option value="">Select Platform</option>
                          <option value="OnlyFans">OnlyFans</option>
                          <option value="Multiple Platforms">
                            Multiple Platforms
                          </option>
                          <option value="Starting Out">Starting Out</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="followers"
                          className="block text-sm font-medium text-text-primary mb-1"
                        >
                          Current Subscriber Count
                        </label>
                        <select
                          id="followers"
                          name="followers"
                          value={formData.followers}
                          onChange={handleChange}
                          required
                          className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple"
                        >
                          <option value="">Select Range</option>
                          <option value="0-100">0-100 subscribers</option>
                          <option value="100-500">100-500 subscribers</option>
                          <option value="500-1000">
                            500-1,000 subscribers
                          </option>
                          <option value="1000-5000">
                            1,000-5,000 subscribers
                          </option>
                          <option value="5000+">5,000+ subscribers</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="btn-primary inline-flex items-center"
                      >
                        Continue <ArrowRight size={18} className="ml-2" />
                      </button>
                    </div>
                  </div>
                )}

                {formStep === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <label
                        htmlFor="experience"
                        className="block text-sm font-medium text-text-primary mb-1"
                      >
                        How long have you been creating content?
                      </label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple"
                      >
                        <option value="">Select Experience</option>
                        <option value="<3 months">Less than 3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                        <option value="1-2 years">1-2 years</option>
                        <option value="2+ years">2+ years</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="goals"
                        className="block text-sm font-medium text-text-primary mb-1"
                      >
                        What are your main goals with content creation?
                      </label>
                      <textarea
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple"
                        placeholder="Tell us about your content creation goals and what you hope to achieve by working with our agency..."
                      ></textarea>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-3 rounded-md font-medium transition-all duration-300 text-text-primary hover:text-white"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className={`btn-primary inline-flex items-center ${
                          submitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>Processing...</>
                        ) : (
                          <>
                            Submit Application{" "}
                            <ArrowRight size={18} className="ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-20 h-20 rounded-full gradient-bg mx-auto flex items-center justify-center mb-6">
                  <Check size={36} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Application Submitted!
                </h3>
                <p className="text-text-secondary mb-8 max-w-md mx-auto">
                  Thank you for applying to join Inferno Agency. Our team will
                  review your application and get back to you within 48 hours.
                </p>
                <a href="#home" className="btn-primary inline-block">
                  Return to Home
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationCTA;
