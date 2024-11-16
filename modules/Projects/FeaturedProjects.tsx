"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { LineMdExternalLink } from "../../components/icon/LineMdExternalLink";
import { projects, techColors } from "@/constants";

export const FeaturedProjects = ({ className }: { className?: string }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-1 mb-6", className)}
    >
      {projects.map((project: Project, idx) => (
        <button
          key={project.link}
          className="relative group block p-2 h-full w-full text-left"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => window.open(project.link, "_blank")}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-muted block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="overflow-hidden h-full bg-background border relative z-20">
            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <Link
                  href={project.link}
                  target="_blank"
                  className="font-semibold text-primary hover:underline"
                >
                  {project.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      style={{
                        backgroundColor:
                          techColors[project.tech as keyof typeof techColors],
                      }}
                      className={cn("size-3 rounded-full")}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {project.tech}
                    </span>
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Project
                    <LineMdExternalLink className="inline-block size-4" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </button>
      ))}
    </div>
  );
};
