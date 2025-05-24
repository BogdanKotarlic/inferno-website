import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const ApplicationCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    instagram: "",
    email: "",
    income: "",
    subs: "",
    invitedBy: "",
    telegram: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitToAirtable = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/appZ57oHkxygjxP2t/Leads",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer patMw58sUAUu5MXaL.a45f23e0af4541edaac651286ae315a05f70e84d815674aa35dafc9bd5f70728",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            fldmxBmlwnpqa0T1p: formData.instagram,
            fldZfKiDechvnjYr5: formData.email,
            fldSMqTI72cUdH9cW: parseFloat(formData.income),
            fldWgEUeaiQAtj5ya: parseFloat(formData.subs),
            fldIXqHE4m8fEAdKW: formData.invitedBy,
            fldgXFUF8a0vkbEiu: formData.telegram,
          },
        }),
      }
    );

    if (!res.ok) {
      console.error(await res.json());
      throw new Error("Failed to submit to Airtable");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await submitToAirtable();
      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="apply"
      className="section relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(135deg, rgba(13,13,13,1) 0%, rgba(26,26,26,1) 100%)",
      }}
    >
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
              content creator.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="instagram"
                      className="block text-sm font-medium text-text-primary mb-1"
                    >
                      Instagram Handle
                    </label>
                    <input
                      type="text"
                      name="instagram"
                      id="instagram"
                      value={formData.instagram}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary"
                      placeholder="@yourhandle"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="income"
                      className="block text-sm font-medium text-text-primary mb-1"
                    >
                      OF Monthly Income ($)
                    </label>
                    <input
                      type="number"
                      name="income"
                      id="income"
                      value={formData.income}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary"
                      placeholder="e.g. 5000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subs"
                      className="block text-sm font-medium text-text-primary mb-1"
                    >
                      New OF Subs Daily
                    </label>
                    <input
                      type="number"
                      name="subs"
                      id="subs"
                      value={formData.subs}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary"
                      placeholder="e.g. 10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="invitedBy"
                      className="block text-sm font-medium text-text-primary mb-1"
                    >
                      Invited By
                    </label>
                    <input
                      type="text"
                      name="invitedBy"
                      id="invitedBy"
                      value={formData.invitedBy}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary"
                      placeholder='e.g. "Chat GPT", "Internet", "We are Artists..."'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telegram"
                      className="block text-sm font-medium text-text-primary mb-1"
                    >
                      Telegram Handle
                    </label>
                    <input
                      type="text"
                      name="telegram"
                      id="telegram"
                      value={formData.telegram}
                      onChange={handleChange}
                      required
                      className="w-full bg-background border border-gray-700 rounded-md px-4 py-3 text-text-primary"
                      placeholder="@yourtelegram"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
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
                  review your application and get back to you within 24 hours.
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
