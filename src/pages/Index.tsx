import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Instagram,
  Shield,
  Info,
  ListChecks,
  CreditCard,
  Sparkles,
} from "lucide-react";
import product from "@/assets/data/product.json";
import FAQSection from "@/components/FAQSection";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PARTICIPANTS_URL, PAYMENT_URL } from "@/constants/global.constants";

const Index = () => {
  const [open, setOpen] = useState(false);

  const handleReserva = () => {
    window.location.href = PAYMENT_URL;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 transition-colors duration-300">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-sm">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>

          <h1
            className="
              text-2xl md:text-3xl font-extrabold tracking-tight
              bg-clip-text text-transparent
              bg-gradient-to-r from-primary via-primary/60 to-neutral-200
              dark:from-primary dark:via-primary/70 dark:to-white/90
            "
          >
            Dia da Sorte
          </h1>
        </div>

        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Ação entre Amigos
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Sorteios entre amigos, simples e seguros
            </h2>
            <p className="text-muted-foreground text-lg">
              Participe agora e concorra a este incrível prêmio!
            </p>
          </div>

          <Card className="overflow-hidden border-2 mb-8 animate-fade-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-500">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative w-full overflow-hidden bg-muted/30 rounded-lg">
                  <img
                    src={product.image_url}
                    alt={`Prêmio - ${product.title}`}
                    className="
                      w-full
                      h-auto
                      max-h-[260px]        /* altura máxima no mobile */
                      md:max-h-[420px]     /* altura máxima no desktop */
                      object-contain       /* não corta no mobile */
                      md:object-cover      /* fica bonito no desktop */
                      transition-transform duration-700
                      hover:scale-105
                    "
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground font-bold text-sm px-3 py-1">
                      PRÊMIO
                    </Badge>
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
                  <div className="space-y-8">
                    <div className="text-center mb-6">
                      <span className="px-4 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary">
                        Sorteio
                      </span>
                      <h3 className="mt-2 text-4xl font-bold text-card-foreground leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border border-border bg-muted/10 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Valor Unitário
                      </span>
                      <span className="text-3xl font-bold text-primary tracking-tight">
                        R$ {product.unit_price}
                      </span>
                    </div>

                    <div>
                      <span className="px-3 py-1 text-xs font-medium rounded-md bg-secondary/60 text-secondary-foreground tracking-wide">
                        Data do sorteio: {product.result_date ?? "Em breve..."}
                      </span>
                    </div>

                    <Button
                      onClick={handleReserva}
                      size="lg"
                      className="
                        w-full text-lg font-bold
                        bg-gradient-to-r
                        from-primary/80 to-primary/40
                        dark:from-primary dark:to-primary-glow
                        hover:opacity-90
                        transition-all duration-300
                        shadow-lg
                        hover:shadow-[var(--shadow-glow)]
                        animate-glow
                      "
                    >
                      Realizar Reserva
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8 animate-fade-in">
            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">
                      100% Confiança no Resultado
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      O sorteio será realizado com base na{" "}
                      <strong>Loteria Federal</strong>, garantindo total
                      transparência e imparcialidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">
                      100% Segurança no Pagamento
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      O pagamento é processado pela <strong>InfinitePay</strong>
                      , garantindo segurança e proteção de todos os seus dados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <ListChecks className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">
                      Visualize os números já reservados
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Clique abaixo para verificar os números que já foram
                      escolhidos:
                    </p>
                    <a
                      href={PARTICIPANTS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline mt-2 inline-block"
                    >
                      Ver lista de números reservados
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent mb-8 animate-fade-in">
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="p-4 rounded-full bg-accent/10">
                  <Info className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold">
                    Regra Oficial do Sorteio
                  </h4>
                  <div className="max-w-2xl mx-auto space-y-2">
                    <p className="text-lg font-semibold text-foreground">
                      O ganhador é definido pelos 3 últimos dígitos do 1º prêmio
                      da Loteria Federal.
                    </p>
                    <p className="text-muted-foreground">
                      Se passar do último número da rifa, subtrai o total da
                      rifa até voltar para a faixa.
                    </p>
                  </div>

                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="mt-4 border-2 border-accent text-accent hover:bg-accent hover:text-white dark:hover:text-black font-semibold transition-all"
                      >
                        Ver Exemplos
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">
                          Como Funciona o Sorteio
                        </DialogTitle>
                        <DialogDescription className="text-base pt-4">
                          <div className="space-y-4 text-left">
                            <p>
                              O sorteio desta ação é baseado nos{" "}
                              <strong>
                                3 últimos dígitos do 1º prêmio da Loteria
                                Federal
                              </strong>
                              .
                            </p>

                            <p>
                              <strong>Exemplo:</strong> Se o resultado da
                              Loteria Federal for "51234", usamos apenas "234".
                            </p>

                            <p>
                              Se o número obtido estiver dentro da faixa de
                              números da ação (por exemplo, de 001 até 159),
                              esse é o número ganhador.
                            </p>

                            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                              <p className="font-semibold">
                                Caso o resultado seja maior que o último número
                                da rifa, aplicamos a seguinte regra de ajuste:
                              </p>
                              <p className="pl-4">
                                • Subtraímos o total de números da rifa até que
                                o resultado fique dentro da faixa.
                              </p>
                            </div>

                            <div className="space-y-3 pt-2">
                              <p className="font-semibold text-lg">
                                Exemplos (rifa de 001 a 159):
                              </p>

                              <div className="space-y-2 pl-4">
                                <p className="font-mono bg-primary/5 p-3 rounded">
                                  • Resultado <strong>056</strong> → Ganhador:{" "}
                                  <strong className="text-primary">056</strong>
                                </p>

                                <p className="font-mono bg-primary/5 p-3 rounded">
                                  • Resultado <strong>159</strong> → Ganhador:{" "}
                                  <strong className="text-primary">159</strong>
                                </p>

                                <p className="font-mono bg-accent/5 p-3 rounded">
                                  • Resultado <strong>256</strong> → 256 - 159 =
                                  097 → Ganhador:{" "}
                                  <strong className="text-accent">097</strong>
                                </p>

                                <p className="font-mono bg-accent/5 p-3 rounded">
                                  • Resultado <strong>356</strong> → 356 - 159 =
                                  197 → 197 - 159 = 038 → Ganhador:{" "}
                                  <strong className="text-accent">038</strong>
                                </p>
                              </div>
                            </div>

                            <div className="bg-primary/5 p-4 rounded-lg mt-4">
                              <p className="font-semibold">
                                Essa regra garante que todos os números tenham a
                                mesma chance de vencer, mantendo o sorteio
                                transparente, verificável e sem interferência
                                manual.
                              </p>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardContent>
          </Card>

          <FAQSection />

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent mt-12">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Instagram className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Siga nosso Instagram
                  </h4>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-primary hover:text-primary-glow transition-colors inline-flex items-center gap-2"
                  >
                    Em breve...
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Acompanhe os sorteios, ganhadores e novidades!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © 2025 Dia Da Sorte - Todos os direitos reservados
          <br></br>
          Desenvolvido por Renan Geraldini Leão.
        </p>
      </footer>
    </div>
  );
};

export default Index;
