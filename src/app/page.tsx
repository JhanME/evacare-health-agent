"use client";
import { useState, useEffect } from "react";

// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "PROBLEMA", href: "#problema" },
    { label: "COMO FUNCIONA", href: "#como-funciona" },
    { label: "CAPACIDAD", href: "#capacidad" },
    { label: "CONTACTO", href: "#contacto" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm h-16" : "h-20"
        }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`font-bold text-2xl tracking-tight transition-colors ${isScrolled || isMenuOpen ? "text-primary" : "text-white"
              }`}>
              EvaCare<span className="text-accent font-light">+</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[11px] font-bold tracking-widest transition-colors ${isScrolled ? "text-primary/70 hover:text-accent" : "text-white/70 hover:text-white"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          >
            <div className={`w-6 h-0.5 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-primary" : "bg-white"} ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-primary" : "bg-white"} ${isMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-primary" : "bg-white"} ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white transition-all duration-500 ease-in-out transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {menuItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-primary text-2xl font-bold tracking-tight hover:text-accent transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-accent/20"
          >
            Agendar Demo
          </a>
        </div>
      </div>
    </>
  );
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────

function PhoneMockup({ size = "lg" }: { size?: "sm" | "lg" }) {
  const scale = size === "sm" ? "w-[225px]" : "w-[260px]";

  return (
    <div
      className={`relative ${scale} aspect-[9/20] bg-[#111827] rounded-[2.8rem] shadow-2xl p-[10px] flex-shrink-0`}
      style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)" }}
    >
      {/* Side buttons */}
      <div className="absolute -right-[3px] top-[80px] w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute -left-[3px] top-[70px] w-[3px] h-6 bg-[#2a2a2a] rounded-r-sm" />
      <div className="absolute -left-[3px] top-[105px] w-[3px] h-6 bg-[#2a2a2a] rounded-r-sm" />

      {/* Screen */}
      <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
        {/* Status bar */}
        <div className="bg-[#075E54] px-4 pt-2 pb-0 flex justify-between items-center flex-shrink-0">
          <span className="text-white text-[10px] font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="white">
              <rect x="0" y="3" width="2" height="5" rx="0.5" />
              <rect x="2.5" y="2" width="2" height="6" rx="0.5" />
              <rect x="5" y="1" width="2" height="7" rx="0.5" />
              <rect x="7.5" y="0" width="2" height="8" rx="0.5" />
            </svg>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="white" strokeWidth="1.2">
              <path d="M1 6.5 Q6 1 11 6.5" />
              <path d="M3 8 Q6 4 9 8" />
            </svg>
            <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
              <rect x="0.5" y="0.5" width="14" height="8" rx="2" stroke="white" strokeWidth="1" />
              <rect x="1.5" y="1.5" width="11" height="6" rx="1.2" fill="white" />
              <path d="M16 3v3" stroke="white" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* WhatsApp header */}
        <div className="bg-[#075E54] px-3 py-2.5 flex items-center gap-2.5 flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#1EA496] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs">E</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-xs leading-tight">Eva ✦</p>
            <p className="text-[#B2DFDB] text-[10px] leading-tight">en línea</p>
          </div>
          <div className="flex items-center gap-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C8.98 21 3 15.02 3 7.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </div>
        </div>

        {/* Chat area */}
        <div
          className="flex-1 p-3 pb-8 flex flex-col gap-2.5 overflow-y-auto scrollbar-hide"
          style={{ background: "#E5DDD5" }}
        >
          {/* Date pill */}
          <div className="flex justify-center">
            <span
              className="text-[9px] px-3 py-0.5 rounded-full text-[#555]"
              style={{ background: "rgba(255,255,255,0.7)" }}
            >
              HOY
            </span>
          </div>

          {/* Patient message */}
          <div className="self-end max-w-[85%]">
            <div
              className="rounded-xl rounded-tr-none px-2.5 py-1.5 shadow-sm"
              style={{ background: "#DCF8C6" }}
            >
              <p className="text-[#1A1A1A] text-[10px] leading-relaxed">
                ¿qué medicamentos debo tomar hoy?
              </p>
              <p className="text-[#888] text-[8px] text-right mt-0.5">10:32 ✓✓</p>
            </div>
          </div>

          {/* Eva response */}
          <div className="self-start max-w-[90%]">
            <div className="bg-white rounded-xl rounded-tl-none px-2.5 py-2 shadow-sm">
              <p className="text-[#075E54] text-[9px] font-semibold mb-1">Eva ✦</p>
              <p className="text-[#1A1A1A] text-[10px] leading-relaxed">
                Hola María 🌸 Hoy te toca:
              </p>
              <div className="mt-1 space-y-1">
                <p className="text-[#1A1A1A] text-[9px] leading-tight">
                  💊 Tamoxifeno 20mg — desayuno
                </p>
                <p className="text-[#1A1A1A] text-[9px] leading-tight">
                  💊 Ácido fólico 5mg — almuerzo
                </p>
                <p className="text-[#1A1A1A] text-[9px] leading-tight">
                  💊 Ondansetrón 8mg — náuseas
                </p>
              </div>
              <p className="text-[#1A1A1A] text-[10px] leading-relaxed mt-1.5">
                ¿Cómo te has sentido hoy? 💙
              </p>
              <p className="text-[#888] text-[8px] text-right mt-0.5">10:32</p>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="bg-[#F0F2F5] px-2 py-2 flex items-center gap-2 flex-shrink-0">
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center">
            <span className="text-[#999] text-[10px]">Mensaje</span>
          </div>
          <div className="w-7 h-7 bg-[#075E54] rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 18v-5M12 13V8M8 12H3M21 12h-5M16 12h-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M12 3a9 9 0 110 18A9 9 0 0112 3z" stroke="white" strokeWidth="1.8" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}



// ─── Rainbow Ribbons ─────────────────────────────────────────────────────────

function RainbowRibbons() {
  return (
    <div className="absolute left-0 top-[20%] w-full h-[60%] pointer-events-none opacity-40 z-10 overflow-hidden">
      <svg
        viewBox="0 0 1000 600"
        className="w-full h-full preserve-3d"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-50 450C100 450 200 150 400 150C600 150 700 450 1050 450"
          stroke="var(--accent)"
          strokeWidth="30"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <path
          d="M-50 480C100 480 200 180 400 180C600 180 700 480 1050 480"
          stroke="var(--primary)"
          strokeWidth="25"
          strokeLinecap="round"
          style={{ opacity: 0.6 }}
        />
        <path
          d="M-50 510C100 510 200 210 400 210C600 210 700 510 1050 510"
          stroke="var(--accent)"
          strokeWidth="22"
          strokeLinecap="round"
          style={{ opacity: 0.5 }}
        />
        <path
          d="M-50 540C100 540 200 240 400 240C600 240 700 540 1050 540"
          stroke="var(--primary)"
          strokeWidth="20"
          strokeLinecap="round"
          style={{ opacity: 0.4 }}
        />
        <path
          d="M-50 570C100 570 200 270 400 270C600 270 700 570 1050 570"
          stroke="var(--accent)"
          strokeWidth="18"
          strokeLinecap="round"
          style={{ opacity: 0.3 }}
        />
      </svg>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Image & Shading Layers */}
      <div className="absolute inset-0 z-0">
        <img
          src="/foto_principal.jpeg"
          alt="Paciente oncológico siendo acompañado"
          className="w-full h-full object-cover object-[center_35%]"
        />
      </div>

      <RainbowRibbons />

      {/* Deep Shading Overlays */}
      <div className="absolute inset-0 z-[15] pointer-events-none">
        {/* Much stronger and wider gradient to match the reference image's deep shading */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary from-20% via-primary/90 via-50% to-transparent" />
        {/* Stronger top protector */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/80 to-transparent" />
        {/* Bottom shadow for depth */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-40 pb-20">
        <div className="max-w-3xl filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

          <h1
            className="text-white text-[3rem] md:text-[5.5rem] leading-[1.1] md:leading-[1] font-bold tracking-tight mb-8 reveal reveal-left"
            style={{
              animationDelay: '0.2s',
              textShadow: '0 10px 40px rgba(0,0,0,0.4)'
            }}
          >
            Toda la ayuda que necesitas, a un{" "}
            <span className="text-accent">mensaje de distancia</span>.
          </h1>

          <p
            className="text-white text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-xl reveal"
            style={{
              animationDelay: '0.4s',
              textShadow: '0 1px 8px rgba(0,0,0,0.3)'
            }}
          >
            Eva es tu puente de comunicación clínica: resuelve dudas, recuerda medicamentos y vigila señales de alerta por WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-center reveal" style={{ animationDelay: '0.6s' }}>
            <a
              href="#contacto"
              className="w-full sm:w-auto bg-accent text-white px-10 py-4 rounded-xl text-sm font-bold hover:bg-accent/80 transition-all hover:scale-105 shadow-2xl shadow-accent/40 text-center"
            >
              Solicitar demo
            </a>
            <a
              href="#problema"
              className="w-full sm:w-auto border border-white/30 text-white px-10 py-4 rounded-xl text-sm font-bold hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2 backdrop-blur-md"
            >
              Conocer más <span className="text-lg">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof Strip ───────────────────────────────────────────────────────

function SocialProof() {
  return (
    <div className="bg-primary py-8 border-y border-white/5 reveal reveal-scale">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-white/60 text-[11px] font-bold tracking-[0.2em] uppercase">
          <span className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-accent" />
            24/7 disponible
          </span>
          <span className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-accent" />
            Responde en segundos
          </span>
          <span className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-accent" />
            Información clínica verificada
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Problem Section ──────────────────────────────────────────────────────────

function IconNight() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M32 23c0 6.1-4.9 11-11 11S10 29.1 10 23c0-5.1 3.5-9.4 8.3-10.7C17.5 13.5 16 16.1 16 19c0 4.4 3.6 8 8 8s8-3.6 8-8c0-.7-.1-1.4-.3-2.1C33.1 18 32 20.4 32 23z"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-accent"
      />
      <circle cx="8" cy="9" r="1.4" fill="currentColor" className="text-primary" />
      <circle cx="37" cy="13" r="1" fill="currentColor" className="text-primary" />
      <circle cx="34" cy="7" r="1.4" fill="currentColor" className="text-primary" />
      <circle cx="14" cy="5" r="0.9" fill="currentColor" className="text-primary" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1.6" />
      <polyline points="22,11 22,22 28,26" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 22H3M41 22H39" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.5 8.5L7 7M37 37l-1.5-1.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10L38 36H6L22 10z" stroke="currentColor" strokeWidth="1.6" className="text-accent" />
      <line x1="22" y1="22" x2="22" y2="28" stroke="currentColor" strokeWidth="2" className="text-accent" />
      <circle cx="22" cy="32" r="1.5" fill="currentColor" className="text-primary" />
    </svg>
  );
}

function Problem() {
  const items = [
    {
      icon: <IconNight />,
      title: "El miedo no tiene horario",
      desc: "Cuando termina la consulta, el paciente queda solo con sus dudas. Eva está allí para responder a las 11:00 PM o a las 3:00 AM.",
    },
    {
      icon: <IconClock />,
      title: "Recupera el tiempo de tu equipo",
      desc: "Libera a tu personal clínico de responder preguntas repetitivas sobre dosis y dietas. Eva gestiona lo operativo, tú lo humano.",
    },
    {
      icon: <IconAlert />,
      title: "Detecta riesgos en tiempo real",
      desc: "No esperes a la próxima consulta. Eva identifica síntomas de alerta y notifica a tu equipo al instante para actuar a tiempo.",
    },
  ];

  return (
    <section id="problema" className="py-20 md:py-40 px-6 bg-[#FCFAF7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
          <div className="reveal reveal-left">
            <p className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              El desafío del cuidado
            </p>
            <h2
              className="text-primary leading-[1.2] lg:leading-[1.1] mb-8 font-bold"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              Lo que sucede <br />
              <span className="italic font-display font-medium text-primary/40">fuera de la clínica</span>
              <br /> también es tu cuidado.
            </h2>
          </div>
          <div className="reveal reveal-right" style={{ animationDelay: '0.2s' }}>
            <p className="text-[#555] text-lg lg:text-xl leading-relaxed max-w-lg">
              El tratamiento oncológico no termina en el hospital. La ansiedad y las dudas entre consultas pueden afectar la adherencia y la tranquilidad del paciente.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-8 reveal reveal-scale" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-primary/5 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <h3 className="text-primary font-bold text-xl mb-4">
                  {item.title}
                </h3>
                <p className="text-[#555] text-base leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works Mockups ─────────────────────────────────────────────────────

function PanelMockup() {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md border border-[#1A1A1A]/6 overflow-hidden">
      {/* Header */}
      <div className="bg-accent px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <span className="text-white text-xs font-medium opacity-90">Panel EvaCare+</span>
        </div>
        <span className="text-white/60 text-[10px]">Clínica</span>
      </div>
      {/* Patient card */}
      <div className="p-5">
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-accent/20 flex items-center justify-center flex-shrink-0">
            <span className="text-accent text-sm font-semibold">MG</span>
          </div>
          <div>
            <p className="font-semibold text-[#1A1A1A] text-sm">María González, 52 años</p>
            <p className="text-[#555] text-xs mt-0.5">Cáncer de mama · Etapa II · activo</p>
          </div>
          <span className="ml-auto text-[10px] bg-accent/8 text-accent px-2 py-0.5 rounded-full font-medium">
            activo
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-xs border-b border-[#1A1A1A]/6 pb-2.5">
            <span className="text-[#888]">Tratamiento</span>
            <span className="text-[#1A1A1A] font-medium">Tamoxifeno 20mg + Ácido fólico 5mg</span>
          </div>
          <div className="flex justify-between text-xs border-b border-[#1A1A1A]/6 pb-2.5">
            <span className="text-[#888]">Próxima cita</span>
            <span className="text-[#1A1A1A] font-medium">15 mar 2026</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-[#888]">Conversaciones Eva</span>
            <span className="text-accent font-semibold">23 este mes</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlertCardMockup() {
  return (
    <div className="w-full max-w-sm space-y-3">
      {/* Alert card */}
      <div className="bg-white rounded-2xl shadow-md border-l-4 border-accent p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-accent text-sm">⚠️</span>
          </div>
          <div className="flex-1">
            <p className="text-[#1A1A1A] font-semibold text-sm">Alerta de riesgo detectada</p>
            <p className="text-[#555] text-xs mt-1 leading-relaxed">
              <strong>María González</strong> reportó fiebre alta (39°C) esta noche. Puede requerir
              atención.
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[#888] text-[10px]">hace 3 minutos</span>
              <button className="text-[10px] bg-accent text-white px-3 py-1 rounded-full">
                Ver detalle
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Normal activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-[#1A1A1A]/6 p-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
          <p className="text-[#555] text-xs">
            <strong className="text-[#1A1A1A]">Carlos Reyes</strong> confirmó tomar sus
            medicamentos ✓
          </p>
          <span className="ml-auto text-[#bbb] text-[10px]">10:15</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-[#1A1A1A]/6 p-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
          <p className="text-[#555] text-xs">
            <strong className="text-[#1A1A1A]">Ana Torres</strong> preguntó sobre su dieta 🥗
          </p>
          <span className="ml-auto text-[#bbb] text-[10px]">9:48</span>
        </div>
      </div>
    </div>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-20 md:mb-32 max-w-2xl reveal reveal-left">
          <p className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Metodología
          </p>
          <h2
            className="text-primary leading-[1.2] lg:leading-[1.1] font-bold"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Acompañamiento <br />
            <span className="italic font-display font-medium text-primary/40 text-[0.9em]">en tres etapas.</span>
          </h2>
        </div>

        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 md:mb-48">
          <div className="reveal reveal-left">
            <span className="text-[8rem] md:text-[12rem] font-bold leading-none mb-4 block select-none text-accent/5 font-display tabular-nums">
              01
            </span>
            <div className="relative -mt-12 md:-mt-20">
              <h3 className="text-primary font-bold text-2xl md:text-3xl mb-6">Configuración Clínica</h3>
              <p className="text-[#555] text-base md:text-lg leading-relaxed max-w-md opacity-80">
                Tu equipo carga el perfil del paciente. Eva aprende el diagnóstico, medicamentos y protocolos específicos para dar respuestas precisas y seguras.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end reveal reveal-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-10 bg-accent/5 blur-3xl rounded-full" />
              <div className="relative scale-100 md:scale-110">
                <PanelMockup />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-48">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start reveal reveal-left" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-10 bg-accent/5 blur-3xl rounded-full" />
              <div className="relative scale-110">
                <PhoneMockup size="sm" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 reveal reveal-right">
            <span className="text-[12rem] font-bold leading-none mb-4 block select-none text-accent/5 font-display tabular-nums">
              02
            </span>
            <div className="relative -mt-20">
              <h3 className="text-primary font-bold text-3xl mb-6">Canal Directo</h3>
              <p className="text-[#555] text-lg leading-relaxed max-w-md opacity-80">
                Sin apps que descargar. El paciente escribe por WhatsApp de forma natural. Eva responde al instante, reduciendo la ansiedad y el aislamiento.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal reveal-left">
            <span className="text-[12rem] font-bold leading-none mb-4 block select-none text-accent/5 font-display tabular-nums">
              03
            </span>
            <div className="relative -mt-20">
              <h3 className="text-primary font-bold text-3xl mb-6">Vigilancia Médica</h3>
              <p className="text-[#555] text-lg leading-relaxed max-w-md opacity-80">
                Eva monitorea los síntomas. Ante cualquier señal de alarma, el equipo recibe una alerta prioritaria para decidir si es necesario intervenir.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end reveal reveal-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute -inset-10 bg-accent/5 blur-3xl rounded-full" />
              <div className="relative scale-110">
                <AlertCardMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// ─── Quote ────────────────────────────────────────────────────────────────────

function Quote() {
  return (
    <section className="bg-[#FCFAF7] py-20 md:py-40 px-6">
      <div className="max-w-4xl mx-auto text-center reveal reveal-scale">
        <span className="text-accent text-6xl leading-none select-none italic font-display opacity-20">"</span>
        <blockquote
          className="text-primary leading-tight mt-4 mb-12 font-medium"
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
          }}
        >
          El verdadero éxito clínico está en lo que sucede en el{" "}
          <span className="italic font-display text-accent">día a día</span> del paciente. Eva nos da esa visibilidad.
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-primary/10" />
          <p className="text-primary text-base font-bold uppercase tracking-widest">
            Dr. Rodrigo M., Oncólogo
          </p>
          <div className="w-12 h-px bg-primary/10" />
        </div>
      </div>
    </section>
  );
}

// ─── Features Grid ────────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      title: "Gestión de Medicación",
      desc: "Recordatorios humanos para horarios y dosis, evitando confusiones en el tratamiento.",
    },
    {
      title: "Agenda de Citas",
      desc: "Sincronización automática de consultas para que el paciente nunca pierda un control.",
    },
    {
      title: "Guía Nutricional",
      desc: "Consejos de alimentación adaptados a los efectos secundarios del tratamiento.",
    },
    {
      title: "Alertas Activas",
      desc: "Identificación de síntomas críticos que escala de inmediato al equipo clínico.",
    },
    {
      title: "Privacidad Clínica",
      desc: "Información protegida bajo estándares médicos, accesible solo por personal autorizado.",
    },
    {
      title: "Panel de Tendencias",
      desc: "Visibilidad continua de la evolución del paciente para decisiones médicas basadas en datos.",
    },
  ];

  return (
    <section id="capacidad" className="py-20 md:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 reveal">
          <p className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Capacidades
          </p>
          <h2
            className="text-primary leading-[1.2] lg:leading-[1.1] font-bold"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Un ecosistema de cuidado <br />
            <span className="italic font-display font-medium text-primary/40 text-[0.9em]">siempre presente.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#FCFAF7] rounded-[2rem] p-10 border border-primary/5 hover:border-accent/20 transition-all hover:shadow-xl hover:shadow-accent/5 reveal reveal-scale group premium-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-primary font-bold text-lg mb-4">{f.title}</h3>
              <p className="text-[#555] text-sm leading-relaxed opacity-80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-20 md:py-40 px-6 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
        <h2
          className="text-white leading-[1.1] mb-12 font-bold"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          Es momento de elevar el estándar de <br />
          <span className="italic font-display font-medium text-white/40">acompañamiento clínico.</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://wa.me/something"
            className="w-full sm:w-auto bg-accent text-white px-12 py-5 rounded-xl text-lg font-bold hover:bg-accent/80 transition-all hover:scale-105 shadow-2xl shadow-accent/30"
          >
            Agendar demo gratuita
          </a>
          <p className="text-white/40 text-sm font-medium tracking-wide text-left sm:text-left">
            Cero costo de implementación <br /> para las primeras 5 clínicas.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-32 px-6 bg-[#FCFAF7]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Contacto
          </p>
          <h2
            className="text-primary font-bold leading-[1.2]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            ¿Hablamos?{" "}
            <span className="italic font-display font-medium text-primary/40">
              Estamos aquí.
            </span>
          </h2>
        </div>

        <div className="flex justify-center reveal reveal-scale" style={{ animationDelay: "0.15s" }}>
          <div className="bg-white rounded-[2rem] border border-primary/6 shadow-sm p-10 flex flex-col sm:flex-row items-center gap-10 w-full max-w-2xl">
            {/* Avatar */}
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-2xl">JM</span>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-primary font-bold text-xl mb-1">Jhan Mocaico</p>
              <p className="text-[#888] text-sm mb-6">Fundador · EvaCare+</p>

              <div className="flex flex-col gap-3">
                {/* Phone */}
                <a
                  href="tel:+51963242281"
                  className="flex items-center justify-center sm:justify-start gap-3 text-[#555] hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-primary/6 flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C8.98 21 3 15.02 3 7.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium">+51 963 242 281</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:jhan.mocaico@upch.pe"
                  className="flex items-center justify-center sm:justify-start gap-3 text-[#555] hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-primary/6 flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 7 10-7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium">jhan.mocaico@upch.pe</span>
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="mailto:jhan.mocaico@upch.pe?subject=Demo%20EvaCare%2B&body=Hola%20Jhan%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20EvaCare%2B."
              className="flex-shrink-0 bg-accent text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-accent/80 transition-all hover:scale-105 shadow-lg shadow-accent/20 whitespace-nowrap"
            >
              Enviar correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#1A1A1A]/6 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="font-bold text-xl text-primary"
        >
          EvaCare<span className="text-accent font-light">+</span>
        </span>
        <p className="text-[#888] text-sm">Hecho en Perú 🇵🇪 · 2026</p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  useEffect(() => {
    // Scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#FCFAF7]">
      <Nav />
      <Hero />
      <SocialProof />
      <Problem />
      <HowItWorks />
      <Quote />
      <Features />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  );
}
