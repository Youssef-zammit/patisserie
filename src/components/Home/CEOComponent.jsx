import { cn } from "@/lib/utils"; // shadcn utility for className merging

export default function CEOComponent({
  name = "Ms. Velvet Vanilla",
  signature = "L. Essence",
  title = "Ms. Velvet Vanilla",
  quote = `“Soufflé danish gummi bears tart. Pie wafer icing. Gummies jelly beans powder. Chocolate bar pudding macaroon candy canes chocolate apple pie chocolate cake. Sweet caramels sesame snaps halvah bear claw wafer. Sweet roll soufflé muffin topping muffin brownie…”`,
  role = "CEO - Vanilla Bakery Shop",
  image,
  className,
}) {
  return (
    <section
      className={cn(
        "relative flex flex-col md:flex-row items-center justify-center gap-8 py-12 px-4 bg-[var(--background)] transition-colors duration-300",
        className
      )}
    >
      {/* Left: Text Content */}
      <div className="flex-1 text-center md:text-left">
        <div
          className="text-pink-500 font-cursive text-2xl mb-1"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          {title}
        </div>
        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
          {name}
        </h2>
        <p className="max-w-xl mx-auto md:mx-0 text-lg text-[var(--foreground)] mb-6">
          {quote}
        </p>
        <div className="mb-2 text-xl text-[var(--foreground)] font-signature">
          {/* You can use a handwriting font for the signature */}
          {signature}
        </div>
        <div className="text-gray-500 dark:text-gray-300 italic">{role}</div>
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={image}
          alt={name}
          className="w-64 h-80 object-cover rounded-2xl shadow-lg border-4 border-[var(--border)] bg-[var(--card)]"
          draggable={false}
        />
      </div>
    </section>
  );
}
