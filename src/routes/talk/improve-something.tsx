import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/talk/improve-something')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/talk/improve-something"!</div>
}
