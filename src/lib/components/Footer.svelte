<script lang="ts">
  import LiveTLLogo from '$lib/assets/livetl-logo.png';
</script>

<footer class="footer p-10 bg-neutral text-base-200">
  <div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={LiveTLLogo} alt="LiveTL Logo" class="w-10" />
    <p>
      LiveTL Developers © 2023<br />The team that makes that one Live Translation
      Filter since 2020
    </p>
  </div>
  <div>
    <span class="footer-title">Products</span>
    <a class="link link-hover" href="/">LiveTL</a>
    <a class="link link-hover" href="/hyperchat">HyperChat</a>
    <a class="link link-hover" href="/ytcfilter">YTC Filter</a>
  </div>
  <div>
    <span class="footer-title">Team</span>
    <a class="link link-hover" href="/about">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Donations</a>
  </div>
  <div>
    <span class="footer-title">Support</span>
    <a class="link link-hover" href="/faq">FAQ</a>
    <a class="link link-hover" href="/privacy">Privacy</a>
  </div>
</footer>
