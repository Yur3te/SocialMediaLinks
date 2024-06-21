import React from 'react';
import { Panel } from './components/Panel/Panel';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[100dvh] sm:min-h-screen bg-neutral-950 font-inter">
      <Panel />
    </div>
  );
}

export default App;
