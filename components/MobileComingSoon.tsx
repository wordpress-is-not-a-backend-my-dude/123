import React from 'react';
import { motion } from 'framer-motion';

interface MobileComingSoonProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileComingSoon: React.FC<MobileComingSoonProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 max-w-md mx-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Welcome to Verity</h2>
        <p className="text-white mb-4">
          We couldn&apos;t help but notice you&apos;re on mobile, and we&apos;re super excited to have you here. This is a demonstration of the capabilities we are working on for building an incredible mobile crypto experience.
        </p>
        <p className="text-white mb-4">
          For the best experience, please use your desktop or laptop. We'd love to hear your feedback and thoughts as we build this out
        </p>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Let&apos;s break it together
        </button>
      </div>
    </motion.div>
  );
};

export default MobileComingSoon;

