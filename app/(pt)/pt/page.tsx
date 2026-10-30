import { Landing } from '../../landing';
import { socialMetadata } from '@/lib/social-metadata';

export const metadata = socialMetadata('pt');
export default function Page() {
  return <Landing locale="pt" />;
}
