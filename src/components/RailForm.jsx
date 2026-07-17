import { useEffect, useState } from 'react';
import ContactFormCard from './ContactFormCard';

export default function RailForm() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) {
      setVisible(true);
      return;
    }

    const onScroll = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      const signup = document.getElementById('solicita');
      const reachedSignup = signup ? signup.getBoundingClientRect().top <= window.innerHeight : false;
      setVisible(heroBottom <= 0 && !reachedSignup);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`rail-form${visible ? ' is-visible' : ''}`}>
      <ContactFormCard
        targetId="hs-form-rail"
        subtitle="Te acompañamos durante todo el proceso."
      />
    </div>
  );
}