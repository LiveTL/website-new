<script lang="ts">
  import LiveTLLogo from '$lib/assets/livetl/logo.png';
</script>

<footer class="footer bg-neutral p-10 text-base-200">
  <div>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={LiveTLLogo} alt="LiveTL Logo" class="w-10" />
    <p>
      LiveTL Developers © 2023<br />By VTuber fans, for VTuber fans.
    </p>
  </div>
  <div>
    <span class="footer-title">Software</span>
    <a class="link-hover link" href="/livetl">LiveTL</a>
    <a class="link-hover link" href="/hyperchat">HyperChat</a>
    <a class="link-hover link" href="/ytcfilter">YtcFilter</a>
  </div>
  <div>
    <span class="footer-title">Community</span>
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
