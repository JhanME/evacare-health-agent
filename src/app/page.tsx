// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#1A1A1A]/6">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span
          className="font-display italic font-semibold text-xl text-[#1B4F5A] tracking-tight"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          EvaCare+
        </span>
        <a
          href="#demo"
          className="bg-[#1B4F5A] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#163f48] transition-colors duration-200"
        >
          Solicitar demo
        </a>
      </div>
    </nav>
  );
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────

function PhoneMockup({ size = "lg" }: { size?: "sm" | "lg" }) {
  const scale = size === "sm" ? "w-[200px]" : "w-[260px]";

  return (
    <div
      className={`relative ${scale} aspect-[9/19] bg-[#111827] rounded-[2.8rem] shadow-2xl p-[10px] flex-shrink-0`}
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
          <div className="w-8 h-8 rounded-full bg-[#1B4F5A] flex items-center justify-center flex-shrink-0">
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
          className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden"
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
          <div className="self-end max-w-[80%]">
            <div
              className="rounded-xl rounded-tr-none px-2.5 py-1.5 shadow-sm"
              style={{ background: "#DCF8C6" }}
            >
              <p className="text-[#1A1A1A] text-[10px] leading-relaxed">
                ¿qué medicamentos debo tomar hoy?
              </p>
              <p className="text-[#888] text-[9px] text-right mt-0.5">10:32 ✓✓</p>
            </div>
          </div>

          {/* Eva response */}
          <div className="self-start max-w-[85%]">
            <div className="bg-white rounded-xl rounded-tl-none px-2.5 py-2 shadow-sm">
              <p className="text-[#075E54] text-[9px] font-semibold mb-1">Eva ✦</p>
              <p className="text-[#1A1A1A] text-[10px] leading-relaxed">
                Hola María 🌸 Hoy te toca:
              </p>
              <div className="mt-1 space-y-0.5">
                <p className="text-[#1A1A1A] text-[10px] leading-relaxed">
                  💊 Tamoxifeno 20mg — con el desayuno
                </p>
                <p className="text-[#1A1A1A] text-[10px] leading-relaxed">
                  💊 Ácido fólico 5mg — con el almuerzo
                </p>
                <p className="text-[#1A1A1A] text-[10px] leading-relaxed">
                  💊 Ondansetrón 8mg — si sientes náuseas
                </p>
              </div>
              <p className="text-[#1A1A1A] text-[10px] leading-relaxed mt-1">
                ¿Cómo te has sentido hoy? 💙
              </p>
              <p className="text-[#888] text-[9px] text-right mt-0.5">10:32</p>
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

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 max-w-xl">
          <p className="text-[#1B4F5A] text-sm font-medium tracking-widest uppercase mb-6 opacity-70">
            Oncología · Soporte continuo
          </p>
          <h1
            className="italic text-[#1A1A1A] leading-[1.05] mb-6"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              fontWeight: 600,
            }}
          >
            El acompañamiento
            <br />
            que tu paciente
            <br />
            necesita
          </h1>
          <p className="text-[#3a3a3a] text-lg leading-relaxed mb-10 max-w-md">
            Eva responde dudas, recuerda medicamentos y detecta señales de alerta
            — por WhatsApp, a cualquier hora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#como-funciona"
              className="border border-[#1B4F5A] text-[#1B4F5A] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#1B4F5A]/5 transition-colors text-center"
            >
              Ver cómo funciona
            </a>
            <a
              href="#demo"
              id="demo"
              className="bg-[#1B4F5A] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#163f48] transition-colors text-center"
            >
              Solicitar demo
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex-shrink-0 flex justify-center lg:justify-end lg:pr-8">
          <PhoneMockup size="lg" />
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof Strip ───────────────────────────────────────────────────────

function SocialProof() {
  return (
    <div className="bg-[#1B4F5A] py-5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 text-white text-sm font-medium">
          <span className="opacity-90">24/7 disponible</span>
          <span className="hidden sm:block mx-6 opacity-30">·</span>
          <span className="opacity-90">Responde en segundos</span>
          <span className="hidden sm:block mx-6 opacity-30">·</span>
          <span className="opacity-90">Solo información clínica verificada</span>
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
        stroke="#1B4F5A"
        strokeWidth="1.6"
      />
      <circle cx="8" cy="9" r="1.4" fill="#C97B84" />
      <circle cx="37" cy="13" r="1" fill="#C97B84" />
      <circle cx="34" cy="7" r="1.4" fill="#C97B84" />
      <circle cx="14" cy="5" r="0.9" fill="#C97B84" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="22" r="14" stroke="#1B4F5A" strokeWidth="1.6" />
      <polyline points="22,11 22,22 28,26" stroke="#1B4F5A" strokeWidth="1.8" />
      <path d="M5 22H3M41 22H39" stroke="#1B4F5A" strokeWidth="1.4" />
      <path d="M8.5 8.5L7 7M37 37l-1.5-1.5" stroke="#1B4F5A" strokeWidth="1.4" />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10L38 36H6L22 10z" stroke="#1B4F5A" strokeWidth="1.6" />
      <line x1="22" y1="22" x2="22" y2="28" stroke="#1B4F5A" strokeWidth="2" />
      <circle cx="22" cy="32" r="1.5" fill="#C97B84" />
    </svg>
  );
}

function Problem() {
  const items = [
    {
      icon: <IconNight />,
      title: "Tu paciente tiene miedo a las 11pm y no tiene a quién llamar",
      desc: "El diagnóstico no para cuando termina la consulta. El miedo tampoco.",
    },
    {
      icon: <IconClock />,
      title: "Tu equipo pierde horas respondiendo las mismas preguntas",
      desc: "¿Puedo comer esto? ¿A qué hora es mi próxima cita? Eva lo responde por ti.",
    },
    {
      icon: <IconAlert />,
      title: "Las señales de crisis pasan desapercibidas entre consultas",
      desc: "Fiebre, dolor inesperado, caída anímica. Eva los detecta antes de que escalen.",
    },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[#1B4F5A] text-sm font-medium tracking-widest uppercase opacity-60 mb-4">
            El problema
          </p>
          <h2
            className="italic text-[#1A1A1A] leading-tight"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 600,
            }}
          >
            Entre consulta y consulta hay un vacío
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col gap-5">
              <div className="w-12 h-12 flex items-center justify-center">{item.icon}</div>
              <div>
                <h3
                  className="text-[#1A1A1A] font-semibold text-lg leading-snug mb-3"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#555] text-base leading-relaxed">{item.desc}</p>
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
      <div className="bg-[#1B4F5A] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <span className="text-white text-xs font-medium opacity-90">Panel EvaCare+</span>
        </div>
        <span className="text-[#B2DFDB] text-[10px]">Clínica Oncosalud</span>
      </div>
      {/* Patient card */}
      <div className="p-5">
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#1B4F5A]/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[#1B4F5A] text-sm font-semibold">MG</span>
          </div>
          <div>
            <p className="font-semibold text-[#1A1A1A] text-sm">María González, 52 años</p>
            <p className="text-[#555] text-xs mt-0.5">Cáncer de mama · Etapa II · activo</p>
          </div>
          <span className="ml-auto text-[10px] bg-[#1B4F5A]/8 text-[#1B4F5A] px-2 py-0.5 rounded-full font-medium">
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
            <span className="text-[#1B4F5A] font-semibold">23 este mes</span>
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
      <div className="bg-white rounded-2xl shadow-md border-l-4 border-[#C97B84] p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#C97B84]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#C97B84] text-sm">⚠️</span>
          </div>
          <div className="flex-1">
            <p className="text-[#1A1A1A] font-semibold text-sm">Alerta de riesgo detectada</p>
            <p className="text-[#555] text-xs mt-1 leading-relaxed">
              <strong>María González</strong> reportó fiebre alta (39°C) esta noche. Puede requerir
              atención.
            </p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-[#888] text-[10px]">hace 3 minutos</span>
              <button className="text-[10px] bg-[#1B4F5A] text-white px-3 py-1 rounded-full">
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
    <section id="como-funciona" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <p className="text-[#1B4F5A] text-sm font-medium tracking-widest uppercase opacity-60 mb-4">
            Cómo funciona
          </p>
          <h2
            className="italic text-[#1A1A1A] leading-tight"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 600,
            }}
          >
            Tres pasos, cero fricción
          </h2>
        </div>

        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-14 mb-28">
          <div className="flex-1 max-w-md">
            <span
              className="block text-[7rem] font-bold leading-none mb-6 select-none"
              style={{ color: "rgba(27,79,90,0.08)", fontFamily: "var(--font-fraunces)" }}
            >
              01
            </span>
            <h3
              className="text-[#1A1A1A] font-semibold text-xl leading-snug mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              La clínica carga el perfil clínico del paciente
            </h3>
            <p className="text-[#555] text-base leading-relaxed">
              Diagnóstico, medicamentos, alergias, próximas citas. Todo en un panel simple. Eva
              aprende el caso de cada paciente antes de su primera conversación.
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <PanelMockup />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-14 mb-28">
          <div className="flex-1 max-w-md">
            <span
              className="block text-[7rem] font-bold leading-none mb-6 select-none"
              style={{ color: "rgba(27,79,90,0.08)", fontFamily: "var(--font-fraunces)" }}
            >
              02
            </span>
            <h3
              className="text-[#1A1A1A] font-semibold text-xl leading-snug mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              El paciente escribe por WhatsApp, sin apps
            </h3>
            <p className="text-[#555] text-base leading-relaxed">
              No hay que descargar nada. Solo enviar un mensaje al número de la clínica. A
              cualquier hora. En el idioma que le sea más cómodo.
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-start">
            <PhoneMockup size="sm" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <div className="flex-1 max-w-md">
            <span
              className="block text-[7rem] font-bold leading-none mb-6 select-none"
              style={{ color: "rgba(27,79,90,0.08)", fontFamily: "var(--font-fraunces)" }}
            >
              03
            </span>
            <h3
              className="text-[#1A1A1A] font-semibold text-xl leading-snug mb-4"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Eva responde con sus datos reales. El equipo recibe alertas
            </h3>
            <p className="text-[#555] text-base leading-relaxed">
              Las respuestas son específicas para cada paciente, basadas en su expediente. Si Eva
              detecta señales de riesgo, notifica al equipo clínico de inmediato.
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <AlertCardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Quote ────────────────────────────────────────────────────────────────────

function Quote() {
  return (
    <section className="bg-[#FAF8F5] py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[#C97B84] text-5xl leading-none select-none">"</span>
        <blockquote
          className="italic text-[#1A1A1A] leading-snug mt-2 mb-8"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
            fontWeight: 500,
          }}
        >
          Los pacientes necesitan sentirse acompañados entre consulta y consulta.
          Eva hace exactamente eso.
        </blockquote>
        <div className="w-8 h-px bg-[#1B4F5A]/30 mx-auto mb-5" />
        <p className="text-[#555] text-sm font-medium">
          Dr. ——, Oncólogo
        </p>
      </div>
    </section>
  );
}

// ─── Features Grid ────────────────────────────────────────────────────────────

function Features() {
  const features = [
    {
      icon: "💊",
      title: "Medicamentos",
      desc: "Recuerda horarios, dosis y posibles interacciones para cada paciente.",
    },
    {
      icon: "📅",
      title: "Citas",
      desc: "Confirma próximas consultas y envía recordatorios automáticos.",
    },
    {
      icon: "🥗",
      title: "Nutrición",
      desc: "Responde dudas sobre dieta según el tipo de tratamiento.",
    },
    {
      icon: "🚨",
      title: "Alertas de riesgo",
      desc: "Detecta síntomas preocupantes y escala al equipo clínico.",
    },
    {
      icon: "🔒",
      title: "Solo datos verificados",
      desc: "Eva responde únicamente con información del expediente del paciente.",
    },
    {
      icon: "📋",
      title: "Panel para la clínica",
      desc: "Visibilidad completa de conversaciones, alertas y tendencias.",
    },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#1B4F5A] text-sm font-medium tracking-widest uppercase opacity-60 mb-4">
            Capacidades
          </p>
          <h2
            className="italic text-[#1A1A1A] leading-tight"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 600,
            }}
          >
            Todo lo que Eva puede hacer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#1A1A1A]/6"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <span className="text-2xl mb-4 block">{f.icon}</span>
              <h3 className="text-[#1A1A1A] font-semibold text-sm mb-1.5">{f.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{f.desc}</p>
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
    <section className="bg-[#1B4F5A] py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="italic text-white leading-snug mb-10"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 600,
          }}
        >
          ¿Tu clínica acompaña a sus pacientes después de la consulta?
        </h2>
        <a
          href="#demo"
          className="inline-block bg-white text-[#1B4F5A] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#FAF8F5] transition-colors"
        >
          Agendar demo gratuita
        </a>
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
          className="italic font-semibold text-lg text-[#1B4F5A]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          EvaCare+
        </span>
        <p className="text-[#888] text-sm">Hecho en Perú 🇵🇪 · 2026</p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#FAF8F5]">
      <Nav />
      <Hero />
      <SocialProof />
      <Problem />
      <HowItWorks />
      <Quote />
      <Features />
      <FinalCTA />
      <Footer />
    </main>
  );
}
