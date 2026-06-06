'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import products, { formatPrice } from '@/data/products';

export default function ImageSearch({ onClose, compact = false }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [cameraError, setCameraError] = useState('');
  const fileRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const router = useRouter();

  // Cleanup camera on unmount
  useEffect(() => {
    return () => {
      try { videoRef.current?.srcObject?.getTracks().forEach(t => t.stop()); } catch(e) {}
    };
  }, []);

  const processImage = (file) => {
    if (!file) return;
    setSearching(true);
    setImage(file);
    setCameraError('');

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      setPreview(dataUrl);

      const img = new Image();
      img.onload = () => {
        try {
          // Create small canvas for color analysis
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = 32;
          canvas.height = 32;
          ctx.drawImage(img, 0, 0, 32, 32);

          // Extract average color
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
          const brightness = (avgR + avgG + avgB) / 3;

          // Classify color
          let colorCategory = '';
          if (brightness < 60) colorCategory = 'dark';
          else if (brightness > 200) colorCategory = 'light';
          else if (avgR > avgG + 25 && avgR > avgB + 25) colorCategory = 'red';
          else if (avgG > avgR + 25 && avgG > avgB + 25) colorCategory = 'green';
          else if (avgB > avgR + 25 && avgB > avgG + 25) colorCategory = 'blue';
          else colorCategory = 'neutral';

          // Extract keywords from filename
          const filename = file.name.toLowerCase().replace(/\.[^.]+$/, '').replace(/[_-]/g, ' ');
          const words = filename.split(/\s+/).filter(w => w.length > 2);

          // Score products
          const catColors = {
            dark: ['black', 'dark', 'grey', 'gray', 'charcoal'],
            light: ['white', 'light', 'cream', 'beige', 'ivory'],
            red: ['red', 'coral', 'pink', 'burgundy', 'maroon', 'rose'],
            green: ['green', 'olive', 'teal', 'emerald', 'mint'],
            blue: ['blue', 'navy', 'indigo', 'purple', 'aqua', 'cyan'],
            neutral: ['brown', 'tan', 'khaki', 'beige', 'grey', 'gray', 'gold', 'silver'],
          };
          const matchedColors = catColors[colorCategory] || [];

          const scored = products.map(p => {
            let score = 0;
            p.tags.forEach(t => {
              if (matchedColors.includes(t)) score += 3;
            });
            words.forEach(w => {
              if (p.name.toLowerCase().includes(w)) score += 5;
              if (p.tags.some(t => t.includes(w))) score += 4;
              if (p.category.toLowerCase().includes(w)) score += 3;
            });
            return { ...p, score };
          });

          const sorted = scored.sort((a, b) => b.score - a.score).slice(0, 8);
          const withScore = sorted.filter(p => p.score > 0);
          setResults(withScore);
          setSearching(false);

          // If no matches, redirect to search by filename
          if (withScore.length === 0 && words.length > 0) {
            const searchTerm = words.slice(0, 3).join(' ');
            onClose?.();
            router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
          } else if (withScore.length === 0) {
            // Still show no results even after processing
            setSearching(false);
          }
        } catch (err) {
          console.error('Image analysis error:', err);
          setSearching(false);
          setCameraError('Could not analyze image. Try a different photo.');
        }
      };

      img.onerror = () => {
        setSearching(false);
        setCameraError('Could not load image. Try a different file.');
      };

      img.src = dataUrl;
    };

    reader.onerror = () => {
      setSearching(false);
      setCameraError('Could not read file.');
    };

    reader.readAsDataURL(file);
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) processImage(file);
  };

  const openCamera = async () => {
    try {
      setCameraError('');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 640 }, height: { ideal: 480 } }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setShowCamera(true);
    } catch (e) {
      setCameraError('Camera not available: ' + e.message);
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    
    canvas.toBlob((blob) => {
      if (!blob) { setCameraError('Could not capture photo'); return; }
      const file = new File([blob], 'camera.jpg', { type: 'image/jpeg' });
      try { video.srcObject?.getTracks().forEach(t => t.stop()); } catch(e) {}
      setShowCamera(false);
      processImage(file);
    }, 'image/jpeg', 0.8);
  };

  if (compact) {
    return (
      <div>
        <div className="flex items-center gap-2 mb-3">
          <button onClick={() => fileRef.current?.click()}
            className="flex-1 py-2 bg-gray-100 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-200 transition flex items-center justify-center gap-1">
            📷 Upload Photo
          </button>
          <button onClick={openCamera}
            className="flex-1 py-2 bg-gray-100 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-200 transition flex items-center justify-center gap-1">
            📸 Use Camera
          </button>
        </div>
        <input ref={fileRef} type="file" accept="image/*" capture="environment" onChange={handleFile} className="hidden" />
        
        {cameraError && <p className="text-xs text-red-500 mb-2">{cameraError}</p>}

        {searching && (
          <div className="flex items-center gap-2 text-sm text-gray-400 py-2">
            <div className="animate-spin w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full" />
            Analyzing...
          </div>
        )}

        {results.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-2">{results.length} match{results.length > 1 ? 'es' : ''}</p>
            <div className="grid grid-cols-4 gap-1.5">
              {results.map(p => (
                <a key={p.id} href={`/products/${p.slug}`} className="block bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-sm transition">
                  <div className="aspect-square bg-gray-50"><img src={p.image} alt="" className="w-full h-full object-cover" /></div>
                  <div className="p-1"><p className="text-[9px] font-medium truncate">{p.name}</p><p className="text-[9px] font-bold">{formatPrice(p.price)}</p></div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Camera */}
        {showCamera && (
          <div className="fixed inset-0 z-50 bg-black flex flex-col">
            <video ref={videoRef} className="flex-1 object-cover" playsInline autoPlay muted />
            <canvas ref={canvasRef} className="hidden" />
            <div className="flex justify-center gap-10 p-4 bg-black/80">
              <button onClick={() => { try { videoRef.current?.srcObject?.getTracks().forEach(t => t.stop()); } catch(e) {} setShowCamera(false); }}
                className="text-white/70 text-sm font-medium">Cancel</button>
              <button onClick={capturePhoto} className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-transparent hover:bg-white/10 transition">
                <span className="w-14 h-14 rounded-full bg-white" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Full version (for sidebar)
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <h3 className="font-bold text-gray-900 text-sm">Search by Image</h3>
        {onClose && <button onClick={onClose} className="text-gray-400 hover:text-gray-600">&times;</button>}
      </div>

      {!preview && !searching ? (
        <div className="space-y-2">
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-indigo-300 transition cursor-pointer"
            onClick={() => fileRef.current?.click()}>
            <p className="text-2xl mb-1">📸</p>
            <p className="text-xs text-gray-500">Upload or take a photo</p>
            <p className="text-[10px] text-gray-400 mt-0.5">to find similar products</p>
          </div>
          <input ref={fileRef} type="file" accept="image/*" capture="environment" onChange={handleFile} className="hidden" />
          <button onClick={openCamera}
            className="w-full py-2 border border-gray-200 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-50 transition flex items-center justify-center gap-1.5">
            📷 Use Camera
          </button>
          {cameraError && <p className="text-xs text-red-500 text-center">{cameraError}</p>}
        </div>
      ) : searching ? (
        <div className="text-center py-6">
          <div className="animate-spin w-8 h-8 border-3 border-indigo-400 border-t-transparent rounded-full mx-auto mb-2" />
          <p className="text-xs text-gray-400">Analyzing...</p>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-gray-50 border">
              <img src={preview} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900">{results.length} result{results.length !== 1 ? 's' : ''}</p>
              <button onClick={() => { setPreview(null); setResults([]); setSearching(false); setCameraError(''); }}
                className="text-[10px] text-indigo-600 hover:underline">Try another</button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {results.slice(0, 4).map(p => (
              <a key={p.id} href={`/products/${p.slug}`}
                className="block bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-sm transition">
                <div className="aspect-square bg-gray-50"><img src={p.image} alt="" className="w-full h-full object-cover" /></div>
                <div className="p-1"><p className="[9px] font-medium truncate">{p.name}</p><p className="text-[9px] font-bold">{formatPrice(p.price)}</p></div>
              </a>
            ))}
          </div>
          {results.length === 0 && (
            <div className="text-center py-4">
              <p className="text-xs text-gray-400">No close matches</p>
              <button onClick={() => fileRef.current?.click()} className="mt-1 text-xs text-indigo-600 hover:underline">Try another</button>
            </div>
          )}
        </div>
      )}

      {/* Camera overlay */}
      {showCamera && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <video ref={videoRef} className="flex-1 object-cover" playsInline autoPlay muted />
          <canvas ref={canvasRef} className="hidden" />
          <div className="flex justify-center gap-10 p-4 bg-black/80">
            <button onClick={() => { try { videoRef.current?.srcObject?.getTracks().forEach(t => t.stop()); } catch(e) {} setShowCamera(false); }}
              className="text-white/70 text-sm font-medium">Cancel</button>
            <button onClick={capturePhoto} className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-transparent">
              <span className="w-14 h-14 rounded-full bg-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
