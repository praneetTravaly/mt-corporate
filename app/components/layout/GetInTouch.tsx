"use client";

export default function GetInTouch() {
  return (
    <section className="w-full flex items-center justify-center bg-gradient-to-b from-[#E9E0D1] via-[#EFE7D8] to-[#F7F3EC] px-4 md:px-10 py-8 md:py-12">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#1C1C1C]">
            Get In Touch
          </h2>
          <p className="mt-1 text-sm md:text-base text-[#5F5F5F]">
            Contact us
          </p>
        </div>

        {/* Form */}
        <form className="w-full space-y-4 md:space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full h-12 md:h-14 rounded-full border border-[#C79A5B] bg-[#FBF8F2] px-5 md:px-6 text-sm md:text-base outline-none placeholder:text-[#6F6F6F] focus:ring-2 focus:ring-[#C79A5B]/30"
          />

          <input
            type="email"
            placeholder="E-mail"
            className="w-full h-12 md:h-14 rounded-full border border-[#C79A5B] bg-[#FBF8F2] px-5 md:px-6 text-sm md:text-base outline-none placeholder:text-[#6F6F6F] focus:ring-2 focus:ring-[#C79A5B]/30"
          />

          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full min-h-[110px] md:min-h-[140px] rounded-[28px] border border-[#C79A5B] bg-[#FBF8F2] px-5 md:px-6 py-3 md:py-4 text-sm md:text-base outline-none placeholder:text-[#6F6F6F] resize-none focus:ring-2 focus:ring-[#C79A5B]/30"
          />

          <div className="flex justify-center pt-2 md:pt-4">
            <button
              type="submit"
              className="px-8 md:px-12 h-10 md:h-12 rounded-full bg-[#1C1C1C] text-white text-sm md:text-base font-medium hover:bg-black transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}