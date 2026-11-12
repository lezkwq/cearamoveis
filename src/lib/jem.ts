export const photos = {
  cozinhaBalcao: "/imagens/cozinha-com-balcao.jpg",
  cozinhaPortal: "/imagens/cozinha-com-portal-ripado.jpg",
  cozinhaCurva: "/imagens/cozinha-com-armarios-curvos.jpg",
  dormitorio: "/imagens/dormitorio-com-armario-espelhado.jpg",
  jantarIntegrado: "/imagens/jantar-com-banco-estofado.jpg",
  painelClaro: "/imagens/painel-de-tv-claro.jpg",
  painelEscuro: "/imagens/painel-de-tv-escuro.jpg",
  cozinhaCristaleira: "/imagens/cozinha-com-cristaleira.jpg",
  salaRipado: "/imagens/sala-com-teto-ripado.jpg",
  cozinhaCinza: "/imagens/cozinha-cinza.jpg",
  cozinhaEspelhada: "/imagens/cozinha-com-armarios-espelhados.jpg",
  bancadaPreta: "/imagens/cozinha-com-bancada-preta.jpg",
  closetMadeira: "/imagens/closet-amadeirado.jpg",
  cantinhoCafe: "/imagens/cantinho-do-cafe.jpg",
  integrado: "/imagens/jantar-com-adega.jpg",
  cozinhaCompacta: "/imagens/cozinha-compacta.jpg",
  closetEscuro: "/imagens/closet-grafite.jpg",
  cozinhaVidro: "/imagens/cozinha-com-armarios-de-vidro.jpg",
  fachada: "/imagens/fachada-jem.jpg",
  cozinhaLinear: "/imagens/cozinha-linear.jpg",
  quartoMadeira: "/imagens/quarto-com-armarios-amadeirados.jpg",
  painelGrafite: "/imagens/painel-ripado-grafite.jpg",
};

export const phoneNumber = "+5547999911085";
export const phoneLabel = "(47) 99991-1085";

const wa = (text: string) =>
  `https://wa.me/${phoneNumber.slice(1)}?text=${encodeURIComponent(text)}`;

export const whatsapp = {
  geral: wa(
    "Olá, J & M. Quero conversar sobre um projeto de móveis sob medida. Posso enviar as medidas e algumas referências?",
  ),
  projetos: wa(
    "Olá, J & M. Vi os projetos no site e quero conversar sobre um ambiente sob medida. Posso explicar o que tenho em mente?",
  ),
  ambientes: wa(
    "Olá, J & M. Gostaria de conversar sobre móveis sob medida para os ambientes da minha casa.",
  ),
};

export const instagramUrl = "https://www.instagram.com/jemmoveisplanejados/";
