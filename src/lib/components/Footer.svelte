<script lang="ts">
  import LiveTLLogo from '$lib/assets/livetl/logo.png';
</script>

<footer class="footer bg-neutral p-10 text-base-200">
  <div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={LiveTLLogo} alt="LiveTL Logo" class="w-10" />
    <p>
      LiveTL Developers © 2023<br />The team that makes that one Live
      Translation Filter since 2020
    </p>
  </div>
  <div>
    <span class="footer-title">Products</span>
    <a class="link-hover link" href="/livetl">LiveTL</a>
    <a class="link-hover link" href="/hyperchat">HyperChat</a>
    <a class="link-hover link" href="/ytcfilter">YTC Filter</a>
  </div>
  <div>
    <span class="footer-title">Team</span>
    <a class="link-hover link" href="/about">About us</a>
    <a class="link-hover link" href="/contact">Contact</a>
    <a class="link-hover link" href="/#donations">Donations</a>
  </div>
  <div>
    <span class="footer-title">Support</span>
    <a class="link-hover link" href="/faq">FAQ</a>
    <a class="link-hover link" href="/privacy">Privacy</a>
  </div>
</footer>
