import { Button } from '../ui/button'

export const AddRoute = ({ onNavigateAdd }: { onNavigateAdd: () => void }) => {
  return (
    <section
      className="relative flex min-h-78 items-center justify-between gap-10 overflow-hidden bg-[#173d69] px-[max(7.2vw,calc((100vw-75rem)/2))] text-[#f4f7fb] min-[1500px]:px-[calc((100vw-75rem)/2)] max-[760px]:min-h-0 max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-1 max-[760px]:px-[6vw] max-[760px]:pt-3 max-[760px]:pb-14"
      id="contribute"
    >
      <div
        className="pointer-events-none absolute right-[13%] -bottom-40 text-[450px] leading-none text-[rgba(168,213,255,0.09)] max-[760px]:right-[-18%] max-[760px]:-bottom-24 max-[760px]:text-[300px]"
        aria-hidden="true"
      >
        ✳
      </div>
      <div className="relative z-10 py-13 max-[760px]:pt-11 max-[760px]:pb-3">
        <h2 className="mt-5 mb-0 font-display text-[clamp(2.3125rem,4.3vw,3.375rem)] leading-none font-medium tracking-[-0.075em]">
          Got a good idea?
          <br />
          <span className="text-[#a8d5ff]">There’s room for you.</span>
        </h2>
        <p className="mt-4 mb-0 max-w-110 text-sm leading-[1.8] text-[#c2d1e1]">
          Help us make getting out there a little easier for everyone. Share
          photos for specific routes or locations, once they have been moderated
          we will add them to the new or existing routes.
        </p>

        <Button
          variant="secondary"
          className="mt-6 max-[760px]:mt-4"
          onClick={(e) => {
            e.preventDefault()
            onNavigateAdd()
          }}
        >
          I want to contribute
        </Button>
      </div>
    </section>
  )
}
