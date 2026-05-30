import React from "react";

interface PolicySection {
  title: string;
  content: string[];
}

interface PolicyData {
  title: string;
  lastUpdated: string;
  introduction: string;
  sections: PolicySection[];
}

interface PolicyPageProps {
  data: PolicyData;
}

export default function PolicyPage({ data }: PolicyPageProps) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border/50 bg-surface/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="mb-12 border-b border-border/30 pb-8">
              <h1 className="font-primary text-4xl font-bold text-text md:text-5xl">
                {data.title}
              </h1>

              <p className="mt-4 text-sm text-text-muted">
                Last Updated: {data.lastUpdated}
              </p>

              <p className="mt-6 text-base leading-relaxed text-text-secondary">
                {data.introduction}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {data.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="mb-4 font-primary text-2xl font-semibold text-text">
                    {section.title}
                  </h2>

                  <div className="space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="leading-relaxed text-text-secondary"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}