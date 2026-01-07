
import React from 'react';
import { Shield, Target, MessageSquare, Zap, Clock, Award, Dumbbell, Heart, Activity } from 'lucide-react';
import { FeatureCard, Step } from './types';

export const LINKS = {
  WHATSAPP: "https://api.whatsapp.com/send?phone=5567981743191&text=Ol%C3%A1!%20Falck%20%F0%9F%98%8A%0AGostaria%20de%20saber%20como%20funciona%20o%20acompanhamento%20com%20voc%C3%AA%20para%20treinamento%20personalizado.",
  INSTAGRAM: "https://www.instagram.com/silvio_falck/",
  LOGO: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/falck/logo.png",
  EXPERT_1: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/falck/f1.PNG",
  EXPERT_2: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/falck/f2.PNG",
  EXPERT_3: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/falck/f3.PNG",
  MEDAL: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/falck/medalha%20ufgd.PNG",
  STUDENT_1: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/falck/ps1.PNG",
  STUDENT_2: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/falck/ps2.PNG",
  STUDENT_3: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/falck/ps3.PNG",
  STUDENT_4: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/falck/ps4.PNG",
};

export const FEATURES: FeatureCard[] = [
  {
    title: "Avaliação Honestamente Humana",
    description: "Sem protocolos engessados. Analiso sua realidade para criar o melhor caminho.",
    icon: <Target className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Atendimento Direto",
    description: "Comunicação clara, sem termos técnicos desnecessários. Eu e você, focados.",
    icon: <MessageSquare className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Resultados Tangíveis",
    description: "Treinos desenhados para você ver e sentir a mudança no espelho e na saúde.",
    icon: <Zap className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Acompanhamento Premium",
    description: "Presença constante para garantir que cada movimento seja executado com perfeição.",
    icon: <Shield className="w-6 h-6 text-blue-500" />
  }
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "WhatsApp",
    description: "Clique em qualquer botão para iniciarmos nossa conversa sem compromisso."
  },
  {
    number: "02",
    title: "Avaliação",
    description: "Alinhamos seus objetivos, histórico e rotina para desenhar seu plano."
  },
  {
    number: "03",
    title: "Treinamento",
    description: "Começamos sua transformação com foco total em técnica e performance."
  }
];

export const SectionElements = ({ intensity = 1 }: { intensity?: number }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <Dumbbell className="absolute top-1/4 left-[10%] text-blue-500/10 w-16 h-16 animate-float" style={{ animationDelay: '0s' }} />
    <Heart className="absolute top-1/2 right-[5%] text-blue-500/10 w-12 h-12 animate-float" style={{ animationDelay: '2s' }} />
    <Activity className="absolute bottom-1/4 left-[15%] text-blue-500/10 w-20 h-20 animate-float" style={{ animationDelay: '1s' }} />
    <Award className="absolute top-[10%] right-[15%] text-blue-500/10 w-14 h-14 animate-float" style={{ animationDelay: '3s' }} />
    {intensity > 1 && (
      <>
        <Shield className="absolute bottom-[10%] right-[20%] text-blue-500/10 w-16 h-16 animate-float" style={{ animationDelay: '1.5s' }} />
        <Target className="absolute top-1/2 left-[5%] text-blue-500/10 w-12 h-12 animate-float" style={{ animationDelay: '4s' }} />
      </>
    )}
  </div>
);
