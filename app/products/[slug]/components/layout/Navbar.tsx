'use client'
import { motion } from "framer-motion";
import { Product } from "@/app/constants/products";

interface NavbarProps {
  product: Product;
}

export const Navbar: React.FC<NavbarProps> = ({ product }) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="bg-white shadow-md px-6 md:px-8 py-4 md:py-5 rounded-full w-[85%] mx-auto pointer-events-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <div
                className="rounded-lg w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: product.logoBgColor }}
              >
                <span className="text-white font-bold text-lg md:text-xl lg:text-2xl">
                  {product.logoText}
                </span>
              </div>
            </motion.div>

            {/* Visit Website Button */}
            <motion.a
              href={product.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#B08D57] text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors"
            >
              Visit Website
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};