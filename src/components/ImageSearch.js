'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import products, { formatPrice } from '@/data/products';

export default function ImageSearch({ onClose }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const fileRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const router = useRouter();

  const processImage = async (file) => {
    if (!file) return;
    setSearching(true);
    setImage(file);
    
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target.result;
      setPreview(dataUrl);
      
      // Analyze image
      const img = new Image();
      img.onload = async () => {
        // Create small canvas for analysis
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 32;
        canvas.height = 32;
        ctx.drawImage(img, 0, 0, 32, 32);
        
        // Extract dominant colors
        const imageData = ctx.getImageData(0, 0, 32, 32).data;
        let r = 0, g = 0, b = 0, count = 0;
        for (let i = 0; i < imageData.length; i += 16) {
          r += imageData[i];
          g += imageData[i + 1];
          b += imageData[i + 2];
          count++;
        }
        const avgR = Math.round(r / count);
        const avgG = Math.round(g / count);
        const avgB = Math.round(b / count);
        
        // Classify color
        const brightness = (avgR + avgG + avgB) / 3;
        let colorCategory = '';
        if (brightness < 60) colorCategory = 'dark';
        else if (brightness > 200) colorCategory = 'light';
        else if (avgR > avgG + 30 && avgR > avgB + 30) colorCategory = 'red';
        else if (avgG > avgR + 30 && avgG > avgB + 30) colorCategory = 'green';
        else if (avgB > avgR + 30 && avgB > avgG + 30) colorCategory = 'blue';
        else colorCategory = 'neutral';
        
        // Aspect ratio
        const isWide = img.width > img.height * 1.2;
        const isTall = img.height > img.width * 1.2;
        
        // Extract keywords from filename
        const filename = file.name.toLowerCase().replace(/\.[^.]+$/, '').replace(/[_-]/g, ' ');
        const words = filename.split(/\s+/).filter(w => w.length > 2);
        
        // Score products
        const scored = products.map(p => {
          let score = 0;
          
          // Color match
          const catColors = {
            'dark': ['black', 'dark', 'grey', 'gray'],
            'light': ['white', 'light', 'cream', 'beige'],
            'red': ['red', 'coral', 'pink', 'burgundy', 'maroon'],
            'green': ['green', 'olive', 'teal'],
            'blue': ['blue', 'navy', 'indigo', 'purple'],
            'neutral': ['brown', 'tan', 'khaki', 'beige', 'grey', 'gray'],
          };
          const matchedColors = catColors[colorCategory] || [];
          p.tags.forEach(t => {
            if (matchedColors.includes(t)) score += 3;
          });
          
          // Filename keyword match
          words.forEach(w => {
            if (p.name.toLowerCase().includes(w)) score += 5;
            if (p.tags.some(t => t.includes(w))) score += 4;
            if (p.category.toLowerCase().includes(w)) score += 3;
          });
          
          // Shape match (wide/tall)
          if (isWide && p.tags.some(t => ['laptop', 'monitor', 'tablet', 'book', 'mat'].includes(t))) score += 2;
          if (isTall && p.tags.some(t => ['bottle', 'lamp', 'umbrella', 'standing', 'tall'].includes(t))) score += 2;
          
          return { ...p, score };
        });
        
        const sorted = scored.sort((a, b) => b.score - a.score).slice(0, 8);
        setResults(sorted.filter(p => p.score > 0));
        
        // Auto-navigate if no results from analysis - fallback to filename search
        if (sorted.filter(p => p.score > 0).length === 0) {
          const searchTerm = words.join(' ') || 'product';
          onClose?.();
          router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
          return;
        }
        
        setSearching(false);
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) processImage(file);
  };

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setShowCamera(true);
    } catch(e) {
      alert('Camera not available. Try uploading an image instead.');
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      ctx.drawImage(videoRef.current, 0, 0);
      canvasRef.current.toBlob((blob) => {
        const file = new File([blob], 'camera-photo.jpg', { type: 'image/jpeg' });
        // Stop camera
        videoRef.current.srcObject?.getTracks().forEach(t => t.stop());
        setShowCamera(false);
        processImage(file);
      }, 'image/jpeg');
    }
  };

  const getColorSplash = () => {
    const colors = ['from-red-400 to-red-600', 'from-blue-400 to-blue-600', 'from-green-400 to-green-600', 'from-yellow-400 to-yellow-600', 'from-purple-400 to-purple-600'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div>
      {/* Camera view */}
      {showCamera && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <video ref={videoRef} className="flex-1 object-cover" playsInline />
          <canvas ref={canvasRef} className="hidden" />
          <div className="flex justify-center gap-8 p-4 bg-black/80">
            <button onClick={() => { videoRef.current?.srcObject?.getTracks().forEach(t => t.stop()); setShowCamera(false); }}
              className="text-white text-sm">✕ Cancel</button>
            <button onClick={capturePhoto}
              className="w-16 h-16 rounded-full bg-white border-4 border-white flex items-center justify-center">
              <span className="w-12 h-12 rounded-full bg-white border-2 border-gray-300" />
            </button>
          </div>
        </div>
      )}

      {/* Upload area */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900">Search by Image</h3>
          {onClose && <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg">&times;</button>}
        </div>
        
        {!preview ? (
          <div className="space-y-3">
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-indigo-300 transition cursor-pointer"
              onClick={() => fileRef.current?.click()}>
              <p className="text-4xl mb-2">📸</p>
              <p className="text-sm text-gray-500">Upload a photo to find similar products</p>
              <p className="text-xs text-gray-400 mt-1">or use your camera</p>
            </div>
            <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
            <button onClick={handleCameraCapture}
              className="w-full py-2.5 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center gap-2">
              <span>📷</span> Use Camera
            </button>
          </div>
        ) : searching ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl overflow-hidden">
              <img src={preview} alt="Uploaded" className="w-full h-full object-cover" />
            </div>
            <div className="animate-pulse flex justify-center gap-1">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay:'0ms'}} />
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay:'150ms'}} />
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay:'300ms'}} />
            </div>
            <p className="text-sm text-gray-400 mt-3">Analyzing image...</p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                <img src={preview} alt="Uploaded" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{results.length} match{results.length !== 1 ? 'es' : ''} found</p>
                <button onClick={() => { setPreview(null); setResults([]); setImage(null); }}
                  className="text-xs text-indigo-600 hover:underline">Search again</button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {results.map(p => (
                <a key={p.id} href={`/products/${p.slug}`}
                  className="group block bg-white rounded-lg border border-gray-100 hover:shadow-md transition overflow-hidden">
                  <div className="aspect-square bg-gray-50">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <div className="p-1.5">
                    <p className="text-[10px] font-medium text-gray-900 truncate">{p.name}</p>
                    <p className="text-[10px] font-bold text-gray-900">{formatPrice(p.price)}</p>
                  </div>
                </a>
              ))}
            </div>
            {results.length === 0 && (
              <div className="text-center py-4">
                <p className="text-sm text-gray-400">No close matches found</p>
                <button onClick={() => { fileRef.current?.click(); }}
                  className="mt-2 text-xs text-indigo-600 hover:underline">Try another image</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
