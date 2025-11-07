import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      pergunta: "Como funciona a rifa?",
      resposta:
        "Você escolhe uma rifa ativa e faz o pagamento de quantos números desejar. Após a confirmação, você deve entrar em contato pelo WhatsApp com o organizador para receber seus números de acordo com a quantia paga. No dia do sorteio, com base na Loteria Federal, o ganhador é definido de acordo com o resultado publicado.",
    },
    {
      pergunta: "Como é feito o sorteio?",
      resposta:
        "O sorteio é baseado no resultado da Loteria Federal. O número sorteado corresponde ao bilhete premiado aqui. Isso garante transparência e segurança para todos os participantes.",
    },
    {
      pergunta: "Quando será o sorteio?",
      resposta:
        "A data do sorteio será anunciada no grupo oficial da ação e no anúncio da rifa. Caso a data seja alterada, os participantes serão avisados com antecedência.",
    },
    {
      pergunta: "Como recebo meu prêmio se ganhar?",
      resposta:
        "Entraremos em contato diretamente pelo WhatsApp do ganhador. A entrega ou retirada será combinada de acordo com sua localização. Se for físico, pode ser entregue pessoalmente ou enviado; se for valor, é transferido.",
    },
    {
      pergunta: "Posso comprar quantos números?",
      resposta:
        "Sim! Você pode comprar quantos números desejar, desde que estejam disponíveis no momento da compra.",
    },
    {
      pergunta: "Como sei que meu número foi reservado?",
      resposta:
        "Após o pagamento ser confirmado, você recebe uma mensagem de confirmação com o(s) número(s) reservado(s). Também pode consultar no painel da ação ou diretamente com o organizador.",
    },
    {
      pergunta: "Qual a forma de pagamento?",
      resposta: "Aceitamos Pix e Cartão de crédito/débito.",
    },
    {
      pergunta:
        "O que acontece se a rifa não atingir o número mínimo de participantes?",
      resposta:
        "Caso a ação não atinja o número mínimo necessário, o sorteio poderá ser adiado. Se ainda assim não ocorrer, oferecemos reembolso integral aos participantes.",
    },
    {
      pergunta:
        "E se o número sorteado da Loteria Federal for maior que a quantidade de números da rifa?",
      resposta:
        "Com 100 números disponíveis, usamos apenas os 2 últimos dígitos do resultado da Loteria Federal. Se sair 00, o vencedor é o número 100. Se sair de 01 a 99, esse é o número vencedor.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Perguntas Frequentes
        </h2>
        <p className="text-muted-foreground">Tire suas dúvidas sobre a rifa</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            className="border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden"
          >
            <CardContent className="p-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-bold text-lg text-card-foreground">
                  {faq.pergunta}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.resposta}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
