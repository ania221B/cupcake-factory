export const productImages = import.meta.glob(
  '../assets/images/products/**/img*{-*,}.{jpg,webp,avif}',
  { eager: true, import: 'default' }
)
