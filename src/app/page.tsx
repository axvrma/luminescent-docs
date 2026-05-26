"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Divider, SegmentedControl } from '../components/luminescent-client';
import styles from './page.module.css';

import { Highlight, themes } from 'prism-react-renderer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Install');
  const [copied, setCopied] = useState(false);

  const tabData: Record<string, { title: string; description: string; code: string; language: string }> = {
    'Install': {
      title: 'Quick Installation',
      description: 'Get started in seconds by adding Luminescent to your project.',
      code: 'npm install luminescent\n# or\nyarn add luminescent',
      language: 'bash'
    },
    'Configure': {
      title: 'Simple Configuration',
      description: 'Luminescent requires zero configuration out of the box. Just import and use.',
      code: 'import { Button } from "luminescent";\n\nfunction App() {\n  return <Button glowColor="peach">Click Me</Button>;\n}',
      language: 'tsx'
    },
    'Build': {
      title: 'Build Beautifully',
      description: 'Craft stunning interfaces with dark-mode native components.',
      code: '<div className="luminescent-hero-bg">\n  <SegmentedControl tabs={["Design", "Develop", "Deploy"]} />\n</div>',
      language: 'tsx'
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(tabData[activeTab].code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <main className={styles.main}>
      <div className="luminescent-hero-bg" />
      
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/logo-v2.png" alt="Luminescent Logo" width={28} height={28} style={{ borderRadius: '6px' }} />
            Luminescent
          </Link>
        </div>
        
        {/* Mobile Hamburger Icon */}
        <button 
          className={styles.mobileMenuBtn} 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="https://github.com/axvrma/luminescent" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
            <Button variant="primary" size="sm">
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </span>
            </Button>
          </a>
        </nav>
      </header>

      <div className={styles.heroWrapper}>
        <section className={styles.hero}>
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <p style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '1.5rem', color: '#ffaa66' }}>v0.1.1 is live 🚀</p>
            <h1 className={styles.title}>
              Build Stunning UIs with <span className="luminescent-gradient-text">Luminescent</span>
            </h1>
            <p className={styles.subtitle}>
              A highly-polished React component library designed for the modern web. Featuring dynamic glassmorphism, fluid animations, and a rich dark-mode aesthetic.
            </p>
            
            <div className={styles.actions}>
              <Link href="/docs">
                <Button size="lg" className={styles.primaryButton}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Explore Documentation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Tabs Showcase */}
        <section style={{ maxWidth: '800px', margin: '0 auto 4rem', width: '100%', padding: '0 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10, position: 'relative' }}>
          <SegmentedControl 
            tabs={['Install', 'Configure', 'Build']} 
            defaultActiveTab="Install"
            onChange={(tab: string) => {
              setActiveTab(tab);
              setCopied(false);
            }}
          />
          
          <div style={{ marginTop: '2rem', width: '100%', minHeight: '200px', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="glass-panel"
                style={{ padding: '2rem', width: '100%', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff' }}>
                  {tabData[activeTab].title}
                </h3>
                <p style={{ opacity: 0.7, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {tabData[activeTab].description}
                </p>
                
                <div style={{ position: 'relative' }}>
                  <button 
                    onClick={handleCopy}
                    style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '6px', cursor: 'pointer', zIndex: 20, color: copied ? '#4ade80' : '#a3a3a3', transition: 'all 0.2s ease' }}
                    aria-label="Copy code"
                  >
                    {copied ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    )}
                  </button>
                  <Highlight theme={themes.nightOwl} code={tabData[activeTab].code} language={tabData[activeTab].language}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                      <pre className={`${styles.codeSnippet} ${className}`} style={{ ...style, textAlign: 'left', overflowX: 'auto', paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                        <code>
                          {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                              {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                              ))}
                            </div>
                          ))}
                        </code>
                      </pre>
                    )}
                  </Highlight>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto', paddingBottom: '3rem' }}>
          <Divider orientation="horizontal" color="#ffaa66" glowDirection="top" />
        </div>
      </div>

      <section className={styles.features}>
        <div className={`glass-panel ${styles.featureCard}`}>
          <h3>Dark Mode Native</h3>
          <p>Built with modern dark-mode aesthetics out of the box, using OKLCH and glowing gradients.</p>
        </div>
        <div className={`glass-panel ${styles.featureCard}`}>
          <h3>Accessible</h3>
          <p>Carefully crafted following WAI-ARIA guidelines for keyboard navigation and screen readers.</p>
        </div>
        <div className={`glass-panel ${styles.featureCard}`}>
          <h3>Framer Motion</h3>
          <p>Beautiful micro-interactions and layout animations powered by Framer Motion.</p>
        </div>
      </section>
    </main>
  );
}
