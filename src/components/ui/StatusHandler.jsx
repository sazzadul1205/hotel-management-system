// src/components/ui/StatusHandler.jsx
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const StatusHandler = ({
  // ========== REQUIRED PROPS ==========
  isLoading,           // boolean - controls loading state (true/false)
  error,               // object/boolean - error object from TanStack Query or any fetch
  children,            // content to render when no loading and no error

  // ========== OPTIONAL PROPS ==========
  loadingType = "spinner", // string - loading style: "spinner" | "skeleton" | "dots" | "modal" | "sweetalert"
  errorType = "inline",    // string - error style: "inline" | "modal" | "card" | "toast" | "sweetalert" | "sweetalert-toast"
  onRetry,             // function - retry callback (usually refetch() from TanStack Query)
  loadingMessage = "Loading...", // string - custom text for loading state
  errorMessage = "Something went wrong", // string - fallback error text if error.message doesn't exist
  className = "",      // string - additional CSS classes for customization
  sweetAlertConfig = {} // object - custom SweetAlert2 configuration
}) => {

  // ========== SWEETALERT2 FOR ERROR TOAST ==========
  useEffect(() => {
    if (error && (errorType === "sweetalert" || errorType === "sweetalert-toast")) {
      const errorText = error?.message || errorMessage;

      if (errorType === "sweetalert-toast") {
        // Toast notification (auto-closes)
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: errorText,
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
          ...sweetAlertConfig
        });
      } else {
        // Modal dialog with retry option
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorText,
          confirmButtonText: onRetry ? 'Try Again' : 'OK',
          showCancelButton: !!onRetry,
          cancelButtonText: 'Cancel',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          ...sweetAlertConfig
        }).then((result) => {
          if (result.isConfirmed && onRetry) {
            onRetry();
          }
        });
      }
    }
  }, [error, errorType, errorMessage, onRetry, sweetAlertConfig]);

  // ========== SWEETALERT2 FOR LOADING ==========
  useEffect(() => {
    if (isLoading && loadingType === "sweetalert") {
      Swal.fire({
        title: loadingMessage,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
        ...sweetAlertConfig
      });
    } else if (loadingType === "sweetalert" && !isLoading) {
      Swal.close();
    }
  }, [isLoading, loadingType, loadingMessage, sweetAlertConfig]);

  // ========== LOADING STATES RENDERER ==========
  const renderLoading = () => {
    switch (loadingType) {

      // CASE 1: Spinner - Classic spinning circle loader
      case "spinner":
        return (
          <div className={`flex flex-col justify-center items-center min-h-50 ${className}`}>
            <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">{loadingMessage}</p>
          </div>
        );

      // CASE 2: Skeleton - Gray placeholder boxes that pulse
      case "skeleton":
        return (
          <div className={`space-y-4 ${className}`}>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
            <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
          </div>
        );

      // CASE 3: Dots - Three bouncing dots animation
      case "dots":
        return (
          <div className={`flex flex-col justify-center items-center min-h-50 ${className}`}>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
            <p className="mt-4 text-gray-600">{loadingMessage}</p>
          </div>
        );

      // CASE 4: Modal - Full-screen overlay with spinner
      case "modal":
        return (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-gray-700">{loadingMessage}</p>
            </div>
          </div>
        );

      // CASE 5: SweetAlert2 loading (returns null because Swal handles UI)
      case "sweetalert":
        return null; // SweetAlert2 handles the UI

      // DEFAULT: Fallback loading display
      default:
        return <div className={className}>{loadingMessage}</div>;
    }
  };

  // ========== ERROR STATES RENDERER ==========
  const renderError = () => {
    const errorText = error?.message || errorMessage;

    switch (errorType) {

      // CASE 1: Inline - Error shown inside page flow
      case "inline":
        return (
          <div className={`flex flex-col justify-center items-center min-h-50 text-center ${className}`}>
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Error!</h3>
            <p className="text-gray-600 mb-4">{errorText}</p>
            {onRetry && (
              <button
                onClick={onRetry}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Try Again
              </button>
            )}
          </div>
        );

      // CASE 2: Modal - Popup overlay error with options
      case "modal":
        return (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
              <div className="text-red-500 text-5xl mb-4 text-center">⚠️</div>
              <h3 className="text-xl font-semibold text-center mb-2">Error!</h3>
              <p className="text-gray-600 text-center mb-6">{errorText}</p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Reload Page
                </button>
                {onRetry && (
                  <button
                    onClick={onRetry}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Try Again
                  </button>
                )}
              </div>
            </div>
          </div>
        );

      // CASE 3: Card - Subtle error card that fits in UI
      case "card":
        return (
          <div className={`bg-red-50 border border-red-200 rounded-lg p-6 ${className}`}>
            <div className="flex items-start gap-3">
              <div className="text-red-500 text-2xl">⚠️</div>
              <div className="flex-1">
                <h3 className="font-semibold text-red-800 mb-1">Error</h3>
                <p className="text-red-600 text-sm">{errorText}</p>
                {onRetry && (
                  <button
                    onClick={onRetry}
                    className="mt-3 text-sm text-red-700 hover:text-red-900 font-medium"
                  >
                    Retry →
                  </button>
                )}
              </div>
            </div>
          </div>
        );

      // CASE 4: Toast - CSS-only temporary notification
      case "toast":
        return (
          <div className={`fixed top-4 right-4 z-50 animate-slide-in ${className}`}>
            <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
              <span>⚠️</span>
              <p className="flex-1">{errorText}</p>
              {onRetry && (
                <button onClick={onRetry} className="text-white underline">
                  Retry
                </button>
              )}
            </div>
          </div>
        );

      // CASE 5: SweetAlert2 - Handled by useEffect
      case "sweetalert":
      case "sweetalert-toast":
        return null; // SweetAlert2 handles the UI

      // DEFAULT: Fallback error display
      default:
        return <div className={className}>{errorText}</div>;
    }
  };

  // ========== MAIN RENDER LOGIC ==========
  // Don't render anything if SweetAlert2 is handling the UI
  if (isLoading && loadingType === "sweetalert") return null;
  if (error && (errorType === "sweetalert" || errorType === "sweetalert-toast")) return null;

  // Show loading if isLoading is true
  if (isLoading) return renderLoading();

  // Show error if error exists
  if (error) return renderError();

  // Show children (normal content) when no loading and no error
  return <>{children}</>;
};

export default StatusHandler;