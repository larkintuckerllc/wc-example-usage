import 'wc-example';

class HelloUsage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');

    // HELLO USAGE
    const rootHelloUsageEl = document.createElement('div');
    rootHelloUsageEl.textContent = 'Hello Usage';
    rootEl.appendChild(rootHelloUsageEl);

    // HELLO WORLD
    const rootHelloWorldEl = document.createElement('hello-world');
    rootEl.appendChild(rootHelloWorldEl);

    shadow.appendChild(rootEl);
  }
}
window.customElements.define('hello-usage', HelloUsage);
