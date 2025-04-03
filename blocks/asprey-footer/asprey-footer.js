export default function decorate(block) {
  // Provided HTML structure from frontend developer
  block.innerHTML = `
    <div class="asprey-footer">
      <div class="asprey-footer__newsletter">
        <h2 class="title">NEWS ON ASPREY 240</h2>
        <p>Updates on News, Events and our latest creations</p>
        <form class="asprey-footer__form">
          <input type="email" placeholder="Type your email address" aria-label="Email Address">
          <button type="submit" class="button">Subscribe</button>
        </form>
        <div class="asprey-footer__social">
          <a href="#" aria-label="Facebook" class="asprey-footer__social-link"><i class="icon icon-facebook"></i></a>
          <a href="#" aria-label="Instagram" class="asprey-footer__social-link"><i class="icon icon-instagram"></i></a>
          <a href="#" aria-label="Twitter" class="asprey-footer__social-link"><i class="icon icon-twitter"></i></a>
        </div>
      </div>
      <div class="asprey-footer__contact">
        <h2 class="title">CONTACT CONCIERGE</h2>
        <p>Our team stands ready to answer your questions on <a href="tel:+4402074936767">+44 (0)20 7493 6767</a> or <a href="mailto:email@example.com">email</a></p>
      </div>
      <div class="asprey-footer__links">
        <div class="asprey-footer__links-column">
          <h3 class="subtitle">CUSTOMER CARE</h3>
          <ul>
            <li><a href="#">Find a Boutique</a></li>
            <li><a href="#">Delivery & Returns</a></li>
            <li><a href="#">Personalisation</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Book An Appointment In Store</a></li>
          </ul>
        </div>
        <div class="asprey-footer__links-column">
          <h3 class="subtitle">CLIENT SERVICES</h3>
          <ul>
            <li><a href="#">Special Commissions</a></li>
            <li><a href="#">Product Care</a></li>
            <li><a href="#">Leather Skins</a></li>
            <li><a href="#">Trophies</a></li>
          </ul>
        </div>
        <div class="asprey-footer__links-column">
          <h3 class="subtitle">LEGAL</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Corporate Responsibility</a></li>
          </ul>
        </div>
      </div>
      <div class="asprey-footer__copyright">
        <p>© 2024, Asprey London</p>
      </div>
    </div>
  `;
}
