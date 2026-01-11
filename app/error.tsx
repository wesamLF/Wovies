'use client'

export default function error({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {
    return (
         <div className="flex items-center justify-center py-40 md-py-10 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body items-center text-center gap-4">
          <div className="text-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-error">Something went wrong</h1>

          <p className="text-base-content/70">
            {error.message}
          </p>

          <div className="card-actions mt-4">
            <button className="btn btn-primary" onClick={reset}>
              Try again
            </button>
            <a href="/" className="btn btn-ghost">
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}
