export async function preloadImages(publicUrlArray: string[]) {
  if (!Array.isArray(publicUrlArray)) return;
  const images = publicUrlArray.map((url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = `/${url}`;
      img.onload = resolve;
      img.onerror = reject;
    });
  })
  await Promise.all(images)
}
