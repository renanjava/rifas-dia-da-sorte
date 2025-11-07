import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, Shield, Calendar } from "lucide-react";
import productHero from "@/assets/product-hero.jpg";

const Index = () => {
  const handleReserva = () => {
    window.location.href =
      "https://loja.infinitepay.io/renan-g-l/akc2405-bilhete-iphone-xr";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 transition-colors duration-300">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">
              DDS
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Dia Da Sorte
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Rifa Ativa
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Smartphone Premium
            </h2>
            <p className="text-muted-foreground text-lg">
              Participe agora e concorra a este incrível prêmio!
            </p>
          </div>

          <Card className="overflow-hidden border-2 mb-8 animate-fade-in shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-500">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted/30">
                  <img
                    src={productHero}
                    alt="Produto da Rifa - Smartphone Premium"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground font-bold text-sm px-3 py-1">
                      PRÊMIO
                    </Badge>
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-card-foreground">
                        Smartphone Premium
                      </h3>
                      <p className="text-muted-foreground">
                        Último modelo, 256GB, câmera profissional
                      </p>
                    </div>

                    <div className="space-y-3 py-4 border-y border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          Valor Unitário:
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          R$ 5,00
                        </span>
                      </div>
                    </div>

                    <Button
                      onClick={handleReserva}
                      size="lg"
                      className="w-full text-lg font-bold bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-[var(--shadow-glow)] animate-glow"
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
                      100% Seguro e Confiável
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      O sorteio será baseado na <strong>Loteria Federal</strong>{" "}
                      para garantir total transparência e confiabilidade no
                      resultado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg">Data do Sorteio</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      A data será divulgada em breve através do nosso Instagram
                      oficial. Fique de olho!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
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
                    href="https://instagram.com/rifas.dia_da_sorte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-primary hover:text-primary-glow transition-colors inline-flex items-center gap-2"
                  >
                    @rifas.dia_da_sorte
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
