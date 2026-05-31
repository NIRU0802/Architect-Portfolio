export default function ScrollIndicator() {
    return (
      <div
        className="
          absolute
          bottom-8
          right-8
          hidden
          lg:flex
          flex-col
          items-center
          gap-3
        "
      >
        <span
          className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-neutral-500
          "
        >
          Scroll
        </span>
  
        <div
          className="
            h-16
            w-px
            bg-black/30
          "
        />
      </div>
    );
  }