// src/components/ZaloQRModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const ZaloQRModal = ({ isOpen, onClose, zaloQR, zaloPhone }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-sm w-full mx-4 shadow-xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <FaTimes className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Kết bạn Zalo
            </h3>

            {/* QR Code */}
            <div className="bg-white p-4 rounded-xl shadow-inner mb-4">
              <img
                src={zaloQR}
                alt="Zalo QR Code"
                className="w-48 h-48 mx-auto"
              />
            </div>

            {/* Instructions */}
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <p>Quét mã QR để kết bạn Zalo</p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <p className="font-medium mb-1">Nếu mã QR không hoạt động:</p>
                <p>Tìm số điện thoại Zalo</p>
                <p className="font-bold text-[#2193b0]">{zaloPhone}</p>
              </div>
            </div>

            {/* Zalo App Button */}
            <a
              href={`https://zalo.me/${zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 bg-[#0068ff] text-white rounded-lg hover:bg-[#0055cc] transition-colors"
            >
              Mở Zalo App
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ZaloQRModal;