<script lang="ts">
  import type { PageData } from './$types';

  const privacyPolicy = [
    {
      header: 'Personal Data',
      text:
        'LiveTL Web directly collects as little personal data as possible, as such, when you do not login to the service, no data is collected by it. ' +
        'Note that some of the third party services used by the service may still collect data. Learn more in the Third Party Services section.<br/>' +
        'When you log into the service using your Google Account, various pieces of information gathered from your Google Account are stored, such as your Display Name and Email.',
    },
    {
      header: 'Third Party Services',
      text:
        'LiveTL Web makes use of several third party services which may collect personal information about you.<br/>' +
        'These services include (but are not limited to): Google (Firebase Hosting, Firestore, Firebase Authentication, and Google Fonts), and Cloudflare (DNS and Cache).',
    },
    {
      header: 'Translator/Translation Data',
      text:
        'When you register as a LiveTL Translator, LiveTL Web will lookup and store the YouTube Channel ID associated with your Google Account, ' +
        'along with any information you entered during the registration process.',
    },
  ];

  export let data: PageData;
</script>

<div class="container mx-auto">
  <div class="container mx-auto px-8">
    <h1 class="text-4xl font-bold mb-8">LiveTL Privacy Policy</h1>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
      {#each privacyPolicy as { header, text }}
        <div class="col-span-1 md:col-span-2 space-y-2">
          <h3 class="text-2xl font-bold mb-2">{header}</h3>
          <p class="mb-4">{@html text}</p>
        </div>
      {/each}
    </div>

    <br class="my-8" />

    <div class="col-span-1 md:col-span-2">
      <span>Last Updated: January 25th, 2021</span>
    </div>
  </div>
</div>
