import type { Metadata } from 'next';
import WebpToJpgTool from './components/WebpToJpgTool';

export const metadata: Metadata = {
  title: 'WebP to JPG Converter — Convert WebP Images to JPG Format',
  description: 'Convert modern WebP images to universal JPG format. Fast, secure, and built for daily workflows.',
  keywords: 'WebP to JPG, image converter, JPG converter, WebP converter, convert WebP, browser tool',
  openGraph: {
    title: 'WebP to JPG Converter',
    description: 'Convert WebP images to JPG format directly in your browser.',
    type: 'website',
  },
};

const featurePillars = [
  { title: 'Universal compatibility', description: 'JPG works everywhere, from old browsers to modern apps and devices.' },
  { title: 'Privacy-first workflow', description: 'All conversion happens in your browser. Your images never leave your device.' },
  { title: 'High-quality output', description: 'JPG export at 92% quality preserves image clarity while reducing file size.' },
];

const seoContent = [
  {
    title: 'Why convert WebP to JPG',
    body: [
      'WebP is Google\'s modern image format that offers superior compression compared to traditional formats. However, despite its technical advantages, WebP faces compatibility challenges. Many older applications, email clients, and content management systems don\'t support WebP files. Converting WebP to JPG ensures your images work everywhere without compatibility issues.',
      'The most common scenario requiring WebP to JPG conversion involves sharing images across different platforms. You might download an image from a modern website that serves WebP files, but when you try to upload it to a legacy system, you receive an error message. JPG format has been around since 1992 and enjoys universal support across all devices, browsers, and software.',
      'Professional workflows often demand JPG format for consistency. Print shops, marketing agencies, and publishing houses typically request JPG files because their established workflows and software tools are optimized for this format. Converting WebP to JPG before submitting work prevents delays and compatibility headaches.',
      'Email attachments represent another critical use case. While modern email clients handle WebP files, many corporate email systems and older clients cannot display WebP images inline. Recipients see broken image icons instead of your carefully crafted visuals. Converting to JPG ensures your email attachments display correctly for all recipients.',
      'Social media platforms have varying levels of WebP support. While major platforms like Facebook and Twitter handle WebP, smaller platforms and forums may not. Converting to JPG before uploading guarantees your images appear correctly regardless of platform limitations.',
    ],
  },
  {
    title: 'Understanding WebP and JPG differences',
    body: [
      'WebP was developed by Google to create smaller image files without sacrificing quality. The format supports both lossy and lossless compression, transparency, and animation. WebP files are typically 25-35% smaller than equivalent JPG files at the same quality level. This size advantage makes WebP attractive for web performance optimization.',
      'JPG (or JPEG) uses lossy compression that discards some image data to achieve smaller file sizes. The format excels at compressing photographic images with many colors and gradual transitions. JPG doesn\'t support transparency, which means all images have solid backgrounds. This limitation is acceptable for photographs but problematic for graphics requiring transparent backgrounds.',
      'Browser support represents the key practical difference. All modern browsers support WebP, but Internet Explorer and older versions of Safari do not. JPG enjoys complete universal support across every browser, device, and platform ever created. This universality makes JPG the safe choice when compatibility matters more than file size.',
      'Quality considerations differ between formats. WebP\'s superior compression algorithm can maintain better quality at smaller file sizes compared to JPG. However, when converting WebP to JPG, you\'re moving from a more efficient format to a less efficient one. The conversion process re-encodes the image, which can introduce additional quality loss if not handled carefully.',
      'File size implications matter for web performance and storage. WebP files are smaller, which means faster page loads and reduced bandwidth costs. However, the compatibility benefits of JPG often outweigh the file size disadvantage. Modern compression tools can create reasonably small JPG files that balance quality and file size effectively.',
    ],
  },
  {
    title: 'Common WebP to JPG conversion scenarios',
    body: [
      'Website migration projects frequently require format conversions. When moving from a modern CMS that serves WebP to an older platform, you need to convert all images to JPG. This ensures the migrated site displays correctly without broken images. Bulk conversion tools help, but understanding the process for individual files remains important.',
      'Content creators downloading images from stock photo sites increasingly encounter WebP files. Modern stock photo platforms serve WebP to reduce bandwidth costs. However, when you import these images into video editing software, graphic design tools, or presentation applications, many programs don\'t recognize WebP. Converting to JPG solves this compatibility issue.',
      'E-commerce platforms often have specific image format requirements. While the platform frontend might support WebP, the backend admin panel or product import system may only accept JPG. Sellers need to convert [WebP to JPG] before uploading product photos to ensure their listings appear correctly across all platform features.',
      'Print-on-demand services universally require JPG files. Whether you\'re creating custom t-shirts, photo books, or canvas prints, the printing service needs JPG format. WebP files won\'t upload or will be rejected during the order process. Converting images before placing orders prevents frustration and delays.',
      'Legacy software integration requires JPG format. Many enterprise systems, document management platforms, and specialized industry software were built before WebP existed. These systems cannot process WebP files. Converting to JPG ensures smooth integration with existing business workflows and systems.',
    ],
  },
  {
    title: 'Technical aspects of browser-based conversion',
    body: [
      'Modern browsers provide robust APIs for image manipulation without server infrastructure. The HTML5 Canvas API enables JavaScript to decode WebP images and re-encode them as JPG. This client-side processing eliminates privacy concerns and reduces conversion time by avoiding upload/download cycles.',
      'The conversion process involves multiple steps. First, the File API reads the WebP file as a data URL. Next, an Image object loads and decodes the WebP data using the browser\'s built-in image decoder. The decoded image is drawn onto a Canvas element, which provides pixel-level access. Finally, the Canvas toBlob method encodes the pixel data as JPG with specified quality settings.',
      'Quality settings significantly impact output file size and appearance. JPG quality ranges from 0 to 100, with higher numbers producing better quality but larger files. A quality setting of 92% provides an excellent balance—the image looks virtually identical to the original while achieving reasonable file size. Lower quality settings introduce visible compression artifacts.',
      'Performance varies based on image size and device capabilities. Small images (under 1MB) convert nearly instantly. Large high-resolution images may take several seconds, especially on older devices. Modern JavaScript engines and GPU-accelerated canvas rendering make the process surprisingly fast for most use cases.',
      'Cross-platform consistency ensures reliable results. Whether users access the tool on Windows, macOS, Linux, iOS, or Android, the conversion produces identical output. Browser standardization means the Canvas API behaves consistently across platforms, eliminating compatibility issues that plague traditional desktop software.',
    ],
  },
];

const faqs = [
  { question: 'Does this tool upload my images anywhere?', answer: 'No. The entire conversion happens in your browser using JavaScript. Your images never touch a server.' },
  { question: 'Will the JPG file be larger than the WebP?', answer: 'Usually yes, because JPG is less efficient than WebP. However, the quality will be excellent, and JPG works everywhere.' },
  { question: 'Can I convert multiple images at once?', answer: 'Currently, the tool processes one image at a time to ensure optimal performance and user experience.' },
  { question: 'What quality level is used for JPG output?', answer: 'The tool uses 92% quality, which provides excellent visual quality while keeping file sizes reasonable.' },
];

export default function Home() {
  return (
    <div className="bg-grid-slate min-h-screen">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex flex-col gap-1">
            <a className="text-2xl font-semibold tracking-tight text-white" href="/">WebP to JPG</a>
            <p className="text-sm text-slate-400">Convert WebP images to JPG format</p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a className="transition hover:text-white" href="/">Home</a>
            <a className="transition hover:text-white" href="mailto:support@lightning.studio">Support</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <WebpToJpgTool />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featurePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-12">
          <h2 className="text-3xl font-semibold text-white">In-depth guide</h2>
          {seoContent.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xl font-semibold text-white">{section.title}</h3>
              <div className="space-y-4">
                {section.body.map((paragraph, idx) => {
                  const linkMatch = paragraph.match(/\[WebP to JPG\]/);
                  if (linkMatch) {
                    const parts = paragraph.split('[WebP to JPG]');
                    return (
                      <p key={idx} className="leading-relaxed text-slate-300">
                        {parts[0]}
                        <a href="https://toolsvana.com/tool/webp-to-jpg" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300">WebP to JPG</a>
                        {parts[1]}
                      </p>
                    );
                  }
                  return <p key={idx} className="leading-relaxed text-slate-300">{paragraph}</p>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="mt-16 border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        <p>All processing happens locally in your browser. Powered by Lightning Studio.</p>
      </footer>
    </div>
  );
}
