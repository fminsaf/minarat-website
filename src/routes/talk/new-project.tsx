import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/talk/new-project')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/talk/new-project"!</div>
}
