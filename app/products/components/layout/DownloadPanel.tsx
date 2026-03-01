"use client";

export default function DownloadPanel({ product }: { product: any }) {
  return (
    <section className="relative mx-4 md:mx-10 mt-10">
      <div className="rounded-3xl bg-white/60 backdrop-blur-md border border-white/50 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: text + store buttons */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-1">
            Download The App Now
          </h2>
          <p className="text-sm md:text-base text-black/70 mb-5">
            Book your dream vacation in minutes.
          </p>
          <div className="flex gap-3">
            <a href={product.playUrl} target="_blank" className="bg-black text-white rounded-full px-4 py-2 text-sm">
              Get it on Google Play
            </a>
            <a href={product.appStoreUrl} target="_blank" className="bg-black text-white rounded-full px-4 py-2 text-sm">
              Get it on App Store
            </a>
          </div>
        </div>

        {/* Right: iPhone mock + QR */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[160px] md:w-[200px] aspect-[9/19] rounded-[28px] bg-black p-2 shadow-2xl">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-2xl" />
            <div className="w-full h-full rounded-[22px] bg-white flex items-center justify-center p-3">
              <img
                src={product.qrImage}
                alt="QR Code"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}