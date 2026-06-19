import Image from "next/image";
import { Phone, UserRound } from "lucide-react";
import type { LeadershipMember } from "@/data/leadership";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { cn } from "@/lib/utils";

type LeadershipCardProps = {
  member: LeadershipMember;
  featured?: boolean;
};

function MemberPhone({ member }: { member: LeadershipMember }) {
  if (!member.phone || !member.phoneHref) return null;

  return (
    <a
      href={member.phoneHref}
      className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-medium text-gold transition-smooth hover:text-gold-light"
    >
      <Phone className="h-4 w-4 shrink-0" aria-hidden />
      {member.phone}
    </a>
  );
}

export function LeadershipCard({ member, featured = false }: LeadershipCardProps) {
  if (member.isPlaceholder) {
    return (
      <div className="flex h-full min-h-[220px] flex-col items-center justify-center rounded-md border border-dashed border-navy/15 bg-surface-elevated/30 p-6 text-center">
        <UserRound className="h-10 w-10 text-muted/30" aria-hidden />
        <p className="mt-4 font-display text-lg text-foreground/60">Yeni Üye Duyurusu</p>
        <p className="mt-2 text-sm text-muted/60">Yakında paylaşılacaktır</p>
      </div>
    );
  }

  if (featured) {
    return (
      <InteractiveCard bodyClassName="text-center">
        <article>
          {member.image ? (
            <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-md border-2 border-gold/40 bg-surface-elevated/40 shadow-card">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain object-top"
                sizes="192px"
                quality={90}
              />
            </div>
          ) : (
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-md bg-gradient-to-br from-gold/20 to-burgundy/15">
              <UserRound className="h-16 w-16 text-foreground/25" aria-hidden />
            </div>
          )}
          <h2 className="mt-6 font-display text-2xl text-foreground sm:text-3xl">{member.name}</h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-burgundy">
            {member.role}
          </p>
          {member.subtitle && (
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {member.subtitle}
            </p>
          )}
          <MemberPhone member={member} />
        </article>
      </InteractiveCard>
    );
  }

  return (
    <InteractiveCard bodyClassName="text-center">
      <article>
        {member.image ? (
          <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-gold/30 bg-surface-elevated/40">
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
          <div
            className={cn(
              "mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-surface-elevated to-navy/20 text-foreground/30",
              featured ? "h-24 w-24" : "h-20 w-20",
            )}
          >
            <UserRound className="h-10 w-10" aria-hidden />
          </div>
        )}
        <h2 className="mt-4 font-display text-xl text-foreground sm:text-2xl">{member.name}</h2>
        <p className="mt-2 text-sm font-semibold text-burgundy">{member.role}</p>
        {member.subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-muted">{member.subtitle}</p>
        )}
        <MemberPhone member={member} />
      </article>
    </InteractiveCard>
  );
}
