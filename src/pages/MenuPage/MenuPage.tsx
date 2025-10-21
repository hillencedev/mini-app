import { FC } from 'react';
import { Section, Cell } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { Link } from '@/components/Link/Link.tsx';

export const MenuPage: FC = () => {
  return (
    <Page back={true}>
      <div style={{
        backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
        minHeight: '100vh',
        fontFamily: 'var(--tg-font-family, -apple-system)',
        paddingTop: '110px'
      }}>
        <Section style={{ backgroundColor: 'var(--tg-theme-bg-color, #ffffff)', border: 'none' }}>
          <h1 style={{
            margin: 0,
            marginBottom: 'var(--tg-spacing-l, 16px)',
            fontSize: '28px',
            fontWeight: '700',
            color: 'var(--tg-theme-text-color, #000)',
            padding: '0 var(--tg-spacing-l, 16px)'
          }}>
            Меню
          </h1>
          
          <Cell
            Component={Link}
            to="/"
            style={{ 
              padding: 'var(--tg-spacing-l, 16px)',
              borderBottom: '1px solid var(--tg-theme-separator-color, #E5E5EA)'
            }}
          >
            <div style={{
              fontSize: '17px',
              fontWeight: '400',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              О нас
            </div>
          </Cell>
          
          <Cell
            Component={Link}
            to="/"
            style={{ 
              padding: 'var(--tg-spacing-l, 16px)',
              borderBottom: '1px solid var(--tg-theme-separator-color, #E5E5EA)'
            }}
          >
            <div style={{
              fontSize: '17px',
              fontWeight: '400',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              Отзывы
            </div>
          </Cell>
          
          <Cell
            Component={Link}
            to="/"
            style={{ 
              padding: 'var(--tg-spacing-l, 16px)',
              borderBottom: '1px solid var(--tg-theme-separator-color, #E5E5EA)'
            }}
          >
            <div style={{
              fontSize: '17px',
              fontWeight: '400',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              Гарантия
            </div>
          </Cell>
          
          <Cell
            Component={Link}
            to="/"
            style={{ 
              padding: 'var(--tg-spacing-l, 16px)',
              borderBottom: '1px solid var(--tg-theme-separator-color, #E5E5EA)'
            }}
          >
            <div style={{
              fontSize: '17px',
              fontWeight: '400',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              О доставке
            </div>
          </Cell>
          
          <Cell
            Component={Link}
            to="/"
            style={{ 
              padding: 'var(--tg-spacing-l, 16px)'
            }}
          >
            <div style={{
              fontSize: '17px',
              fontWeight: '400',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              Наш телеграмм канал
            </div>
          </Cell>
        </Section>
      </div>
    </Page>
  );
};
