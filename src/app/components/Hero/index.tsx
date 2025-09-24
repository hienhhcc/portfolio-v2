import AnimateSelfIntroduction from "@/app/components/Hero/AnimateBachelorAndUniversity";
import AnimateSelfIntroductionDescription from "@/app/components/Hero/AnimateSelfIntroductionDescription";
import AnimateHeroActions from "@/app/components/Hero/AnimateHeroActions";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 py-16 text-center">
      <AnimateSelfIntroduction />
      <AnimateSelfIntroductionDescription />
      <AnimateHeroActions />
    </section>
  );
}
