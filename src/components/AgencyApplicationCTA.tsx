import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const AgencyApplicationCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    agencyName: "",
    applicantName: "",
    modelsCount: "",
    email: "",
    telegram: "",
    info: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const inputStyle =
    "w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-sm text-text-primary placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitToAirtable = async () => {
    const res = await fetch(
      "https://api.airtable.com/v0/appZ57oHkxygjxP2t/Agency%20Applications",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer patMw58sUAUu5MXaL.a45f23e0af4541edaac651286ae315a05f70e84d815674aa35dafc9bd5f70728",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            fld56r33Zsd7dMqEW: formData.agencyName,
            fldeUFlYghycDxzOL: formData.applicantName,
            fldqokrD4sDD6QpuO: parseInt(formData.modelsCount),
            fldQPMHMk9HZQALeU: formData.email,
            fldvlSWSzVQolKuP8: formData.telegram,
            fldI5uz76Ev8AEdz5: formData.info,
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
    <div className="relative overflow-hidden py-24">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-background-light rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
              Apply as an Agency
            </h2>
            <p className="text-text-secondary text-center mb-8 max-w-2xl mx-auto">
              Share your agency’s info to join Inferno Agency’s network of elite
              partners.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    name="agencyName"
                    value={formData.agencyName}
                    onChange={handleChange}
                    required
                    placeholder="Agency Name"
                    className={inputStyle}
                  />
                  <input
                    name="applicantName"
                    value={formData.applicantName}
                    onChange={handleChange}
                    required
                    placeholder="Applicant Name"
                    className={inputStyle}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="number"
                    name="modelsCount"
                    value={formData.modelsCount}
                    onChange={handleChange}
                    required
                    placeholder="Number of Models"
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
                <input
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  required
                  placeholder="Telegram Handle"
                  className={inputStyle}
                />
                <textarea
                  name="info"
                  value={formData.info}
                  onChange={handleChange}
                  required
                  placeholder="What should we know before our call?"
                  rows={5}
                  className={`${inputStyle} resize-none`}
                />
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
                  Thank you for applying. Our team will review your agency info
                  and get in touch soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyApplicationCTA;
