import Link from 'next/link';
import Image from 'next/image';
import { DocsSidebar } from '../../components/DocsSidebar';
import styles from './layout.module.css';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/logo.png" alt="Luminescent Logo" width={28} height={28} style={{ borderRadius: '6px' }} />
            Luminescent
          </Link>
        </div>
      </header>
      
      <div className={styles.mainContainer}>
        <DocsSidebar />
        
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
}
