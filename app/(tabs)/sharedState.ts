let currentIndex = 0;

export function getCurrentImageIndex(): number {
  return currentIndex;
}

export function incrementImageIndex(imagesLength: number): number {
  currentIndex = (currentIndex + 1) % imagesLength;
  return currentIndex;
}