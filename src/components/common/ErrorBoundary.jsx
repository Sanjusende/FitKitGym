import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Section Error Caught by Boundary:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="my-8 mx-auto max-w-4xl p-6 rounded-2xl bg-[#0E1219] border border-red-500/30 text-center">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 mx-auto mb-3">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-lg font-black uppercase text-white mb-1">
            Section temporarily unavailable
          </h3>
          <p className="text-xs text-[#8F9BB3] mb-4">
            An issue occurred while loading this section.
          </p>
          <button
            onClick={this.handleReload}
            className="px-4 py-2 rounded-lg bg-[#E63946] text-white text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 hover:bg-[#d62839] transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retry Section</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
