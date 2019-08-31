class HelloUsage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');
    rootEl.textContent = 'Hello Usage';
    shadow.appendChild(rootEl);
  }
}
window.customElements.define('hello-usage', HelloUsage);
