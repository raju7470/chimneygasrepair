import { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Application render error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="fatal-error">
          <div className="fatal-error__card">
            <span className="eyebrow">Something went wrong</span>
            <h1>We could not load this page.</h1>
            <p>Reload the website. If the problem continues, clear the local development cache and restart Vite.</p>
            <button className="button button--primary" type="button" onClick={() => window.location.reload()}>
              Reload website
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
