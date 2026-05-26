import Link from 'next/link';
import styles from './layout.module.css';

const COMPONENTS = [
  'Button',
  'Divider',
  'FloatingMenu',
  'RadioGroup',
  'ScreenReveal',
  'SegmentedControl',
  'TextField',
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>✨ Luminescent</Link>
        </div>
      </header>
      
      <div className={styles.mainContainer}>
        <aside className={styles.sidebar}>
          <nav className={styles.nav}>
            <div className={styles.navGroup}>
              <h4 className={styles.navTitle}>Getting Started</h4>
              <Link href="/docs/getting-started" className={styles.navLink}>Installation</Link>
            </div>
            
            <div className={styles.navGroup}>
              <h4 className={styles.navTitle}>Components</h4>
              {COMPONENTS.map(comp => (
                <Link key={comp} href={`/docs/components/${comp.toLowerCase()}`} className={styles.navLink}>
                  {comp}
                </Link>
              ))}
            </div>
          </nav>
        </aside>
        
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}
