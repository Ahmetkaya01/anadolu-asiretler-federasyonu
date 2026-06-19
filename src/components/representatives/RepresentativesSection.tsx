"use client";

import { motion } from "framer-motion";
import type { ProvincialRepresentative } from "@/types";
import { fadeUp, stagger, transition } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RepresentativeCard } from "@/components/representatives/RepresentativeCard";

type RepresentativesSectionProps = {
  representatives: ProvincialRepresentative[];
  showAllLink?: boolean;
  limit?: number;
};

export function RepresentativesSection({
  representatives,
  showAllLink = true,
  limit,
}: RepresentativesSectionProps) {
  const items = limit ? representatives.slice(0, limit) : representatives;

  return (
    <section className="border-y border-gold/10 bg-surface/40 py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Teşkilatlanma"
            title="İl Temsilcilerimiz"
            description="81 il temsilcilik yapılanmamız kapsamında görev yapan temsilcilerimiz. Tüm illeri görüntülemek için detay sayfasını ziyaret edin."
            align="center"
          />
        </Reveal>

        <motion.div
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger.container}
        >
          {items.map((rep, index) => (
            <motion.div key={rep.id} variants={fadeUp} transition={transition.base}>
              <RepresentativeCard representative={rep} priority={index < 4} />
            </motion.div>
          ))}
        </motion.div>

        {showAllLink && (
          <Reveal delay={0.08} className="mt-10 text-center">
            <Button href="/kurumsal/il-temsilcileri" variant="ghost" size="sm">
              81 il temsilcilik haritası →
            </Button>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
