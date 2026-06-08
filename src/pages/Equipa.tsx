import { useState } from 'react';
import { TEAM } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { TeamMember } from '../types';

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
      <div className="md:col-span-2 space-y-1 order-2 md:order-1">
        <div className="flex flex-col">
          <h3 className="text-xl md:text-2xl font-normal tracking-tight">
            <span className="font-medium">{member.name}</span> — {member.role}
          </h3>
        </div>
        <p className="text-lg md:text-xl text-brand-black/80 font-normal tracking-tight leading-relaxed whitespace-pre-line max-w-lg">
          {member.bio}
        </p>

        {member.longBio && (
          <div className="pt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm uppercase tracking-widest text-[#9D9D9D] hover:text-brand-black transition-colors cursor-pointer"
            >
              {isExpanded ? 'Ver menos' : 'Ver mais'}
            </button>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-lg md:text-xl text-brand-black/80 font-normal tracking-tight leading-relaxed whitespace-pre-line max-w-lg mt-4">
                    {member.longBio}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
      
      <div className="flex justify-start md:justify-end order-1 md:order-2 mb-4 md:mb-0">
        <div className="w-44 h-44 md:w-52 md:h-52 bg-brand-black/5 overflow-hidden filter grayscale contrast-110">
          <img 
            src={member.photo} 
            alt={member.name} 
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </div>
      </div>
    </div>
  );
}

export default function Equipa() {
  return (
    <div className="px-6 pt-12 pb-40 md:px-12 md:pt-20 max-w-5xl mx-auto">
      <div className="flex flex-col space-y-20 md:space-y-28">
        {TEAM.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
