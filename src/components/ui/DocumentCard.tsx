import { FileText, Download } from "lucide-react";
import type { FederationDocument } from "@/data/documents";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type DocumentCardProps = {
  document: FederationDocument;
  className?: string;
};

export function DocumentCard({ document, className }: DocumentCardProps) {
  const isAvailable = Boolean(document.url) && document.status === "Güncel";

  return (
    <InteractiveCard className={cn(className)}>
      <article className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-surface-elevated text-gold">
            <FileText className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h2 className="font-display text-xl text-foreground sm:text-2xl">{document.title}</h2>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant={isAvailable ? "gold" : "muted"}>{document.type}</Badge>
              <Badge variant={isAvailable ? "navy" : "burgundy"}>{document.status}</Badge>
            </div>
            {document.description && (
              <p className="mt-3 text-sm leading-relaxed text-muted">{document.description}</p>
            )}
          </div>
        </div>
        {isAvailable ? (
          <Button href={document.url!} variant="secondary" size="sm">
            <Download className="mr-2 h-4 w-4" aria-hidden />
            Belgeyi İndir
          </Button>
        ) : (
          <Button variant="secondary" size="sm" disabled>
            Belge Hazırlanıyor
          </Button>
        )}
      </article>
    </InteractiveCard>
  );
}
