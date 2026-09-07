import { STEPS } from "./tradeData";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#f4f2ee] py-16 sm:py-20 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[20%] h-[300px] w-[300px] rounded-full bg-[#385878]/5 blur-3xl" />
        <div className="absolute bottom-[10%] right-[-120px] h-[300px] w-[300px] rounded-full bg-[#4f8198]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">

          <span className="inline-flex items-center rounded-full border border-[#385878]/15 bg-white px-5 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#4f8198] shadow-sm">
            How It Works
          </span>
<h2
  className="mt-5 text-3xl font-bold tracking-tight text-[#385878] sm:text-4xl lg:text-[46px]"
  style={{
    fontFamily:
      "Arial, Helvetica, sans-serif",
  }}
>
  Step-by-Step{" "}
  <span className="text-[#4f8198]">
    Sourcing Process
  </span>
</h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#646464] sm:text-base">
            From your first requirement to successful delivery,
            we make sourcing simple, transparent and reliable.
          </p>

        </div>


        {/* ================= DESKTOP ================= */}

        <div className="hidden lg:block">

          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${STEPS.length}, minmax(0, 1fr))`,
            }}
          >
            {STEPS.map((step, index) => (
              <div
                key={step.num}
                className="group relative flex min-w-0 flex-col items-center px-3 text-center"
              >

                {/* CONNECTOR */}

                {index !== STEPS.length - 1 && (
                  <div className="absolute left-[50%] top-[88px] flex w-full items-center">

                    <div className="h-px flex-1 border-t-2 border-dashed border-[#7ca0b1]/50" />

                    <div className="mx-1 h-2 w-2 rounded-full bg-[#4f8198]/40" />

                  </div>
                )}


                {/* STEP */}

                <div className="relative z-10">

                  <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#638297]">
                    Step {String(index + 1).padStart(2, "0")}
                  </div>

                  <StepCircle
                    step={step}
                    index={index}
                  />

                </div>


                {/* CONTENT */}

                <div className="mt-7 max-w-[240px]">

                  <h3 className="text-base font-semibold text-[#385878]">
                    {step.label}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#666]">
                    {step.desc}
                  </p>

                </div>

              </div>
            ))}
          </div>

        </div>


        {/* ================= TABLET ================= */}

        <div className="hidden sm:block lg:hidden">

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">

            {STEPS.map((step, index) => (
              <div
                key={step.num}
                className="flex items-start gap-5"
              >

                <div className="shrink-0">
                  <StepCircle
                    step={step}
                    index={index}
                    medium
                  />
                </div>


                <div className="pt-2">

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#638297]">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-[#385878]">
                    {step.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#666]">
                    {step.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* ================= MOBILE ================= */}

        <div className="sm:hidden">

          <div className="mx-auto max-w-md">

            {STEPS.map((step, index) => (
              <div
                key={step.num}
                className="relative flex gap-5 pb-10 last:pb-0"
              >

                {/* TIMELINE */}

                <div className="relative flex flex-col items-center">

                  <StepCircle
                    step={step}
                    index={index}
                    small
                  />

                  {index !== STEPS.length - 1 && (
                    <div className="mt-3 h-full min-h-[75px] w-px bg-gradient-to-b from-[#4f8198] via-[#4f8198]/50 to-transparent" />
                  )}

                </div>


                {/* CONTENT */}

                <div className="flex-1 pb-4 pt-1">

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#638297]">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-[#385878]">
                    {step.label}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#666]">
                    {step.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}


/* ================= STEP CIRCLE ================= */

function StepCircle({
  step,
  index,
  small = false,
  medium = false,
}) {
  const colors = [
    "#A9783D",
    "#1D6B59",
    "#7440C8",
    "#A9783D",
    "#D96B35",
    "#9A62C7",
    "#4F6CC7",
  ];

  const color = step.color || colors[index % colors.length];

  const sizes = small
    ? {
        outer: "h-[64px] w-[64px]",
        inner: "h-[54px] w-[54px]",
        icon: "h-[40px] w-[40px]",
        iconText: "text-[18px]",
      }
    : medium
    ? {
        outer: "h-[80px] w-[80px]",
        inner: "h-[68px] w-[68px]",
        icon: "h-[50px] w-[50px]",
        iconText: "text-[21px]",
      }
    : {
        outer: "h-[110px] w-[110px]",
        inner: "h-[94px] w-[94px]",
        icon: "h-[68px] w-[68px]",
        iconText: "text-[28px]",
      };

  return (
    <div
      className={`${sizes.outer} relative flex items-center justify-center rounded-full shadow-[0_12px_30px_rgba(56,88,120,0.18)] transition-all duration-300 group-hover:-translate-y-1`}
      style={{
        backgroundColor: color,
      }}
    >

      {/* INNER */}

      <div
        className={`${sizes.inner} relative z-10 flex items-center justify-center rounded-full bg-[#f4f2ee]`}
      >

        <div
          className={`${sizes.icon} ${sizes.iconText} flex items-center justify-center rounded-2xl border border-[#385878]/10 bg-white text-[#385878] shadow-sm`}
        >
          {step.icon}
        </div>

      </div>


      {/* NUMBER BADGE */}

      {!small && (
        <div className="absolute right-0 top-0 z-20 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f4f2ee] bg-[#385878] text-[10px] font-bold text-white shadow-md">
          {index + 1}
        </div>
      )}

    </div>
  );
}