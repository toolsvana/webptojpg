'use client';

import { useState, useRef } from 'react';

const MAX_SIZE_MB = 10;

export default function WebpToJpgTool() {
  const [progress, setProgress] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (file: File | undefined) => {
    if (!file) return;

    setDownloadUrl(null);
    setProgress(false);
    setFeedback('');

    if (!file.type.match(/image\/webp/)) {
      setFeedback('Please select a WebP image file.');
      return;
    }

    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setFeedback(`Please choose an image under ${MAX_SIZE_MB}MB for smoother conversion.`);
      return;
    }

    try {
      setProgress(true);
      setFeedback('Converting WebP to JPG…');

      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            setFeedback('Failed to create canvas context.');
            setProgress(false);
            return;
          }

          ctx.drawImage(img, 0, 0);

          canvas.toBlob((blob) => {
            if (!blob) {
              setFeedback('Failed to convert image.');
              setProgress(false);
              return;
            }

            const url = URL.createObjectURL(blob);
            setDownloadUrl(url);
            setFileName(file.name.replace(/\.webp$/i, '.jpg'));
            setProgress(false);
            setFeedback('Conversion complete! Your JPG image is ready to download.');
          }, 'image/jpeg', 0.92);
        };

        img.onerror = () => {
          setFeedback('Failed to load image. Please try another file.');
          setProgress(false);
        };

        img.src = e.target?.result as string;
      };

      reader.onerror = () => {
        setFeedback('Failed to read file. Please try again.');
        setProgress(false);
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error(error);
      setFeedback('Something went wrong during conversion. Please try another file.');
      setProgress(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer?.files?.[0];
    handleFiles(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFiles(file);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section className="glass-panel p-6 sm:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Browser based
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            WebP to JPG Converter
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            Convert modern WebP images to universal JPG format. Everything happens in your browser—no uploads, no waiting.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <div
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="group flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-600 bg-slate-900/40 px-6 py-12 text-center transition hover:border-cyan-400/60 hover:bg-slate-900/60"
          >
            <div className="rounded-full border border-white/10 bg-white/[0.03] p-3">
              <svg
                className="h-10 w-10 text-cyan-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-medium text-white">Drop your WebP here</p>
              <p className="text-sm text-slate-400">or click to browse</p>
            </div>
            <p className="text-xs text-slate-500">
              Up to {MAX_SIZE_MB}MB · Processed locally · High-quality JPG
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/webp"
              onChange={handleFileChange}
              className="hidden"
              aria-label="Upload WebP to convert"
            />
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/40 p-5">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Why users choose this</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>• Private, offline conversion</li>
                <li>• Universal compatibility</li>
                <li>• High-quality JPG output</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/5 bg-black/40 px-4 py-3 text-xs text-slate-400">
              <strong className="text-slate-300">Privacy first:</strong> Your images never leave your device. All processing happens locally in your browser.
            </div>
          </div>
        </div>

        {progress && (
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></div>
            <p className="text-sm text-slate-300">{feedback}</p>
          </div>
        )}

        {downloadUrl && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-lg shadow-black/40">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Your JPG image is ready</h3>
                <p className="text-sm text-slate-400">Click below to download your converted file</p>
              </div>
              <a
                href={downloadUrl}
                download={fileName}
                className="rounded-full border border-white/15 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-cyan-400/70 hover:bg-cyan-400/10"
              >
                Download JPG
              </a>
            </div>
          </div>
        )}

        {feedback && !progress && !downloadUrl && (
          <p className="text-sm text-slate-400">{feedback}</p>
        )}
      </div>
    </section>
  );
}
