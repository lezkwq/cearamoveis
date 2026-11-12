import { createFileRoute } from "@tanstack/react-router";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Star } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Reveal, RevealImage } from "@/components/site/reveal";
import { photos, whatsapp, instagramUrl, phoneLabel, phoneNumber } from "@/lib/jem";

export const Route = createFileRoute("/")({
  component: Index,
});

const etapas = [
  { n: "01", t: "Conversa e briefing", d: "Entender ambiente, uso, medidas e referências." },
  { n: "02", t: "Planejamento", d: "Definir a disposição e os acabamentos dos móveis." },
  { n: "03", t: "Fabricação sob medida", d: "O projeto segue para fabricação sob medida." },
  { n: "04", t: "Montagem", d: "Execução e instalação no ambiente." },
];

const avaliacoes = [
  {
    texto: "Atendimento muito bom, e cumpriram o prazo de entrega :)",
    autor: "Tatiane Ferreira Anacleto",
  },
  { texto: "Top ,melhor local preço justo", autor: "Gleydson Cassiano" },
  { texto: "Excelente . Super indico ..", autor: "Maria Lopes" },
];

function Index() {
  return (
    <div className="w-full overflow-x-hidden bg-offwhite">
      <SiteHeader />
      <main className="w-full">
        <Hero />

        {/* INTRODUÇÃO DE MARCA E NÚMEROS */}
        <section className="w-full border-t border-border bg-softwhite py-20 md:py-32">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <RevealImage
                src={photos.integrado}
                alt="Sala de jantar com adega e cristaleira planejadas"
                className="md:col-span-7 aspect-[4/5] md:aspect-[4/3]"
                position="60% 50%"
                eager
              />
              <div className="md:col-span-5 md:pt-6">
                <Reveal>
                  <h2 className="display-lg text-foreground">
                    Há 15 anos
                    <br />
                    transformando espaços.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-8 max-w-[46ch] leading-relaxed text-muted-foreground">
                    A J &amp; M Móveis Planejados cria móveis sob medida em Navegantes, SC. Cada
                    projeto parte das medidas do ambiente e das necessidades de quem vai usá-lo.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-20 grid border-t border-border md:mt-28 md:grid-cols-3">
              {[
                { v: "15 anos", l: "No mercado" },
                { v: "5,0 / 5", l: "5 avaliações no Google" },
                { v: "Navegantes", l: "Santa Catarina" },
              ].map((item, i) => (
                <Reveal
                  key={item.v}
                  delay={i * 0.08}
                  className="border-b border-border py-10 md:border-b-0 md:py-14 md:pr-8 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-10"
                >
                  <p className="font-editorial text-[clamp(2.4rem,4.5vw,4rem)] text-foreground">
                    {item.v}
                  </p>
                  <p className="label-tech mt-4 text-muted-foreground">{item.l}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="w-full bg-offwhite py-20 md:py-32">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <Reveal>
              <p className="label-tech text-muted-foreground">Acervo</p>
              <h2 className="display-lg mt-6 text-foreground">
                Projetos
                <br />
                que saíram do papel.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-4 md:mt-24 md:grid-cols-12 md:gap-6">
              <figure className="md:col-span-8">
                <RevealImage
                  src={photos.cozinhaCristaleira}
                  alt="Cozinha com cristaleira iluminada e península"
                  className="aspect-[4/5] md:aspect-[16/10]"
                  position="50% 62%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Cozinha</figcaption>
              </figure>
              <figure className="md:col-span-4 md:pt-16">
                <RevealImage
                  src={photos.closetMadeira}
                  alt="Closet amadeirado com cabideiros, prateleiras e gavetas"
                  className="aspect-[3/4]"
                  position="50% 32%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Closet</figcaption>
              </figure>
              <figure className="md:col-span-7">
                <RevealImage
                  src={photos.salaRipado}
                  alt="Sala de estar integrada com teto e painel ripados"
                  className="aspect-[4/5] md:aspect-[16/10]"
                  position="45% 58%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Estar</figcaption>
              </figure>
              <figure className="md:col-span-5 md:pt-20">
                <RevealImage
                  src={photos.dormitorio}
                  alt="Dormitório com armário espelhado e nichos iluminados"
                  className="aspect-[4/5]"
                  position="52% 45%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">
                  Dormitório
                </figcaption>
              </figure>
              <figure className="md:col-span-4 md:col-start-2">
                <RevealImage
                  src={photos.painelClaro}
                  alt="Painel de TV claro com nichos iluminados e rack suspenso"
                  className="aspect-[4/5]"
                  position="42% 50%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Estar</figcaption>
              </figure>
              <figure className="md:col-span-5 md:pt-12">
                <RevealImage
                  src={photos.cozinhaEspelhada}
                  alt="Cozinha com armários espelhados e eletrodomésticos embutidos"
                  className="aspect-[4/3]"
                  position="60% 50%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Cozinha</figcaption>
              </figure>
              <figure className="md:col-span-7">
                <RevealImage
                  src={photos.cozinhaCompacta}
                  alt="Cozinha compacta com móveis claros e nichos iluminados"
                  className="aspect-[4/5] md:aspect-[16/10]"
                  position="55% 62%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Cozinha</figcaption>
              </figure>
              <figure className="md:col-span-5 md:pt-16">
                <RevealImage
                  src={photos.jantarIntegrado}
                  alt="Sala de jantar com banco estofado integrada à cozinha"
                  className="aspect-[4/5] md:aspect-[4/3]"
                  position="55% 60%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">
                  Ambiente integrado
                </figcaption>
              </figure>
            </div>

            <Reveal className="mt-14 border-t border-border pt-8">
              <a
                href={whatsapp.projetos}
                target="_blank"
                rel="noreferrer"
                className="label-tech inline-flex items-center gap-3 border border-foreground px-6 py-4 text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                <FaWhatsapp className="size-4" aria-hidden="true" />
                Conversar sobre um ambiente
              </a>
            </Reveal>
          </div>
        </section>

        {/* DETALHE DE MARCENARIA */}
        <section className="w-full bg-charcoal py-20 text-softwhite md:py-32">
          <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 md:grid-cols-12 md:items-center md:gap-16 md:px-10">
            <div className="md:col-span-5">
              <Reveal>
                <h2 className="display-lg">
                  O acabamento
                  <br />
                  continua por dentro.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-[44ch] leading-relaxed text-warmgray">
                  Medida, encaixe, ferragem, montagem. É no uso diário que o móvel precisa continuar
                  funcionando bem.
                </p>
              </Reveal>
            </div>
            <RevealImage
              src={photos.bancadaPreta}
              alt="Cozinha em L com bancada preta e iluminação sob os armários"
              className="md:col-span-7 aspect-[4/5] md:aspect-[3/2]"
              position="55% 55%"
            />
          </div>

          <div className="mx-auto mt-12 grid w-full max-w-[1440px] gap-4 px-5 md:mt-20 md:grid-cols-12 md:gap-6 md:px-10">
            <figure className="md:col-span-4 md:col-start-3">
              <RevealImage
                src={photos.cantinhoCafe}
                alt="Cantinho do café com nicho em arco e portas de vidro canelado"
                className="aspect-[4/3]"
                position="50% 42%"
              />
              <figcaption className="label-tech mt-3 text-warmgray">Cantinho do café</figcaption>
            </figure>
            <figure className="md:col-span-3 md:col-start-8 md:pt-16">
              <RevealImage
                src={photos.painelEscuro}
                alt="Painel de TV ripado com iluminação embutida e rack suspenso"
                className="aspect-[3/4]"
                position="50% 50%"
              />
              <figcaption className="label-tech mt-3 text-warmgray">Painel de TV</figcaption>
            </figure>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="w-full bg-softwhite py-20 md:py-32">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <Reveal>
              <h2 className="display-lg text-foreground">
                Do briefing
                <br />à instalação.
              </h2>
            </Reveal>
            <div className="mt-14 border-t border-border md:mt-24">
              {etapas.map((e, i) => (
                <Reveal
                  key={e.n}
                  delay={i * 0.06}
                  className="grid gap-3 border-b border-border py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-12"
                >
                  <p className="font-editorial text-[clamp(2rem,3.2vw,3rem)] text-taupe md:col-span-2">
                    {e.n}
                  </p>
                  <h3 className="label-tech text-foreground md:col-span-4">{e.t}</h3>
                  <p className="max-w-[48ch] leading-relaxed text-muted-foreground md:col-span-6">
                    {e.d}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MÓVEIS SOB MEDIDA */}
        <section className="w-full border-y border-border bg-offwhite py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 md:grid-cols-12 md:items-end md:px-10">
            <Reveal className="md:col-span-7">
              <h2 className="display-lg text-foreground">
                Feito sob medida
                <br />
                para o seu espaço.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="max-w-[40ch] leading-relaxed text-muted-foreground">
                Armários, nichos e gavetas planejados para aproveitar o espaço e facilitar a rotina.
              </p>
            </Reveal>
          </div>
        </section>

        {/* AMBIENTES */}
        <section className="w-full bg-softwhite py-20 md:py-32">
          <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 md:grid-cols-12 md:items-center md:gap-16 md:px-10">
            <RevealImage
              src={photos.cozinhaLinear}
              alt="Cozinha linear com nicho amadeirado e bancada preta"
              className="md:col-span-7 aspect-[4/3]"
              position="45% 50%"
            />
            <div className="md:col-span-5">
              <Reveal>
                <p className="label-tech text-muted-foreground">Ambientes planejados</p>
                <h2 className="display-md mt-6 text-foreground">
                  Do quarto à cozinha.
                  <br />
                  Cada espaço tem sua medida.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-[44ch] leading-relaxed text-muted-foreground">
                  Planejamos cozinhas, salas, quartos e closets de acordo com o espaço e a rotina da
                  sua casa.
                </p>
                <a
                  href={whatsapp.ambientes}
                  target="_blank"
                  rel="noreferrer"
                  className="label-tech mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-4 text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
                >
                  <FaWhatsapp className="size-4" aria-hidden="true" />
                  Planejar meu ambiente
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="w-full bg-offwhite py-20 md:py-32">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5 md:pt-10">
                <Reveal>
                  <h2 className="display-lg text-foreground">
                    Sobre a J &amp; M
                    <br />
                    Móveis Planejados.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-8 max-w-[46ch] leading-relaxed text-muted-foreground">
                    A J &amp; M é uma empresa de empreendedoras de Navegantes, SC. Há 15 anos,
                    transforma espaços com móveis planejados para o dia a dia de cada cliente.
                  </p>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="label-tech mt-10 text-muted-foreground">
                    <span className="block">Empresa de empreendedoras.</span>
                    <span className="block">Móveis sob medida.</span>
                    <span className="block">Navegantes, SC.</span>
                  </p>
                </Reveal>
              </div>
              <RevealImage
                src={photos.quartoMadeira}
                alt="Quarto com armários amadeirados em torno da cama"
                className="md:col-span-7 aspect-[4/5] md:aspect-[4/3]"
                position="50% 30%"
              />
            </div>

            <Reveal className="mt-20 border-t border-border pt-12 md:mt-28">
              <p className="display-md max-w-[24ch] text-warmbrown">
                Criando móveis que contam história.
              </p>
            </Reveal>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section className="w-full border-t border-border bg-softwhite py-20 md:py-32">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <Reveal className="md:col-span-7">
                <h2 className="display-lg text-foreground">
                  Quem recebe
                  <br />
                  percebe o cuidado.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <div className="flex items-baseline gap-4">
                  <p className="font-editorial text-[clamp(2.2rem,3.4vw,3.2rem)] text-foreground">
                    5,0 / 5
                  </p>
                  <span className="flex gap-1 text-taupe" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3" fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                </div>
                <p className="label-tech mt-3 text-muted-foreground">5 avaliações no Google</p>
              </Reveal>
            </div>

            <div className="mt-16 grid border-t border-border md:mt-24 md:grid-cols-3">
              {avaliacoes.map((a, i) => (
                <Reveal
                  key={a.autor}
                  delay={i * 0.08}
                  className="border-b border-border py-10 md:border-b-0 md:py-14 md:pr-10 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-10"
                >
                  <p className="font-editorial text-[clamp(1.35rem,1.8vw,1.7rem)] leading-snug text-foreground">
                    {a.texto}
                  </p>
                  <p className="label-tech mt-6 text-muted-foreground">{a.autor}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FACHADA */}
        <section className="w-full border-t border-border bg-offwhite py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 md:grid-cols-12 md:items-end md:gap-16 md:px-10">
            <RevealImage
              src={photos.fachada}
              alt="Fachada da J & M Móveis Planejados em Navegantes, SC"
              className="md:col-span-8 aspect-[4/3] md:aspect-[16/9]"
              imgClassName="md:origin-left md:scale-[1.2]"
              position="left center"
            />
            <Reveal delay={0.1} className="md:col-span-4">
              <p className="label-tech text-muted-foreground">Onde fica a J &amp; M</p>
              <address className="mt-6 not-italic leading-relaxed text-foreground">
                R. João Hercílio da Luz, 216
                <br />
                São Pedro
                <br />
                Navegantes, SC · 88370-025
              </address>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contato" className="w-full bg-charcoal py-24 text-softwhite md:py-40">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <Reveal>
              <h2 className="display-xl">
                Tem um ambiente
                <br />
                para resolver?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-[42ch] leading-relaxed text-warmgray">
                Conte para a J &amp; M o que você está planejando.
              </p>
              <a
                href={whatsapp.geral}
                target="_blank"
                rel="noreferrer"
                className="label-tech mt-12 inline-flex items-center gap-3 bg-softwhite px-7 py-5 text-charcoal transition-opacity hover:opacity-85"
              >
                <FaWhatsapp className="size-4" aria-hidden="true" />
                Falar sobre meu projeto
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-offwhite py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <p className="font-editorial text-2xl text-foreground">J &amp; M</p>
            <p className="label-tech mt-2 text-muted-foreground">Móveis Planejados</p>
          </div>
          <address className="not-italic md:col-span-3">
            <p className="leading-relaxed text-muted-foreground">
              R. João Hercílio da Luz, 216
              <br />
              São Pedro
              <br />
              Navegantes, SC · 88370-025
            </p>
          </address>
          <div className="md:col-span-2">
            <p className="leading-relaxed text-muted-foreground">
              Aberto 24 horas
              <br />
              <a href={`tel:${phoneNumber}`} className="hover:text-foreground">
                {phoneLabel}
              </a>
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="flex items-center gap-5">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da J &amp; M"
                className="text-foreground transition-colors hover:text-taupe"
              >
                <FaInstagram className="size-5" />
              </a>
              <a
                href={whatsapp.geral}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da J &amp; M"
                className="text-foreground transition-colors hover:text-taupe"
              >
                <FaWhatsapp className="size-5" />
              </a>
            </div>
            <a
              href={whatsapp.geral}
              target="_blank"
              rel="noreferrer"
              className="label-tech mt-8 inline-block border border-foreground px-5 py-3 text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
            >
              Iniciar conversa
            </a>
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-[1440px] border-t border-border px-5 pt-6 md:px-10">
          <p className="label-tech text-muted-foreground">
            J &amp; M Móveis Planejados, Navegantes, SC
          </p>
        </div>
      </footer>
    </div>
  );
}
