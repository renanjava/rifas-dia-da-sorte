/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as XLSX from "xlsx";
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
import { useEffect, useState } from "react";
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
  const [openRules, setOpenRules] = useState(false);
  const [openTable, setOpenTable] = useState(false);

  const [tableData, setTableData] = useState<any[]>([]);

  useEffect(() => {
    fetchExcel();
  }, []);

  const totalDisponivel = product.expected_reservations;
  const reservados = tableData.length;
  const porcentagem = Math.min(
    100,
    Math.round((reservados / totalDisponivel) * 100)
  );

  const fetchExcel = async () => {
    try {
      let fetchUrl = PARTICIPANTS_URL;

      if (PARTICIPANTS_URL.includes("docs.google.com/spreadsheets")) {
        const match = PARTICIPANTS_URL.match(/\/d\/([a-zA-Z0-9-_]+)/);
        if (match) {
          const sheetId = match[1];
          fetchUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=0`;
        }
      }

      const response = await fetch(fetchUrl, {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, {
        type: "array",
        sheetRows: 0,
        cellDates: true,
        cellNF: false,
        cellText: false,
        dense: false,
      });

      let allData: any[] = [];

      for (const sheetName of workbook.SheetNames) {
        const worksheet = workbook.Sheets[sheetName];

        const range = worksheet["!ref"];

        const jsonData = XLSX.utils.sheet_to_json(worksheet, {
          header: 1,
          defval: "",
          blankrows: false,
          raw: false,
        });

        const sheetData = jsonData;

        if (sheetData.length > allData.length) {
          allData = sheetData;
        }
      }

      const cleanData: any[] = [];

      allData.forEach((row: any[], index: number) => {
        const participante = row.find(
          (val: any) =>
            val !== undefined && val !== null && String(val).trim() !== ""
        );

        if (participante && String(participante).trim() !== "") {
          const numero = (index + 1).toString().padStart(3, "0");
          cleanData.push({
            Número: numero,
            Participante: String(participante).trim(),
          });
        }
      });

      setTableData(cleanData);
    } catch (err) {
      alert(
        `Não foi possível carregar a planilha. Erro: ${
          err instanceof Error ? err.message : "Desconhecido"
        }`
      );
    }
  };

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
              <div className="flex flex-col lg:grid lg:grid-cols-5 gap-0">
                <div className="relative w-full overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20 lg:col-span-2 min-h-[320px] lg:min-h-[500px] flex items-center justify-center">
                  <img
                    src={product.image_url}
                    alt={`Prêmio - ${product.title}`}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform duration-700
                      hover:scale-105
                    "
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground font-bold text-sm px-4 py-2 shadow-lg">
                      PRÊMIO
                    </Badge>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between bg-card lg:col-span-3">
                  <div className="space-y-6 lg:space-y-8">
                    <div className="text-center lg:text-left">
                      <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary">
                        Sorteio
                      </span>
                      <h3 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-card-foreground leading-tight">
                        {product.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 lg:p-6 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        Valor Unitário
                      </span>
                      <div className="flex flex-col items-center sm:items-end">
                        <span className="text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                          R$ {product.unit_price}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1">
                          por número
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleReserva}
                    size="lg"
                    className="
                      w-full mt-6 lg:mt-8 text-base lg:text-lg font-bold
                      py-6 lg:py-7
                      bg-gradient-to-r
                      from-primary via-primary/90 to-primary/70
                      hover:from-primary/90 hover:via-primary hover:to-primary
                      transition-all duration-300
                      shadow-xl
                      hover:shadow-2xl
                      hover:scale-[1.02]
                      active:scale-[0.98]
                      animate-glow
                    "
                  >
                    <span className="flex items-center justify-center gap-2">
                      Realizar Reserva
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 mb-6 animate-fade-in">
            <CardContent className="p-6">
              <div className="w-full">
                <div className="flex justify-between mb-2 text-sm text-muted-foreground">
                  <span>Progresso da Rifa</span>
                  <span>{porcentagem}%</span>
                </div>

                <div className="w-full h-6 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-green-500 transition-all duration-700"
                    style={{ width: `${porcentagem}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 mb-8 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3">
                <span className="text-sm text-muted-foreground font-medium">
                  Data do sorteio:
                </span>
                <span className="px-4 py-2 text-sm font-bold rounded-md bg-secondary text-secondary-foreground tracking-wide">
                  {product.result_date ?? "Em breve..."}
                </span>
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
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10 flex-shrink-0">
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
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      fetchExcel();
                      setOpenTable(true);
                    }}
                    className="w-full"
                    size="default"
                  >
                    Ver números reservados
                  </Button>
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

                  <Dialog open={openRules} onOpenChange={setOpenRules}>
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

        <Dialog open={openTable} onOpenChange={setOpenTable}>
          <DialogContent className="max-w-[95vw] sm:max-w-3xl h-[85vh] flex flex-col p-4 sm:p-6">
            <DialogHeader className="flex-shrink-0">
              <DialogTitle className="text-lg sm:text-xl">
                Números Reservados
              </DialogTitle>
            </DialogHeader>
            {tableData.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                Nenhum número reservado ainda
              </div>
            ) : (
              <div className="flex-1 overflow-auto min-h-0 -mx-4 sm:mx-0">
                <table className="w-full text-sm border-collapse">
                  <thead className="sticky top-0 bg-background z-10">
                    <tr className="bg-muted/50">
                      <th className="border-b-2 border-border p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">
                        Número
                      </th>
                      <th className="border-b-2 border-border p-2 sm:p-3 text-left font-semibold text-xs sm:text-sm">
                        Participante
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-muted/30 transition-colors"
                      >
                        <td className="border-b border-border p-2 sm:p-3 text-xs sm:text-sm">
                          {row["Número"]}
                        </td>
                        <td className="border-b border-border p-2 sm:p-3 text-xs sm:text-sm break-words">
                          {row["Participante"]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </DialogContent>
        </Dialog>
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
