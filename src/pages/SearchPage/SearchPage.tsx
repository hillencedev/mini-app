import { FC, useState, useEffect } from 'react';
import { Section, Image } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { Link } from '@/components/Link/Link.tsx';
import { products } from '@/pages/IndexPage/IndexPage.tsx';

export const SearchPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery]);

  return (
    <Page back={true}>
      <div style={{ 
        backgroundColor: 'var(--tg-theme-bg-color, #ffffff)',
        minHeight: '100vh',
        fontFamily: 'var(--tg-font-family, -apple-system)',
        paddingTop: '110px'
      }}>
        {/* Статичная поисковая строка */}
        <Section style={{ backgroundColor: 'var(--tg-theme-bg-color, #ffffff)', padding: 'var(--tg-spacing-l, 16px)', border: 'none' }}>
          <input
            type="text"
            placeholder="Поиск"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: 'var(--tg-spacing-m, 12px) var(--tg-spacing-l, 16px)',
              borderRadius: 'var(--tg-border-radius, 12px)',
              border: 'none',
              backgroundColor: 'var(--tg-theme-secondary-bg-color, #F2F2F7)',
              fontSize: '17px',
              fontFamily: 'var(--tg-font-family, -apple-system)',
              outline: 'none',
              color: 'var(--tg-theme-text-color, #000)',
              boxSizing: 'border-box'
            }}
            autoFocus
          />
        </Section>

        {/* Результаты поиска */}
        <Section style={{ backgroundColor: 'var(--tg-theme-bg-color, #ffffff)', padding: '0', border: 'none' }}>
          <div style={{ padding: '0 var(--tg-spacing-l, 16px)' }}>
            {filteredProducts.length > 0 ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 'var(--tg-spacing-m, 12px)',
                  backgroundColor: 'transparent',
                }}
              >
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        minHeight: '300px',
                        backgroundColor: 'transparent',
                        borderRadius: 'var(--tg-border-radius, 12px)',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ 
                        width: '100%', 
                        height: '230px',
                        overflow: 'hidden',
                        borderRadius: 'var(--tg-border-radius, 12px) var(--tg-border-radius, 12px) 0 0',
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
                      <div style={{ 
                        textAlign: 'left', 
                        marginTop: 'var(--tg-spacing-s, 8px)', 
                        backgroundColor: 'transparent',
                      }}>
                        <div style={{ 
                          fontSize: '16px', 
                          fontWeight: '500', 
                          marginBottom: 'var(--tg-spacing-xs, 4px)',
                          color: 'var(--tg-theme-text-color, #000)'
                        }}>
                          {product.name}
                        </div>
                        <div style={{ 
                          fontSize: '16px', 
                          fontWeight: '600', 
                          color: 'var(--tg-theme-text-color, #000)'
                        }}>
                          {product.price}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div style={{ 
                textAlign: 'center', 
                padding: 'var(--tg-spacing-xl, 24px)',
                fontFamily: 'var(--tg-font-family, -apple-system)'
              }}>
                <div style={{ 
                  fontSize: '17px', 
                  color: 'var(--tg-theme-hint-color, #8E8E93)',
                  marginBottom: 'var(--tg-spacing-s, 8px)'
                }}>
                  Ничего не найдено
                </div>
                <div style={{ 
                  fontSize: '15px', 
                  color: 'var(--tg-theme-hint-color, #8E8E93)'
                }}>
                  Попробуйте изменить запрос
                </div>
              </div>
            )}
          </div>
        </Section>
      </div>
    </Page>
  );
};