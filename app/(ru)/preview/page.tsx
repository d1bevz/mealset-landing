import { ComparisonLanding } from '../../comparison-landing';
import { previewMetadata } from '@/lib/preview-metadata';
export const metadata = previewMetadata('ru');
export default function Page() {
  return <ComparisonLanding locale="ru" />;
}
