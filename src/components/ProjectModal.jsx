import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Check, Sparkles, Monitor, Layers, ArrowRight } from "lucide-react";
import Button from "./Button";
import { Rhombus } from "./GeometricAccents";

export default function ProjectModal({ project, isOpen, onClose, onSelectProject }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#09090D]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#121217] border-2 border-[#272733] shadow-[0_0_50px_rgba(0,0,0,0.9)] z-10 overflow-hidden my-8"
        >
          {/* Top Header Bar */}
          <div className="bg-[#181822] px-6 py-4 border-b border-[#272733] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Rhombus size="xs" color="pink" />
              <span className="text-xs uppercase tracking-widest font-mono text-[#A1A1AA]">
                Project Prototype & Architectural Overview
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#A1A1AA] hover:text-white hover:bg-[#252535] transition-colors rounded-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-[#FF1458]" />
            </button>
          </div>

          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            {/* Top Image Preview Banner */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden border border-[#272733] mb-6 group">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090D] via-[#09090D]/40 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-[#FF1458] text-white px-3 py-1 text-xs font-bold font-mono uppercase tracking-wider">
                {project.category}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs uppercase tracking-widest text-[#FF1458] font-bold">
                  {project.subtitle}
                </span>
                <h3 className="font-['Teko'] text-3xl sm:text-5xl font-bold uppercase text-white leading-none">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="font-['Teko'] text-2xl uppercase tracking-wider text-white mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                    {project.fullOverview}
                  </p>
                </div>

                <div>
                  <h4 className="font-['Teko'] text-2xl uppercase tracking-wider text-white mb-3">
                    Built-in Capabilities & UI Modules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 bg-[#16161F] border border-[#272733] text-xs text-[#E4E4E7]"
                      >
                        <Check className="w-4 h-4 text-[#FF1458] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Metrics */}
              <div className="space-y-4">
                <div className="p-4 bg-[#16161F] border border-[#272733] space-y-3">
                  <h4 className="font-['Teko'] text-xl uppercase tracking-wider text-white border-b border-[#272733] pb-2">
                    Key Specifications
                  </h4>
                  {project.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                        {stat.label}
                      </span>
                      <span className="text-sm font-bold text-white">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#16161F] border border-[#272733] space-y-2">
                  <h4 className="font-['Teko'] text-xl uppercase tracking-wider text-white border-b border-[#272733] pb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#20202E] border border-[#2E2E3E] text-[11px] font-mono text-[#FF1458]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#272733] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                <Monitor className="w-4 h-4 text-[#FF1458]" />
                <span>
                  Demo Status: <strong className="text-white">{project.previewLabel}</strong>
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    onClose();
                    onSelectProject(project);
                  }}
                >
                  Request Similar Website
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
