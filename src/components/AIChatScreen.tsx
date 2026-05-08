import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Info, Mic, Send, Bot, Stethoscope, AlertTriangle } from 'lucide-react';
import './AIChatScreen.css';

interface AIChatScreenProps {
  onBack: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text?: string;
  isCustomResponse?: boolean;
  richComponent?: React.ReactNode;
}

const SUGGESTIONS = [
  "Mujhe kaunsi dawaaiyan chal rahi hain?",
  "Mera BP kya tha pichli baar?",
  "Kab last test hua tha?",
  "Konse doctor se mila tha last month?",
  "Mujhe diabetes hai? Kya records mein hai?",
  "Saari medicines ki list do"
];

export const AIChatScreen: React.FC<AIChatScreenProps> = ({ onBack }) => {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: "Namaste! Main aapke health records se connected hoon.\nKuch bhi pooch sakte hain apni sehat ke baare mein.\nMujhe aapke documents ki jaankari hai 😊"
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMsg: Message = { id: Date.now().toString(), sender: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      setIsTyping(false);
      
      // Dawa Diary Intelligent RAG Simulation
      let newAIResponse: Message = { id: Date.now().toString() + 'ai', sender: 'ai', text: '' };

      const lowercaseInput = text.toLowerCase();

      if (lowercaseInput.includes('medicine') || lowercaseInput.includes('dawa') || lowercaseInput.includes('dawai')) {
        newAIResponse.text = "Aapke 15 March 2025 ke prescription (Dr. Anita Sharma) ke hisaab se aapko 2 dawaaiyan chal rahi hain:\n\n1. **Metformin 500mg** (Subah, Shaam)\n2. **Telmisartan 40mg** (Din mein ek baar)\n\nAapko Type 2 Diabetes aur Hypertension hai. Kya aapko medicine reminder set karna hai?";
      } 
      else if (lowercaseInput.includes('hba1c') || lowercaseInput.includes('sugar') || lowercaseInput.includes('test')) {
        newAIResponse.text = "Aapka aakhiri test 28 Feb 2025 ko Thyrocare mein hua tha. Usme aapka **HbA1c 7.2%** aaya tha, jo thoda high hai. Aapki Fasting Sugar **118** thi (borderline).\n\nMain test ki summary neeche dikha raha hoon:";
        newAIResponse.richComponent = (
          <div className="ai-rich-card">
            <h4>Lab Results (28 Feb)</h4>
            <ul>
              <li style={{color: 'var(--color-error)'}}>HbA1c: 7.2% (High)</li>
              <li style={{color: '#D97706'}}>Fasting Sugar: 118 (Borderline)</li>
            </ul>
          </div>
        );
      }
      else if (lowercaseInput.includes('doctor') || lowercaseInput.includes('visit')) {
        newAIResponse.text = "Aap haali mein **Dr. Anita Sharma** (Apollo Hospital) se 15 March ko mile the. Usse pehle aapne **Dr. Suresh Patel** ko 10 Jan ko dikhaya tha.";
      }
      else if (lowercaseInput.includes('allerg')) {
        newAIResponse.text = "Aapke medical profile ke hisaab se aapko **Penicillin** se allergy hai. Kripya naye doctor ko yeh zaroor batayein.";
      }
      else {
        newAIResponse.text = "Main aapke medical records samajh raha hoon. Aapne haali mein Dr. Anita Sharma ki parchi aur Thyrocare ki report upload ki hai. Aap inke baare mein koi khaas sawaal poochna chahenge?";
      }
      
      setMessages(prev => [...prev, newAIResponse]);
    }, 1500);
  };

  return (
    <div className="ai-chat-screen">
      {/* Header */}
      <div className="chat-header">
        <button className="icon-btn" onClick={onBack}>
          <ArrowLeft size={24} color="white" />
        </button>
        
        <div className="chat-avatar-container">
          <div className="ai-avatar pulse-anim">
            <Bot size={20} color="white" className="avatar-bot" />
            <Stethoscope size={12} color="white" className="avatar-steth" />
          </div>
          <div className="chat-title-info">
            <h2>Dawa Diary AI</h2>
            <div className="online-status">
              <span className="dot"></span> Online
            </div>
          </div>
        </div>
        
        <button className="icon-btn">
          <Info size={24} color="white" />
        </button>
      </div>

      {/* Disclaimer Banner */}
      {showDisclaimer && (
        <div className="disclaimer-banner">
          <div className="disclaimer-content">
            <AlertTriangle size={18} color="#B45309" className="disclaimer-icon" />
            <p><strong>Yeh ek AI assistant hai.</strong> Serious bimari ke liye doctor se milein.</p>
          </div>
          <button className="disclaimer-btn" onClick={() => setShowDisclaimer(false)}>
            Understood
          </button>
        </div>
      )}

      {/* Chat Area */}
      <div className="chat-messages-area">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
            {msg.sender === 'ai' && (
              <div className="msg-avatar">
                <Bot size={16} color="white" />
              </div>
            )}
            
            {msg.isCustomResponse ? (
              <div className="message-bubble ai-bubble custom-card-bubble">
                <p className="mb-sm">Aapke records ke hisaab se...</p>
                
                {/* Embedded Lab Card */}
                <div className="embedded-lab-card">
                  <div className="lab-card-header">Blood Sugar (Fasting)</div>
                  <div className="lab-card-body">
                    <span className="lab-value text-orange">118 mg/dL</span>
                    <span className="lab-status bg-orange">Borderline ⚠️</span>
                  </div>
                  <div className="lab-card-footer">Normal: &lt;100 mg/dL</div>
                </div>
                
                <p className="mt-sm">Dr. Sharma ne 12 March ko <strong>'pre-diabetic'</strong> likha tha.</p>
                <p>Unhone Metformin 500mg bhi prescribe ki thi.</p>
                <div className="ai-disclaimer-text">
                  Doctor se ek baar check karwa lein 😊
                </div>
              </div>
            ) : (
              <div className={`message-bubble ${msg.sender === 'user' ? 'user-bubble' : 'ai-bubble'}`}>
                {msg.text?.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="message-wrapper ai">
            <div className="msg-avatar">
              <Bot size={16} color="white" />
            </div>
            <div className="message-bubble ai-bubble typing-bubble">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions (only show if no user messages yet) */}
      {messages.length === 1 && !isTyping && (
        <div className="suggested-chips-container">
          <div className="suggested-chips-scroll">
            {SUGGESTIONS.map((sug, idx) => (
              <button 
                key={idx} 
                className="suggested-chip"
                onClick={() => handleSend(sug)}
              >
                {sug}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Bar */}
      <div className="chat-input-container">
        <div className="chat-input-wrapper">
          <input 
            type="text" 
            className="chat-input" 
            placeholder="Kuch bhi poochho..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
          />
          <button className="mic-btn">
            <Mic size={20} color="#6B7280" />
          </button>
        </div>
        <button 
          className={`send-btn ${inputValue.trim() ? 'active' : ''}`}
          onClick={() => handleSend(inputValue)}
        >
          <Send size={20} color="white" />
        </button>
      </div>
    </div>
  );
};
