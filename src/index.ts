import 'wc-example';

class HelloUsage extends HTMLElement {
  private rootHelloWorldEl: HTMLElement;

  private value = 0;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');

    // HELLO USAGE
    const rootHelloUsageEl = document.createElement('div');
    rootHelloUsageEl.textContent = 'Hello Usage';
    rootEl.appendChild(rootHelloUsageEl);

    // HELLO WORLD
    this.rootHelloWorldEl = document.createElement('hello-world');
    this.rootHelloWorldEl.setAttribute('color', 'purple');
    this.rootHelloWorldEl.setAttribute('value', this.value.toString());
    rootEl.appendChild(this.rootHelloWorldEl);

    shadow.appendChild(rootEl);
  }

  public connectedCallback(): void {
    this.rootHelloWorldEl.addEventListener('increment', this.handleIncrement);
  }

  public disconnectedCallback(): void {
    this.rootHelloWorldEl.removeEventListener('increment', this.handleIncrement);
  }

  private handleIncrement = (): void => {
    this.value += 1;
    this.rootHelloWorldEl.setAttribute('value', this.value.toString());
  };
}
window.customElements.define('hello-usage', HelloUsage);
