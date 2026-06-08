type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

/** Responsive 16:9 YouTube gömme alanı */
export function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
  return (
    <div
      className={`relative mx-auto aspect-video w-full max-w-full overflow-hidden rounded-md border border-navy/10 bg-navy/5 shadow-sm ${className ?? ""}`}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="absolute inset-0 h-full w-full max-w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
