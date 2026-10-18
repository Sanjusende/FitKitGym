import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye, ArrowRight, Layers, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "../data/projects";
import ProjectModal from "./ProjectModal";
import { AngularDivider, Rhombus } from "./GeometricAccents";

export default function Projects({ onSelectProjectForInquiry }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleLiveDemo = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="py-24 bg-[#09090D] relative overflow-hidden">
        {/* Floating background diamonds like reference image */}
        <div className="absolute top-1/4 right-[5%] hidden xl:block pointer-events-none">
          <Rhombus size="lg" color="outline-pink" />
        </div>
        <div className="absolute bottom-1/3 left-[4%] hidden xl:block pointer-events-none">
          <Rhombus size="md" color="pink" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="Portfolio & Prototypes"
            title="SELECTED WORK &"
            highlight="LIVE DEMOS"
            subtitle="Explore high-impact websites designed for local businesses and fast-growing brands. Each project balances stunning visual appeal with conversion-focused architecture."
            align="center"
            theme="dark"
          />

          {/* 3 Projects Grid matching reference image cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-[#121217] border-2 border-[#272733] hover:border-[#FF1458] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_15px_35px_rgba(255,20,88,0.22)]"
              >
                <div>
                  {/* Image Container with Zoom effect */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/30 to-transparent" />

                    {/* Top Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-[#09090D]/90 border border-[#272733] text-white font-mono text-xs uppercase tracking-wider font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Preview Label */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FF1458] text-white text-[10px] font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(255,20,88,0.6)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        {project.previewLabel}
                      </span>
                    </div>

                    {/* Hover Overlay Button to View */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                      <button
                        type="button"
                        onClick={() => handleLiveDemo(project)}
                        className="px-4 py-2 bg-[#FF1458] text-white font-['Teko'] text-lg uppercase tracking-wider font-bold hover:bg-[#E00C4B] transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Interactive Demo</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    {/* Theme accent hint */}
                    <p className="text-[11px] font-mono tracking-widest uppercase text-[#FF1458] font-bold mb-1">
                      {project.theme}
                    </p>

                    {/* Project Title */}
                    <h3 className="font-['Teko'] text-3xl font-bold uppercase tracking-wider text-white group-hover:text-[#FF1458] transition-colors leading-none mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 bg-[#1B1B25] border border-[#2A2A38] text-[11px] font-mono text-[#D4D4D8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="px-6 pb-6 pt-2 border-t border-[#22222F] flex items-center justify-between gap-3 bg-[#101016]">
                  <button
                    type="button"
                    onClick={() => handleLiveDemo(project)}
                    className="flex-1 py-2.5 px-3 bg-[#1A1A26] border border-[#2B2B3E] hover:border-[#FF1458] hover:text-[#FF1458] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#FF1458]" />
                    <span>Live Demo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenDetails(project)}
                    className="flex-1 py-2.5 px-3 bg-[#FF1458] hover:bg-[#E00C4B] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(255,20,88,0.3)]"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Angular Divider directly matching reference image banner */}
      <AngularDivider
        labelLeft="CUSTOM WEBSITES"
        labelRight="START YOURS TODAY"
        hrefLeft="#contact"
        hrefRight="#pricing"
      />

      {/* Project Details / Live Demo Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelectProject={(proj) => {
          onSelectProjectForInquiry(proj);
        }}
      />
    </>
  );
}
