import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/talk/discuss-idea')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/talk/discuss-idea"!</div>
}
