import { MapPin, Navigation } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

type RouteSearchFields = {
  origin: string
  destination: string
}

export const RouteForm = ({
  setError,
}: {
  setError: (error: string) => void
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RouteSearchFields>()

  const handleSearch = () => {
    setError('We could not load routes right now. Please try again later.')
  }

  return (
    <form
      className="relative z-10 w-full max-w-120 justify-self-end rounded-md bg-[#f4f7fb] p-5 text-[#14263b] shadow-[0_18px_60px_rgba(0,0,0,0.17)] max-[760px]:w-full"
      noValidate
      onSubmit={handleSubmit(handleSearch)}
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
          placeholder="Start place"
          autoComplete="address-level2"
          aria-invalid={Boolean(errors.origin)}
          {...register('origin', { required: 'Enter a starting place.' })}
        />
      </div>
      {errors.origin && (
        <p className="mt-1 text-sm text-destructive" role="alert">
          {errors.origin.message}
        </p>
      )}
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
          placeholder="Destination place"
          autoComplete="off"
          aria-invalid={Boolean(errors.destination)}
          {...register('destination', {
            required: 'Enter a destination.',
          })}
        />
      </div>
      {errors.destination && (
        <p className="mt-1 text-sm text-destructive" role="alert">
          {errors.destination.message}
        </p>
      )}
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
