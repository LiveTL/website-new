import { Octokit } from '@octokit/core';

export interface Contributor {
  login: string;
  avatar_url: string;
  url: string;
}

export async function fetchContributors(
  organization: string
): Promise<Contributor[]> {
  try {
    const octokit = new Octokit();
    const response = await octokit.request('GET /orgs/{org}/members', {
      org: organization,
    });

    return response.data.map((contributor: any) => ({
      login: contributor.login,
      avatar_url: contributor.avatar_url,
      url: contributor.html_url,
    }));
  } catch (error) {
    console.error(`Error fetching contributors: ${error.message}`);
    return [];
  }
}
