import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <div className="container">
            <h1>something broke</h1>
            <p>
              An unexpected error occurred. This is probably not your fault — unless you
              clicked really fast. Try refreshing.
            </p>
            <div className="error-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => window.location.reload()}
              >
                Refresh page
              </button>
              <Link to="/" className="btn btn-secondary">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
