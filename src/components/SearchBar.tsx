import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const productCategoryMap = {
  // Laboratory Equipment
  'centrifuge': '/categories/laboratory-equipment',
  'incubator': '/categories/laboratory-equipment',
  'autoclave': '/categories/laboratory-equipment',
  'sterilizer': '/categories/laboratory-equipment',
  'microscope': '/categories/laboratory-equipment',
  'spectrophotometer': '/categories/laboratory-equipment',
  'colorimeter': '/categories/laboratory-equipment',
  'ph meter': '/categories/laboratory-equipment',
  'balance': '/categories/laboratory-equipment',
  'analyzer': '/categories/laboratory-equipment',
  'water bath': '/categories/laboratory-equipment',
  'biosafety cabinet': '/categories/laboratory-equipment',
  'hot plate': '/categories/laboratory-equipment',
  'vortex': '/categories/laboratory-equipment',
  'oven': '/categories/laboratory-equipment',
  'bod': '/categories/laboratory-equipment',
  
  // Diagnostic Instruments
  'ecg': '/categories/diagnostic-instruments',
  'patient monitor': '/categories/diagnostic-instruments',
  'bp apparatus': '/categories/diagnostic-instruments',
  'blood pressure': '/categories/diagnostic-instruments',
  'glucometer': '/categories/diagnostic-instruments',
  'thermometer': '/categories/diagnostic-instruments',
  'pulse oximeter': '/categories/diagnostic-instruments',
  'holter': '/categories/diagnostic-instruments',
  'vital signs': '/categories/diagnostic-instruments',
  'blood cell counter': '/categories/diagnostic-instruments',
  
  // Respiratory Support
  'oxygen concentrator': '/categories/respiratory-support',
  'bipap': '/categories/respiratory-support',
  'cpap': '/categories/respiratory-support',
  'ventilator': '/categories/respiratory-support',
  
  // Hospital Furniture
  'hospital bed': '/categories/hospital-furniture',
  'fowler bed': '/categories/hospital-furniture',
  'icu bed': '/categories/hospital-furniture',
  'wheelchair': '/categories/hospital-furniture',
  'stretcher': '/categories/hospital-furniture',
  'bedside locker': '/categories/hospital-furniture',
  'overbed table': '/categories/hospital-furniture',
  'trolley': '/categories/hospital-furniture',
  'ot table': '/categories/hospital-furniture',
  'ot light': '/categories/hospital-furniture',
  'examination table': '/categories/hospital-furniture',
  'ambulance stretcher': '/categories/hospital-furniture',
  
  // Surgical Instruments
  'surgical clamps': '/categories/surgical-instruments',
  'retractors': '/categories/surgical-instruments',
  'surgical scissors': '/categories/surgical-instruments',
  'surgical forceps': '/categories/surgical-instruments',
  'orthopedic set': '/categories/surgical-instruments',
  'gynecology set': '/categories/surgical-instruments',
  'ent': '/categories/surgical-instruments',
  'otoscope': '/categories/surgical-instruments',
  'laryngoscope': '/categories/surgical-instruments',
  'ophthalmic': '/categories/surgical-instruments',
  'ophthalmoscope': '/categories/surgical-instruments',
  'retinoscope': '/categories/surgical-instruments',
  'dental chair': '/categories/surgical-instruments',
  'ultrasonic scaler': '/categories/surgical-instruments',
  'micromotor': '/categories/surgical-instruments',
  
  // Critical Care
  'syringe pump': '/categories/critical-care',
  'infusion pump': '/categories/critical-care',
  'anesthesia': '/categories/critical-care',
  'suction machine': '/categories/critical-care',
  
  // Educational Equipment
  'optics equipment': '/categories/educational-equipment',
  'electricity apparatus': '/categories/educational-equipment',
  'mechanics equipment': '/categories/educational-equipment',
  'physics': '/categories/educational-equipment',
  'micro pipettes': '/categories/educational-equipment',
  'anatomical models': '/categories/educational-equipment',
  'biology lab': '/categories/educational-equipment',
  
  // Hospital Supplies
  'weighing scale': '/categories/hospital-supplies',
  'baby weighing': '/categories/hospital-supplies',
  'physician scale': '/categories/hospital-supplies',
  'stethoscope': '/categories/hospital-supplies',
  'hospital mattress': '/categories/hospital-supplies',
  'wash basin': '/categories/hospital-supplies',
  'oxygen cylinder': '/categories/hospital-supplies',
  'flowmeter': '/categories/hospital-supplies',
  'surgical masks': '/categories/hospital-supplies',
  'surgical gloves': '/categories/hospital-supplies',
  'catheter': '/categories/hospital-supplies',
  'ett': '/categories/hospital-supplies',
};

interface SearchBarProps {
  onClose?: () => void;
}

export default function SearchBar({ onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.length > 1) {
      const filtered = Object.keys(productCategoryMap).filter(product =>
        product.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);
      setSuggestions(filtered);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSearch = (searchTerm: string) => {
    const term = searchTerm.toLowerCase();
    const matchedCategory = Object.entries(productCategoryMap).find(([product]) =>
      product.toLowerCase().includes(term)
    );
    
    if (matchedCategory) {
      navigate(matchedCategory[1]);
      setQuery('');
      setIsOpen(false);
      onClose?.();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleSearch(query.trim());
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSearch(suggestion);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent bg-white/90 backdrop-blur-sm"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 capitalize transition-colors"
            >
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4 text-gray-400" />
                <span className="text-gray-700">{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}