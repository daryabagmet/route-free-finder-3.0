import { useState, type SyntheticEvent } from 'react'
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

const fieldLabelClass =
  'flex flex-col gap-2 text-sm font-semibold text-muted-foreground'
const fieldInputClass =
  'h-12 w-full min-w-0 rounded-sm border border-input bg-card p-3 text-sm text-foreground focus:border-ring focus:outline-3 focus:outline-ring/15'
const wideFieldClass = `${fieldLabelClass} col-span-full`
const tabTriggerClass =
  'h-auto flex-none rounded-none border-0 border-b-[3px] border-b-transparent bg-transparent px-1 py-3 text-md font-semibold text-muted-foreground shadow-none transition-colors hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-deep-blue data-[state=active]:shadow-none after:hidden focus-visible:outline-offset-[-2px] motion-reduce:transition-none'
type AddPageProps = {
  onNavigateHome: () => void
}

export const AddPage = ({ onNavigateHome }: AddPageProps) => {
  const [formType, setFormType] = useState<FormType>('route')
  const [notice, setNotice] = useState('')

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

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
              onSubmit={handleSubmit}
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
                      name="routeName"
                      autoComplete="off"
                      required
                    />
                  </label>
                  <label className={fieldLabelClass}>
                    Starting point
                    <Input
                      className={fieldInputClass}
                      name="origin"
                      autoComplete="street-address"
                      required
                    />
                  </label>
                  <label className={fieldLabelClass}>
                    Destination
                    <Input
                      className={fieldInputClass}
                      name="destination"
                      autoComplete="off"
                      required
                    />
                  </label>
                  <label className={fieldLabelClass}>
                    Distance (in meters)
                    <Input
                      className={fieldInputClass}
                      name="distance"
                      type="number"
                      min="0"
                      step="0.1"
                      required
                    />
                  </label>
                  <label className={fieldLabelClass}>
                    Estimated time (minutes)
                    <Input
                      className={fieldInputClass}
                      name="duration"
                      type="number"
                      min="1"
                      step="1"
                      required
                    />
                  </label>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold text-muted-foreground"
                      htmlFor="surface"
                    >
                      Surface
                    </label>
                    <Select name="surface" defaultValue="" required>
                      <SelectTrigger
                        className="h-12! w-full rounded-sm bg-card px-3 text-sm"
                        id="surface"
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
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold text-muted-foreground"
                      htmlFor="difficulty"
                    >
                      Difficulty
                    </label>
                    <Select name="difficulty" defaultValue="" required>
                      <SelectTrigger
                        className="h-12! w-full rounded-sm bg-card px-3 text-sm"
                        id="difficulty"
                      >
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent position="popper" align="start">
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="challenging">Challenging</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold text-muted-foreground"
                      htmlFor="wheelchairAccessible"
                    >
                      Wheelchair accessible?
                    </label>
                    <Select
                      name="wheelchairAccessible"
                      defaultValue=""
                      required
                    >
                      <SelectTrigger
                        className="h-12! w-full rounded-sm bg-card px-3 text-sm"
                        id="wheelchairAccessible"
                      >
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent position="popper" align="start">
                        <SelectGroup>
                          <SelectItem key="yes" value="yes">
                            Yes
                          </SelectItem>
                          <SelectItem key="partially" value="partially">
                            Partially
                          </SelectItem>
                          <SelectItem key="no" value="no">
                            No
                          </SelectItem>
                          <SelectItem key="unknown" value="unknown">
                            Not sure
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
                      name="imageLabel"
                      placeholder="For example: Ramp at the north entrance"
                      required
                    />
                  </label>
                  <label className={fieldLabelClass}>
                    Latitude
                    <Input
                      className={fieldInputClass}
                      name="latitude"
                      type="number"
                      min="-90"
                      max="90"
                      step="any"
                      required
                    />
                  </label>
                  <label className={fieldLabelClass}>
                    Longitude
                    <Input
                      className={fieldInputClass}
                      name="longitude"
                      type="number"
                      min="-180"
                      max="180"
                      step="any"
                      required
                    />
                  </label>
                  <label className={wideFieldClass}>
                    Image file
                    <Input
                      className={`${fieldInputClass} cursor-pointer file:cursor-pointer`}
                      name="image"
                      type="file"
                      accept="image/*"
                      required
                    />
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
