import { MapPin, Navigation } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export const RouteForm = ({
  setError,
}: {
  setError: (error: string) => void
}) => {
  const handleSearch = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    setError('We could not load routes right now. Please try again later.')
  }

  return (
    <form
      className="relative z-10 w-full max-w-120 justify-self-end rounded-md bg-[#f4f7fb] p-7 text-[#14263b] shadow-[0_18px_60px_rgba(0,0,0,0.17)] max-[760px]:w-full max-[760px]:p-6 max-[420px]:px-5"
      onSubmit={handleSearch}
    >
      <div className="flex items-start justify-between">
        <h2 className="font-display font-medium text-lg tracking-tight">
          Where to next?
        </h2>

        <span
          className="text-[30px] leading-none text-route-accent"
          aria-hidden="true"
        >
          ✳
        </span>
      </div>
      <label
        className="mt-4 mb-2 block text-sm font-semibold text-[#53677d]"
        htmlFor="origin"
      >
        I’m starting from
      </label>
      <div className="flex h-12 items-center rounded-sm border border-[#d3deea] bg-white px-3 focus-within:border-[#1671d9] focus-within:shadow-[0_0_0_3px_rgba(22,113,217,0.14)]">
        <MapPin
          className="mr-3 size-5 shrink-0 text-route-accent"
          aria-hidden="true"
        />
        <Input
          className="h-full border-0 bg-transparent px-0 py-0 text-sm text-[#14263b] shadow-none outline-none placeholder:text-[#9aa39d] focus-visible:border-transparent focus-visible:ring-0"
          id="origin"
          name="origin"
          placeholder="Start place"
          autoComplete="address-level2"
          required
        />
      </div>
      <label
        className="mt-4 mb-2 block text-sm font-semibold text-[#53677d]"
        htmlFor="destination"
      >
        I’d like to go to
      </label>
      <div className="flex h-12 items-center rounded-sm border border-[#d3deea] bg-white px-3 focus-within:border-[#1671d9] focus-within:shadow-[0_0_0_3px_rgba(22,113,217,0.14)]">
        <MapPin
          className="mr-3 size-5 shrink-0 text-route-accent"
          aria-hidden="true"
        />
        <Input
          className="h-full border-0 bg-transparent px-0 py-0 text-sm text-[#14263b] shadow-none outline-none placeholder:text-placeholder focus-visible:border-transparent focus-visible:ring-0"
          id="destination"
          name="destination"
          placeholder="Destination place"
          autoComplete="off"
          required
        />
      </div>
      <Button
        type="submit"
        className="mt-6 w-full text-center text-md gap-1 min-h-12"
        aria-label="Find my route"
      >
        Find my route
        <Navigation className="mr-2 size-4" aria-hidden="true" />
      </Button>
    </form>
  )
}
