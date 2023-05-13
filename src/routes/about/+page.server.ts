import type { PageServerLoad } from './$types';

import { fetchContributors } from '../../gh';
import type { Contributor } from '../../gh';

export const load = (async () => {
  const organization = 'livetl';

  try {
    const contributors: Contributor[] = await fetchContributors(organization);
    return { contributors };
  } catch (error) {
    console.error('Error fetching contributors:', error);
  }

  return { contributors: [] };
}) satisfies PageServerLoad;
