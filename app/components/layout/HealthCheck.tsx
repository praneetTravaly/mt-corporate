"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getCoachInsights } from "../../services/geminiService";
import StatsChart from "../ui/StatsChart";

// Define types
interface FormData {
  hotelName: string;
  location: string;
  totalRooms: string;
  currentOccupancy: string;
  adr: string;
  challenges: string;
}

interface Insight {
  strategyName: string;
  description: string;
  expectedGrowth: string;
  priority: string;
  actionSteps: string[];
}

interface AIResult {
  summary: string;
  revPARPrediction: number[];
  insights: Insight[];
}

const HealthCheck = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    hotelName: "",
    location: "",
    totalRooms: "",
    currentOccupancy: "",
    adr: "",
    challenges: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    
    setLoading(true);
    setError(null);
    
    try {
      const submissionData = {
        ...formData,
        totalRooms: Number(formData.totalRooms),
        currentOccupancy: Number(formData.currentOccupancy),
        adr: Number(formData.adr),
      };
      
      console.log("Calling API with:", submissionData);
      
      const insights = await getCoachInsights(submissionData);
      console.log("API Response:", insights);
      
      setResult(insights);
      
      // Smooth scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById("ai-results");
        if (resultsElement) {
          resultsElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } catch (err: unknown) {
      console.error("API Error:", err);
      
      let errorMessage = "AI is experiencing high demand. Please try again!";
      
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.hotelName.trim() !== "" &&
      formData.location.trim() !== "" &&
      formData.totalRooms !== "" &&
      formData.currentOccupancy !== "" &&
      formData.adr !== ""
    );
  };

  const handleList = () => {
    window.open('/preparation', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full bg-[#F7F5F0] py-4 md:py-10 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 md:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-semibold text-[#B08D57]"
          >
            HBC AI Business Health Check
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="text-sm md:text-lg text-[#B08D57]/80 p-2 md:p-4"
          >
            Use our proprietary AI engine to analyze your current metrics and
            receive a customized growth roadmap instantly.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-20 h-0.5 bg-[#B08D57] mx-auto origin-center"
          />
        </motion.div>

        {/* Form Container - Centered */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(176, 141, 87, 0.35)",
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="w-full max-w-xl bg-[#EDE6D8] rounded-3xl border border-[#B08D57] p-6 md:p-8"
          >
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hotel Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
              >
                <motion.input
                  whileFocus={{
                    scale: 1.02,
                    borderColor: "#B08D57",
                    boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  name="hotelName"
                  value={formData.hotelName}
                  onChange={handleInputChange}
                  placeholder="HOTEL NAME"
                  required
                  className="w-full rounded-full border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                />
              </motion.div>

              {/* Two column row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                >
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "#B08D57",
                      boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="LOCATION"
                    required
                    className="w-full rounded-full border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
                >
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "#B08D57",
                      boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                    type="number"
                    name="totalRooms"
                    value={formData.totalRooms}
                    onChange={handleInputChange}
                    placeholder="ROOMS"
                    required
                    className="w-full rounded-full border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                  />
                </motion.div>
              </div>

              {/* Two column row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.35, ease: "easeOut" }}
                >
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "#B08D57",
                      boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                    type="number"
                    name="currentOccupancy"
                    value={formData.currentOccupancy}
                    onChange={handleInputChange}
                    placeholder="OCCUPANCY %"
                    required
                    className="w-full rounded-full border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.35, ease: "easeOut" }}
                >
                  <motion.input
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "#B08D57",
                      boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                    type="number"
                    name="adr"
                    value={formData.adr}
                    onChange={handleInputChange}
                    placeholder="ADR $"
                    required
                    className="w-full rounded-full border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                  />
                </motion.div>
              </div>

              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
              >
                <motion.textarea
                  whileFocus={{
                    scale: 1.01,
                    borderColor: "#B08D57",
                    boxShadow: "0 0 0 3px rgba(176, 141, 87, 0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleInputChange}
                  placeholder="CHALLENGES (e.g., High OTA fees, Low direct bookings)"
                  rows={4}
                  className="w-full rounded-2xl border border-[#B08D57] bg-[#FAF7F1] px-5 py-3 text-sm placeholder-[#B08D57]/70 resize-none focus:outline-none focus:ring-1 focus:ring-[#B08D57] transition-all duration-200"
                />
              </motion.div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm"
                >
                  {error}
                </motion.div>
              )}

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.45, ease: "easeOut" }}
                className="flex justify-center pt-2"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(176, 141, 87, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  type="submit"
                  disabled={loading || !isFormValid()}
                  className={`rounded-full px-6 py-2 text-sm font-medium text-white transition-all duration-200 cursor-pointer ${
                    loading || !isFormValid()
                      ? "bg-[#B08D57]/50 cursor-not-allowed"
                      : "bg-[#B08D57] hover:bg-[#9e7d4e]"
                  }`}
                >
                  {loading ? "Analyzing..." : "Analyze my business"}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* AI Results Section - Full Width */}
        <div id="ai-results" className="mt-8 w-full">
          {!result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#EDE6D8] rounded-3xl border border-[#B08D57] p-12 text-center"
            >
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-[#B08D57] mb-2">Get Your Personalized Audit</h3>
              <p className="text-[#B08D57]/70">Fill in the form to see where your hotel can grow.</p>
            </motion.div>
          )}

          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#EDE6D8] rounded-3xl border border-[#B08D57] p-12 text-center"
            >
              <div className="flex justify-center gap-2 mb-6">
                <div className="w-4 h-4 bg-[#B08D57] rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-[#B08D57] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-4 h-4 bg-[#B08D57] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
              <p className="text-[#B08D57] font-bold text-xl">Our AI Mentor is analyzing your market data...</p>
            </motion.div>
          )}

          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Strategic Summary */}
              <div className="bg-[#EDE6D8] rounded-3xl border border-[#B08D57] p-8">
                <h3 className="text-xl font-semibold text-[#B08D57] mb-4 flex items-center gap-3">
                  <span className="text-2xl">🧠</span> Strategic Summary
                </h3>
                <p className="text-gray-700 italic leading-relaxed">"{result.summary}"</p>
              </div>

              {/* Chart */}
              <div className="bg-[#EDE6D8] rounded-3xl border border-[#B08D57] p-8">
                <h3 className="text-lg font-semibold text-[#B08D57] mb-6">Predicted RevPAR Impact (Next 6 Months)</h3>
                <StatsChart data={result.revPARPrediction} />
              </div>

              {/* Insights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.insights.map((insight, idx) => (
                  <div key={idx} className="bg-[#EDE6D8] rounded-2xl border border-[#B08D57] p-6 hover:shadow-lg transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-semibold text-[#B08D57] text-sm uppercase tracking-tight">{insight.strategyName}</h4>
                      <span className={`px-2 py-1 rounded-md text-[8px] font-semibold uppercase ${
                        insight.priority === 'High' 
                          ? 'bg-red-100 text-red-600' 
                          : insight.priority === 'Medium'
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-green-100 text-green-600'
                      }`}>
                        {insight.priority}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">{insight.description}</p>
                    <div className="bg-[#FAF7F1] p-4 rounded-2xl">
                      <span className="text-[10px] font-semibold text-[#B08D57] block mb-2 uppercase">Core Action Steps</span>
                      <ul className="space-y-2">
                        {insight.actionSteps.slice(0, 2).map((step, sIdx) => (
                          <li key={sIdx} className="text-[11px] text-gray-700 flex items-start gap-2">
                            <span className="text-[#B08D57]">•</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-[#B08D57] to-[#9e7d4e] p-6 rounded-2xl flex flex-col justify-center items-center text-center text-white min-h-[250px]">
                  <h4 className="font-bold text-lg mb-3">Ready to Take Action?</h4>
                  <p className="text-sm text-white/80 mb-6 max-w-[200px]">
                    Implement these strategies by listing your property on MyTravaly today!
                  </p>
                  <button
                    onClick={handleList}
                    className="px-6 py-3 bg-white text-[#B08D57] rounded-xl font-bold text-sm shadow-lg hover:bg-[#FAF7F1] transition-all hover:scale-105 w-full"
                  >
                    List Your Property
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HealthCheck;