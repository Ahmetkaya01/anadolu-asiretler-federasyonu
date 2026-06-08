import Image from "next/image";
import type { LeadershipMember } from "@/data/leadership";
import { InteractiveCard } from "@/components/ui/InteractiveCard";

export function LeadershipCard({ member }: { member: LeadershipMember }) {
  if (member.isPlaceholder) {
    return (
      <div className="flex h-full min-h-[220px] items-center justify-center rounded-md border border-dashed border-navy/15 bg-cream-dark/30 p-6 text-center">
        <p className="text-sm text-slate/60">Yönetim Kurulu Üyesi</p>
      </div>
    );
  }

  return (
    <InteractiveCard bodyClassName="text-center">
      <article>
        {member.image ? (
          <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-gold/30 bg-cream-dark/40">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-contain object-top"
              sizes="128px"
              quality={85}
            />
          </div>
        ) : (
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold/40 to-burgundy/30 font-display text-2xl text-navy/40 transition-smooth group-hover:scale-105">
            {member.name.charAt(0)}
          </div>
        )}
        <h2 className="mt-4 font-display text-xl text-navy sm:text-2xl">{member.name}</h2>
        <p className="mt-2 text-sm font-semibold text-burgundy">{member.role}</p>
        {member.subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-slate">{member.subtitle}</p>
        )}
      </article>
    </InteractiveCard>
  );
}
