import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Section, Image, Button } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { mountMainButton } from '@telegram-apps/sdk-react';
import { products } from '@/pages/IndexPage/IndexPage';

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  useEffect(() => {
    let button: ReturnType<typeof mountMainButton> | null = null;
    try {
      button = mountMainButton();
      button.setText('Добавить в корзину');
      button.setBgColor('#007AFF');
      button.onClick(() => console.log('Добавить в корзину:', product?.name));
      button.show();
    } catch {
      console.log('MainButton недоступен');
    }

    return () => {
      if (button) {
        try {
          button.hide();
        } catch {
          console.log('Ошибка при скрытии MainButton');
        }
      }
    };
  }, [product]);

  if (!product) {
    return (
      <Page back={true}>
        <div style={{ 
          padding: 'var(--tg-spacing-l, 16px)', 
          textAlign: 'center',
          fontFamily: 'var(--tg-font-family, -apple-system)',
          paddingTop: '110px'
        }}>
          Товар не найден
        </div>
      </Page>
    );
  }

  return (
    <Page back={true}>
      <div style={{
        backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
        minHeight: '100vh',
        fontFamily: 'var(--tg-font-family, -apple-system)',
        paddingTop: '110px'
      }}>
        {/* Изображение товара - без отступов и закруглений */}
        <div style={{
          width: '100%',
          height: '50vh',
          backgroundColor: 'var(--tg-theme-secondary-bg-color, #f1f1f1)',
          overflow: 'hidden'
        }}>
          <Image
            src={product.image}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Информация о товаре */}
        <Section style={{ 
          backgroundColor: 'var(--tg-theme-bg-color, #ffffff)', 
          padding: 'var(--tg-spacing-l, 16px)', 
          border: 'none',
          marginTop: 'var(--tg-spacing-l, 16px)'
        }}>
          {/* Название и цена */}
          <div style={{ marginBottom: 'var(--tg-spacing-l, 16px)' }}>
            <h1 style={{ 
              margin: 0, 
              marginBottom: 'var(--tg-spacing-s, 8px)', 
              fontSize: '24px', 
              fontWeight: '600',
              fontFamily: 'var(--tg-font-family, -apple-system)',
              color: 'var(--tg-theme-text-color, #000)',
              lineHeight: '1.2'
            }}>
              {product.name}
            </h1>
            <div style={{ 
              fontSize: '20px', 
              fontWeight: '700',
              fontFamily: 'var(--tg-font-family, -apple-system)',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              {product.price}
            </div>
          </div>

          {/* Описание */}
          <div style={{ marginBottom: 'var(--tg-spacing-l, 16px)' }}>
            <h2 style={{ 
              margin: 0, 
              marginBottom: 'var(--tg-spacing-s, 8px)', 
              fontSize: '17px', 
              fontWeight: '600',
              fontFamily: 'var(--tg-font-family, -apple-system)',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              Описание товара
            </h2>
            <p style={{ 
              margin: 0, 
              fontSize: '15px', 
              lineHeight: '1.4',
              fontFamily: 'var(--tg-font-family, -apple-system)',
              color: 'var(--tg-theme-text-color, #000)',
              opacity: 0.8
            }}>
              {product.description}
            </p>
          </div>

          {/* Вопросы */}
          <div style={{ marginBottom: 'var(--tg-spacing-xl, 24px)' }}>
            <h3 style={{ 
              margin: 0, 
              marginBottom: 'var(--tg-spacing-s, 8px)', 
              fontSize: '17px', 
              fontWeight: '600',
              fontFamily: 'var(--tg-font-family, -apple-system)',
              color: 'var(--tg-theme-text-color, #000)'
            }}>
              Остались вопросы?
            </h3>
            
            {/* Кнопки */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--tg-spacing-m, 12px)' }}>
              <Button 
                mode="outline" 
                size="l"
                style={{
                  width: '100%',
                  fontFamily: 'var(--tg-font-family, -apple-system)'
                }}
                onClick={() => console.log('Написать в поддержку')}
              >
                Написать в поддержку
              </Button>
              
              <Button 
                mode="filled" 
                size="l"
                style={{
                  width: '100%',
                  fontFamily: 'var(--tg-font-family, -apple-system)',
                  backgroundColor: 'var(--tg-theme-button-color, #007AFF)'
                }}
                onClick={() => console.log('Добавить в корзину:', product.name)}
              >
                В корзину
              </Button>
            </div>
          </div>

          {/* Отступ снизу для MainButton */}
          <div style={{ height: '80px' }} />
        </Section>
      </div>
    </Page>
  );
};