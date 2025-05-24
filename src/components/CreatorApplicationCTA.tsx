import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const CreatorApplicationCTA: React.FC = () => {
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

  const inputStyle =
    "w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-sm text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple";

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
    <div className="relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-background-light rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
              Creator Application
            </h2>
            <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
              Apply to join Inferno Agency as a creator and unlock your full
              potential.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    required
                    placeholder="Instagram Handle"
                    className={inputStyle}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className={inputStyle}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleChange}
                    required
                    placeholder="OF Monthly Income ($)"
                    className={inputStyle}
                  />
                  <input
                    type="number"
                    name="subs"
                    value={formData.subs}
                    onChange={handleChange}
                    required
                    placeholder="New OF Subs Daily"
                    className={inputStyle}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    name="invitedBy"
                    value={formData.invitedBy}
                    onChange={handleChange}
                    required
                    placeholder='Invited by (e.g. "Chat GPT", "Internet")'
                    className={inputStyle}
                  />
                  <input
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    required
                    placeholder="Telegram Handle"
                    className={inputStyle}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center"
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
                  Thank you for applying to Inferno Agency. Our team will review
                  your application and respond shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorApplicationCTA;
