import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/talk/something-else')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/talk/something-else"!</div>
}
