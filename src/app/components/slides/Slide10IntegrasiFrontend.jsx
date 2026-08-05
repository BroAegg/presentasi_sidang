"use client";

import { motion } from "framer-motion";
import { Server } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

export default function Slide10IntegrasiFrontend() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Hasil Integrasi Frontend & Simulasi Autofill</h2>
        <p className="slide-subtitle mt-1">
          Alur komunikasi Client-Server via RESTful API dan responsivitas formulir PMB UMB
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          {/* Left Column: API Architecture & JSON Structure */}
          <div className="col-span-5 flex flex-col justify-between gap-3">
            {/* Architecture Card */}
            <motion.div variants={item} className="content-card p-4">
              <div className="flex items-center gap-2 mb-2 text-cyan-400">
                <Server size={18} />
                <h3 className="text-xs font-bold uppercase tracking-wider">Arsitektur API Communication</h3>
              </div>
              <div className="space-y-1.5 text-xs">
                <p className="text-cream-200">
                  <strong className="text-cream-100">Frontend:</strong> Portal PMB Laravel (PHP)
                </p>
                <p className="text-cream-200">
                  <strong className="text-cream-100">Tunneling:</strong> Ngrok Secure Public Tunnel
                </p>
                <p className="text-cream-200">
                  <strong className="text-cream-100">Endpoint:</strong> <code className="text-cyan-300">POST /api/scan-ktp</code>
                </p>
              </div>
            </motion.div>

            {/* JSON Response Sample Payload */}
            <motion.div variants={item} className="content-card p-3 font-mono text-[0.65rem] bg-[#060b13]">
              <div className="text-gold-400 font-bold mb-1 border-b border-white/10 pb-0.5">JSON Payload Response (200 OK)</div>
              <pre className="text-emerald-400 overflow-x-auto">
{`{
  "status": "success",
  "nik": "3204012506980001",
  "nama": "UJANG SURYADI",
  "tempat_lahir": "BANDUNG",
  "tanggal_lahir": "25-06-1998",
  "jenis_kelamin": "LAKI-LAKI",
  "alamat": "JL. SOEKARNO HATTA NO. 752",
  "confidence": 88.5,
  "processing_time": 32.77
}`}
              </pre>
            </motion.div>
          </div>

          {/* Right Column: Frontend Autofill Simulation Image Asset */}
          <motion.div variants={item} className="col-span-7 flex items-center">
            <div className="image-placeholder w-full h-full min-h-[270px] rounded-xl flex items-center justify-center p-3">
              <img
                src="/assets/simulasi-frontend.jpeg"
                alt="Simulasi Frontend"
                className="w-full h-full object-contain"
                onError={(e) => {
                  if (!e.target.dataset.triedPng) {
                    e.target.dataset.triedPng = "true";
                    e.target.src = "/assets/simulasi-frontend.png";
                  } else if (!e.target.dataset.triedJpg) {
                    e.target.dataset.triedJpg = "true";
                    e.target.src = "/assets/simulasi-frontend.jpg";
                  } else {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<span style="color:#ddd6c8;font-size:0.75rem">simulasi-frontend</span>';
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
