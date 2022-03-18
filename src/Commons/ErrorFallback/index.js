
export const ErrorFallback = ({ error }) => {
  return (
    <div role="alert" aria-label="Error Description" data-testid={`errorFallbackContainer`}>
      <p>Something went wrong</p>
    </div>
  )
}
