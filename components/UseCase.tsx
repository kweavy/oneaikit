"use client";

import { motion } from "framer-motion";

export interface UseCaseItem {
  icon?: string;
  title: string;
  description: string;
}

interface Props {
  title?: string;
  items: UseCaseItem[];
}

const DynamicUseCases = ({
  title = "Use Cases",
  items
}: Props) => {
  return (
    <section id="use-cases">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {items.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-card p-6 rounded-xl shadow-sm border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{useCase.icon || "✅"}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicUseCases;