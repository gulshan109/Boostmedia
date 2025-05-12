import { useState } from "react";

const faqs = [
  {
    question: "What is BoostMedia?",
    answer:
      "BoostMedia is a digital marketing agency focused on helping Indian political parties like BJP, AAP, Congress and more with digital outreach."
  },
  {
    question: "Which services do you provide?",
    answer:
      "We offer political branding, social media campaigns, SEO, voter engagement strategies, and detailed analytics for campaign performance."
  },
  {
    question: "Is BoostMedia available nationwide?",
    answer:
      "Yes, we provide services across all states in India, including remote campaign management and digital outreach."
  },
  {
    question: "How can I get in touch?",
    answer:
      "You can reach us via the contact form on our website or email us directly at contact@boostmedia.in."
  }
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-10 px-6 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-sm transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-5 flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-xl text-blue-600">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-5 text-gray-600 border-t border-gray-100 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
