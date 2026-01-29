import {
  ExternalLink,
  User,
  Landmark,
  FileText,
  MapPin,
  Calendar,
  CreditCard,
  Link as LinkIcon,
  Activity,
} from "lucide-react";

interface AmendmentData {
  parlamentar: string;
  partido: string;
  codigo_emenda: string;
  objeto: string;
  valor: number;
  executor: string;
  localidade: string;
  cronograma: string;
  instrumento: string;
  conta: string;
  empenho: string;
  link_transparencia: string;
}

const MOCK_DATA: AmendmentData[] = [
  {
    parlamentar: "Dr. Ricardo Silva",
    partido: "PL / Gabinete 12",
    codigo_emenda: "2025.442.001-9",
    objeto:
      "Aquisição de Unidades de Terapia Intensiva Móvel (UTI) para o pronto atendimento municipal, visando a redução do tempo de resposta em emergências críticas.",
    valor: 450000.0,
    executor: "Secretaria Municipal de Saúde (SMS)",
    localidade: "Teresópolis - Distrito Sede",
    cronograma: "01/02/2026 - 30/08/2026",
    instrumento: "Convênio nº 88/2025 - Proc. Adm. 11.204/2025",
    conta: "Banco do Brasil - Ag: 0741 - C/C: 10294-1",
    empenho: "2026NE000142",
    link_transparencia: "#",
  },
  {
    parlamentar: "Profa. Maria Helena",
    partido: "PT / Gabinete 05",
    codigo_emenda: "2025.128.045-2",
    objeto:
      "Reforma estrutural e modernização do laboratório de informática da Escola Municipal Gerson da Silva, incluindo acessibilidade e novos terminais.",
    valor: 125000.0,
    executor: "Secretaria de Educação (SME)",
    localidade: "Bairro Várzea",
    cronograma: "15/03/2026 - 15/12/2026",
    instrumento: "Contrato de Repasse nº 12/2025",
    conta: "Caixa Econômica - Ag: 0192 - C/C: 4410-9",
    empenho: "2026NE00085",
    link_transparencia: "#",
  },
  {
    parlamentar: "Major Costa",
    partido: "UNIÃO / Gabinete 22",
    codigo_emenda: "2025.990.112-0",
    objeto:
      "Instalação de sistema de videomonitoramento inteligente (OCR) nas principais vias de acesso ao município para fins de segurança pública.",
    valor: 890000.0,
    executor: "Secretaria de Segurança Pública",
    localidade: "Interbairros / Vias de Acesso",
    cronograma: "10/01/2026 - 10/01/2027",
    instrumento: "Termo de Fomento nº 04/2025",
    conta: "Banco do Brasil - Ag: 0741 - C/C: 99201-X",
    empenho: "2026NE000210",
    link_transparencia: "#",
  },
  {
    parlamentar: "Major Costa",
    partido: "UNIÃO / Gabinete 22",
    codigo_emenda: "2025.990.112-0",
    objeto:
      "Instalação de sistema de videomonitoramento inteligente (OCR) nas principais vias de acesso ao município para fins de segurança pública.",
    valor: 890000.0,
    executor: "Secretaria de Segurança Pública",
    localidade: "Interbairros / Vias de Acesso",
    cronograma: "10/01/2026 - 10/01/2027",
    instrumento: "Termo de Fomento nº 04/2025",
    conta: "Banco do Brasil - Ag: 0741 - C/C: 99201-X",
    empenho: "2026NE000210",
    link_transparencia: "#",
  },
  {
    parlamentar: "Major Costa",
    partido: "UNIÃO / Gabinete 22",
    codigo_emenda: "2025.990.112-0",
    objeto:
      "Instalação de sistema de videomonitoramento inteligente (OCR) nas principais vias de acesso ao município para fins de segurança pública.",
    valor: 890000.0,
    executor: "Secretaria de Segurança Pública",
    localidade: "Interbairros / Vias de Acesso",
    cronograma: "10/01/2026 - 10/01/2027",
    instrumento: "Termo de Fomento nº 04/2025",
    conta: "Banco do Brasil - Ag: 0741 - C/C: 99201-X",
    empenho: "2026NE000210",
    link_transparencia: "#",
  },
  {
    parlamentar: "Major Costa",
    partido: "UNIÃO / Gabinete 22",
    codigo_emenda: "2025.990.112-0",
    objeto:
      "Instalação de sistema de videomonitoramento inteligente (OCR) nas principais vias de acesso ao município para fins de segurança pública.",
    valor: 890000.0,
    executor: "Secretaria de Segurança Pública",
    localidade: "Interbairros / Vias de Acesso",
    cronograma: "10/01/2026 - 10/01/2027",
    instrumento: "Termo de Fomento nº 04/2025",
    conta: "Banco do Brasil - Ag: 0741 - C/C: 99201-X",
    empenho: "2026NE000210",
    link_transparencia: "#",
  },
];

export default function ParliamentaryAmendmentsTable() {
  return (
    <section className="w-full bg-card border border-border rounded-[2.5rem] overflow-hidden group transition-all duration-500 hover:border-primary/30">
      <div className="p-10 border-b border-border flex items-center justify-between bg-background/20">
        <div>
          <h3 className="text-2xl font-black uppercase italic tracking-tighter text-foreground">
            Detalhamento de{" "}
            <span className="text-primary">Emendas Parlamentares</span>
          </h3>
          <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.4em] mt-2">
            Protocolo de Transparência // Lei Orçamentária 2026
          </p>
        </div>
        {/* <div className="flex gap-4">
          <div className="hidden md:block text-right">
            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
              Base de Dados
            </p>
            <p className="text-xs font-mono text-primary">
              STATUS: SINCRONIZADO
            </p>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
            <FileText size={24} />
          </div>
        </div> */}
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full border-collapse text-left min-w-[2200px]">
          <thead>
            <tr className="bg-background/40">
              {[
                {
                  label: "I. Parlamentar Proponente",
                  icon: <User size={14} />,
                },
                {
                  label: "II. Partido / Unidade",
                  icon: <Landmark size={14} />,
                },
                {
                  label: "III. Identificação Emenda",
                  icon: <FileText size={14} />,
                },
                {
                  label: "IV. Objeto da Despesa",
                  icon: <Activity size={14} />,
                },
                { label: "V. Valor Alocado", icon: <CreditCard size={14} /> },
                { label: "VI. Órgão Executor", icon: <Landmark size={14} /> },
                { label: "VII. Localidade", icon: <MapPin size={14} /> },
                { label: "VIII. Cronograma", icon: <Calendar size={14} /> },
                { label: "IX. Instrumentos", icon: <FileText size={14} /> },
                { label: "X. Conta Bancária", icon: <CreditCard size={14} /> },
                { label: "XI. Empenho(s)", icon: <FileText size={14} /> },
                { label: "XII. Link Portal", icon: <LinkIcon size={14} /> },
              ].map((col, idx) => (
                <th
                  key={idx}
                  className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground border-b border-border whitespace-nowrap"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-primary">{col.icon}</span>
                    {col.label}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {MOCK_DATA.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-primary/[0.03] transition-colors group/row"
              >
                {/* I - Parlamentar */}
                <td className="p-6">
                  <p className="text-sm font-black text-foreground leading-tight uppercase italic">
                    {item.parlamentar}
                  </p>
                </td>

                {/* II - Partido */}
                <td className="p-6">
                  <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {item.partido}
                  </span>
                </td>

                {/* III - Identificação */}
                <td className="p-6 text-[11px] font-mono font-bold text-primary/70">
                  {item.codigo_emenda}
                </td>

                {/* IV - Objeto */}
                <td className="p-6 max-w-sm text-xs text-muted-foreground leading-relaxed font-medium">
                  {item.objeto}
                </td>

                {/* V - Valor */}
                <td className="p-6">
                  <p className="text-lg font-black text-primary italic tracking-tighter">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.valor)}
                  </p>
                </td>

                {/* VI - Executor */}
                <td className="p-6 text-xs text-foreground font-bold uppercase tracking-tight">
                  {item.executor}
                </td>

                {/* VII - Localidade */}
                <td className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
                    <MapPin size={14} className="text-primary/50" />{" "}
                    {item.localidade}
                  </div>
                </td>

                {/* VIII - Cronograma */}
                <td className="p-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase font-bold text-muted-foreground">
                      Período Estimado
                    </span>
                    <span className="text-[11px] font-mono text-foreground font-bold">
                      {item.cronograma}
                    </span>
                  </div>
                </td>

                {/* IX - Instrumentos */}
                <td className="p-6 text-[11px] text-muted-foreground leading-tight max-w-[200px]">
                  {item.instrumento}
                </td>

                {/* X - Conta específica */}
                <td className="p-6 text-[11px] font-mono text-muted-foreground">
                  <div className="bg-black/40 p-3 rounded-xl border border-white/5 text-white">
                    {item.conta}
                  </div>
                </td>

                {/* XI - Empenhos */}
                <td className="p-6">
                  <span className="text-xs font-black text-foreground border-b-2 border-primary/30 pb-0.5">
                    {item.empenho}
                  </span>
                </td>

                {/* XII - Link Portal */}
                <td className="p-6">
                  <a
                    href={item.link_transparencia}
                    target="_blank"
                    className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary bg-primary/5 px-4 py-2 rounded-lg border border-primary/10 hover:bg-primary hover:text-background transition-all"
                  >
                    Acessar <ExternalLink size={14} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-6 bg-background/40 border-t border-border flex justify-between items-center">
        <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-[0.3em]">
          Mostrando {MOCK_DATA.length} registros de emendas parlamentares ativas
        </p>
        <div className="flex gap-1">
          <div className="w-8 h-1 bg-primary" />
          <div className="w-2 h-1 bg-primary/30" />
          <div className="w-2 h-1 bg-primary/30" />
        </div>
      </div>
    </section>
  );
}
