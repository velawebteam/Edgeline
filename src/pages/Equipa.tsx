import { TEAM } from '../constants';
import { motion } from 'motion/react';

export default function Equipa() {
  return (
    <div className="px-6 pt-12 pb-40 md:px-12 md:pt-20 max-w-7xl mx-auto">
      <header className="mb-16 md:mb-24">
        <p className="editorial-sub mb-4">Pessoas</p>
        <h2 className="text-4xl md:text-7xl editorial-title">Equipa</h2>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 md:gap-y-32">
        {TEAM.map((member) => (
          <div key={member.id} className="space-y-8">
            <div className="aspect-[4/5] bg-brand-black/5 overflow-hidden filter grayscale contrast-125">
              <img 
                src={member.photo} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="editorial-sub">{member.role}</span>
                <h3 className="text-3xl editorial-title mt-1">{member.name}</h3>
              </div>
              <p className="text-brand-gray leading-relaxed max-w-md">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
