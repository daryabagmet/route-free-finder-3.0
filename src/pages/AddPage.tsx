import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Footer } from '../components/Footer/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type FormType = 'route' | 'image'

type ContributionFormFields = {
  routeName: string
  origin: string
  destination: string
  distance: number
  duration: number
  surface: string
  difficulty: string
  wheelchairAccessible: string
  imageLabel: string
  latitude: number
  longitude: number
  image: FileList
}

const fieldLabelClass =
  'flex flex-col gap-2 text-sm font-semibold text-muted-foreground'
const fieldInputClass =
  'h-12 w-full min-w-0 rounded-sm border border-input bg-card p-3 text-sm text-foreground focus:border-ring focus:outline-3 focus:outline-ring/15'
const wideFieldClass = `${fieldLabelClass} col-span-full`
const fieldErrorClass = 'text-sm font-normal text-destructive'
const tabTriggerClass =
  'h-auto flex-none rounded-none border-0 border-b-[3px] border-b-transparent bg-transparent px-1 py-3 text-md font-semibold text-muted-foreground shadow-none transition-colors hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-deep-blue data-[state=active]:shadow-none after:hidden focus-visible:outline-offset-[-2px] motion-reduce:transition-none'
type AddPageProps = {
  onNavigateHome: () => void
}

export const AddPage = ({ onNavigateHome }: AddPageProps) => {
  const [formType, setFormType] = useState<FormType>('route')
  const [notice, setNotice] = useState('')
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContributionFormFields>()

  const handleValidSubmit = () => {
    setNotice('Form has been submitted successfully.')
  }

  const selectForm = (type: string) => {
    if (type !== 'route' && type !== 'image') return

    setFormType(type)
    setNotice('')
  }

  return (
    <>
      <main className="min-h-[calc(100vh-10.375rem)] bg-[radial-gradient(ellipse_at_15%_5%,rgba(168,213,255,0.25),transparent_35%),var(--background)] px-[max(7.2vw,calc((100vw-60rem)/2))] pt-12 pb-22 max-[760px]:px-[6vw] min-[1500px]:px-[calc((100vw-60rem)/2)]">
        <div className="mx-auto max-w-200">
          <a
            className="cursor-pointer text-sm font-semibold text-link no-underline hover:underline focus-visible:outline-offset-4"
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              onNavigateHome()
            }}
          >
            ← Back
          </a>
          <div className="mt-10 mb-8">
            <h1 className="mt-3 mb-2 font-display text-[clamp(2.5rem,5.5vw,3.875rem)] leading-none font-medium tracking-[-0.075em]">
              Share what you know.
            </h1>
            <p className="mt-3 mb-0 text-md leading-[1.7] text-muted-foreground">
              Add a new accessible route or share a photo and its location with
              the community.
            </p>
          </div>

          <Tabs className="gap-0" value={formType} onValueChange={selectForm}>
            <TabsList
              aria-label="Choose a form"
              className="h-auto w-full justify-start gap-6 rounded-none bg-transparent p-0"
              variant="line"
            >
              <TabsTrigger className={tabTriggerClass} value="route">
                Create a route
              </TabsTrigger>
              <TabsTrigger className={tabTriggerClass} value="image">
                Upload images
              </TabsTrigger>
            </TabsList>

            <form
              className="rounded-b-md bg-card p-[clamp(1.5rem,4vw,2rem)] shadow-[0_16px_44px_rgba(20,38,59,0.07)] mt-2"
              noValidate
              onSubmit={handleSubmit(handleValidSubmit)}
            >
              <TabsContent value="route">
                <div className="mb-6">
                  <p className="mt-3 mb-0 max-w-140 text-md leading-[1.7] text-muted-foreground">
                    Share the route and the accessibility details travelers
                    need.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
                  <label className={fieldLabelClass}>
                    Route name
                    <Input
                      className={fieldInputClass}
                      autoComplete="off"
                      aria-invalid={Boolean(errors.routeName)}
                      aria-describedby={
                        errors.routeName ? 'routeName-error' : undefined
                      }
                      {...register('routeName', {
                        required: 'Enter a route name.',
                      })}
                    />
                    {errors.routeName && (
                      <span id="routeName-error" className={fieldErrorClass}>
                        {errors.routeName.message}
                      </span>
                    )}
                  </label>
                  <label className={fieldLabelClass}>
                    Starting point
                    <Input
                      className={fieldInputClass}
                      autoComplete="street-address"
                      aria-invalid={Boolean(errors.origin)}
                      aria-describedby={
                        errors.origin ? 'route-origin-error' : undefined
                      }
                      {...register('origin', {
                        required: 'Enter a starting point.',
                      })}
                    />
                    {errors.origin && (
                      <span id="route-origin-error" className={fieldErrorClass}>
                        {errors.origin.message}
                      </span>
                    )}
                  </label>
                  <label className={fieldLabelClass}>
                    Destination
                    <Input
                      className={fieldInputClass}
                      autoComplete="off"
                      aria-invalid={Boolean(errors.destination)}
                      aria-describedby={
                        errors.destination
                          ? 'route-destination-error'
                          : undefined
                      }
                      {...register('destination', {
                        required: 'Enter a destination.',
                      })}
                    />
                    {errors.destination && (
                      <span
                        id="route-destination-error"
                        className={fieldErrorClass}
                      >
                        {errors.destination.message}
                      </span>
                    )}
                  </label>
                  <label className={fieldLabelClass}>
                    Distance (in meters)
                    <Input
                      className={fieldInputClass}
                      type="number"
                      step="0.1"
                      aria-invalid={Boolean(errors.distance)}
                      aria-describedby={
                        errors.distance ? 'distance-error' : undefined
                      }
                      {...register('distance', {
                        required: 'Enter the route distance.',
                        valueAsNumber: true,
                        min: {
                          value: 0,
                          message: 'Distance must be zero or greater.',
                        },
                      })}
                    />
                    {errors.distance && (
                      <span id="distance-error" className={fieldErrorClass}>
                        {errors.distance.message}
                      </span>
                    )}
                  </label>
                  <label className={fieldLabelClass}>
                    Estimated time (minutes)
                    <Input
                      className={fieldInputClass}
                      type="number"
                      step="1"
                      aria-invalid={Boolean(errors.duration)}
                      aria-describedby={
                        errors.duration ? 'duration-error' : undefined
                      }
                      {...register('duration', {
                        required: 'Enter the estimated time.',
                        valueAsNumber: true,
                        min: {
                          value: 1,
                          message:
                            'Estimated time must be at least one minute.',
                        },
                        validate: (value) =>
                          Number.isInteger(value) ||
                          'Estimated time must be a whole number.',
                      })}
                    />
                    {errors.duration && (
                      <span id="duration-error" className={fieldErrorClass}>
                        {errors.duration.message}
                      </span>
                    )}
                  </label>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold text-muted-foreground"
                      htmlFor="surface"
                    >
                      Surface
                    </label>
                    <Controller
                      name="surface"
                      control={control}
                      rules={{ required: 'Select a surface.' }}
                      render={({ field }) => (
                        <Select
                          name={field.name}
                          value={field.value ?? ''}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            ref={field.ref}
                            className="h-12! w-full rounded-sm bg-card px-3 text-sm"
                            id="surface"
                            aria-invalid={Boolean(errors.surface)}
                            aria-describedby={
                              errors.surface ? 'surface-error' : undefined
                            }
                            onBlur={field.onBlur}
                          >
                            <SelectValue placeholder="Select a surface" />
                          </SelectTrigger>
                          <SelectContent position="popper" align="start">
                            <SelectItem value="paved">Paved</SelectItem>
                            <SelectItem value="gravel">Gravel</SelectItem>
                            <SelectItem value="mixed">Mixed</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.surface && (
                      <span id="surface-error" className={fieldErrorClass}>
                        {errors.surface.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold text-muted-foreground"
                      htmlFor="difficulty"
                    >
                      Difficulty
                    </label>
                    <Controller
                      name="difficulty"
                      control={control}
                      rules={{ required: 'Select a difficulty.' }}
                      render={({ field }) => (
                        <Select
                          name={field.name}
                          value={field.value ?? ''}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            ref={field.ref}
                            className="h-12! w-full rounded-sm bg-card px-3 text-sm"
                            id="difficulty"
                            aria-invalid={Boolean(errors.difficulty)}
                            aria-describedby={
                              errors.difficulty ? 'difficulty-error' : undefined
                            }
                            onBlur={field.onBlur}
                          >
                            <SelectValue placeholder="Select difficulty" />
                          </SelectTrigger>
                          <SelectContent position="popper" align="start">
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="challenging">
                              Challenging
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.difficulty && (
                      <span id="difficulty-error" className={fieldErrorClass}>
                        {errors.difficulty.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold text-muted-foreground"
                      htmlFor="wheelchairAccessible"
                    >
                      Wheelchair accessible?
                    </label>
                    <Controller
                      name="wheelchairAccessible"
                      control={control}
                      rules={{ required: 'Select an accessibility option.' }}
                      render={({ field }) => (
                        <Select
                          name={field.name}
                          value={field.value ?? ''}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            ref={field.ref}
                            className="h-12! w-full rounded-sm bg-card px-3 text-sm"
                            id="wheelchairAccessible"
                            aria-invalid={Boolean(errors.wheelchairAccessible)}
                            aria-describedby={
                              errors.wheelchairAccessible
                                ? 'wheelchairAccessible-error'
                                : undefined
                            }
                            onBlur={field.onBlur}
                          >
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent position="popper" align="start">
                            <SelectGroup>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="partially">
                                Partially
                              </SelectItem>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="unknown">Not sure</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.wheelchairAccessible && (
                      <span
                        id="wheelchairAccessible-error"
                        className={fieldErrorClass}
                      >
                        {errors.wheelchairAccessible.message}
                      </span>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="image">
                <div className="mb-6">
                  <p className="mt-3 mb-0 max-w-140 text-md leading-[1.7] text-muted-foreground">
                    Add a descriptive label, coordinates, and an image of a
                    route or location.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1">
                  <label className={wideFieldClass}>
                    Image label
                    <Input
                      className={`${fieldInputClass} placeholder:text-placeholder`}
                      placeholder="For example: Ramp at the north entrance"
                      aria-invalid={Boolean(errors.imageLabel)}
                      aria-describedby={
                        errors.imageLabel ? 'imageLabel-error' : undefined
                      }
                      {...register('imageLabel', {
                        required: 'Enter an image label.',
                      })}
                    />
                    {errors.imageLabel && (
                      <span id="imageLabel-error" className={fieldErrorClass}>
                        {errors.imageLabel.message}
                      </span>
                    )}
                  </label>
                  <label className={fieldLabelClass}>
                    Latitude
                    <Input
                      className={fieldInputClass}
                      type="number"
                      step="any"
                      aria-invalid={Boolean(errors.latitude)}
                      aria-describedby={
                        errors.latitude ? 'latitude-error' : undefined
                      }
                      {...register('latitude', {
                        required: 'Enter a latitude.',
                        valueAsNumber: true,
                        min: {
                          value: -90,
                          message: 'Latitude must be at least -90.',
                        },
                        max: {
                          value: 90,
                          message: 'Latitude must be at most 90.',
                        },
                      })}
                    />
                    {errors.latitude && (
                      <span id="latitude-error" className={fieldErrorClass}>
                        {errors.latitude.message}
                      </span>
                    )}
                  </label>
                  <label className={fieldLabelClass}>
                    Longitude
                    <Input
                      className={fieldInputClass}
                      type="number"
                      step="any"
                      aria-invalid={Boolean(errors.longitude)}
                      aria-describedby={
                        errors.longitude ? 'longitude-error' : undefined
                      }
                      {...register('longitude', {
                        required: 'Enter a longitude.',
                        valueAsNumber: true,
                        min: {
                          value: -180,
                          message: 'Longitude must be at least -180.',
                        },
                        max: {
                          value: 180,
                          message: 'Longitude must be at most 180.',
                        },
                      })}
                    />
                    {errors.longitude && (
                      <span id="longitude-error" className={fieldErrorClass}>
                        {errors.longitude.message}
                      </span>
                    )}
                  </label>
                  <label className={wideFieldClass}>
                    Image file
                    <Input
                      className={`${fieldInputClass} cursor-pointer file:cursor-pointer`}
                      type="file"
                      accept="image/*"
                      aria-invalid={Boolean(errors.image)}
                      aria-describedby={
                        errors.image ? 'image-error' : undefined
                      }
                      {...register('image', {
                        required: 'Choose an image file.',
                      })}
                    />
                    {errors.image && (
                      <span id="image-error" className={fieldErrorClass}>
                        {errors.image.message}
                      </span>
                    )}
                  </label>
                </div>
              </TabsContent>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="mt-4 w-full text-center text-md"
                  aria-label="Submit route or image"
                >
                  Submit {formType === 'route' ? 'route' : 'image'}
                </Button>
              </div>
              {notice && (
                <p
                  className="mt-4 mb-0 text-sm leading-relaxed text-status"
                  role="status"
                >
                  {notice}
                </p>
              )}
            </form>
          </Tabs>
        </div>
      </main>
      <Footer onNavigateHome={onNavigateHome} />
    </>
  )
}
