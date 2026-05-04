import { Project, TeamMember } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'casa-magoito',
    title: 'Casa do Magoito',
    location: 'Sintra, Portugal',
    year: 2024,
    description: 'Uma habitação unifamiliar que se estende sobre a falésia do Magoito. O projeto explora a horizontalidade e a relação tátil com a paisagem através de uma sequência de pátios e planos de betão que protegem e enquadram o Atlântico.',
    coverImage: 'https://lh3.googleusercontent.com/d/1HY3PaV88HVmpERhkmhzuj3nRF9RuwR9y',
    images: [
      'https://lh3.googleusercontent.com/d/1HY3PaV88HVmpERhkmhzuj3nRF9RuwR9y',
      'https://lh3.googleusercontent.com/d/1NpoxhhwghultNXB8GWGxEDMjQ3hcaJnP',
      'https://lh3.googleusercontent.com/d/1X9DZi8NlGEn7ImYNmgY7k5GkNwmK0T5h',
      'https://lh3.googleusercontent.com/d/1mJAzpA8_jLJifrAwNRD1zKgeAVZTqrhi',
      'https://lh3.googleusercontent.com/d/1lZC_9WwStIXBBiJ3nzKmLX9CCMxLyK_a',
      'https://lh3.googleusercontent.com/d/1KCAdnA-WBBdOwBttPH3THhEL5C0NX3l4',
      'https://lh3.googleusercontent.com/d/1bXO1T_DofYhMaHk8LnrLBXLCClp7OOOX',
      'https://lh3.googleusercontent.com/d/1zDYW3fiO4GSj9zztLAZJHMfOxY01cOud',
      'https://lh3.googleusercontent.com/d/1Chaf1EiJl_TkKQDSx6NagtvR-0gixJ6i',
      'https://lh3.googleusercontent.com/d/1Rx9OWbdJbNkqhG7bIytqvuS7zmJczoKb',
      'https://lh3.googleusercontent.com/d/1mFUUJyBU2EFwqSx0D2rdp6IGklhE6pNd',
    ],
    featured: true,
  },
  {
    id: 'casa-l02',
    title: 'Casa L02',
    location: 'Algarve, Portugal',
    year: 2023,
    description: 'Uma intervenção minimalista que respeita a topografia e a luz do sul. A estrutura em betão aparente funde-se com a paisagem árida, criando espaços de sombra e silêncio.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1600607687960-4a226b77773f?auto=format&fit=crop&q=80&w=2070',
    ],
    featured: true,
  },
  {
    id: 'edificio-portico',
    title: 'Edifício Pórtico',
    location: 'Lisboa, Portugal',
    year: 2022,
    description: 'Reabilitação urbana centrada na preservação da memória industrial. O novo volume em vidro e aço dialoga com a alvenaria original, estabelecendo um novo ritmo visual na rua.',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070',
    ],
    featured: true,
  },
  {
    id: 'pavilhao-e',
    title: 'Pavilhão E',
    location: 'Porto, Portugal',
    year: 2024,
    description: 'Um espaço de exposição temporária que explora a efemeridade e a transparência. A malha modular permite diferentes configurações, adaptando-se às diversas obras de arte.',
    coverImage: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=2070',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070',
    ],
    featured: true,
  },
  {
    id: 'atelier-cascais',
    title: 'Atelier Cascais',
    location: 'Cascais, Portugal',
    year: 2021,
    description: 'O próprio espaço de trabalho do atelier. Uma reflexão sobre a prática da arquitetura, onde a simplicidade dos materiais permite o foco no processo criativo.',
    coverImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070',
    ],
    featured: false,
  },
  {
    id: 'residencia-viana',
    title: 'Residência Viana',
    location: 'Viana do Castelo, Portugal',
    year: 2023,
    description: 'Um diálogo entre a pedra local e o vidro. A casa organiza-se em torno de um pátio central que protege da nortada e convida a luz.',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2070',
    ],
    featured: true,
  },
  {
    id: 'biblioteca-m',
    title: 'Biblioteca M',
    location: 'Braga, Portugal',
    year: 2024,
    description: 'Espaço público focado na acústica e na luz zenital. O uso de madeira clara cria uma atmosfera de concentração e calma.',
    coverImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2070',
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=2070',
    ],
    featured: true,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'alexandre-berardo',
    name: 'Alexandre Berardo',
    role: 'Sócio Fundador',
    bio: 'Arquiteto pela FAUP, com especialização em reabilitação urbana. Foca o seu trabalho na relação entre o material e a memória.',
    photo: 'https://lh3.googleusercontent.com/d/1rHgHTKyBWyb8Oq89clKTSqbgpqxJs8J5',
  },
  {
    id: 'doriana-santos',
    name: 'Doriana Santos',
    role: 'Sócia Associada',
    bio: 'Mestrada em Arquitetura Sustentável. Coordena a área de investigação tecnológica do atelier, integrando novos materiais na construção tradicional.',
    photo: 'https://lh3.googleusercontent.com/d/1TmtR9qrGtvvBMsrSSM_p3u4qkLB1xvJi',
  },
];
