import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/549261415985"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    whileHover={{ scale: 1.1 }}
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </motion.a>
);

export default WhatsAppButton;
