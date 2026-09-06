import { useEffect, useMemo, useState } from 'react';

/** Browser-friendly image formats the site will try when resolving assets. */
export const IMAGE_EXTENSIONS = [
  'png',
  'jpg',
  'jpeg',
  'webp',
  'gif',
  'svg',
  'avif',
  'bmp',
  'jfif',
  'ico',
  'tif',
  'tiff',
  'heic',
  'heif',
] as const;

/**
 * Build candidate URLs for a public asset so any common image type works.
 *
 * @example imageCandidates('/speakers/treesa.jpg')
 * // tries treesa.jpg first, then treesa.png, treesa.webp, ...
 *
 * @example imageCandidates('/logo/abs-logo')
 * // tries abs-logo.png, abs-logo.jpg, ...
 */
export function imageCandidates(pathOrFile: string): string[] {
  const raw = pathOrFile.trim().replace(/\\/g, '/');
  if (!raw) return [];

  const withSlash = raw.startsWith('/') ? raw : `/${raw}`;
  const lastSlash = withSlash.lastIndexOf('/');
  const dir = lastSlash >= 0 ? withSlash.slice(0, lastSlash + 1) : '/';
  const file = lastSlash >= 0 ? withSlash.slice(lastSlash + 1) : withSlash.slice(1);

  const dot = file.lastIndexOf('.');
  const hasExt = dot > 0;
  const base = hasExt ? file.slice(0, dot) : file;
  const givenExt = hasExt ? file.slice(dot + 1).toLowerCase() : '';

  const urls: string[] = [];
  if (hasExt) {
    urls.push(`${dir}${base}.${givenExt}`);
  }

  for (const ext of IMAGE_EXTENSIONS) {
    if (ext === givenExt) continue;
    urls.push(`${dir}${base}.${ext}`);
  }

  return urls;
}

/** Resolve a public image path across all supported formats, with graceful fallback. */
export function useFlexibleImage(pathOrFile: string | undefined | null) {
  const candidates = useMemo(
    () => (pathOrFile ? imageCandidates(pathOrFile) : []),
    [pathOrFile]
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [pathOrFile]);

  const src = index < candidates.length ? candidates[index] : null;
  const failed = candidates.length === 0 || index >= candidates.length;

  return {
    src,
    failed,
    onError: () => setIndex((i) => i + 1),
  };
}
