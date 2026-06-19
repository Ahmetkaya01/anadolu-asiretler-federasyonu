"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FormField } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { InteractiveCard } from "@/components/ui/InteractiveCard";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`İletişim: ${data.get("name")}`);
    const body = encodeURIComponent(
      `Ad Soyad: ${data.get("name")}\nE-posta: ${data.get("email")}\nTelefon: ${data.get("phone")}\n\nMesaj:\n${data.get("message")}`,
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <InteractiveCard>
        <p className="font-display text-xl text-foreground">Mesajınız hazırlandı</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          E-posta uygulamanız açıldı. Gönderimi tamamlamak için e-postanızı
          kontrol edin veya doğrudan{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-semibold text-burgundy underline"
          >
            {siteConfig.contact.email}
          </a>{" "}
          adresine yazın.
        </p>
      </InteractiveCard>
    );
  }

  return (
    <InteractiveCard>
      <h2 className="font-display text-2xl text-foreground">Bize Yazın</h2>
      <p className="mt-2 text-sm text-muted">
        Formu doldurun; mesajınız e-posta uygulamanız üzerinden iletilecektir.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <FormField label="Ad Soyad" htmlFor="name" required>
          <Input id="name" name="name" required placeholder="Adınız ve soyadınız" />
        </FormField>
        <FormField label="E-posta" htmlFor="email" required>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ornek@email.com"
          />
        </FormField>
        <FormField label="Telefon" htmlFor="phone">
          <Input id="phone" name="phone" type="tel" placeholder="05xx xxx xx xx" />
        </FormField>
        <FormField label="Mesajınız" htmlFor="message" required>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Mesajınızı buraya yazın…"
          />
        </FormField>
        <Button type="submit" variant="primary">
          Mesaj Gönder
        </Button>
      </form>
    </InteractiveCard>
  );
}
