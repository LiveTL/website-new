<script lang="ts">
  import LiveTLLogo from '$lib/assets/livetl/logo.png';

  import { DISCORD_SERVER_URL, GITHUB_ORG_URL } from '../../const';
  import { Discord, Github } from '@steeze-ui/simple-icons';
  import { Icon } from '@steeze-ui/svelte-icon';

  const socialLinks = [
    {
      name: 'Github',
      url: GITHUB_ORG_URL,
      icon: Github,
    },
    {
      name: 'Discord',
      url: DISCORD_SERVER_URL,
      icon: Discord,
    },
  ];

  const footerLinks = [
    {
      title: 'Software',
      links: [
        {
          name: 'LiveTL',
          url: '/livetl',
        },
        {
          name: 'HyperChat',
          url: '/hyperchat',
        },
        {
          name: 'YtcFilter',
          url: '/ytcfilter',
        },
      ],
    },
    {
      title: 'Community',
      links: [
        {
          name: 'About us',
          url: '/about',
        },
        {
          name: 'Contact',
          url: '/contact',
        },
        {
          name: 'Donations',
          url: '/livetl/#donations',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          name: 'FAQ',
          url: '/faq',
        },
        {
          name: 'Privacy Policy',
          url: '/privacy',
        },
      ],
    },
  ];
</script>

<footer class="footer bg-neutral p-10 text-base-200">
  <div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={LiveTLLogo} alt="LiveTL Logo" class="w-10" />
    <p>
      LiveTL Developers © 2023<br />By VTuber fans, for VTuber fans.
    </p>
    <div class="flex flex-row gap-4">
      {#each socialLinks as { name, url, icon }}
        <div class="tooltip tooltip-bottom" data-tip={name}>
          <a
            href={url}
            class="transition-colors duration-300 hover:text-base-100"
          >
            <Icon src={icon} size="20px" theme="mini" />
          </a>
        </div>
      {/each}
    </div>
  </div>
  {#each footerLinks as { title, links }}
    <div>
      <span class="footer-title text-base-100">{title}</span>
      {#each links as link}
        <a class="link-hover link" href={link.url}>{link.name}</a>
      {/each}
    </div>
  {/each}
</footer>
