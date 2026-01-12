
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, CheckCircle2, Cpu, Terminal, Command, ArrowRight } from 'lucide-react';
import { generateDigitalStrategy } from '../services/geminiService';

const AIPlanner: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setResponse(null);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const result = await generateDigitalStrategy(input);
    
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <section id="consultation" className="py-24 relative overflow-hidden bg-black border-t border-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.9),rgba(10,10,10,1)),url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-900 to-transparent opacity-50"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/30 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
            
            <div className="h-12 bg-slate-950/80 border-b border-slate-800 flex items-center px-4 justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> coris-digital-architect-ia.sh
                </div>
                <div className="w-10"></div>
            </div>

          <div className="grid md:grid-cols-2">
            
            <div className="p-8 md:p-12 flex flex-col justify-center border-r border-slate-800 bg-slate-950/50">
              <div className="mb-8 inline-flex items-center gap-3">
                <div className="p-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white tracking-wide font-mono">CORIS DIGITAL® ARCHITECT</h2>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">System Ready</p>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                Design Your Digital Future
              </h3>
              <p className="text-slate-400 mb-8 font-light text-sm leading-relaxed">
                Describe your business logic. Our AI will analyze your bottlenecks and architect a preliminary software stack instantly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-slate-800 rounded-xl opacity-20 group-focus-within:opacity-100 transition duration-500 blur"></div>
                    <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="// Example: I run an e-commerce brand. I need to increase conversion and automate customer support..."
                    className="relative w-full bg-black border border-slate-800 rounded-xl p-5 text-slate-200 placeholder-slate-600 font-mono text-sm focus:outline-none resize-none h-48 transition-all"
                    />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !input}
                  className="w-full bg-white hover:bg-yellow-400 text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="font-mono">ANALYZING_SITUATION...</span>
                    </>
                  ) : (
                    <>
                      <Command className="w-5 h-5" />
                      Generate Architecture
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="p-8 md:p-12 bg-black flex flex-col min-h-[500px] font-mono text-sm relative">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
               
              {response ? (
                <div className="animate-fade-in relative z-10">
                  <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-green-500 font-bold tracking-widest uppercase text-xs">Analysis_Complete.json</span>
                  </div>
                  
                  <div className="space-y-4 text-slate-300">
                    {response.split('\n').map((line, i) => {
                      if (line.startsWith('**')) return <div key={i} className="text-yellow-400 font-bold mt-6 mb-2 border-l-2 border-yellow-500 pl-3">{line.replace(/\*\*/g, '').toUpperCase()}</div>;
                      if (line.startsWith('-')) return <div key={i} className="ml-4 flex gap-2 text-slate-400"><span className="text-slate-600">›</span> {line.substring(1)}</div>;
                      if (line.match(/^\d\./)) return <div key={i} className="text-white font-bold mt-4">{line}</div>;
                      return <div key={i} className="opacity-80">{line.replace(/\*\*/g, '')}</div>;
                    })}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800/50">
                     <p className="text-xs text-slate-600 mb-2">// Next Step</p>
                     <button className="text-yellow-500 hover:text-white transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                        Initialize Human Handover <ArrowRight className="w-3 h-3" />
                     </button>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-30 relative z-10">
                  <div className="w-24 h-24 rounded-full border border-slate-800 flex items-center justify-center mb-6 animate-pulse-slow">
                    <Cpu className="w-12 h-12 text-slate-500" />
                  </div>
                  <h3 className="text-slate-400 font-bold mb-2 tracking-widest">AWAITING_INPUT</h3>
                  <p className="text-slate-600 max-w-xs text-xs">
                    System on standby. Enter your business parameters to initiate the architectural generation sequence.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlanner;
