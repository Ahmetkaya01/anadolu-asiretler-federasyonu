import { getActiveSocialLinks } from "@/config/site";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className }: SocialLinksProps) {
  const links = getActiveSocialLinks();

  if (links.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex gap-3", className)}>
      {links.map(({ platform, href }) => (
        <SocialIcon key={platform} platform={platform} href={href} />
      ))}
    </div>
  );
}
