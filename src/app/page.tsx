"use client";

import Link from 'next/link';
import { Button, Divider, ScreenReveal } from '../components/luminescent-client';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="luminescent-hero-bg" />
      
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <span className={styles.logo}>✨ Luminescent</span>
        </div>
        <nav className={styles.nav}>
          <Link href="/docs" className={styles.navLink}>Docs</Link>
          <a href="https://github.com/axvrma/luminescent" target="_blank" rel="noopener noreferrer" className={styles.navLink}>GitHub</a>
          <Link href="/docs/getting-started">
            <Button variant="primary" size="sm">Get Started</Button>
          </Link>
        </nav>
      </header>

      <div className={styles.heroWrapper}>
        <section className={styles.hero}>
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
            <h1 className={styles.title}>
              The Modern <span className="luminescent-gradient-text">React UI</span> Library
            </h1>
            <p className={styles.subtitle}>
              Premium, highly-polished, and visually stunning React UI components tailored specifically for modern dark-mode applications.
            </p>
            
            <div className={styles.actions}>
              <Link href="/docs">
                <Button size="lg" className={styles.primaryButton}>
                  Explore Documentation
                </Button>
              </Link>
              <div className={styles.codeSnippet}>
                <code>npm install luminescent</code>
              </div>
            </div>
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
