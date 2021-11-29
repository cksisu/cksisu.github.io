class NavbarHTML extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="container">
          <ul class="navbar-list">
            <li class="navbar-item">
              <a class="navbar-link" href="/index.html">Home</a>
            </li>
            <li class="navbar-item">
              <a class="navbar-link" href="">Analysis</a>
            </li>
            <li class="navbar-item">
              <a class="navbar-link" href="#" data-popover="#codeNavPopover">Projects</a>
              <div id="codeNavPopover" class="popover">
                <ul class="popover-list">
                  <li class="popover-item">
                    <a class="popover-link" href="#packages">Packages</a>
                  </li>
                  <li class="popover-item">
                    <a class="popover-link" href="#typography">Frameworks</a>
                  </li>
                  <li class="popover-item">
                    <a class="popover-link" href="#buttons">Visualization</a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="navbar-item">
              <a class="navbar-link" href="/mlms/curriculum.html">ML Masters</a>
            </li>
            <li class="navbar-item">
              <a class="navbar-link" href="#" data-popover="#moreNavPopover">More</a>
              <div id="moreNavPopover" class="popover">
                <ul class="popover-list">
                  <li class="popover-item">
                    <a class="popover-link" href="https://github.com/cksisu">Contact</a>
                  </li>
                  <li class="popover-item">
                    <a class="popover-link" href="https://github.com/cksisu">Repos</a>
                  </li>
                  <li class="popover-item">
                    <a class="popover-link" href="/more/books.html">Reading</a>
                  </li>
                  <li class="popover-item">
                    <a class="popover-link" href="https://www.linkedin.com/in/charlesekelley/">LinkedIn</a>
                  </li>
                  <li class="popover-item">
                    <a class="popover-link" href="https://github.com/dhg/Skeleton#extensions">Misc</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-html', NavbarHTML);
