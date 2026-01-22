"use client";

import React from 'react';
import {
  Cpu,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronRight,
  Activity,
  Zap,
  Bot,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Navbar (Mantendo a que já arrumamos) */}
      <nav className="glass-nav sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="PrimeWorks Logo"
              className="h-24 w-auto object-contain"
            />
            <div className="hidden md:flex items-baseline leading-none select-none">
              <span className="text-4xl font-bold text-blue-950 italic tracking-tight">
                PrimeWorks
              </span>
              <span className="text-4xl font-light text-gray-400 italic ml-1">
                Solution
              </span>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-blue-900 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-900 transition-colors">About Us</a>
            <a href="#services" className="hover:text-blue-900 transition-colors">Services</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a>
          </div>

          <a href="#contact" className="hidden md:block bg-blue-900 text-white px-5 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition-all">
            Get a Quote
          </a>
        </div>
      </nav>

      {/* 2. Hero Section (Mantendo a Imagem Split Screen) */}
      <section id="home" className="relative h-[85vh] flex items-center overflow-hidden bg-blue-950">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Industrial Robotic Automation"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* BLOCO DE TEXTO ANIMADO (Motion) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span className="text-xs font-bold text-yellow-400 tracking-wide">SMART INDUSTRY 4.0</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Empowering U.S. Manufacturing with <span className="text-yellow-400">High-End Automation</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              Specialized engineering services for critical sectors including Oil & Gas, Mining, Automotive, Metals and Food & Beverage. Delivering world-class technical expertise to enhance the competitiveness of the American industrial sector.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#about" className="bg-blue-600 text-white px-8 py-4 rounded font-semibold hover:bg-blue-500 transition-all flex items-center gap-2 hover:scale-105 active:scale-95 duration-200">
                Our Expertise <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-8 py-4 rounded font-semibold text-white border border-gray-600 hover:bg-white/5 transition-all hover:border-yellow-400">
                Request Consultation
              </a>
            </div>
          </motion.div>

          {/* Badge de Experiência - COM ANIMAÇÃO DE FLUTUAÇÃO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }} // O Y faz subir e descer
            transition={{
              opacity: { duration: 0.5, delay: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" } // Loop infinito
            }}
            className="hidden md:flex justify-end relative"
          >
            {/* Brilho pulsante atrás */}
            <div className="absolute -inset-4 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>

            {/* O Cartão Amarelo */}
            <div className="relative bg-yellow-400 p-8 rounded shadow-2xl max-w-xs text-blue-900 border border-yellow-300">
              <span className="block text-5xl font-bold mb-2">25+</span>
              <span className="block text-xl font-bold leading-tight">Years of<br /> Expertise</span>
              <div className="mt-4 pt-4 border-t border-blue-900/20 text-sm font-medium opacity-80">Built on decades of engineering leadership in complex global projects.

              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* --- INICIO DA FAIXA DE TECNOLOGIAS (Infinite Marquee - VERSÃO AMARELA) --- */}
      {/* 1. TÍTULO COMPACTO (Fundo Branco) */}
      <div className="bg-white pt-4 pb-1 text-center">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Broad Expertise Across Global Platforms
        </p>
      </div>

      {/* 2. FAIXA AMARELA "SLIM" (Apenas as marcas) */}
      <div className="py-6 bg-yellow-400 border-y border-yellow-500 overflow-hidden relative z-10">

        <div className="flex flex-col gap-4 relative">
          {/* Sombras laterais (Fade) ajustadas para Amarelo */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-yellow-400 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-yellow-400 to-transparent z-20 pointer-events-none"></div>

          {/* LINHA 1: Automação & Robótica */}
          <div className="flex overflow-hidden group">
            <motion.div
              className="flex gap-16 pr-16 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 60, ease: "linear" },
              }}
            >
              {[
                "Rockwell Automation", "Siemens", "ABB", "Schneider Electric",
                "Fanuc Robotics", "KUKA", "Yaskawa Motoman", "Emerson DeltaV",
                "Honeywell", "Mitsubishi Electric", "Omron", "Yokogawa",
                "GE Automation", "Beckhoff", "Bosch Rexroth", "Advantech",
                "National Instruments", "Rockwell Automation", "Siemens", "ABB", "Schneider Electric",
                "Fanuc Robotics", "KUKA", "Yaskawa Motoman", "Emerson DeltaV",
                "Honeywell", "Mitsubishi Electric", "Omron", "Yokogawa",
                "GE Automation", "Beckhoff", "Bosch Rexroth", "Advantech",
                "National Instruments"
              ].map((tech, i) => (
                <span key={i} className="text-xl font-bold text-blue-950 font-sans cursor-default hover:text-white transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* LINHA 2: Instrumentação & Sensores */}
          <div className="flex overflow-hidden group">
            <motion.div
              className="flex gap-16 pr-16 whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 65, ease: "linear" },
              }}
            >
              {[
                "Endress+Hauser", "SICK Sensor Intelligence", "IFM Electronic",
                "Phoenix Contact", "Pepperl+Fuchs", "Balluff", "Turck",
                "Danfoss Drives", "WEG", "AVEVA", "OSIsoft PI", "SAP MES",
                "Mettler-Toledo", "Wika", "TE Connectivity", "Universal Robots",
                "Endress+Hauser", "SICK Sensor Intelligence", "IFM Electronic",
                "Phoenix Contact", "Pepperl+Fuchs", "Balluff", "Turck",
                "Danfoss Drives", "WEG", "AVEVA", "OSIsoft PI", "SAP MES",
                "Mettler-Toledo", "Wika", "TE Connectivity", "Universal Robots"
              ].map((tech, i) => (
                <span key={i} className="text-lg font-semibold text-blue-900/80 font-mono cursor-default hover:text-white transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* --- FIM DA FAIXA DE TECNOLOGIAS --- */}

      {/* 3. NOVA FAIXA "GELO" (Feature Strip) */}
      <div className="bg-slate-50 border-b border-gray-200 py-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {/* Item 1 */}
          <div className="flex items-center gap-5 px-4 justify-center md:justify-start">
            <Zap className="w-12 h-12 text-blue-900" />
            <div>
              <h3 className="font-bold text-blue-950 text-xl">PLC Control</h3>
              <p className="text-sm text-gray-500 font-medium">Advanced Logic Programming</p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex items-center gap-5 px-4 justify-center md:justify-start">
            <LayoutDashboard className="w-12 h-12 text-blue-900" />
            <div>
              <h3 className="font-bold text-blue-950 text-xl">SCADA Systems</h3>
              <p className="text-sm text-gray-500 font-medium">Valves, Motors & Process Flow</p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex items-center gap-5 px-4 justify-center md:justify-start">
            <Bot className="w-12 h-12 text-blue-900" />
            <div>
              <h3 className="font-bold text-blue-950 text-xl">Robotics</h3>
              <p className="text-sm text-gray-500 font-medium">Kuka & ABB Integration</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. About Section (Missão) - Movida para CIMA */}
      {/* 4. About Section (Missão) - Layout Alargado para Imagens */}
      {/* 4. About Section - Versão WIDE (Mais larga) */}

      {/* 4. About Section - VERSÃO WIDE CORRIGIDA */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        {/* Container expandido para 1600px */}
        <div className="max-w-[1600px] mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">

          {/* BLOCO DE IMAGENS (Lado Esquerdo - 8 colunas) */}
          <div className="relative md:col-span-8">
            <div className="absolute -inset-4 bg-blue-100 rounded-xl transform -rotate-1"></div>
            {/* Altura 550px */}
            <div className="relative grid grid-cols-3 gap-3 h-[550px] rounded-xl overflow-hidden shadow-2xl bg-white">
              <div className="h-full">
                <img src="/mission-1.png" alt="Engineering Planning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="h-full">
                <img src="/mission-2.png" alt="Site Inspection" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="h-full">
                <img src="/mission-3.png" alt="Technical Execution" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

          {/* BLOCO DE TEXTO (Lado Direito - 4 colunas) */}
          <div className="md:col-span-4">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Driving Industrial Efficiency Through Technology
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              PrimeWorks Automation Solutions LLC is an engineering firm established to modernize the U.S. industrial infrastructure.
              Led by <strong>Daniel Fernandes da Cruz</strong>, a Distinguished Electrical Engineer with a comprehensive background in industrial automation and robotics, we apply decades of global experience to solve complex manufacturing challenges.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              Our goal is to support American companies in adopting Industry 4.0 technologies, ensuring they remain competitive, safe, and efficient in the global economy.
            </p>

            <ul className="space-y-3 mt-8">
              {[
                "Advanced PLC & DCS Architecture",
                "Strategic Process Optimization",
                "Legacy System Modernization",
                "Safety Compliance (OSHA/NR12)",
                "Operational Maintenance Consulting"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium text-sm">
                  <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Services Section - TEMA AZUL (Conforme Anexo) */}
      {/* 5. Services Section - COM ANIMAÇÃO NOS ÍCONES */}
      {/* 5. Services Section - CORREÇÃO DA ANIMAÇÃO */}
      <section id="services" className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase">Technical Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">Automation & Control Solutions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - PLC */}
            <div className="bg-blue-900/50 p-8 rounded-xl border border-blue-800 hover:border-yellow-400 transition-all duration-300 group cursor-default">
              {/* O CONTAINER ANIMA, NÃO O ÍCONE */}
              <div className="mb-6 w-fit transform transition-all duration-500 ease-out group-hover:rotate-45 group-hover:scale-110">
                <Settings className="w-12 h-12 text-yellow-400 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">PLC & Control Systems</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Architecture design and High-reliability logic programming for manufacturing and process control. Expert handling of industrial protocols (Profibus, Ethernet/IP).
              </p>
            </div>

            {/* Card 2 - SCADA */}
            <div className="bg-blue-900/50 p-8 rounded-xl border border-blue-800 hover:border-yellow-400 transition-all duration-300 group cursor-default">
              {/* CONTAINER: Pula (Sobe e Cresce) */}
              <div className="mb-6 w-fit transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2">
                <Activity className="w-12 h-12 text-yellow-400 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SCADA / HMI Development</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Dynamic screens featuring real-time animation of valves, tanks, and motors for complete process visibility using FactoryTalk & WinCC.
              </p>
            </div>

            {/* Card 3 - Robotics */}
            <div className="bg-blue-900/50 p-8 rounded-xl border border-blue-800 hover:border-yellow-400 transition-all duration-300 group cursor-default">
              {/* CONTAINER: Gira levemente e cresce */}
              <div className="mb-6 w-fit transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-12">
                <Bot className="w-12 h-12 text-yellow-400 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Robotic Cell Design</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Turnkey integration of industrial robotic cells into existing workflows, ensuring safety and peak performance (Kuka, Fanuc, ABB).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLIENTES E PROJETOS (Versão Híbrida: Controle de Largura e Altura) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Proven Track Record</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-12">
            Trusted by Global Industry Leaders
          </h2>

          {/* Mudei para 4 colunas (md:grid-cols-4) para dar mais espaço lateral para os logos largos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center opacity-90">
            {[
              // LOGOS LARGOS (Usamos W-...)
              { name: "ABB", src: "/abb.png", size: "w-48" },
              { name: "Nestlé", src: "/nestle.png", size: "h-48" },
              { name: "Equinor", src: "/equinor.png", size: "h-48" },
              { name: "L'Oréal", src: "/loreal.png", size: "w-36" }, // L'Oreal precisa ser bem largo
              { name: "Petrobras", src: "/petrobras.png", size: "h-48" },
              { name: "Mondelez", src: "/mondelez.png", size: "h-48" },
              { name: "Saipem", src: "/saipem.png", size: "h-48" },
              { name: "Pentair", src: "/pentair.png", size: "h-48" },
              { name: "Ternium", src: "/ternium.png", size: "h-48" },
              { name: "Nexa", src: "/nexa.png", size: "h-48" },
              { name: "Modec", src: "/modec.png", size: "h-48" },
              { name: "Unigel", src: "/unigel.png", size: "h-48" },
              { name: "Vale", src: "/vale.png", size: "h-36" },

              // LOGOS ALTOS/QUADRADOS (Usamos H-...)
              { name: "Mercado Livre", src: "/mercadolivre.png", size: "h-16" },
              { name: "General Mills", src: "/generalmills.png", size: "h-24" },
              { name: "Raia Drogasil", src: "/raiadrogasil.png", size: "h-16" },

            ].map((client, index) => (
              <div key={index} className="flex justify-center group h-32 items-center px-4">
                <img
                  src={client.src}
                  alt={`${client.name} logo`}
                  // AQUI ESTÁ O TRUQUE: Removi o 'w-auto' fixo e uso a variável 'client.size'
                  className={`${client.size} object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 cursor-default`}
                />
              </div>
            ))}
          </div>

          <p className="mt-16 text-sm text-gray-400 font-medium">
            Strategic automation and engineering projects across diverse industrial sectors.
          </p>
        </div>
      </section>

      {/* 6. Footer (Mantido) */}
      <footer id="contact" className="bg-blue-950 text-white py-20 border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto opacity-80" />
              <span className="text-2xl font-bold italic">PrimeWorks</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Need an automation specialist for your facility? Let's discuss your technical requirements.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@primeworksolution.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Globe className="w-5 h-5 text-blue-400" />
                <span>Headquarters: Orlando, FL (USA)</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <h3 className="text-xl font-bold mb-6">Send Inquiry</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Company Name" className="bg-slate-700 border-none rounded p-3 text-white w-full" />
                <input type="email" placeholder="Email Address" className="bg-slate-700 border-none rounded p-3 text-white w-full" />
              </div>
              <select className="bg-slate-700 border-none rounded p-3 text-gray-300 w-full">
                <option>Service Needed</option>
                <option>PLC Programming</option>
                <option>Robotic Integration</option>
                <option>Consulting</option>
              </select>
              <textarea placeholder="Tell us about your automation needs..." rows={3} className="bg-slate-700 border-none rounded p-3 text-white w-full"></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded transition-all">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PrimeWorks Automation Solutions LLC. All rights reserved.
        </div>
      </footer>
    </main>
  );
}